import React, {useState,useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, Tooltip, Toastr} from "@bigbinary/neetoui/v2"
import { Copy } from "@bigbinary/neeto-icons";
import SubNews from './Landing/SubNews'
import Container from './Container';
import { newsContext } from './newsContext';

const Article= () => {
    const [relatedNews, setRelatedNews]= useState([])
    const {news} = useContext(newsContext)
    const location = useLocation()
    const data= location.state
    const fullnews = news[data.category] // category news via newsContext
   
    const filterRelatedNews =  ()=> {
         setRelatedNews(() => fullnews.filter((news)=> news.url!== data.url))
     }
    useEffect(()=>{
        filterRelatedNews()
        window.scrollTo(0, 0);
    },[location])

    const handleClick = ()=>{
        const link = (data.readMoreUrl) ? data.readMoreUrl : 'The article has no readMoreUrl. Hence no link to be copied.'
        navigator.clipboard.writeText(link)       
    }
    return (
    <Container>
        <div className="flex justify-center mt-10 mb-5">
            <div className="flex flex-col  ">
                
                    <Typography style="h1" className="neeto-ui-text-gray-700 tracking-wide	mt-3 ">
                    {data.title} 
                    <Tooltip placement={"bottom-start"} content={"Copy link"}> 
                       <button> <Copy className="inline neeto-ui-text-gray-600 cursor-pointer" onClick={handleClick}/></button>
                    </Tooltip> 
                    </Typography> 
                
                <Typography style="h5" className="neeto-ui-text-gray-500 mt-3">
                {`${data.author} at ${data.time} on ${data.date}`} 
                </Typography> 
                <div className="flex justify-center my-8"><img src={data.img_src} alt=""/></div>  
                <div className="border-b-2 pb-10">
                    <Typography style="body2" weight="normal">
                        {data.content}
                    </Typography>
                    <Typography style="body2" weight="normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                     </Typography>
                     <Typography style="body2" weight="normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
                     </Typography>
                </div>
                <div className="flex flex-col items-center ">
                        <SubNews category={data.category} data={relatedNews.slice(1,5)}  />
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Article
