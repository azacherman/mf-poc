import { ApolloServer } from '@apollo/server';
import { resolvers } from './graphql/resolvers';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { LocationRestAPI } from './graphql/datasources/index';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import gql from 'graphql-tag';
import pino from 'pino';

const logger = pino(
{
    // transport: pino.transport({
    //   target: 'pino/pretty',
    //   options: { destination: 1 }
    // }),
  level: 'trace'
}
);


const typeDefs = gql(readFileSync(join(resolve('.'), './graphql', 'location.graphql'), 'utf-8'));
const server = new ApolloServer({
  logger,
  schema: 
    buildSubgraphSchema({ typeDefs, resolvers }),
})

export const handler = startServerAndCreateLambdaHandler(server, {
  async context() {
    console.log('Context enabled')
    return {
      dataSources:
       { locationAPI: new LocationRestAPI(), }
    }
  }
})