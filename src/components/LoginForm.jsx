import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import loginImage from "../assets/loginImage.webp";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [activeTab, handleActiveTab] = useState("REGISTER");

  const [password, setPasswword] = useState("");
  const [isError, showError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigation = useNavigate();

  var firebaseConfig = {
    apiKey: "AIzaSyB_yp6ZSkaIctJj3B4YeDnJYiJE8Z7eSLQ",
    authDomain: "moviedatabaseapp-2fe5e.firebaseapp.com",
    projectId: "moviedatabaseapp-2fe5e",
    storageBucket: "moviedatabaseapp-2fe5e.appspot.com",
    messagingSenderId: "72430301858",
    appId: "1:72430301858:web:437edf66bdf70d7f4fddfb",
    measurementId: "G-K79QMYBJSE",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const successfullLogin = (token) => {
    Cookies.set("jwtToken", token);
    navigation("/");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        showError((prevState) => !prevState.isError);
        setErrorMsg(error.message);
      });
  };

  const handleNewUser = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //console.log(user);
      //console.log(user.uid);

      successfullLogin(user.uid);
    } catch (error) {
      //console.log(error);
      showError((prevState) => !prevState.isError);
      setErrorMsg(error.message);
    }
  };

  const handleUser = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      // console.log(user);
      // console.log(user.uid);

      successfullLogin(user.uid);
    } catch (error) {
      //console.log(error);
      showError((prevState) => !prevState.isError);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1 bg-nav w-[320px] md:w-[640px] lg:w-[768px] xl:w-[1024px]  text-white">
        <img
          src={loginImage}
          alt="login Image"
          className="w-full  md:rounded-tr-[80px] md:rounded-br-[80px] md:rounded-bl-none rounded-bl-[60px] rounded-br-[60px]"
        />
        <div>
          <div className="h-full p-4 flex flex-col">
            <div className="grid grid-cols-2 mb-3">
              <button
                value="REGISTER"
                onClick={() => handleActiveTab("REGISTER")}
                className={
                  activeTab === "REGISTER"
                    ? "border-b-2 border-color1 pb-2"
                    : "border-none"
                }
              >
                Register
              </button>
              <button
                value="LOGIN"
                onClick={() => handleActiveTab("LOGIN")}
                className={
                  activeTab === "LOGIN"
                    ? "border-b-2 border-color1 pb-2"
                    : "border-none "
                }
              >
                Login
              </button>
            </div>

            <p className="font-bold text-2xl text-center">
              {activeTab === "REGISTER" ? "Create Account!" : "Welcome,User!"}
            </p>
            <form className="flex flex-col p-5 gap-4 flex-grow">
              <label htmlFor="EMAIL">Enter Email Address</label>
              <input
                type="email"
                id="EMAIL"
                className="outline-none md:p-2 p-1 rounded-md text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="PASSWORD">Enter Password</label>
              <input
                type="password"
                id="PASSWORD"
                className="outline-none md:p-2 p-1 rounded-md text-black"
                value={password}
                onChange={(e) => setPasswword(e.target.value)}
              />
              {activeTab === "LOGIN" && (
                <div className="flex items-center gap-3">
                  <h2>Forgot Password</h2>
                  <button
                    className="text-color1 underline "
                    type="submit"
                    onClick={handleForgotPassword}
                  >
                    click here&rarr;
                  </button>
                </div>
              )}
              {activeTab === "REGISTER" ? (
                <button
                  type="submit"
                  className=" mt-auto mb-0 bg-color1 md:p-2 p-1 rounded-md"
                  value="NEWUSER"
                  onClick={handleNewUser}
                >
                  Signup
                </button>
              ) : (
                <button
                  type="submit"
                  className=" mt-auto mb-0 bg-color1 md:p-2 p-1 rounded-md"
                  value="LOGIN"
                  onClick={handleUser}
                >
                  Login
                </button>
              )}

              {isError && <p>{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
