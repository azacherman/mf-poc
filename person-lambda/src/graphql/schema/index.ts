import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    findById(id: ID): Person
    findByCity(city: String): Person
    people: [Person]
  }

  type Person {
    id: ID
    name: String
    city: String
    state: String
    height: String
    occupation: String
  }
`