import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from '@apollo/server';
import dotenv from 'dotenv';
import { startStandaloneServer } from '@apollo/server/standalone';
if (process.env.NODE_ENV !== 'production') dotenv.config();

const gateway = new ApolloGateway();
const server = new ApolloServer({ gateway });
startStandaloneServer(server, {
  listen: {
    port: (process.env.PORT as unknown as number) || 3000,
  }
})

