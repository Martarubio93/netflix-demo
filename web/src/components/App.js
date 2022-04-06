//Styles imports
import "../styles/core/Reset.scss";
import "../styles/layout/Main.scss";
//Components imports
import Header from "./Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import FilmDetail from "./FilmDetail";
import { useEffect, useState } from "react";
//Fetch imports
import apiUser from "../services/api";
import callToApi from "../services/fetch";
//functionals imports
import { Route, Switch, useRouteMatch } from "react-router-dom";
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

  //Send Sign Up to API
  const sendInfoToApi = (data) => {
    // Clear error
    setSignUpErrorMessage("");
    // send data to API
    apiUser.sendSingUpToApi(data).then((response) => {
      if (response.success === true) {
        // if data is correct redirect to home
        router.redirect("/login");
      } else {
        // if data is not correct we saved the error in state to render it later
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };
  //Receiving films from API
  useEffect(() => {
    callToApi().then((response) => {
      //When we've received data from API, we keep it in state (filmsFromApi)
      setFilmsFromApi(response);
    });
    //empty array to call to the api just ONCE
  }, []);

  const userData = useRouteMatch(`/film/:id`);

  const getRoute = () => {
    if (userData) {
      const routeId = userData.params.id;
      const findId = filmsFromApi.find((film) => {
        return film.id === routeId;
      });
      console.log(findId);
      return findId;
    }
  };

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
        
        <Route exact path="/film/:id">
          <section className="detailContainer">
            <FilmDetail getRoute={getRoute()} />
          </section>
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
