import ImageCarousal from "./MoviesHero";
import SliderComponent from "./SliderComponent";

const listNames = [
  {
    id: 1,
    title: "Popular Movies",
    parameter: "popular",
  },
  {
    id: 2,
    title: "Top-Rated Movies",
    parameter: "top_rated",
  },
  {
    id: 3,
    title: "Upcoming Movies",
    parameter: "upcoming",
  },
];

function HomePage() {
  return (
    <div className="flex flex-col  pt-12 ">
      <ImageCarousal />
      <div className="w-full lg:px-36 md:px-20 ">
        {listNames.map((item) => (
          <SliderComponent key={item.id} details={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
