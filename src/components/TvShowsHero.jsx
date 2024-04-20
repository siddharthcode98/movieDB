//import tvImage from "../assets/tv-image-1.avif";

function TvShowsHero() {
  return (
    <>
      <div className="  flex flex-col items-center justify-center w-full h-[400px] bgContainer ">
        <h1 className="font-bold text-7xl m-2 bg-gradient-to-r to-orange-400  from-red-700 bg-clip-text text-transparent">
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
