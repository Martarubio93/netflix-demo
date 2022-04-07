import { useState } from "react";
import "../styles/layout/SignUp.scss";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.currentTarget.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.currentTarget.value);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    // Send data to app and this to server
    props.sendInfoToApi({
      email: email,
      password: password,
    });
  };

  const renderErrorMessage = () => {
    if (props.signUpErrorMessage !== "") {
      return (
        <p className="errorSignUpMessage">
          Error :<span>{props.signUpErrorMessage}</span>
        </p>
      );
    }
  };
  return (
    <>
      <main>
        <fieldset className="fieldset">
          <h2 className="fieldset__title">Create a new account</h2>
          <form
            className="form"
            action="SignUp"
            method="POST"
            onSubmit={handleForm}
          >
            <div class="form__together">
              <div class="form__together--email">
                <div class="label_block">
                  <label class="form__label" for="name">
                    First Name <span class="span_contact">*</span>
                  </label>
                </div>
                <input
                  class="form__together--item"
                  id="name"
                  type="name"
                  placeholder="First name"
                  required
                />
              </div>
              <div class="form__together--surname">
                <div class="label_block">
                  <label class="form__label" for="surname">
                    Surname
                  </label>
                </div>
                <input
                  class="form__together--item"
                  id="surname"
                  type="text"
                  placeholder="surname"
                />
              </div>
            </div>
            <label class="form__label" for="email">
              Email<span class="span_contact"> *</span>
            </label>
            <input
              class="form__input"
              id="email"
              type="text"
              placeholder="email@hotmail..."
              value={email}
              onChange={handleEmail}
              required
            />

            <label class="form__label" for="email">
              Choose a password<span class="span_contact"> *</span>
            </label>
            <input
              class="form__input"
              id="password"
              type="password"
              placeholder="*******"
              value={password}
              onChange={handlePassword}
              required
            />
            {renderErrorMessage()}
            <div class="container-button">
              <input
                class="container-button__item"
                type="submit"
                value="create account"
              />
            </div>
          </form>
        </fieldset>
      </main>
    </>
  );
};

export default SignUp;
