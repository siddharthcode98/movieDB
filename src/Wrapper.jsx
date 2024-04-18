import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";

function Wrapper() {
  return (
    <Routes>
      <Route path="/login" exact element={<LoginForm />} />
      <Route path="/" exact element={<HomePage />} />
    </Routes>
  );
}

export default Wrapper;
