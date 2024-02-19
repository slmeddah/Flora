
import {useState , useEffect} from 'react'

const OrderForm = () => {

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        address:'',
        phoneNumber:'',
        order:''
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
        <form action="" className="form">
            <div className="input">
                <label htmlFor="name" className="infolabel">Name</label>
                <input 
                className="info"
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className="input">
                <label htmlFor="email" className="infolabel">Email</label>
                <input 
                className="info"
                type="email" 
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="input">
                    <label htmlFor="address" className="infolabel">Adress</label>
                <input 
                className="info"
                type="text" 
                name="adress"
                value={formData.address}
                onChange={handleChange}
                />
            </div>
            <div className="input">
            <label htmlFor="phoneNumber" className="infolabel"> Phone number</label>
            <input 
            className="info"
            type="text" 
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            />
            </div>
            <div className="order">
            <label htmlFor="order"> Describe your order</label>
            <input 
            className="order-input"
            type="text" 
            name='order'
            value={formData.order}
            onChange={handleChange}
            required
            />
            </div>
            <button type="submit" className='submit-btn' onClick={handleSubmit}> submit order</button>

        </form>
        
     );
}
 
export default OrderForm;