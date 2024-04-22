import background from "../assets/background.jpeg";

function MoviesHero() {
  return (
    <>
      <div className="absolute mt-10 flex flex-col items-center justify-center w-full h-[400px] ">
        <h1 className="font-bold text-7xl m-2 bg-gradient-to-r to-[#892E47]  from-color1 bg-clip-text text-transparent">
          Welcome
        </h1>
        <p className="text-3xl pt-1 bg-gradient text-center">
          The Ultimate Destination for all your <br />
          Tv-shows and Movies
        </p>
      </div>
      <div>
        <img
          src={background}
          className=" h-[400px] object-cover rounded-lg w-full "
        />
      </div>
    </>
  );
}

export default MoviesHero;
//bg-gradient-to-r to-orange-400  from-red-700 bg-clip-text text-transparent
