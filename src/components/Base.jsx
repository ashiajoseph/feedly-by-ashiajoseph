import React,{ useState, useEffect, useContext} from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from './Landing'
import Article from './Article';
import Error from "./Error";
import { filterContext} from './filterContext'
import { newsContext } from './newsContext';
import axios from 'axios'

const Base = () => {
  const {categoryCheckbox}= useContext(filterContext)
  const {setNews}= useContext(newsContext)
  const [loading, setLoading] = useState(true)
  
  const fetchNews= async () => {
    const categories= Object.keys(categoryCheckbox.current)
    try{
      let res= await categories.reduce( async (prevPromise, category)=>{
        const acc= await prevPromise
        const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
        const data= await response.data.data
        acc[category]= data
        return {...acc}
      },Promise.resolve({}))
    await setNews(res);
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
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route  exact path="/article/:id" component={Article} />
                  <Route path="*" component={Error} />
                </Switch>
          </Router>  
        </>
    )
}

export default Base
