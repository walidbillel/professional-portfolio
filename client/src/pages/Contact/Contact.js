import React, { Component } from "react";
import Navbar from '../../components/Nav';
import './Contact.css'
import { AwesomeButton } from 'react-awesome-button';
import API from '../../utils/API';
import Modal from '../../components/Modal';

// In your render...



class Contact extends Component {


    state = {
        show: false,
        user: '',
        email: '',
        message: '',
        users: []
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleForSubmit = event => {
        event.preventDefault();
        this.showModal();
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
                    users: []
                })
            }).catch(err => { console.log(err) })
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
                                <h4>Thank you for reaching out. I will contact you as soon as possible.
                            <br></br><br></br>
                                    Best,
        
                            <br></br><br></br>
                                    Walid
                            </h4>
                            </Modal>
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