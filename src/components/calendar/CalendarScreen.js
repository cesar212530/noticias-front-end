import React, { useEffect, useState } from 'react';
import Axios from 'axios'

import { Navbar } from '../ui/Navbar';
import CalendarModal from './CalendarModal';


export const CalendarScreen = () => {
     const [articles, setArticles] = useState([]);
     useEffect(() =>{
         const getArticles = async() =>{
             const res = await Axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=ba71a35bb7624ddd9a3baca361452a84');
             setArticles(res.data.articles);
             console.log(res);
         };
         getArticles();
     })

    return (
        <div>
            <Navbar />

            <h4 className="container">Noticias</h4>
            
            {articles.map(({title, url, description,urlToImage}) => (
                <CalendarModal title= {title} url= {url} description= {description} urlToImage= {urlToImage} />
            ))}

        </div>
    )
}
