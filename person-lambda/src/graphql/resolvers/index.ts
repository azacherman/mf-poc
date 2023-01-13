import { data, Person } from "../../mock-datasource";
import pino from 'pino';

const logger = pino();

function findById(parent, { id }): Person | undefined{
  return data.find(person => person.id === id);
}

function findByCity(parent, { city }): Person | undefined {
  return data.find(person => person.city === city);
}

export const resolvers = {
  Query: {
    findById,
    findByCity,
    people: () => data,
  },
  Person: {
    favoritePark({ locationId }) {
      return { id: locationId };
    }
  },
  Location: {
    __resolveReference: (location) => {
      return location;
    },
  }
}