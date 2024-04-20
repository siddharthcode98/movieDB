import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import TvShows from "./components/TvShows";

function Wrapper() {
  return (
    <main className="bg-main min-h-screen ">
      <Header />
      <Routes>
        <Route path="/login" exact element={<LoginForm />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/tv-shows" exact element={<TvShows />} />
      </Routes>
    </main>
  );
}

export default Wrapper;
