import React from "react";

interface TodoListFilter {
  currentFilter: (complete: boolean) => void;
}

export const TodoFilter: React.FC<TodoListFilter> = (props) => {
  return (
    <select>
      <option>All</option>
      <option>Done</option>
      <option>In Work</option>
    </select>
  );
};

const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = event.target.value;
  setSelectedOption(value);
};

return (
  <div>
    <select onChange={selectChange}>
      <option selected disabled>
        Choose one
      </option>
      <option value="blue">Blue</option>
      <option value="red">Red</option>
    </select>
    {selectedOption && <h2>{selectedOption}</h2>}
  </div>
);
