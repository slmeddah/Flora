
import React from 'react';
import pic from '../images/hero image.png'
import pink from '../images/pink.svg'
import purple from '../images/purple.svg'
import { Link } from 'react-router-dom'


const Hero =()=>{
    return(
        <section className="hero">
            
            <div className="main">
            <div className="hero-left">
                <h2>
                    Flowers are love's truest language
                </h2>
                <p className="sentence">
                    express your love with us now 
                </p>
                
                <button className="order">
                    <Link className="order-link" to="/order">order now </Link>
                </button>

                <p className="intro">
                How many times have you bought or planted flowers, walked past flowers in gardens, and ever thought about what their meaning is?  
                </p>
            </div>


            <div className="hero-right">
            
                <div className="image">
                    <img src={pic} alt=" woman holding flower" />

                </div>
                <div className="deco">
                    <img src={pink} alt="" />
                    <img src={purple} alt="" />
                </div>
                    
            </div>{/* hero right end  */}
            

            </div>{/* main end  */}
        </section>
    )
}
export default Hero