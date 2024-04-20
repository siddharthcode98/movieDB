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

export const modifierFunction = (movies) =>
  movies.map((item) => {
    return {
      adult: item.adult,
      backdropPath: item.backdrop_path,
      genreIds: item.genre_ids,
      id: item.id,
      originalLanguage: item.original_language,
      originalTitle: item.original_title,
      overview: item.overview,
      popularity: item.popularity,
      posterPath: item.poster_path,
      releaseDate: item.release_date,
      title: item.title,
      video: item.video,
      voteAverage: item.vote_average,
      voteCount: item.vote_count,
    };
  });
export const modifierFunctionTv = (movies) =>
  movies.map((item) => {
    return {
      adult: item.adult,
      backdropPath: item.backdrop_path,
      genreIds: item.genre_ids,
      id: item.id,
      originCountry: item.origin_country,
      originalLanguage: item.original_language,
      originalName: item.original_name,
      overview: item.overview,
      popularity: item.popularity,
      posterPath: item.poster_path,
      firstAirDate: item.first_air_date,
      name: item.name,
      voteAverage: item.vote_average,
      voteCount: item.vote_count,
    };
  });

export async function getTvShows(parameter) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_KEY}`,
    },
  };

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${parameter}`,

      options
    );
    const data = await res.json();
    const tvShows = modifierFunctionTv(data.results);
    return tvShows;
  } catch (error) {
    throw new Error("Fetch is failed");
  }
}
