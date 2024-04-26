// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../context";

function SearchBar() {
  const navigation = useNavigate();
  const [userInput, setUserInput] = useState("");
  const { setInput } = useContext(SearchContext);
  const [error, setError] = useState(false)

  const renderSearchPage = (e) => {
    e.preventDefault();
    //console.log("hello");
    if (userInput.length > 0) {
      setInput(userInput);
      navigation("/search");
      setUserInput("");
    }
    setError(!error);
  };
  const onChangeUserInput = (e) => {
    setUserInput(e.target.value);
  };
  
  return (
    <>
      <form className="flex md:w-1/2  pt-5" onSubmit={renderSearchPage}>
        <div className="p-2 w-full rounded-tl-md rounded-bl-md  bg-white">
          <input
            className="outline-none w-full bg-white placeholder:text-color3"
            type="search"
            placeholder="Search for your favourite movies and Tv-shows "
            value={userInput}
            onChange={onChangeUserInput}
          />
        </div>

        <button
          className="bg-color1 p-2 rounded-tr-md rounded-br-md text-white"
          type="submit"
        >
          Search
        </button>
      </form>
      {error && (
        <p className="text-red-500">
          please Enter a movie or tv-show to search
        </p>
      )}
    </>
  );
}

export default SearchBar;
