import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper"

export const resolvers: GraphQLResolverMap<any> = {
  Query: {
    location(_, { id }, { dataSources }) {
      return dataSources.locationAPI.getLocation(id)
    }
  },
  Location: {
    __resolveReference({id}, {dataSources}) {
      return dataSources.locationAPI.getLocation(id);
    }
  }
}