import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Article from './components/Article';
import Error from "./components/Error"
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container w-78 mx-auto">
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route  exact path="/article/:id" component={Article} />
        <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
