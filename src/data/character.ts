import type { Character, CommercePoint } from "./types";
import { strength, intelligence, reflex } from "./options/attributes";
import { endurance, athletics, grip, swim, throwing } from "./options/skills";
import { perception, acrobatics, ride, slightOfHand, stealth } from "./options/skills";
import { generalKnowledge, deception, infiltration, persuasion, survival } from "./options/skills";
import { thief, mercenary, hacker } from "./options/vocations";
import { hip, arm, eye } from "./options/cybernetics";
import { pure, mutation, missingPart, feeble, heavy, dim, phobia, bigot, addiction, delusion, pleaser } from "./options/disabilities";
import { L1 } from "./options/commerce";

const attributes = { strength, intelligence, reflex };
const skills = {
  endurance, athletics, grip, swim, throwing,
  perception, acrobatics, ride, slightOfHand, stealth,
  generalKnowledge, deception, infiltration, persuasion, survival
}
const vocations = { thief, mercenary, hacker };
const cybernetics = { hip, eye, arm };
const disabilities = { missingPart, feeble, heavy, dim, phobia, bigot, addiction, delusion, pleaser }
const types = { pure, mutation };

export default (concept: string) => {
  const character = {
    concept,
    name: '',
    age: 0,
    bodyType: null,
    disability: [],
    attributes,
    skills,
    vocations: [],
    injuries: [],
    destinyPoints: [],
    commerce: L1,
    equipment: [],
    notes: [],
    morality: 0,
    relationships: [],
    cybernetics: [],
    affilliations: [],
  };

  const startAttribPoints = 2;
  const startSkillPoints = 2;
  const maxNegative = 1;

  return {
    character,
  }
}