import React, { FC, useState } from "react";
import "./searchBlock.scss";

const SearchBlock: FC = () => {
  const [search, setSearch] = useState<string>("");

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form action="" onSubmit={searchSubmit} className="search-block">
      <input
        type="text"
        placeholder="Поиск по названию картины"
        value={search}
        onChange={searchChange}
      />
      <button type="submit">Найти</button>
    </form>
  );
};

export default SearchBlock;
