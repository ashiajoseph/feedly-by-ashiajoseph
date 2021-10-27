import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
