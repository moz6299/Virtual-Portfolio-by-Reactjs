import React from 'react'
import './MyWork.css'
import phot from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id="mywork" className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={phot} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return (
                    <div key={index} className="mywork-format">
                        <img src={work.w_img} alt="" />
                    </div>
                )
            })}

        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
