import image_2 from "../assets/Image_2.jpg";

function MoviesHero() {
  return (
    <>
      <div className="absolute mt-10 flex flex-col items-center justify-center w-full h-[400px]">
        <h1 className="font-bold text-7xl m-2 bg-gradient-to-r to-orange-400  from-red-700 bg-clip-text text-transparent">
          Welcome
        </h1>
        <p className="text-3xl pt-1 bg-gradient">
          The Ultimate Destination for all your Tv-shows and Movies
        </p>
      </div>
      <div>
        <img
          src={image_2}
          className=" h-[730px] object-cover rounded-lg w-full opacity-10"
        />
      </div>
    </>
  );
}

export default MoviesHero;
