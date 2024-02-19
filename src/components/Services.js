

import useFetch from './useFetch';


const Service = ({title,description,picture}) => {
    return (
        <div className="service" >
            <img src={require(`../${picture}`)} alt={picture} />
            <h2>{title}</h2>
            <h4>{description}</h4>
        </div>
    )

}

const ServicesSection = () => {
    
    // using useEffect to fetch data
    const {data:services, error , loading} = useFetch('http://localhost:3001/services')

    return(
        <section className="services-section" id="services">
            <h2>Our Services</h2>
            <div className='services'>
                {error && <div>couldn't get the data </div>}
                {loading && <div>Loading . . </div>}
                {services && services.length > 0 && services.map((service,index)=>(
                    <Service
                    key={index}
                    title={service.title}
                    description={service.description}
                    picture={service.picture}
                    />
                ))}
            </div>
        </section>
    )
}

export default ServicesSection