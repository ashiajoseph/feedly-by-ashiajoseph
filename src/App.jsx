import './App.css';
import Base from './Base';
import { FilterProvider } from './components/filterContext';

const App =()=> {
  
  return (
    <>
      <FilterProvider >
        <Base />
      </FilterProvider>
    </>
  );
}

export default App;
