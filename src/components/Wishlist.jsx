import { useContext } from "react";
import { SearchContext } from "../context";
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import Header from "./Header";

import emptyWishlist from "../assets/empty-wishlist.png";

function Wishlist() {
  const { wishlist, addWishList } = useContext(SearchContext);
  const handleRemove = (e) => {
    const movieId = parseInt(e.target.value);
    const filteredList = wishlist.filter((item) => item.id !== movieId);
    addWishList(filteredList);
  };
  return (
    <div>
      <Header />
      {wishlist.length > 0 ? (
        <div className="flex flex-wrap  gap-5 flex-grow px-10 pt-10">
          {wishlist.map((item) => (
            <div className="bg-white rounded-b-md rounded-t-md" key={item.id}>
              <div className="w-[150px]">
                <Link to={`/${item.mediaType}/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.posterPath}`}
                    alt={item.id}
                    className="rounded-t-md object-cover"
                  />
                </Link>
                <div className="inline-block p-2 w-full">
                  <h2 className="text-black text-ellipsis ">
                    {item.title || item.name}
                  </h2>
                  <div className="text-black flex items-center ">
                    <MdOutlineStar color="f5b50a" />
                    <div className="flex ">
                      {Math.round(item.voteAverage)}
                      /10
                    </div>
                  </div>
                  <button
                    className="  mt-auto mb-0  p-1 text-sm rounded-md  w-full border hover:bg-color1 hover:text-white"
                    value={item.id}
                    onClick={handleRemove}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="md:text-5xl text-2xl font-bold">
            Your Wishlist is Empty
          </h2>
          <img src={emptyWishlist} className="md:w-[250px] w-[150px] " />
        </div>
      )}
    </div>
  );
}

export default Wishlist;
