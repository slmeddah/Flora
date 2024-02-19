

import React,{ useEffect, useState } from 'react';
import useFetch from './useFetch';



const Offer = ({title,description,price,picture}) => {
    return (
        <div className="card">
            <img  src={require(`../${picture}`)} alt="description" />
            <div className="card-desciption">
                <div className="title-and-des">
                    <h3>{title}</h3>
                    <h4>{description}</h4>
                </div>
                <div className="price" >{price}</div>
            </div>

        </div>

    )

}



const OffersSection = () => {
    

    //function that creates buttons
    const Buttons = ({ index , selectedIndex , handleClickButton }) => {
    //setting the first button as clicked
    const buttonElements =[]
        for (let i=0 ;i < index ; i++ ){
            buttonElements.push(
            <div key={i} 
            className ={`circle ${selectedIndex === i ? 'clicked' : ''}`}
            onClick={() => handleClickButton(i)}
            ></div>)
            
        }
    
    return(
        <div className="circles">{buttonElements}</div>
    )
  
}

       // State variables to track the clicked state
       

    // const [offers, setOffers] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const {data:offers, error , loading} = useFetch('http://localhost:3001/offers')
     // Calculate the new index based on the length of offers  
    useEffect(() => {
        if (offers) {
        const newIndex = offers.length % 3 === 0 ? offers.length / 3 : Math.floor(offers.length / 3) + 1;
        setIndex(newIndex);
        ; // Update translateValue based on selectedIndex
        }
    }, [offers]);
    
    
    useEffect(()=>{
        setTranslateValue(-selectedIndex * 100)
    },[selectedIndex])
    
    const handleClickButton = (index) => {
        setSelectedIndex(index);   
    };
        

    
    return(
        <section className="offers-section">
            <h2>Our Offers</h2>
            <div className="cards" style={{ transform: `translateX(${translateValue}%)` }}>
                {error && <div>couldn't get the data </div>}
                {loading && <div>Loading . . </div>}
                {offers && offers.length > 0 &&  offers.map((offer,index)=>(
                <Offer
                key={index}
                title={offer.title}
                description={offer.description}
                price={offer.price}
                picture={offer.picture}
                />

            ))}
            </div>
            <Buttons index={index} selectedIndex={selectedIndex} handleClickButton={handleClickButton} />
        
        </section>
    )
}


export default OffersSection