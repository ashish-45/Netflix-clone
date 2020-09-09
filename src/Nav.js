import React, { useEffect,useState } from 'react';
import './Nav.css';

const Navbar = () => {
 
    const [show,handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100) {
                handleShow(true);
            }else  handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll')
        }
    },[])
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo'
                src="https://assets.brand.microsites.netflix.io/assets/5a5c367c-8198-11e9-bf79-066b49664af6_cm_800w.png?v=32"
                alt='Netflix logo' />

            <img className='nav_Avatar'
                src='https://tessellate.co.uk/wp-content/uploads/2016/11/Smile-logodesign1.jpg'
                alt='smile logo' />
        </div>
    )
}

export default Navbar;
