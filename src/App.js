import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Team from './pages/Team';
import WhitePaper from './pages/WhitePaper';
import PageNotForm from './pages/PageNotForm';
import HeaderNav from './components/HeaderNav';
import Blog from './pages/Blog';
import './App.scss';
import Footer from './components/Footer';
import SendMail from './pages/Dashboard/SendMail';
import BlogPost from './pages/Dashboard/BlogPost';
import Announcement from './pages/Dashboard/Announcement';
import EditStore from './pages/Dashboard/EditStore';
import UploadStore from './pages/Dashboard/UploadStore';
import Dashboard from './pages/Dashboard';
import { Login } from './pages/Dashboard/Login';
function App() {
  return (
    <div className="App">
      <Router>
        
        <HeaderNav />
        <Switch>
          <Route exact path="/auth" component={Login}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/whitepaper" component={WhitePaper} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/sendmail" component={SendMail} />
          <Route exact path="/blogpost" component={BlogPost} />
          <Route exact path="/announcement" component={Announcement} />
          <Route exact path="/editstore" component={EditStore} />
          <Route exact path="/uploadstore" component={UploadStore} />
          <Route component={PageNotForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
