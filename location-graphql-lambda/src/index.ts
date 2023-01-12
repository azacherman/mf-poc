import { ApolloServer } from '@apollo/server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { LocationRestAPI } from './graphql/datasources/index';

// interface GraphQLContext {
//   location: LocationRestAPI;
// }

const server = new ApolloServer({
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