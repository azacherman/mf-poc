export interface Person {
  id: number
  name: String
  city: String
  state: String
  height: String
  occupation: String
}

export const data: Person[] = [
  {
    id: 1,
    name: "Avi",
    city: "Bronx",
    state: "New York",
    height: "5'6\"",
    occupation: "Software Engineering Manager"
  },
  {
    id: 2,
    name: "Xena",
    city: "Amphipolis",
    state: "Greece",
    height: "5'10\"",
    occupation: "Warrior Princess"
  },
  {
    id: 3,
    name: "Tony Stark",
    city: "New York",
    state: "New York",
    height: "5'8\"",
    occupation: "Billionaire"
  },
]