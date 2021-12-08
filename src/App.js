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
import { Login } from './pages/Login';
import BlogAnnouncement from './pages/Blog/BlogAnnouncement';
import Blogs from './pages/Blog/Blogs';
import Test from './pages/Test';
function App() {
  return (
    <div className="App">
      <Router>
        
        <HeaderNav />
        <Switch>
          <Route exact="true" path="/auth" component={Login}/>
          <Route exact="true" path="/" component={Home} />
          <Route exact="true" path="/ " component={Home} />
          <Route exact="true" path="/partners" component={Partners} />
          <Route exact="true" path="/contact" component={Contact} />
          <Route exact="true" path="/team" component={Team} />
          <Route exact="true" path="/whitepaper" component={WhitePaper} />
          <Route exact="true" path="/blog" component={Blog} />
          <Route exact="true" path="/blogs" component={Blogs} />
          <Route exact="true" path="/blog/:id" component={BlogAnnouncement} />
          <Route exact="true" path="/dashboard" component={Dashboard} />
          <Route exact="true" path="/sendmail" component={SendMail} />
          <Route exact="true" path="/blogpost" component={BlogPost} />
          <Route exact="true" path="/announcement" component={Announcement} />
          <Route exact="true" path="/editstore" component={EditStore} />
          <Route exact="true" path="/uploadstore" component={UploadStore} />
          <Route exact="true" path="/test" component={Test} />
          <Route component={PageNotForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
