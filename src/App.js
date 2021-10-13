import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Team from './pages/Team';
import WhitePaper from './pages/WhitePaper';
import PageNotForm from './pages/PageNotForm';
import HeaderNav from "./components/HeaderNav";

import './App.scss';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/whitepaper" component={WhitePaper} />
            <Route component={PageNotForm} />

          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
