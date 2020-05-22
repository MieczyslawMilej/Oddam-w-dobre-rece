import React, { useCallback, useContext } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  getIn
} from "formik";
import { NavLink } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import {AuthContext } from "../Auth.js"
import app from "../base.js"

import Navigation from "./Navigation";
import decoration from "../assets/Decoration.svg";


function Login({history}) {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  const onSubmit = useCallback(
    async values => {
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const validate = values => {
    let errors = {};

    if (!values.email) {
      errors.email = "Pole nie może być puste";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
    }

    if (!values.password) {
      errors.password = "Pole nie może być puste";
    } else if (values.password.length < 6) {
      errors.password = "Hasło musi mieć conajmniej 6 znaków!";
    }

    return errors;
  };

  function getStyles(errors, fieldName, touched) {
    if (getIn(touched, fieldName) && (getIn(errors, fieldName))) {
      return {
        borderColor: "red"
      };
    }
  }

  const initialValues = {
    email: "",
    password: ""
  };

if (currentUser) {
return <Redirect to="/" />
}
  return (
    <section className="login">
      <div className="wrapper">
        <Navigation />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ errors, status, touched }) => (
            <Form className="form">
              <h1 className="heading">Zaloguj się</h1>
              <img
                className="footer-decoration"
                src={decoration}
                alt="decoration"
              />
              <div className="input-wrapper">
                <label htmlFor="email">
                  Email
                  <Field
                    style={getStyles(errors, "email", touched)}
                    name="email"
                    id="email"
                    type="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="invalid"
                  />
                </label>
                <label htmlFor="password">
                  Hasło
                  <Field
                    style={getStyles(errors, "password", touched)}
                    name="password"
                    id="password"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="invalid"
                  />
                </label>
              </div>
              <div className="btn-wrapper">
                <NavLink to="/register">
                  <button className="btn btn-form">Załóż konto</button>
                </NavLink>
                <button type="submit" className="btn btn-form active">
                  Zaloguj się
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default withRouter(Login)
