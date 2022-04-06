//Styles imports
import "../styles/core/Reset.scss";
import "../styles/layout/Main.scss";
//Components imports
import Header from './Header'
import SignIn from "./SignIn";
import SignUp from './SignUp';
import router from "../services/router";
import HomePage from "./HomePage";
import { useEffect, useState } from "react";
//Fetch imports
import apiUser from "../services/api";
import callToApi from "../services/fetch";
//functionals imports
import { Route, Switch } from "react-router-dom";
//LocalStorage


function App() {
  //Login error message
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  //SignUp error message
  const [signUpErrorMessage, setSignUpErrorMessage] =useState("");
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
  const sendInfoToApi = data => {
    // Limpiamos el error antes de enviar los datos al API
    setSignUpErrorMessage('');
    // Enviamos los datos al API
    apiUser.sendSingUpToApi(data).then(response => {
      if (response.success === true) {
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de signup al inicio de la página
        router.redirect('/');
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        setSignUpErrorMessage(response.errorMessage);
      }
    });
  };
  //Receiving films from API
  useEffect(() => {
    callToApi().then((response) => {
      console.log(response);
      //When we've received data from API, we keep it in state (filmsFromApi)
      setFilmsFromApi(response);
    });
    //empty array to call to the api just ONCE
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
          <Header/>
          <SignUp sendInfoToApi ={sendInfoToApi} signUpErrorMessage={signUpErrorMessage}/>
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
