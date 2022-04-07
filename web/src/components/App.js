//Styles imports
import "../styles/core/Reset.scss";
import "../styles/layout/Main.scss";
//Components imports
import Header from "./Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
//functionals imports
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
//Services
import apiUser from "../services/api";
import callToApi from "../services/fetch";
import router from "../services/router";

function App() {
  //Login error message
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  //SignUp error message
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  //Search-engine filter
  const [searchEngine, setSearchEngine] = useState("");
  //Films from API
  const [filmsFromApi, setFilmsFromApi] = useState([]);

  //Handle function to save value from inputs
  const handleSearchEngine = (data) => {
    if (data.key === "name") {
      setSearchEngine(data.value);
    }
  };

  //CONNECTIONS WITH SERVERS
  //Send email and password to Server


  //Send Sign Up to API
  const sendInfoToApi = (data) => {
    setSignUpErrorMessage("");
    // send data
    apiUser.sendSingUpToApi(data).then((response) => {
      if (response.success === true) {
        router.redirect("/");
      } else {
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };

  const sendLoginToApi = (loginData) => {
    // We've to clear the errorMessage
    setLoginErrorMessage("");
    // send data to the API
    apiUser.sendLoginToApi(loginData).then((response) => {
      if (response.success === true) {
        //If the user introduces the correct data we redirect to the home page
        router.redirect("/homePage");
      } else {
        //If the user introduces incorrect data we saved the error from the Api and render it in the web
        setLoginErrorMessage(response.errorMessage);
      }
    });
  };
  //Receiving films from API
  useEffect(() => {
    callToApi().then((response) => {
      //When we've received data from API, we keep it in state (filmsFromApi)
      setFilmsFromApi(response);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="imageBackground">
            <Header />
            <SignIn
              sendLoginToApi={sendLoginToApi}
              loginErrorMessage={loginErrorMessage}
            />
          </div>
        </Route>
        <Route exact path="/HomePage">
          <HomePage
            searchEngine={searchEngine}
            handleSearchEngine={handleSearchEngine}
            filmsFromApi={filmsFromApi}
          />
        </Route>
        <Route exact path="/SingUp">
          <div className="imageBackground">
            <Header />
            <SignUp
              sendInfoToApi={sendInfoToApi}
              signUpErrorMessage={signUpErrorMessage}
            />
          </div>
        </Route>
        <Route exact path="/HomePage">
          <HomePage
            searchEngine={searchEngine}
            handleSearchEngine={handleSearchEngine}
            filmsFromApi={filmsFromApi}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
