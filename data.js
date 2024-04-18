export async function getPopularMovies(parameter) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_KEY}`,
    },
  };

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${parameter}`,
      options
    );
    const popularMovies = await res.json();
    return popularMovies;
  } catch (error) {
    throw new Error("Fetch is failed");
  }
}
