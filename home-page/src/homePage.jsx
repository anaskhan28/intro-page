import React from 'react'
import './homePage.css'


function homePage() {

  return (
    <section className="hero">
    <div className="content">
      <header>
        
        <span >BlockSpirit</span>
        <ul>
          <li className="li"><a href="">Home</a></li>
          <li className="li"><a href="">Market</a></li>
          <li className="li"><a href="">Learnings</a></li>
          <li className="li"><a href="">About us</a></li>
        </ul>
        
      </header>
      <div className='line'></div>
      <div className="hero-main">
        <div className="left">
          <span className='blur'> </span>
            <span>The one and only</span>
          <h1>Platform</h1>
          <span>That provides virtual future</span>
         
          <div className="btn">
            <a href=""><button className="link1">Get Started</button></a>
            <a href=""><button className="link2">Learn More</button></a>
          </div>
        </div>
        <img src="./src/assets/images/bg.svg" alt="" className="  bg-hero"></img>
      </div>
    </div>
  </section>

     
)
  }
export default homePage
