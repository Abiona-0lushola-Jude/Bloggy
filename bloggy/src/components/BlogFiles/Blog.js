import React from 'react'
import {useNavigate} from 'react-router-dom'
// import img from '../../image.png'

const Blog = ({Data}) => {
  const navigate = useNavigate()


    function handleEdit(event){
      navigate(`bloggy/${event}`)
    }

  return (
    <div className='allData-container'>
      <div className="image-container">

      </div>
      <div className="Oneblog-container">
          <h2 className='title'>{Data.title}</h2>
          <p className='desc'>{Data.desc}</p>
        <div className="bttn">
          <button id='cancel' onClick={() => handleEdit(Data.title)}>Read More</button>
          <button id='delete'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Blog

