import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./Article";

import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
