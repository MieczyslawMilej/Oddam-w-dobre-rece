import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  getIn,
  FormikHelpers as FormikActions
} from "formik";

import decoration from "../assets/Decoration.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";

const initialValues = {
  name: "",
  email: "",
  message: ""
};

const onSubmit = (values, { setStatus, resetForm }: FormikActions<Values>) => {
  fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (res.status === 200) {
        setStatus({
          sent: true,
          msg: "Wiadomość została wysłana! Wkrótce się skontaktujemy."
        });
        setTimeout(() => {
          resetForm();
        }, 10000);
      }
    })
    .catch(err => {
      setStatus({
        sent: false,
        msg: `Error! ${err}. Coś poszło nie tak.`
      });
    });
};

const validate = values => {
  let errors = {};

  if (!values.name) {
    errors.name = "Pole nie może być puste";
  } else if (values.name.split(" ").length >= 2) {
    errors.name = "Podane imię jest nieprawidłowe!";
  }

  if (!values.email) {
    errors.email = "Pole nie może być puste";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Podany email jest nieprawidłowy!";
  }

  if (!values.message) {
    errors.message = "Pole nie może być puste";
  } else if (values.message.length < 120) {
    errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
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

export default function Footer() {
  return (
    <section className="footer">
      <div className="wrapper">
        <div className="form-wrapper">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          >
            {({ errors, status, touched }) => (
              <Form className="form">
                <h1 className="heading">Skontaktuj się z nami</h1>
                <img
                  className="footer-decoration"
                  src={decoration}
                  alt="decoration"
                />
                {status && status.msg && (
                  <p
                    className={`alert ${
                      status.sent ? "alert-success" : "alert-error"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
                <div className="row">
                  <label htmlFor="name">
                    Wpisz swoje imię
                    <Field
                      style={getStyles(errors, "name", touched)}
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Krzysztof"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="invalid"
                    />
                  </label>
                  <label className="spacer" htmlFor="email">
                    Wpisz swój email
                    <Field
                      style={getStyles(errors, "email", touched)}
                      name="email"
                      id="email"
                      type="text"
                      placeholder="abc@xyz.pl"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="invalid"
                    />
                  </label>
                </div>
                <label htmlFor="message">
                  Wpisz swoją wiadomość
                  <Field
                    style={getStyles(errors, "message", touched)}
                    as="textarea"
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  ></Field>
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="invalid"
                  />
                </label>
                <button type="submit" className="btn btn-form">
                  Wyślij
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <p className="bottom-text">Copyright by Coderslab</p>
        <div className="footer-links">
          <a
            href="https://www.facebook.com/CodersLabSzkolaIT/"
            target="_blank"
            rel="noreferrer noopener "
          >
            <img className="icon-facebook" src={facebook} alt="decoration" />
          </a>
          <a
            href="https://www.instagram.com/coders.lab/?hl=en"
            target="_blank"
            rel="noreferrer noopener "
          >
            <img className="icon-instagram" src={instagram} alt="decoration" />
          </a>
        </div>
      </div>
    </section>
  );
}
