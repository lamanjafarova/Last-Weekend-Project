import React from 'react'
import MainSectionCards from '../../components/cards'
import CaruselCourses from '../../components/carusel'
import ExpertsCommunity from '../../components/experts'
import ExploreTopSubject from '../../components/top-subject'
import MainImage from "../../images/logo.webp"
import "./index.scss"
const HomePage = () => {
  return (
    <div id='home-page'>
        <img src={MainImage} alt="" className='home-img' />
        <div className="container">
            <div className="text">
                <h1 className='h1_text'>Online learning <br /> platform</h1>
                <p className='p_text'>Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
              <button className='join_btn'>Join For Free</button>
            </div>
            <MainSectionCards />
            <div className="our-featured-courses">
              <h2>Our Featured Courses</h2>
              <CaruselCourses />
            </div>
            <div className="exploreTopSbj">
              <h2>Explore top subjects</h2>
              <ExploreTopSubject />
            </div>
            <div className="communityExperts">
              <h2>Community experts</h2>
              <ExpertsCommunity />
            </div>
        </div>
    </div>
  )
}

export default HomePage