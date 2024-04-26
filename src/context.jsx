/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SearchContext = createContext({});

export function SearchProvider({ children }) {
  const [input, setInput] = useState("");
  return (
    <SearchContext.Provider value={{ input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
}
