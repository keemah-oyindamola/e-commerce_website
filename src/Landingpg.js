import React from 'react'
import './Landingpg.css'
import firstimg from './firstimg.jpg'
import Navbar from './Navbar'
const Landingpg = () => {
  return (
    <>
    <Navbar/>
      <div className='section'>
        <div className='first-section'>
          <div className='trendy'>
            <h1>
              Trend<span className='diffcolor'>y</span><br />
              Thread<span className='diffcolor'>s</span>
            </h1>
            <div className='decorator'>
              <span className='diamond right'></span>
              <span className='line'></span>
              <span className='diamond left'></span>
            </div>
            <div className='subtext'>
              <span>Trendy Threads Is All About Keeping Your Wardrobe Fresh And Stylish <br /> With The Latest Fashion. Our Collections Are Carefully Curated To <br /> Reflect Current Trends, Making It Easy For You To Find Peices That <br /> Elevate Your Looks Effortlessly</span>
            </div>
            <div className='explorebtn'>
              <button>Explore More</button>
            </div>
          </div>
          <div className='first-section-subdiv'>
            <img src={firstimg} alt="" />
          </div>
          <div className="curve-bg"></div>
        </div>
        <div className="second-section">
          <div>
            <h1>About the store</h1>



          </div>
        </div>

      </div>
    </>


  )
}

export default Landingpg