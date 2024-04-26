import { useEffect, useState } from "react";
import { getCast, getCrew, getMovieDetails } from "../../../data";
import { useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { Puff } from "react-loading-icons";
import ProductionCompanies from "./ProductionCompanies";
import PopularActors from "./PopularActors";

function MovieDetailsPage() {
  const [isLoading, setLoading] = useState(true);

  const [movie, setMovie] = useState({});
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);

  const params = useParams();
  //console.log(params);
  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdropPath}`;
  const poster = `https://image.tmdb.org/t/p/original${movie.posterPath}`;

  useEffect(() => {
    const getDetails = async () => {
      const Moviedetails = await getMovieDetails(params.id);
      const CastDetails = await getCast(params.id, "movie");
      const CrewDetails = await getCrew(params.id);
      setCrewDetails(CrewDetails);
      setMovie(Moviedetails);
      setCastDetails(CastDetails);
      setLoading(!isLoading);
    };
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  // const popularActors = castDetails.sort((a, b) => b.popularity - a.popularity);
  const Generes = movie.genres === undefined ? Array(10) : movie.genres;
  const crafts = Object.groupBy(crewDetails, (item) => item.job);

  //console.log(movie.productionCompanies);
  // console.log(movie.budget);
  return (
    <>
      {isLoading ? (
        <div className="relative top-[300px] left-[50%] ">
          <Puff
            stroke="#dcf836"
            strokeWidth={3}
            height={"80px"}
            width={"80px"}
          />
        </div>
      ) : (
        <>
          <div className="relative bg-main min-h-screen  overflow-x-hidden overflow-y-auto">
            <div>
              <img
                src={backdrop}
                alt="image"
                className="opacity-10 md:h-[400px] w-full object-cover object-top "
              />
            </div>
            <div className="absolute top-5 pt-16 pb-5 px-5  w-screen">
              <div className="mr-auto ml-auto pr-10 pl-10 md:w-[640px] lg:w-[990px] xl:w-[1200px] ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
                  <img
                    src={poster}
                    className="h-[500px] shadow-xl shadow-black"
                  />
                  <div>
                    <h1 className="text-3xl font-bold text-color2 ">
                      {movie.title}
                      <span className="font-thin ml-3 text-lg text-color3">
                        {new Date(movie.releaseDate).getFullYear()}
                      </span>
                    </h1>
                    <div className="border-t-2 border-gray-500 border-b-2 p-1">
                      <div className="text-white flex items-center ">
                        <MdOutlineStar color="f5b50a" />
                        <div className="flex ">
                          {Math.round(movie.voteAverage)}
                          /10
                        </div>
                      </div>
                    </div>
                    <div className=" p-1 border-gray-500">
                      <p>{movie.overview}</p>
                    </div>
                    <div className="pt-10">
                      <div className="pb-5">
                        <h2 className=" text-color2 font-bold text-xl">
                          Movie Details
                        </h2>
                      </div>
                      <div className=" border-b-2  p-1 border-gray-500">
                        <h2 className="font-bold text-color2">Director</h2>
                        <p>
                          {crafts === null ? "name" : crafts.Director[0].name}
                        </p>
                      </div>
                      <div className="border-b-2  p-1 border-gray-500">
                        <h2 className="font-bold text-color2 ">Genres</h2>
                        {Generes.map((genre) => (
                          <div key={genre.id} className="inline-flex">
                            <h2>{genre.name},</h2>
                          </div>
                        ))}
                      </div>
                      <div className="border-b-2  p-1 border-gray-500">
                        <h2 className="font-bold text-color2">Status</h2>
                        <h2>{movie.status}</h2>
                      </div>
                      <div className="border-b-2  p-1 border-gray-500">
                        <h2 className="font-bold text-color2">Run time</h2>
                        <h2>{movie.runtime} min</h2>
                      </div>
                      <div className="border-b-2  p-1 border-gray-500">
                        <h2 className="font-bold text-color2">
                          Original Language
                        </h2>
                        <h2>{movie.originalLanguage}</h2>
                      </div>
                      <div className="border-b-2  p-1 border-gray-500">
                        <h2 className="font-bold text-color2">Budget</h2>
                        <h2>
                          {parseFloat(movie.budget).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </h2>
                      </div>
                      <div className="border-b-2  p-1 border-gray-500">
                        <h2 className="font-bold text-color2 ">Revenue</h2>
                        <h2>
                          {parseFloat(movie.revenue).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </h2>
                      </div>
                    </div>

                    <div className="pt-10">
                      <PopularActors castDetails={castDetails} />
                    </div>
                    <div className="pt-3">
                      <h2 className=" text-color2 font-bold text-xl ">
                        Production Houses
                      </h2>
                      <ProductionCompanies
                        details={movie.productionCompanies}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
// adult: item.adult,
// backdropPath: item.backdrop_path,
// belongsToCollection: item.belongs_to_collection,
// budget: item.budget,
// genreIds: item.genre_ids,
// homepage: item.homepage,
// id: item.id,
// imdbId: item.imdb_id,
// originCountry: item.origin_country,
// originalLanguage: item.original_language,
// originalTitle: item.original_title,
// overview: item.overview,
// popularity: item.popularity,
// posterPath: item.poster_path,
// productionCompanies: item.production_companies,
// productionCountries: item.production_countries,
// releaseDate: item.release_date,
// revenue: item.revenue,
// runtime: item.runtime,
// firstAirDate: item.first_air_date,
// spokenLanguages: item.spoken_languages,
// status: item.status,
// tagline: item.tagline,
// title: item.title,
// video: item.video,
// voteAverage: item.vote_average,
// voteCount: item.vote_count,
