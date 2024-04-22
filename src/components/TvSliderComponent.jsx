/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTvShows } from "../../data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

function TvSliderComponent({ details }) {
  const { title, parameter } = details;
  const [tvShow, setTvShows] = useState([]);
  console.log(tvShow);
  useEffect(() => {
    const getTvShow = async () => {
      const tvShows = await getTvShows(parameter);
      setTvShows(tvShows);
    };
    getTvShow();
  }, []);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 5, infinite: true },
      },
      {
        breakpoint: 375,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true },
      },
      {
        breakpoint: 990,
        settings: { slidesToShow: 5, slidesToScroll: 3, infinite: true },
      },
    ],
  };
  return (
    <div>
      <div className="px-5">
        <h1 className="my-4 text-xl text-color2">#{title}</h1>
        <Slider {...settings}>
          {tvShow.map((item) => (
            <Link key={item.id}>
              <div className="mx-2 relative ">
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
                    alt={item.id}
                    className="h-[350px] max-h-[300px] object-cover rounded-xl "
                  />
                </div>
                <div className="absolute bottom-0 smoothGradient w-full p-2">
                  <p className=" overflow-ellipsis text-sm md:text-md font-bold hover:text-[yellow]">
                    {item.name}
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
  );
}

export default TvSliderComponent;
