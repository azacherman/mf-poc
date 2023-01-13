import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import pino from 'pino';
import { resolvers } from './graphql/resolvers/index';
import { buildSubgraphSchema } from '@apollo/subgraph';
import gql from 'graphql-tag';

const logger = pino({
  transport: pino.transport({
    target: 'pino/pretty',
    options: { destination: 1 }
  }),
  level: 'trace'
}); 

const typeDefs = gql(readFileSync(join(resolve('.'), './graphql', 'person.graphql'), 'utf-8'));
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  logger,
});

export const handler = startServerAndCreateLambdaHandler(server);