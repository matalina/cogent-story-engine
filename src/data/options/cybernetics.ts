import type { Cybernetic } from "../types"
import { intelligence, reflex, strength } from "./attributes"

export const hip: Cybernetic = {
  name: 'Hip Cybernetic Implant',
  base: strength,
  points: 0,
  location: 'hip',
  dominant: false,
  description: '',
  skills: [],
}

export const arm: Cybernetic = {
  name: 'Arm Cybernetic Implant',
  base: reflex,
  points: 0,
  location: 'arm',
  dominant: false,
  description: '',
  skills: [],
}

export const eye: Cybernetic = {
  name: 'Over Eye Cybernetic Implant',
  base: intelligence,
  points: 0,
  location: 'eye',
  dominant: false,
  description: '',
  skills: [],
}