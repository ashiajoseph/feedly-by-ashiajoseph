import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Article from './components/Article';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container w-78 mx-auto">
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/article" component={Article} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
