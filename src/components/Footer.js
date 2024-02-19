import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="contact">
            <button className='contact-btn' > <Link className="link" to="/about-us">contact us </Link></button>
        </div>
        <div className='links'>
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/order">ORDER</Link>
            <a className="link" href="#services">SERVICES</a>
            <Link className="link" to="/about-us">ABOUT US</Link>
    </div>
    </footer>
    )
}

export default Footer