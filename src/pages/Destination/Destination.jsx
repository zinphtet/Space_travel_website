import React from 'react'
import './Destination.scss'
import { satellites ,satDetail} from '../../Data/Destination'
import { useState } from 'react'
const Destination = () => {
  const [satName , setSatName] = useState('moon')
  const {name,text,img,travel,distance} = satDetail[satName];
  const handleClick = (e)=>{
      setSatName(e.target.textContent)
  }
  return (
    <div className='destination page'>
      <p className="section_title">
        <span>01</span>Pick your destination
      </p>
      <div className="main">
       <div className="img_div flex flex-center">
           <div className='img'>
            <img src={img} alt="" />
           </div>
       </div>
       <div className="sat_info flex flex-center">
         <div className="sat_info_inner">
           <ul className='sat_list'>
             {
               satellites.map((sat)=><li  key={sat} className={`sat_title_name ${satName === sat ? 'active':''}`} onClick={handleClick}>{sat}</li>)
             }
           </ul>
           <p className="sat_name">{name}</p>
           <p className="sat_info_text para ">
             {text}
           </p>
           <div className="line"></div>
           <div className="others_info">
              <div className="distance_info">
                  <p className='info_title'>Avg. Distance</p>
                  <p className='info_num'>{distance}</p>
              </div>
              <div className="days_info">
                  <p className='info_title'>Est. Travel Time</p>
                  <p className='info_num'>{travel}</p>
              </div>
           </div>
           </div>
       </div>
      </div>
    </div>
  )
}

export default Destination