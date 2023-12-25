import React, {useEffect} from 'react'
import Hero from './hero/Hero'
import Header from '../common/heading/Header'
import Footer from '../common/footer/Footer'

const Home = props => {
  console.log('dasd')
  return (
    <>
    <Header/>
    <Hero/>
    <Footer/>
    </>
  )
}

// Home.propTypes = {}

export default Home