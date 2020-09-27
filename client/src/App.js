import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
        <Route exact path={["/", "/about"]} component={About}>
          </Route>
          <Route exact path={["/portfolio"]} component={Portfolio}>
            {/* <Projects /> */}
          </Route>
          <Route exact path={["/contact"]} component={Contact}>
            {/* <Form /> */}
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
