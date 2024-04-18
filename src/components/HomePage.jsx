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
    <div>
      {listNames.map((item) => (
        <SliderComponent key={item.id} details={item}/>
      ))}
    </div>
  );
}

export default HomePage;
