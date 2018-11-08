import React, { Component } from "react";
import Navbar from '../../components/Nav';
import './Contact.css'
import { AwesomeButton } from 'react-awesome-button';
import API from '../../utils/API';
import Modal from '../../components/Modal';
import Modal2 from '../../components/Modal2';

// In your render...



class Contact extends Component {


    state = {
        show: false,
        show2: false,
        user: '',
        email: '',
        message: '',
    };

    componentDidMount() {
        // console.log(this.state.user);
    }


    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    
    showModal2 = () => {
        this.setState({ show2: true });
    };

    hideModal2 = () => {
        this.setState({ show2: false });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleForSubmit = event => {
        event.preventDefault();
        
        if (this.state.user && this.state.email && this.state.message) {
            API.saveUser({
                name: this.state.user,
                email: this.state.email,
                message: this.state.message

            }).then(res => {
                this.setState({
                    user: '',
                    email: '',
                    message: '',
                })
            }).catch(err => { console.log(err) });
            this.showModal();
        } else {
            this.showModal2();
        }

        console.log(this.state.user);
        console.log(this.state.message);
        console.log(this.state.email);
    };



    render() {


        return (
            <div>

                <Navbar></Navbar>
                <br></br>
                <header>Get in Touch</header>
                <br></br><br></br>

                <h4>Say Hi by filling up the form below or email me direclty at <span id="email">walid.boubguira@gmail.com.</span><br></br> Let's get social, network and brainstorm ideas <i className="fas fa-hand-rock"></i> <i className="fab fa-rocketchat"></i> <i className="fas fa-smile"></i> </h4>
                <br></br><br></br>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.handleForSubmit}>
                                <div className="form-group">

                                    <h2>Form</h2>
                                    <input
                                        id="input"
                                        onChange={this.handleInputChange}
                                        value={this.state.user}
                                        name="user"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Name"

                                    />
                                    <br></br>
                                    <input
                                        id="input"
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Email"

                                    />
                                    <br></br>
                                    <textarea
                                        id="input"
                                        onChange={this.handleInputChange}
                                        value={this.state.message}
                                        name="message"
                                        type="textarea"
                                        rows="7"
                                        className="form-control"
                                        placeholder="Type in your message"

                                    />
                                    <br></br>
                                    <AwesomeButton
                                        onClick={this.handleForSubmit}
                                        type="github"
                                        className="submit-form"
                                        disabled={!(this.state.user && this.state.email && this.state.message)}
                                    >
                                        Submit
      </AwesomeButton>
                                </div>
                            </form>

                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                <h4>Thank you for reaching out. You will hear from me soon <i className="fas fa-smile"></i>.</h4>
                            <br></br><br></br>
                                   <h2>Best,
        
                            <br></br><br></br>
                                    Walid</h2>
                            
                            </Modal>

                            <Modal2 show2={this.state.show2} handleClose2={this.hideModal2}>
                            <h2>Error</h2>
                            <br></br>
                                <h4>Please Fill up all inputs then press SUBMIT again
                           
                            </h4>
                            </Modal2>


                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <br></br>
                            <h4>A good programer is someone who looks both ways before crossing a one-way street.</h4>
                            <br></br>
                            <h4>“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.”
― Rick Cook, The Wizardry Compiled</h4>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;