import { useState } from "react";
import icon from "../images/logo.svg";
import "../styles/layout/SignUpForm.scss";

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] =  useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleEmail = ev => {
    setEmail(ev.currentTarget.value);
  }
  const handleEmailConfirmation = ev => {
    setConfirmEmail(ev.currentTarget.value)
  }
  const handlePassword = ev => {
    setPassword(ev.currentTarget.value)
  }
  const handlePasswordConfirmation = ev => {
    setConfirmPassword(ev.currentTarget.value)
  }

  const handleForm = ev => {
    ev.preventDefault();
    // Send data to app and this to server
    props.sendSingUpToApi({
      email: email,
      password: password
    });
  };
  return (
    <>
      <header className="headerSignUp">
        <img className="headerSignUp__icon" src={icon} alt="icon" />
      </header>
      <main>
        <fieldset className="fieldset">
          <h2 className="fieldset__title">Create a new account</h2>
          <form className="form" action="SignUp" method="POST" onSubmit={handleForm}>
            <div class="form__together">
              <div class="form__together--email">
                <div class="label_block">
                  <label class="form__label" for="name">
                    First Name <span class="span_contact">*</span>
                  </label>
                </div>
                <input
                  class="input__firstName"
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
                  class="input__surname"
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
              Confirm email address<span class="span_contact"> *</span>
            </label>
            <input
              class="form__input"
              id="email"
              type="text"
              placeholder="email@hotmail..."
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
            <label class="form__label" for="email">
              Confirm your password<span class="span_contact"> *</span>
            </label>
            <input
              class="form__input"
              id="password"
              type="password"
              placeholder="*******"
              required
            />

            <div class="container-button">
              <input
                class="container-button__item"
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </fieldset>
      </main>
    </>
  );
};

export default SignUp;
