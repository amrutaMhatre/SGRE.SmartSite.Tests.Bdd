import React, { FC, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
// const HomePage = lazy(() => import("../pages/home"));
// const AboutPage = lazy(() => import("../pages/about"));
// const ContactPage = lazy(() => import("../pages/contact"));

const AppRoutes: FC = (props) => {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={TodoListPage} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};
export default AppRoutes;
