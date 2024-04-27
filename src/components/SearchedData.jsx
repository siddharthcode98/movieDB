/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context";
import { getUserSearchResults } from "../../data";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import emptyFolder from "../assets/empty-folder.png";
import Header from "./Header";

/* eslint-disable react/prop-types */
function SearchedData() {
  const { input } = useContext(SearchContext);
  //const [searchResults, setResults] = useState([]);
  const [movieResuls, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  console.log(input);

  useEffect(() => {
    const getSearchResults = async () => {
      const data = await getUserSearchResults(input);
      const filteredMovieData = data.filter(
        (item) => item.mediaType === "movie"
      );
      const filteredTvData = data.filter((item) => item.mediaType === "tv");
      setMovieResults(filteredMovieData);
      setTvResults(filteredTvData);
    };
    getSearchResults();
  }, [input]);

  return (
    <>
      <Header />
      {input.length > 0 ? (
        <div className="px-10 pt-5">
          {movieResuls.length > 0 && (
            <div>
              <h2 className="my-3">In Movies</h2>
              <div className="flex flex-wrap  gap-5 flex-grow">
                {movieResuls.map((item) => (
                  <Link to={`/movies/${item.id}`} key={item.id}>
                    <div className="bg-white rounded-b-md rounded-t-md">
                      <div className="w-[150px]">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.posterPath}`}
                          alt={item.id}
                          className="rounded-t-md object-cover"
                        />
                        <div className="inline-block p-2">
                          <h2 className="text-black text-ellipsis ">
                            {item.title}
                          </h2>
                          <div className="text-black flex items-center ">
                            <MdOutlineStar color="f5b50a" />
                            <div className="flex ">
                              {Math.round(item.voteAverage)}
                              /10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {tvResults.length > 0 && (
            <div className="mt-8">
              <h2 className="my-3">In Tv-shows</h2>
              <div className="flex flex-wrap gap-5">
                {tvResults.map((item) => (
                  <Link key={item.id} to={`/tv-shows/${item.id}`}>
                    <div className="bg-white rounded-b-md rounded-t-md">
                      <div className="w-[150px]">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.posterPath}`}
                          alt={item.id}
                          className="rounded-t-md"
                        />
                        <div className="inline-block p-2">
                          <h2 className="text-black">{item.name}</h2>

                          <div className="text-black flex items-center ">
                            <MdOutlineStar color="f5b50a" />
                            <div className="flex ">
                              {Math.round(item.voteAverage)}
                              /10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="md:text-5xl text-2xl font-bold">
            Your Search is Empty
          </h2>
          <img src={emptyFolder} className="md:w-[250px] w-[150px] " />
        </div>
      )}
    </>
  );
}

export default SearchedData;
