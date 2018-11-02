import React, { Component } from "react";
import Navbar from '../../components/Nav';
import Aboutme from '../../components/Aboutme';
import Skills from '../../components/Skills';

class Home extends Component {
 
    
    render() {
        return(
            <div>
            <Navbar></Navbar>
            <Aboutme></Aboutme>
            <Skills></Skills>
            </div>
        )
    }
}

export default Home;