import './App.css';
import Landing from './components/Landing'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Article from './components/Article';
import Error from "./components/Error";
import { FilterProvider } from './components/filterContext';

const App =()=> {
  
  return (
    <Router>
      <FilterProvider >
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route  exact path="/article/:id" component={Article} />
        <Route path="*" component={Error} />
        </Switch>
      </FilterProvider>
    </Router>
  );
}

export default App;
