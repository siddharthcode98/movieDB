import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/Movies/HomePage";

import TvShows from "./components/TvShows/TvShows";
import MovieDetailsPage from "./components/MovieDetails/MovieDetailsPage";

import TvShowsDetails from "./components/TvShows/TvShowsDetails";
import SearchedData from "./components/SearchedData";
import { SearchProvider } from "./context";

function Wrapper() {
  return (
    <SearchProvider>
      <main className="bg-main min-h-screen inline-block w-full">
        <Routes>
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/tv-shows" exact element={<TvShows />} />
          <Route path="/movies/:id" exact element={<MovieDetailsPage />} />
          <Route path="/tv-shows/:id" exact element={<TvShowsDetails />} />
          <Route path="/search" exact element={<SearchedData />} />
        </Routes>
      </main>
    </SearchProvider>
  );
}

export default Wrapper;
