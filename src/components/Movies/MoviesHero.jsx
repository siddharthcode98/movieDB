import background from "../../assets/background.jpeg";
import SearchBar from "../SearchBar";

function MoviesHero() {
  return (
    <>
      <div className="w-full" style={{ backgroundImage: `url(${background})` }}>
        <div className="  flex flex-col items-center justify-center w-full h-[400px] ">
          <h1 className="font-bold text-5xl md:text-7xl  m-2 bg-gradient-to-r to-[#892E47]  from-color1 bg-clip-text text-transparent">
            Welcome
          </h1>
          <p className="text-2xl md:text-3xl pt-1 bg-gradient text-center  ">
            The Ultimate Destination for all your <br />
            Tv-shows and Movies
          </p>
          {/* search bar component here */}
          <SearchBar />
        </div>
        {/* <div>
          <img
            src={background}
            className=" h-[400px] object-cover rounded-lg w-full "
          />
        </div> */}
      </div>
    </>
  );
}

export default MoviesHero;
//bg-gradient-to-r to-orange-400  from-red-700 bg-clip-text text-transparent
