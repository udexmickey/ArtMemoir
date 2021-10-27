import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Team from './pages/Team';
import WhitePaper from './pages/WhitePaper';
import PageNotForm from './pages/PageNotForm';
import HeaderNav from "./components/HeaderNav";
import Blog from "./pages/Blog";
import './App.scss';
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
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
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={PageNotForm} />

          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
