import React from 'react';
import './Photopage.css';
import Pic from './theOne.svg';
import Click from './click.svg'



const Photopage = () => {
    return (
        <div>
            <img className="main"  src={Pic} alt="me"></img>
            

            <a href="/home"><img className="click" src={Click} alt="me"></img></a>

        </div>
    )
};

export default Photopage;