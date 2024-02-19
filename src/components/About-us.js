
import {useState , useEffect} from 'react'
import React from 'react';
import owner from '../images/owner.jpg'

const AboutUs = () => {


    const [formData,setFormData] = useState({
        name:'',
        description:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };




    return (
        <div className="About-us">
            <section className="about-section">
               

        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime quaerat ab eum, eius deleniti ipsum amet pariatur ad saepe voluptatem libero odio minima vitae repellendus autem nam delectus placeat?</p>
        </section>
        <section className="get-in-touch-section">
            
            <form action="" className="get-in-touch">
            <h2> Get In Touch</h2>
            <input 
                type="text" 
                placeholder="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            <input 
                type="text"
                placeholder="description" 
                description="description"
                value={formData.description}
                onChange={handleChange}
                required
                />
                <button type="submit" className='submit-btn' onClick={handleSubmit}> submit order</button>

                
            </form>
            <div className="owner">
                <img src={owner} alt="this is owner picture"/>
                <h2>Michelle Beatrice</h2>

            </div>


        </section>
        
        
        
        </div>


    )
}
export default AboutUs