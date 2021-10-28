import './App.css';
import Landing from './components/Landing'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Article from './components/Article';
import Error from "./components/Error";
import { CategoryProvider } from './components/categoryContext';
const App =()=> {
  //const [filter, setFilter]= useState(true)
  return (
    <Router>
      <CategoryProvider >
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route  exact path="/article/:id" component={Article} />
        <Route path="*" component={Error} />
        </Switch>
      </CategoryProvider>
    </Router>
  );
}

export default App;
