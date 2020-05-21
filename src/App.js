import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import { AuthProvider } from "./Auth.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/wylogowano" component={Logout} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
