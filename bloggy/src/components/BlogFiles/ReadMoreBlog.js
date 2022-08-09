import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReadMoreBlog = () => {
    const navigate = useNavigate()
    const params= useParams('blogId')
    const paramsValue = params.blogId


    const [blog, setBlog] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5001/oneBlog/${paramsValue}`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err))
    },[paramsValue])
    

  return (
    <div className='read-more'>
      {blog.map(data=>{
        return(
            <div className="blog-container" key={data.title}>
              <div className="readMore-img">

              </div>
              <div className="blog-content">
                <h1 className='readMore-title'>{data.title}</h1>
                <h4 className='desc'>{data.desc}</h4>
                <div className="btn">
                    <button onClick={()=> navigate(-1)}>Cancel</button>
                    <button onClick={()=> navigate(`edit`)}>Edit</button>
                </div>
                <p className='markdown'>{data.markdown}</p>
              </div>
                
            </div>
        )
      })}
    </div>
  )
}

export default ReadMoreBlog
