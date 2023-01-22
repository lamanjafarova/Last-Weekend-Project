import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";
import "./styles.scss"
import { Link } from 'react-router-dom';

const CaruselCourses = () => {
    const [coursesData, setCoursesData] = useState([])
    const getData = async() => {
        let response = await axios.get("http://localhost:8080/course")
        setCoursesData(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
    
  return (
    <div id='carusel'>
        <div className="carusel">
        <Swiper
          slidesPerView={3}
          spaceBetween={35}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
         {coursesData.map((element) => {
            return <SwiperSlide>
               <Link to={`/${element._id}`}>
               <div className="featuredCard">
                <img src={element.imgUrl} alt="" className='featuredImg'/>
                <div className="featuredInfo">
                    <p className='title'>{element.title}</p>
                    <h3 className='name'>{element.name}</h3>
                    <p className='title'>{element.description}</p>
                </div>
                <div className="rating">
                    <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half"></i>
                    <p className='p_txt'><span>(4.5)</span> based on 120 </p>
                    </div>
                    <p className='price'>{element.price}</p>
                </div>
                <button className='findBtn'>Find Out More</button>
               </div>
               
               </Link>
                
                </SwiperSlide>
         })}
        </Swiper>
        </div>

    </div>
  )
}

export default CaruselCourses