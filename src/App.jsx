import { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Article from "./pages/Article";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// App wrapper/Router logic
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <Article />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
