import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Article from './components/Article';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/article" component={Article} />
      </Switch>
    </Router>
  );
}

export default App;
