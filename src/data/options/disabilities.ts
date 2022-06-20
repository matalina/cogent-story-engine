import type { Disability } from "../types"

export const pure: Disability = {
  name: 'Pure Human',
  desctiption: 'A pure human is unaltered by genetic modifications and lacks the resistance to the toxins in The Cloud.',
  penalty: '-1 on any roll when in or below The Cloud',
  advantage: '+3 skill points at character creation'
}

export const mutation: Disability = {
  name: 'Mutation',
  desctiption: 'A physical deformaty that does not hinder the character from performing their duties but detracts the characters appearance noticably',
  penalty: '-1 when talking to anyone in or below the Cloud, -2 when talking to someone above the Cloud',
  advantage: 'Add a cybernetic implant of their choice augmenting their attributes.'
}

export const missingPart: Disability = {
  name: 'Missing Part',
  desctiption: 'The obvious example is that the character could have lost their hand or foot, but this may also include another extremity such as a nose or a reproductive organ.',
  penalty: '',
  advantage: '+3 skill points at character creation'
}

export const feeble: Disability = {
  name: 'Feeble',
  desctiption: 'This may mean the character is malnourished, genetically weak, or may be the result of an injury. The character is far weaker than a normal person.',
  penalty: ' -1 to all Strength based skills and strength checks',
  advantage: '+3 skill points at character creation'
}

export const heavy: Disability = {
  name: 'Heavy',
  desctiption: 'The character may be big boned, have lots of muscle, or be excessively overweight.',
  penalty: ' -1 to all reflex based skills and reflex checks',
  advantage: '+3 skill points at character creation'
}

export const dim: Disability = {
  name: 'Dim-witted',
  desctiption: 'A result from a bad head injury, or the character may simply be stupid.',
  penalty: ' -1 to all intelligence based skills and intelligence checks',
  advantage: '+3 skill points at character creation'
}

export const phobia: Disability = {
  name: 'Phobia',
  desctiption: 'This is a debilitating fear that the character possesses that is to be selected by the narrator and can range from heights, to spiders or little children.',
  penalty: '',
  advantage: '+3 skill points at character creation'
}

export const bigot: Disability = {
  name: 'Extreme Prejudice',
  desctiption: 'Species, culture, sexual orientation, political affiliation or religion. The Narrator is free to be creative, for example, making the character want to kill every person that supports a specific sports team, or hold irrational hatred to those who wear anything with ribbons.',
  penalty: '',
  advantage: '+3 skill points at character creation'
}

export const addiction: Disability = {
  name: 'Addiction',
  desctiption: 'This is not simply a preference of a certain thing, it is a disabling addiction, something that the character has withdrawals from if the addiction isn\'t satisfied often. The addiction itself can include things like sex, drugs, specific foods, or even murder.',
  penalty: '',
  advantage: '+3 skill points at character creation'
}

export const delusion: Disability = {
  name: 'Delusion',
  desctiption: 'Your character truly believes something to be real beyond the scope of simple faith. They see and hear and feel that belief into their own reality. Examples: having an imaginary friend, hearing voices, or honestly believing that pot plants are secretly an invading alien race.',
  penalty: '',
  advantage: '+3 skill points at character creation'
}

export const pleaser: Disability = {
  name: 'People Pleaser',
  desctiption: 'Your character will do whatever they can to make other people happy, often at the expense of their own happiness or goals.',
  penalty: '',
  advantage: '+3 skill points at character creation'
}