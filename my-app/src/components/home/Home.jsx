import React from 'react'
import Hero from './hero/Hero'
import Header from '../common/heading/Header'
const Home = props => {
  return (
    <>
    <Header/>
    <Hero/>
    </>
  )
}

Home.propTypes = {}

export default Home