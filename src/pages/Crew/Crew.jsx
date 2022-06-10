import React from 'react'
import './Crew.scss'
import { crews } from '../../Data/CrewData'
import { useState } from 'react'
const Crew = () => {
  const [selectIndex , setSelectIndex] = useState(0)
  const {img,name,bio,role} = crews[selectIndex]
  return (
   <div className='crew page'>
       <p className="section_title">
         <span>02</span> meet your crew
       </p>
       <div className="crew_main">
         <div className="crew_info flex flex-center">
           <div className="crew_info_inner">
             <div className="info">
                <p className="role">{role}</p>
                 <p className="name">{name}</p>
                 <p className="para bio">{bio}</p>
             </div>
          
           <div className="slide">
             <div className={`slide_item ${selectIndex===0 ? 'active':''}` } onClick={()=>setSelectIndex(0)}></div>
             <div className={`slide_item ${selectIndex===1 ? 'active':''}` } onClick={()=>setSelectIndex(1)}></div>
             <div className={`slide_item ${selectIndex===2 ? 'active':''}` } onClick={()=>setSelectIndex(2)}></div>
             <div className={`slide_item ${selectIndex===3 ? 'active':''}` } onClick={()=>setSelectIndex(3)}></div>
           </div>
           </div>
         </div>
         <div className="crew_img flex flex-center">
           <div className="crew_img_div">
             <img src={img} alt="crew Image" />
           </div>
         </div>
       </div>
   </div>
  )
}

export default Crew