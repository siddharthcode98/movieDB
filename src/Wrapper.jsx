import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function Wrapper() {
  return (
    <main className="bg-slate-700 min-h-screen">
      <Header />
      <Routes>
        <Route path="/login" exact element={<LoginForm />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default Wrapper;
