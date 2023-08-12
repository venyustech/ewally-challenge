import { Person } from "../types/person";
import { Relationship } from "../types/relationship";

const people: Record<string, Person> = {};

const relationships: Record<string, string[]> = {};

export default {
  people,
  relationships,
};
