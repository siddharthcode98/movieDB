/* eslint-disable react/prop-types */
import { useState } from "react";

function PopularActors({ castDetails }) {
  const popularActors = castDetails.sort((a, b) => b.popularity - a.popularity);
  const [update, setUpdate] = useState(3);

  const updateActors = () => {
    if (update < popularActors.length) {
      setUpdate(update + 3);
    }
  };
  return (
    <>
      <h2 className=" text-color2 font-bold text-xl">Cast</h2>
      <div className="grid grid-cols-3 gap-3 ">
        {popularActors.slice(0, update).map((item) => {
          if (
            item.profilePath !== null &&
            item.knownForDepartment === "Acting"
          ) {
            return (
              <div key={item.creditId} className="flex flex-col items-center">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.profilePath}`}
                  className=" h-16 w-16 rounded-full object-cover"
                />
                <div className="inline-block text-center">
                  <h2>{item.name}</h2>
                  <h2 className="text-sm italic text-color3">
                    as {item.character}
                  </h2>
                </div>
              </div>
            );
          }
        })}
      </div>
      {update < popularActors.length && (
        <div>
          <button className="text-color3  text-sm " onClick={updateActors}>
            load more&rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default PopularActors;
