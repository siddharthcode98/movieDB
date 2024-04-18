/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent({ details }) {
  const { title, parameter } = details;
  const [popMovies, setMovies] = useState([]);

  const modifierFunction = (movies) =>
    movies.map((item) => {
      return {
        adult: item.adult,
        backdropPath: item.backdrop_path,
        genreIds: item.genre_ids,
        id: item.id,
        originalLanguage: item.original_language,
        originalTitle: item.original_title,
        overview: item.overview,
        popularity: item.popularity,
        posterPath: item.poster_path,
        releaseDate: item.release_date,
        title: item.title,
        video: item.video,
        voteAverage: item.vote_average,
        voteCount: item.vote_count,
      };
    });
  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await getPopularMovies(parameter);
      console.log(popularMovies.results);
      const modifiedPopularMovies = modifierFunction(popularMovies.results);
      //console.log(modifiedPopularMovies);
      setMovies(modifiedPopularMovies);
    };
    getMovies();
  }, []);
  var settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 7,
    slidesToScroll: 5,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 5, infinite: true },
      },
      {
        breakpoint: 375,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true },
      },
    ],
  };
  return (
    <div>
      <h1>{title}</h1>
      <div className="px-5">
        <Slider {...settings}>
          {popMovies.map((item) => (
            <div key={item.id} className="px-2">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
                  alt={item.id}
                  className="max-h-[300px] object-cover rounded-md "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponent;