import './App.css';
import Base from './components/Base';
import { FilterProvider } from './components/filterContext';
import { NewsProvider } from './components/newsContext';
const App =()=> {
  
  return (
    <>
      <FilterProvider >
        <NewsProvider >
          <Base />
        </NewsProvider>
      </FilterProvider>
    </>
  );
}

export default App;
