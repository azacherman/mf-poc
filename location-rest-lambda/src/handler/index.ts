import { APIGatewayEvent, APIGatewayEventRequestContext } from "aws-lambda";
import { Location, data } from '../mock-datasource';
import { LocationRequest } from '../middleware/schema';

export async function locationHandler({ body: { id }}: LocationRequest): Promise<Location | undefined> {
  return data.find(location => location.id === id);
}