import { HOUSES } from "../types";

interface FiltersProps {
  name: string;
  onNameChange: (value: string) => void;
  house: string;
  onHouseChange: (value: string) => void;
}

function Filters({ name, onNameChange, house, onHouseChange }: FiltersProps) {
  return (
    <form className="filters" onSubmit={(e) => e.preventDefault()}>
      <div className="filter-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Hermione"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>

      <div className="filter-field">
        <label htmlFor="school">School</label>
        <select
          id="school"
          value={house}
          onChange={(e) => onHouseChange(e.target.value)}
        >
          <option value="">Choose one</option>
          {HOUSES.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default Filters;
