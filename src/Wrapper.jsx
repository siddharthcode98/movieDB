import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import TvShows from "./components/TvShows";
import MovieDetailsPage from "./components/MovieDetailsPage";

function Wrapper() {
  return (
    <>
      <Header />
      <main className="bg-main min-h-screen  ">
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
