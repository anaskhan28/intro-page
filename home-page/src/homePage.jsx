import { useState } from 'react'
import './homePage.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section class="hero">
    <div class="content">
      <header>
        
        <span >BlockSpirit</span>
        <ul>
          <li class="li"><a href="">Home</a></li>
          <li class="li"><a href="">Market</a></li>
          <li class="li"><a href="">Learnings</a></li>
          <li class="li"><a href="">About us</a></li>
        </ul>
      </header>
      <div class="hero-main">
        <div class="left">
          <span>The one and only</span>
          <h1>Platform</h1>
          <span>That provides virtual future</span>
          <div class="btn">
            <a href=""><button class="link1">Get Started</button></a>
            <a href=""><button class="link2">Learn More</button></a>
          </div>
        </div>
        <img src="./src/assets/images/bg.svg" alt="" class="bg-hero"></img>
      </div>
    </div>
  </section>

     
)
  }
export default App
