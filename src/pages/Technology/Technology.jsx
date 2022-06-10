import React from 'react'
import './Technology.scss'
import { spaces } from '../../Data/SpaceData'
import { useState,useEffect } from 'react'
const Technology = () => {
  const [active , setActive] = useState(0)
  const [width , setWidth] = useState(window.innerWidth)
  const {name , img , description} = spaces[active]
  
  useEffect(()=>{
    window.addEventListener('resize',function(){
      if(this.window.innerWidth >900){
        if(width ===901) return;
        setWidth(901)
      }
      if(this.window.innerWidth <=900){
        if(width ===900) return;
        setWidth(900)
      }
    })
  },[])
  let ImgIndex = 1;
if(width >=901) {
  ImgIndex = 1
}else{
  ImgIndex = 0
}
  return (
    <div className="page technology">
        <p className="section_title">
          <span>03</span> Space Launch 101
        </p>
        <div className="space_main">
          <div className="space_info flex flex-center">
            <div className="space_info_inner">
              <div className="spaces">
                <div className={`space flex flex-center ${active===0? 'active':''}`} 
                 onClick={()=>setActive(0)}
                >
                  01
                </div>
                <div className={`space flex flex-center ${active===1? 'active':''}`}
                 onClick={()=>setActive(1)}>
                  02
                </div>
                <div className={`space flex flex-center ${active===2? 'active':''}`}
                 onClick={()=>setActive(2)}>
                  03
                </div>
              </div>
              <div className="info">
                 <p className="technology">The Technology ...</p>
                 <p className="space_name">{name}</p>
                 <p className="para">
                   {description}
                 </p>
              </div>
            </div>
          </div>
          <div className="space_img">
            <div className="space_img_div">
              <img src={img[ImgIndex]} alt="Space Image" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Technology