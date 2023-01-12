import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper"

export const resolvers: GraphQLResolverMap<any> = {
  Query: {
    getLocation(_, { id }, { dataSources }) {
      return dataSources.locationAPI.getLocation(id)
    }
  }
}