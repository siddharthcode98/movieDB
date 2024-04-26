/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../../data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { Puff } from "react-loading-icons";

function SliderComponent({ details }) {
  const { title, parameter } = details;
  const [popMovies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
      console.log(popularMovies);
      const modifiedPopularMovies = modifierFunction(popularMovies.results);
      //console.log(modifiedPopularMovies);
      setMovies(modifiedPopularMovies);
      setLoading(!isLoading);
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parameter]);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,

    responsive: [
      {
        breakpoint: 425,
        settings: { slidesToShow: 2, slidesToScroll: 5, infinite: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 5, infinite: true },
      },
      {
        breakpoint: 375,
        settings: { slidesToShow: 2, slidesToScroll: 3, infinite: true },
      },
      {
        breakpoint: 990,
        settings: { slidesToShow: 5, slidesToScroll: 3, infinite: true },
      },
      {
        breakpoint: 1080,
        settings: { slidesToShow: 5, slidesToScroll: 3, infinite: true },
      },
    ],
  };
  return (
    <>
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
        <div>
          <div className="px-5">
            <h1 className="my-4 text-xl text-color2">#{title}</h1>
            <Slider {...settings}>
              {popMovies.map((item) => (
                <Link key={item.id} to={`/movies/${item.id}`}>
                  <div className="mx-2 relative   ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
                      alt={item.id}
                      className=" h-full  object-cover rounded-xl "
                    />
                    <div className="absolute bottom-0 smoothGradient w-full px-2 ">
                      <p className="  text-sm md:text-md font-bold hover:text-[yellow]">
                        {item.title}
                      </p>
                      <div className="text-white flex items-center ">
                        <MdOutlineStar color="f5b50a" />
                        <div className="flex ">
                          {Math.round(item.voteAverage)}
                          /10
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default SliderComponent;
