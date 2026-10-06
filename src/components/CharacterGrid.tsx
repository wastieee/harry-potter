import type { Character } from "../types";
import CharacterCard from "./CharacterCard";

interface CharacterGridProps {
  characters: Character[];
}

function CharacterGrid({ characters }: CharacterGridProps) {
  if (characters.length === 0) {
    return <p className="empty-state">Персонажи не найдены</p>;
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
