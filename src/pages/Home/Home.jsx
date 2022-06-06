
import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className="home_space flex flex-center">
         <div className="inner_space">
         <p className="home_travel">
            so,you want to travel to
          </p>
          <p className="home_title">space</p>
          <p className="para">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
         </div>
         
      </div>
      <div className="home_explore flex flex-center">
           <div className="explore  flex flex-center">
                  Explore
           </div>
      </div>
    </div>
  )
}

export default Home