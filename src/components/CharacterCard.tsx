import type { Character } from "../types";

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-card__body">
        <h2>{character.name}</h2>
        <p>Actor: {character.actor}</p>
        <p>Gender: {character.gender}</p>
        <p>House: {character.house}</p>
        <p>Wand core: {character.wand.core || "unknown"}</p>
        <p>Alive: {character.alive ? "yes" : "no"}</p>
      </div>
    </article>
  );
}

export default CharacterCard;
