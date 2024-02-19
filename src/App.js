
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero section'
import Navbar from './components/Navbar';
import OffersSection from './components/Offers';
import ServicesSection from './components/Services';
import Footer from './components/Footer';
import OrderForm from './components/Order';
import AboutUs from './components/About-us'

function App(){
    return (
        
        <div className="App">
            <Navbar/>
                <Routes>
                    <Route  path="/"  element={<Home/>} />
                    <Route  path="/order" element={<OrderPage/>} />
                    <Route  path="/about-us" element={<AboutUsPage/>} />

                </Routes>
            <Footer/>
        </div>
        
    )

}


function Home() {
    return (
      <>
        <Hero />
        <OffersSection />
        <ServicesSection />
      </>
    );
}

function OrderPage (){
    return(
       <>
       <OrderForm/>
       </> 
    )
}

function AboutUsPage (){
    return(
        <>
        <AboutUs/>
        </> 
    )

}


export default App;