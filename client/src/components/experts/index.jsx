import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";
import "./styles.scss"
const ExpertsCommunity = () => {
    const [experts, setExperts] = useState([])
    const getExpertsData = async() => {
        let response = await axios.get("http://localhost:8080/expert")
        setExperts(response.data)
    }
    useEffect(() => {
    getExpertsData()
    }, [])
    
  return (
    <div id='experts'>
        <div className="experst">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
         {experts.map((element) => {
            return <SwiperSlide>
                <div className="experts-card">
                    <img src={element.imgUrl} alt="" />
                    <div className="info">
                        <h3 className='expName'>{element.name}</h3>
                        <p className='expdescription'>{element.description}</p>
                    </div>
                </div>
                </SwiperSlide>
         })}
        </Swiper>
        </div>
        
    </div>
  )
}

export default ExpertsCommunity