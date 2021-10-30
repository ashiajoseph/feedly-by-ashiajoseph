import React,{ useState, useEffect,createContext, useContext, useRef} from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from './components/Landing'
import Article from './components/Article';
import Error from "./components/Error";
import { filterContext} from './components/filterContext'
import axios from 'axios'
export const newsContext = createContext({})

const Base = () => {
  const {categoryCheckbox, archive, categoryCount,getCategoryCount}= useContext(filterContext)
  const [loading, setLoading] = useState(true)
  const [news, setNews]= useState({})  

  const fetchNews= async () => {
    const categories= Object.keys(categoryCheckbox.current)
    try{
      let res= await categories.reduce( async (prevPromise, category)=>{
        const acc= await prevPromise
        const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
        const resObj= await response.data
        const data=  resObj.data
        acc[category]= data
        return {...acc}
      },Promise.resolve({}))
    await setNews(res)
    await setLoading(false) }       
    catch(error)
    { console.log(error)}
  }   
  
  useEffect(()=> {
    fetchNews() 
  },[])

  if (loading)
  return <h3> Loading ...</h3>
  
  return (
        <>
          <Router>
            <newsContext.Provider value={news}> 
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route  exact path="/article/:id" component={Article} />
                  <Route path="*" component={Error} />
                </Switch>
            </newsContext.Provider>
          </Router>  
        </>
    )
}

export default Base
