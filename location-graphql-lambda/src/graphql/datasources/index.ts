import { RESTDataSource } from '@apollo/datasource-rest';
import pino from 'pino';

const logger = pino();

export class LocationRestAPI extends RESTDataSource {
  override baseURL = process.env.BASE_URL || '';

  constructor() {
    super();
  }

  async getLocation(id: string) {
    return this.post(this.baseURL, { body: { id }})
  }
}