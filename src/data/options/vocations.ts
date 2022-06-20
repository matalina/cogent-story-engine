import type { Vocation } from "../types";
import { intelligence, reflex, strength } from "./attributes";

export const mercenary: Vocation = {
  name: 'Mercenary',
  base: strength,
  points: 0,
  skills: [],
};

export const hacker: Vocation = {
  name: 'Hacker',
  base: intelligence,
  points: 0,
  skills: [],
}

export const thief: Vocation = {
  name: 'Thief',
  base: reflex,
  points: 0,
  skills: [],
}