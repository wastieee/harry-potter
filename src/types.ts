export interface Character {
  id: string;
  name: string;
  actor: string;
  gender: string;
  house: string;
  image: string;
  alive: boolean;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
}

export const HOUSES = [
  "Gryffindor",
  "Slytherin",
] as const;

export type House = (typeof HOUSES)[number];
