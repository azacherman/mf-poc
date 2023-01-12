import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import typeDefs from './graphql/person.graphql';
import pino from 'pino';
import { resolvers } from './graphql/resolvers/index';
import { buildSubgraphSchema } from '@apollo/subgraph';

const logger = pino();

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

export const handler = startServerAndCreateLambdaHandler(server);