import React from 'react'
import IconOne from "../../images/icon1.svg"
import IconTwo from "../../images/icon2.svg"
import IconThree from "../../images/icon3.svg"
import "./index.scss"

const MainSectionCards = () => {
  return (
    <div className='container'>
        <div className="cards">
            <div className="card">
                <img src={IconOne} alt="" className='image_card'/>
                <div className="card_text">
                    <h3 className='h3_text_title'>60+ UX courses</h3>
                    <p className='p-text-card'>The automated process all your website tasks.</p>
                </div>
            </div>
            <div className="card">
                <img src={IconTwo} alt="" className='image_card'/>
                <div className="card_text">
                    <h3 className='h3_text_title'>Expert instructors</h3>
                    <p className='p-text-card'>The automated process all your website tasks.</p>
                </div>
            </div>
            <div className="card">
                <img src={IconThree} alt="" className='image_card'/>
                <div className="card_text">
                    <h3 className='h3_text_title'>Life time access</h3>
                    <p className='p-text-card'>The automated process all your website tasks.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSectionCards