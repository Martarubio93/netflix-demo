//Styles imports
import "../styles/core/Reset.scss";
import "../styles/layout/Main.scss";
//Components imports
import Header from "./Header";
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
  const sendSignUpToApi = data => {
    // We've to clear the errorMessage
    setSignUpErrorMessage('');
    //Send data to the API 
    apiUser.sendSignUpToApi(data).then(response => {
      //if data is correct redirect to main page
      if (response.success === true){
        router.redirect('/')
       // if data is not correct error Message
      }else {
        setSignUpErrorMessage(response.errorMessage)
      }
    })

  }
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
          <SignUp sendSignUpToApi={sendSignUpToApi}/>
        </Route>
        <Route>
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
