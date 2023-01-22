import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"

const Deatils = () => {
  const [details, setDetails] = useState([])
  const { _id } = useParams()
  let getDetailsData = async() => {
    let response = await axios.get(`http://localhost:8080/course/${_id}`)
    setDetails(response.data)
  }
  useEffect(() => {
    getDetailsData()
  }, [])
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/course/${_id}`)
    navigate("/")
  }
  console.log(details);
  return (
    <div id="Details">
    <button className="goBack" onClick={() => navigate(-1)}> Go Back</button>
    <button className="deleteBtn" onClick={() => handleDelete(details._id)}>Delete Course</button>
    <div className="container">
      <div className="detail">
        <div className="info">
          <p className="coursesName">{details.name}</p>
          <p className="desc">{details.description}</p>
          <spam className="detailsPrice">Price: {details.price}</spam>
        </div>
        <img src={details.imgUrl} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Deatils