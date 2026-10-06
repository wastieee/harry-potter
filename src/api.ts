import type { Character } from "./types";

const API_URL = "https://hp-api.onrender.com/api/characters";

// Для этого макета показываем только конкретных персонажей:
// Hermione Granger (дважды, как в дизайне) и Draco Malfoy.
const FEATURED_NAMES = ["Hermione Granger", "Draco Malfoy"];

export async function fetchCharacters(): Promise<Character[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Не удалось загрузить персонажей: ${response.status}`);
  }

  const data: Character[] = await response.json();

  const hermione = data.find((c) => c.name === FEATURED_NAMES[0]);
  const draco = data.find((c) => c.name === FEATURED_NAMES[1]);

  // Порядок как в макете: Hermione, Draco, затем Hermione ещё раз
  const result: Character[] = [];

  if (hermione) result.push(hermione);
  if (draco) result.push(draco);
  if (hermione) result.push({ ...hermione, id: `${hermione.id}-copy` });

  return result;
}
