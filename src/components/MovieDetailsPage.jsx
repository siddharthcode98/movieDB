import { useEffect, useState } from "react";
import { getMovieDetails } from "../../data";
import { useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  //console.log(params);
  const backdrop = `https://image.tmdb.org/t/p/original/${movie.backdropPath}`;
  const poster = `https://image.tmdb.org/t/p/original/${movie.posterPath}`;
  //   const Date = new Date(movie.releaseDate);
  //   const year = Date.getYear();
  //   console.log(year);

  useEffect(() => {
    const getDetails = async () => {
      const details = await getMovieDetails(params.id);
      console.log(details);
      setMovie(details);
    };
    getDetails();
  }, []);

  return (
    <>
      <div className="z-1 relative">
        <img src={backdrop} alt="image" className="opacity-10" />
      </div>
      <div className="absolute top-1 pt-20 ">
        <div className="mr-auto ml-auto pr-10 pl-10 w-[1160px]">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <img src={poster} className="h-[500px]" />
            </div>
            <div>
              <h1 className="text-xl">
                {movie.title}{" "}
                <span>{new Date(movie.releaseDate).getFullYear()}</span>
              </h1>
              <div className="border-t-2 border-gray-500 border-b-2">
                <div className="text-white flex items-center ">
                  <MdOutlineStar color="f5b50a" />
                  <div className="flex ">
                    {Math.round(movie.voteAverage)}
                    /10
                  </div>
                </div>
              </div>
              <div>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
