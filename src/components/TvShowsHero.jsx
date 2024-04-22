//import tvImage from "../assets/tv-image-1.avif";

function TvShowsHero() {
  return (
    <>
      <div className="  flex flex-col items-center justify-center w-full h-[400px] bgContainer ">
        <h1 className="font-bold text-7xl m-2 bg-gradient-to-r to-[#892E47]  from-color1 bg-clip-text text-transparent drop-shadow-lg">
          Favourite Tv-shows?
        </h1>
        <p className="text-3xl pt-1 bg-gradient">They are all right here!!</p>
      </div>
      {/* <div>
        <img
          src={tvImage}
          className=" h-[730px] object-cover rounded-lg w-full opacity-10"
        />
      </div> */}
    </>
  );
}

export default TvShowsHero;
