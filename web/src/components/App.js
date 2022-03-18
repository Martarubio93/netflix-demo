import "../styles/core/Reset.scss";
import "../styles/layout/Main.scss";
import Header from "./Header";
import SignIn from "./SignIn";
import router from "../services/router";
import { useEffect, useState } from "react";
import apiUser from "../services/api";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";

function App() {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [searchEngine, setSearchEngine] = useState("");

  //Handle function to save value from inputs
  const handleSearchEngine = (data) => {
    if (data.key === "name") {
      setSearchEngine(data.value);
    } else if (data.key === "") {
      console.log("lalio");
    }
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
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
