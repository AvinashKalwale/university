import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallary ' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS ' title='What Student Says'/>
      <Testimonials/>
      </div>
    </div>
  )
}

export default App