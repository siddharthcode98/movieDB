import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/Movies/HomePage";

import TvShows from "./components/TvShows/TvShows";
import MovieDetailsPage from "./components/MovieDetails/MovieDetailsPage";
import Header from "./components/Header";

function Wrapper() {
  return (
    <>
      <main className="bg-main min-h-screen ">
        <Header />
        <Routes>
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/tv-shows" exact element={<TvShows />} />
          <Route path="/movies/:id" exact element={<MovieDetailsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default Wrapper;
