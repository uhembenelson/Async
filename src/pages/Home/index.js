import React from 'react';
import About from './Blocks/About';
import Download from './Blocks/Download';
import Faq from './Blocks/Faq';
import Features from './Blocks/Features';
import Footer from './Blocks/Footer';
import HeroSection from './Blocks/HeroSection';
import Navigation from './Blocks/Navigation';
import './styles.css'

const Home = () => {
  return (
    <>
    <Navigation />
    <HeroSection />
    <Features />
    <About />
    <Download />
    <Faq />
    <Footer /> 
    </>
  )
}
 
export default Home;