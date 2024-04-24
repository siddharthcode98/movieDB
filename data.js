const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_KEY}`,
  },
};

export async function getPopularMovies(parameter) {
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

export async function getTvShows(parameter) {
  const modifierFunctionTv = (movies) =>
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
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${parameter}`,

      options
    );
    const data = await res.json();
    const tvShows = await modifierFunctionTv(data.results);
    return tvShows;
  } catch (error) {
    throw new Error("Fetch is failed");
  }
}

export async function getMovieDetails(movieId) {
  const modifierFunctionMovieDetails = (item) => {
    return {
      adult: item.adult,
      backdropPath: item.backdrop_path,
      belongsToCollection: item.belongs_to_collection,
      budget: item.budget,
      genres: item.genres,
      homepage: item.homepage,
      id: item.id,
      imdbId: item.imdb_id,
      originCountry: item.origin_country,
      originalLanguage: item.original_language,
      originalTitle: item.original_title,
      overview: item.overview,
      popularity: item.popularity,
      posterPath: item.poster_path,
      productionCompanies: item.production_companies,
      productionCountries: item.production_countries,
      releaseDate: item.release_date,
      revenue: item.revenue,
      runtime: item.runtime,
      firstAirDate: item.first_air_date,
      spokenLanguages: item.spoken_languages,
      status: item.status,
      tagline: item.tagline,
      title: item.title,
      video: item.video,
      voteAverage: item.vote_average,
      voteCount: item.vote_count,
    };
  };
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      options
    );
    const data = await res.json();
    //return data;\
    const movieDetails = modifierFunctionMovieDetails(data);
    //console.log(data);
    return movieDetails;
  } catch (error) {
    throw new Error("Fetch is failed");
  }
}

export async function getCast(movieId) {
  const modifierFunctionCastAndCrew = (movies) =>
    movies.map((item) => {
      return {
        adult: item.adult,
        gender: item.gender,
        id: item.id,
        knownForDepartment: item.known_for_department,
        name: item.name,
        originalName: item.original_name,
        popularity: item.popularity,
        profilePath: item.profile_path,
        castId: item.cast_id,
        character: item.character,
        creditId: item.credit_id,
        order: item.order,
      };
    });
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      options
    );
    const data = await res.json();
    //return data;
    const movieDetails = modifierFunctionCastAndCrew(data.cast);
    return movieDetails;
  } catch (error) {
    throw new Error("Fetch is failed");
  }
}

export async function getCrew(movieId) {
  const modifierFunctionCrew = (movies) =>
    movies.map((item) => {
      return {
        adult: item.adult,
        creditId: item.credit_id,
        department: item.department,
        gender: item.gender,
        id: item.id,
        job: item.job,
        knownForDepartment: item.known_for_department,
        name: item.name,
        originalName: item.original_name,
        popularity: item.popularity,
        profilePath: item.profile_path,
      };
    });
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      options
    );
    const data = await res.json();
    //console.log(data);
    const movieDetails = modifierFunctionCrew(data.crew);
    return movieDetails;
  } catch (error) {
    throw new Error("Fetch is failed");
  }
}
