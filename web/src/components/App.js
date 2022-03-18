import "../styles/core/Reset.scss";
import "../styles/layout/Main.scss";
import Header from "./Header";
import SignIn from "./SignIn";
import router from "../services/router";
import { useEffect, useState } from "react";
import apiUser from "../services/api";

function App() {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const sendLoginToApi = (loginData) => {
    // We've to clear the errorMessage
    setLoginErrorMessage("");
    // send data to the API
    apiUser.sendLoginToApi(loginData).then((response) => {
      if (response.success === true) {
        //If the user introduces the correct data we redirect to the home page
        router.redirect("/");
      } else {
        //If the user introduces incorrect data we saved the error from the Api and render it in the web
        setLoginErrorMessage(response.errorMessage);
      }
    });
  };

  return (
    <div className="App">
      <div className="imageBackground">
        <Header />
        <SignIn
          sendLoginToApi={sendLoginToApi}
          loginErrorMessage={loginErrorMessage}
        />
      </div>
    </div>
  );
}

export default App;
