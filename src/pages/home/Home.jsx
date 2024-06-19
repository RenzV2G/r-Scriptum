import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import "./home.scss"


const Home = () => {
  return (
    <section className="home section grid">

      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">

        <div className="home__data">

          <h1 className="home__title">
            <span>I'm Renz Vitug.</span> 
            
          </h1>

          <h1 className="title__animation">

          <TypeAnimation className='type'
              sequence={[' Front-End Developer', 2000, ' Graphic Designer', 2000]}

              repeat={Infinity} 
              
              speed={50}
            />

          </h1>

          
          <p className="home__description">My thoughts mainly stray into the fields of innovative problem-solving and creative thinking. I am deeply inspired by quirky concepts and challenges to the current quo. 
            Learning from my experience and true admiration of design, I see creativity as a potent instrument for change as much as a talent. 
            It enables me to see options that are out of the usual and combines excellent functionality with aesthetic ideals.</p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'>
              <FaArrowRight></FaArrowRight>
            </span>
          </Link>



        </div>

      </div>

      <div className="color__block"></div>

    </section>
  )
}

export default Home
