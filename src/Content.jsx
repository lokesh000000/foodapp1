import React, { useState } from 'react';
import './styles.css';

const Content = () => {

    return (
        <div className="main-section">
            <div className='iphone'>     
            <img src="assets/Map-UI.png.webp" alt="Content" className="image-content" /> 
            </div>
            <div className="intro">
               
                 <img className='image' src="assets/FoodieLogo.png" alt="Foodie Logo" />
                <div>
                <h1>Welcome to Foodie</h1>
                <p>
                    At Foodie, we redefine convenience with our seamless food delivery service.
                    Whether you’re craving the flavors of home or exploring new culinary delights,
                    Foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners
                    and everything in between, our curated menu caters to every palate and preference.
                </p>
                </div>
                
                <div><button className='butti' type="submit">Join the Waitlist</button></div>
            </div>
        </div>
    )
}
export default Content;
