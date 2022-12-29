import { Static, Type } from '@sinclair/typebox';

const Location = Type.Object({
  name: Type.String(),
  city: Type.String(),
  state: Type.String(),
  address: Type.String(),
  id: Type.String(),
});

export type Location = Static<typeof Location>;

export const data: Location[] = [
  {
    name: 'Even Park Dog Run',
    city: 'Bronx',
    state: 'NY',
    address: '511 W 232 St',
    id: "1",
  },
  {
    name: 'Homer\'s Run',
    city: 'New York',
    state: 'NY',
    address: 'Hill Park',
    id: "2",
  },
   {
    name: 'Working Devil\'s Dog Park',
    city: 'Kalivia Thorikou',
    state: 'Greece',
    address: 'Thesi Aimatoriza,',
    id: "3",
  }
]