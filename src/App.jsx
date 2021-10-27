import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./About";
import Home from "./Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
