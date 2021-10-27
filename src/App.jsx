import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
