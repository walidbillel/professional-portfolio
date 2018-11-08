import React from 'react';
import './Photopage.css';
import Pic from './theOne.svg';
import { AwesomeButton } from 'react-awesome-button';
import Click from './click.svg'



const Photopage = () => {
    return (
        <div className="mainbody">
          

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <a href="/home"><img className="main" src={Pic} alt="me"></img></a>
                    </div>

                </div>
                <div className="row">
                <div className="col-md-12">
                <header className="mainname">Walid Boubguira</header>
                </div>
                </div>
            </div>




        </div>
    )
};

export default Photopage;