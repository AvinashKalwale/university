import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
const [playVideo ,setPlayVideo]=useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayVideo={setPlayVideo}/>
      <Title subTitle='Gallary ' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS ' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us ' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
    </div>
  )
}

export default App