import { useState } from 'react'
import './styles/App.css'

import Navbar from "./components/Navbar"
import HeroImage from "./components/HeroImage"
import LatestNews from './components/LatestNews'
import TopNews from './components/TopNews'

import { topNews } from "./assets/Data/topNews"

import retro from "./assets/images/image-retro-pcs.jpg"
import laptops from "./assets/images/image-top-laptops.jpg"
import gaming from "./assets/images/image-gaming-growth.jpg"

const pics = [retro, laptops, gaming]
export default function App() {
  
  console.log(topNews)
  const result = topNews.map((news, index) => {

    news.imageSrc = pics[index]
    return (
      <TopNews data={news} key={index} />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <main>
      <HeroImage />
      <h1 className="hero--text"><b>The Bright Future of Web 3.0?</b></h1>
      <div className="hero--des">
        <p>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
        </p>
        
        <button> Read more</button>
      </div>
      <LatestNews />
    {result}
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Dylan Heslop</a>.
      </div>
    </div>
  )
}