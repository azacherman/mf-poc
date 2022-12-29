import { data, Person } from "../../mock-datasource";
import pino from 'pino';

const logger = pino();

function findById(parent, { id }): Person | undefined{
  logger.info(arguments);
  logger.info(id);
  logger.info(data);
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
  }
}