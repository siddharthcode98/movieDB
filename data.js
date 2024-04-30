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
        mediaType: "tv-shows",
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
      mediaType: "movies",
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

export async function getCast(movieId, category) {
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
      `https://api.themoviedb.org/3/${category}/${movieId}/credits`,
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

export async function getTvshowsDetails(seriesId) {
  const modifiedFunctionTvShowsDetails = (data) => {
    return {
      adult: data.adult,
      backdropPath: data.backdrop_path,
      createdBy: data.created_by,
      episodesRunTime: data.episode_run_time,
      firstAirData: data.first_air_date,
      genres: data.genres,
      homepage: data.homepage,
      id: data.id,
      InProduction: data.in_production,
      languages: data.languages,
      lastAirDate: data.last_air_date,
      lastEpisodeToAir: data.last_episode_to_air,
      name: data.name,
      networks: data.networks,
      nextEpisodeToAir: data.next_episode_to_air,
      numberOfEpisodes: data.number_of_episodes,
      numberOfSeasons: data.number_of_seasons,
      originCountry: data.origin_country,
      originalLanguage: data.original_language,
      overview: data.overview,
      popularity: data.popularity,
      posterPath: data.poster_path,
      productionCompanies: data.production_companies,
      productionCountries: data.production_countries,
      seasons: data.seasons,
      spokenLanguages: data.spoken_languages,
      status: data.status,
      type: data.type,
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      tagline: data.tagline,
      mediaType: "tv-shows",
    };
  };
  const url = `https://api.themoviedb.org/3/tv/${seriesId}`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    const modifiedTvShowDetails = modifiedFunctionTvShowsDetails(data);
    return modifiedTvShowDetails;
  } catch (error) {
    throw new Error("Fetch has Failed");
  }
}

export async function getWatchProviders(seriesId) {
  const url = `https://api.themoviedb.org/3/tv/${seriesId}/watch/providers`;
  const modifierFunctionProvider = (flatrateList) =>
    flatrateList.map((item) => {
      return {
        displayPriority: item.display_priority,
        logoPath: item.logo_path,
        providerId: item.provider_id,
        providerName: item.provider_name,
      };
    });
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    //console.log(data.results["US"].flatrate);
    if (data.results["IN"] !== undefined) {
      const providers = modifierFunctionProvider(data.results["IN"].flatrate);
      return providers;
    }
  } catch (error) {
    throw new Error("Fetch is failed");
  }
}

export async function getUserSearchResults(search) {
  const url = `https://api.themoviedb.org/3/search/multi?query=${search}`;
  const modifiedFunctionSearchData = (searchList) =>
    searchList.map((item) => {
      return {
        id: item.id,
        posterPath: item.poster_path,
        mediaType: item.media_type,
        name: item.name,
        title: item.title,
        voteAverage: item.vote_average,
      };
    });

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    const searchResult = modifiedFunctionSearchData(data.results);
    //console.log(data);
    return searchResult;
  } catch (error) {
    throw new Error("Fetch has Failed");
  }
}
