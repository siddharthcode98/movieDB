/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTvShows } from "../../data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <h1 className="my-4 text-xl">{title}</h1>
        <Slider {...settings}>
          {tvShow.map((item) => (
            <div key={item.id} className="px-2">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
                  alt={item.id}
                  className="max-h-[320px] h-[320px] object-cover rounded-md "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TvSliderComponent;
