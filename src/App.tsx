import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CharacterGrid from "./components/CharacterGrid";
import { fetchCharacters } from "./api";
import type { Character } from "./types";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [house, setHouse] = useState("");

  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesName = character.name
        .toLowerCase()
        .includes(name.toLowerCase());
      const matchesHouse = house === "" || character.house === house;
      return matchesName && matchesHouse;
    });
  }, [characters, name, house]);

  return (
    <div className="page">
      <Header />
      <Filters
        name={name}
        onNameChange={setName}
        house={house}
        onHouseChange={setHouse}
      />
      <div className="divider" />

      {isLoading && <p className="empty-state">Загрузка...</p>}
      {error && <p className="empty-state">Ошибка: {error}</p>}
      {!isLoading && !error && (
        <CharacterGrid characters={filteredCharacters} />
      )}
    </div>
  );
}

export default App;
