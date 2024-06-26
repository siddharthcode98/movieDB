/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast, getTvshowsDetails, getWatchProviders } from "../../../data";
import PopularActors from "../MovieDetails/PopularActors";
import { MdOutlineStar } from "react-icons/md";
import TvProviders from "./TvProviders";
import { Puff } from "react-loading-icons";
import Header from "../Header";
import { IoAddCircleOutline } from "react-icons/io5";
import { SearchContext } from "../../context";

function TvShowsDetails() {
  const params = useParams();
  const [showDetails, setShowDetails] = useState({});
  const [castDetails, setCastDetails] = useState([]);
  const [providers, setProviders] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { wishlist, addWishList } = useContext(SearchContext);

  useEffect(() => {
    const getDetails = async () => {
      const data = await getTvshowsDetails(params.id);
      const CastDetails = await getCast(params.id, "tv");
      const details = await getWatchProviders(params.id);
      if (details) {
        setProviders(details);
      }
      setShowDetails(data);
      setCastDetails(CastDetails);
      setLoading(!isLoading);
    };
    getDetails();
  }, [params]);

  const handleWishlist = () => {
    const isExist = wishlist.find((item) => item.id == showDetails.id);
    if (!isExist) {
      addWishList((prevState) => [...prevState, showDetails]);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="absolute top-[50%] left-[50%]">
          <Puff
            stroke="#dcf836"
            strokeWidth={3}
            height={"80px"}
            width={"80px"}
          />
        </div>
      ) : (
        <div className="relative bg-main min-h-screen overflow-y-auto overflow-x-hidden">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${showDetails.backdropPath}`}
              alt="image"
              className="opacity-10 md:h-[400px] w-full object-cover object-top "
            />
          </div>
          <div className="absolute top-2 pt-10 pb-5 px-5  w-screen">
            <div className="mr-auto ml-auto pr-10 pl-10 md:w-[640px] lg:w-[990px] xl:w-[1200px] ">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
                <div className="flex flex-col md:w-2/3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${showDetails.posterPath}`}
                    className="object-full shadow-xl shadow-black"
                  />
                  <button
                    className=" mt-10 bg-color1 md:p-2 p-1 rounded-md text-white w-full flex items-center justify-center gap-2"
                    onClick={handleWishlist}
                  >
                    Add to Wishlist
                    <IoAddCircleOutline
                      size="18px"
                      style={{ fontStyle: "bold" }}
                    />
                  </button>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-color2 ">
                    {showDetails.name}
                    <span className="font-thin ml-3 text-lg text-color3">
                      {new Date(showDetails.firstAirData).getFullYear()}
                    </span>
                  </h1>
                  <div className="border-t-2 border-gray-500 border-b-2 p-1">
                    <div className="text-white flex items-center ">
                      <MdOutlineStar color="f5b50a" />
                      <div className="flex ">
                        {Math.round(showDetails.voteAverage)}
                        /10
                      </div>
                    </div>
                  </div>
                  <div className=" p-1 border-gray-500">
                    <p>{showDetails.overview}</p>
                  </div>
                  <div className="pt-10">
                    <div className="pb-5">
                      <h2 className=" text-color2 font-bold text-xl">
                        Show Details
                      </h2>
                    </div>

                    <div className="border-b-2  p-1 border-gray-500">
                      <h2 className="font-bold text-color2">No Of seasons</h2>
                      <h2>{showDetails.numberOfSeasons}</h2>
                    </div>
                    <div className="border-b-2  p-1 border-gray-500">
                      <h2 className="font-bold text-color2">Type</h2>
                      <h2>{showDetails.type}</h2>
                    </div>
                    <div className="border-b-2  p-1 border-gray-500">
                      <h2 className="font-bold text-color2">
                        Spoken Languages
                      </h2>
                      <h2>{showDetails.originalLanguage}</h2>
                    </div>
                    <div className="border-b-2  p-1 border-gray-500">
                      <h2 className="font-bold text-color2">Status</h2>
                      <h2>{showDetails.status}</h2>
                    </div>
                  </div>
                  <div className="pt-10">
                    <PopularActors castDetails={castDetails} />
                  </div>
                  <div className="pt-3">
                    <h2 className=" text-color2 font-bold text-xl ">
                      Watch Providers
                    </h2>
                    <TvProviders providers={providers} />
                  </div>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TvShowsDetails;
