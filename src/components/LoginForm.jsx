import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

function LoginForm() {
  const [email, setEmail] = useState("");

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

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      console.log(user.uid);

      successfullLogin(user.uid);
    } catch (error) {
      showError((prevState) => !prevState.isError);
      setErrorMsg(error.message);
    }
  };

  const successfullLogin = (token) => {
    Cookies.set("jwtToken", token);
    navigation("/");
  };
  return (
    <div className="min">
      <p className="font-bold">sign-in form</p>
      <form
        onSubmit={(e) => onSubmitForm(e)}
        className="flex flex-col bg-gray-500 p-2 gap-7"
      >
        <label htmlFor="EMAIL">Enter Email Address</label>
        <input
          type="email"
          id="EMAIL"
          className="border-gray-600 border-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="PASSWORD">Enter Password</label>
        <input
          type="password"
          id="PASSWORD"
          className="border-gray-600 border-2"
          value={password}
          onChange={(e) => setPasswword(e.target.value)}
        />

        <button value="submit" className="  bg-orange-500">
          Register or Login
        </button>
        {isError && <p>{errorMsg}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
