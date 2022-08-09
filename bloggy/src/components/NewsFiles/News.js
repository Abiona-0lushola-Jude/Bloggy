import React, { useEffect, useState } from 'react'
import './news.css'
import axios from 'axios'
import OneNews from './OneNews'



const News = () => {
  const [news, setNews] = useState([])
    axios.get('http://localhost:5001/news')
    .then(res => setNews(res.data))
    .catch(err => console.log(err))

  return (
    <div className='news-container'>
      {news.map(data=> {
        return(
          <OneNews news={data} key={data} />
        )
      })}
    </div>
  )
}

export default News
