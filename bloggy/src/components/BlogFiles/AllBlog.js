import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blog from './Blog'
import './blog.css'

const AllBlog = () => {
  const [allData, setAllData] = useState([])

 useEffect(()=>{
    axios.get('http://localhost:5001/blog')
    .then(res => setAllData(res.data))
    .catch(err => console.log(err))
 }, [])

  return (
    <section className="AllBlog-container">
      <h1>{`<Bloggy />`}</h1>
      {allData.map(data=>{
        return(
          <Blog Data={data} key={data.title}/>
        )
      })}
    </section>
  )
}

export default AllBlog
