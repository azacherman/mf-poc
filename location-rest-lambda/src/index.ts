import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import validator from '@middy/validator'

import pino from 'pino';
import { locationHandler } from './handler';
import { eventSchema } from './middleware';

const logger = pino();

export const handler = 
  middy()
  .use(httpJsonBodyParser())
  // .use(validator({ eventSchema }))
  .use(httpErrorHandler({ logger: logger.error.bind(logger) }))
  .handler(
    locationHandler
  )