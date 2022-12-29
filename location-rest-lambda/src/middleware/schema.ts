import { transpileSchema } from '@middy/validator/transpile'
import { Static, Type } from "@sinclair/typebox"

const LocationRequest = Type.Object({
  body: Type.Object({
    id: Type.Number(),
  })
})

export type LocationRequest = Static<typeof LocationRequest>;

export const eventSchema = transpileSchema({
  type: 'object',
  required: ['body'],
  properties: {
    headers: {
      'Content-Type': 'string',
    },
    body: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
      },
      required: ['id'],
    }
  }
});