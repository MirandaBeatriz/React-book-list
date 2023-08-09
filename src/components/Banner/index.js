import './Banner.css';
import React from 'react';

const Banner = () =>{
    const imageStyle = {
        backgroundImage: 'url(./images/banner.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    };

    return(
        <section className='banner' style={imageStyle}>
        </section>
    )
}

export default Banner