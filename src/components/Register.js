import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  getIn,
  FormikHelpers as FormikActions
} from "formik";
import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";
import decoration from "../assets/Decoration.svg";

const onSubmit = (values, { setStatus, resetForm }: FormikActions<Values>) => {
  // fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
  //   method: "POST",
  //   body: JSON.stringify(values),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .then(res => {
  //     if (res.status === 200) {
  //       setStatus({
  //         sent: true,
  //         msg: "Wiadomość została wysłana! Wkrótce się skontaktujemy."
  //       });
  //       setTimeout(() => {
  //         resetForm();
  //       }, 10000);
  //     }
  //   })
  //   .catch(err => {
  //     setStatus({
  //       sent: false,
  //       msg: `Error! ${err}. Coś poszło nie tak.`
  //     });
  //   });
};

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

  if (!values.password2) {
    errors.password2 = "Pole nie może być puste";
  } else if (values.password2.length < 6) {
    errors.password2 = "Hasło musi mieć conajmniej 6 znaków!";
  } else if (values.password !== values.password2) {
    errors.password2 = "Hasło musi być takie samo!";
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
  password: "",
  password2: ""
};

export default function Login() {
  return (
    <section className="register">
      <div className="wrapper">
        <Navigation />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ errors, status, touched }) => (
            <Form className="form">
              <h1 className="heading">Załóż konto</h1>
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
                <label htmlFor="password2">
                  Hasło
                  <Field
                    style={getStyles(errors, "password2", touched)}
                    name="password2"
                    id="password2"
                    type="password"
                  />
                  <ErrorMessage
                    name="password2"
                    component="p"
                    className="invalid"
                  />
                </label>
              </div>
              <div className="btn-wrapper">
                <NavLink to="/login">
                  <button className="btn btn-form">Zaloguj się</button>
                </NavLink>
                <button type="submit" className="btn btn-form active">
                  Załóż konto
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
