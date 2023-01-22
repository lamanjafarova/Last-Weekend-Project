import React from 'react'
import Image1 from "../../images/topic1.png.webp"
import Image2 from "../../images/topic2.png.webp"
import Image3 from "../../images/topic3.png.webp"
import Image4 from "../../images/topic4.png.webp"
import Image5 from "../../images/topic5.png.webp"
import Image6 from "../../images/topic6.png.webp"
import Image7 from "../../images/topic7.png.webp"
import Image8 from "../../images/topic8.png.webp"
import "./index.scss"
const ExploreTopSubject = () => {
  return (
    <div id='explore'>
        <div className="container">
            <div className="cards-explore">
                <div className="images">
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                    <img src={Image3} alt="" />
                    <img src={Image4} alt="" />
                    <img src={Image5} alt="" />
                    <img src={Image6} alt="" />
                    <img src={Image7} alt="" />
                    <img src={Image8} alt="" />
                </div>
                <button className='subjectsBtn'>View More Subjects</button>
            </div>
        </div>


    </div>
  )
}

export default ExploreTopSubject