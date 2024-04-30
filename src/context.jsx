/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SearchContext = createContext({});

export function SearchProvider({ children }) {
  const [input, setInput] = useState("");
  const [wishlist, addWishList] = useState([]);
  return (
    <SearchContext.Provider value={{ input, setInput, wishlist, addWishList }}>
      {children}
    </SearchContext.Provider>
  );
}
