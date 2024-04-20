import TvShowsHero from "./TvShowsHero";
import TvSliderComponent from "./TvSliderComponent";

const listNames = [
  {
    id: 1,
    title: "Airing Today",
    parameter: "airing_today",
  },
  {
    id: 2,
    title: "On The Air",
    parameter: "on_the_air",
  },
  {
    id: 3,
    title: "Popular",
    parameter: "popular",
  },
  {
    id: 4,
    title: "Top Rated",
    parameter: "top_rated",
  },
];

function TvShows() {
  return (
    <div className="flex flex-col  pt-12 ">
      <TvShowsHero />
      <div className="w-full lg:px-36 md:px-20 ">
        {listNames.map((item) => (
          <TvSliderComponent key={item.id} details={item} />
        ))}
      </div>
    </div>
  );
}

export default TvShows;
