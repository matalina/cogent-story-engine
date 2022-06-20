export interface Attribute {
  name: string;
  description: string;
  points: number;
}

export interface Skill {
  name: string;
  base: Attribute;
  points: number;
}

export interface Vocation {
  name: string;
  base: Attribute;
  points: number;
  skills: Skill[];
}

export interface Injury {
  name: string;
  level: number;
  penalty: string;
  lingering: boolean;
}

export interface DestinyPoint {
  value: number;
}

export interface CommercePoint {
  name: string;
  value: number;
}

export interface Item {
  name: string;
  commerce: CommercePoint;
}

export interface Disability {
  name: string;
  desctiption: string;
  penalty: string;
  advantage: string;
}

export interface CogentCharacter {
  name: string;
  age: number;
  disability: Disability[];
  attributes: {
    [key: string]: Attribute;
  },
  skills: {
    [key: string]: Skill;
  },
  vocations: Vocation[],

  injuries: Injury[];
  destinyPoints: DestinyPoint[];
  commerce: CommercePoint;
  equipment: Item[];
  notes: string[];
}

export interface Organization {
  name: string;
}


export interface Character extends CogentCharacter {
  concept: string;
  bodyType: Disability | null;
  morality: number;
  relationships: Relationship[];
  cybernetics: Cybernetic[];
  affiliations: Organization[];
}

export interface Relationship {
  character: NPC;
  relationship: number;
}

export interface NPC {
  name: string;
  challengeLevel: number;
}

export interface Cybernetic extends Vocation {
  location: string;
  description: string;
  dominant: boolean;
}

export interface WeaponType {
  name: string;
  type: 'melee' | 'ranged';
}

export interface CombatSkill extends Skill {
  modifier: WeaponType
}

