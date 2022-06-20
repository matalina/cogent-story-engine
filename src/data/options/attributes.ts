import type { Attribute } from "../types"

export const strength: Attribute = {
  name: 'Strength',
  description: 'For every point in strength the character can reduce a victory level achieved against them in combat once every combat encounter',
  points: 0
}

export const intelligence: Attribute = {
  name: 'Intelligence',
  description: 'For every point in intelligence the player receives 3 additional skill points to spend.',
  points: 0
}

export const reflex: Attribute = {
  name: 'Reflex',
  description: 'As combat is conducted in a round by round format, the player with the highest reflex gets priority in that round.',
  points: 0,
}