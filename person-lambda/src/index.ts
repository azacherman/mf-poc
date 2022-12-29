import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { typeDefs } from './graphql/schema';
import pino from 'pino';
import { resolvers } from './graphql/resolvers/index';

const logger = pino();

const server = new ApolloServer({
  typeDefs,
  logger,
  resolvers,
});

export const handler = startServerAndCreateLambdaHandler(server);