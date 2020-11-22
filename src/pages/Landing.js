import React from 'react';
import './stylesheets/Landing.css';
import { ReactComponent as SynthIcons } from './icons/synth_icons.svg';
import { ReactComponent as Arrow } from './icons/arrow.svg';
import { Login } from './Login';

export class Landing extends React.Component {

    state = { show: false };

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  

    render() {
        const{
            email, 
            setEmail,
            password,
            setPassword,  
            handleLogin, 
            handleSignUp, 
            hasAccount, 
            sethasAccount, 
            emailError, 
            passwordError} = this.props;
        return (
            <div>
                <div className="landing-header-all">
                    <div className="landing-header-left" >
                        <div className="lh-left-elts">
                            <h1 className="title-text">SOUNDBITES</h1>
                            <p className="flavor-text">
                                A simple synth playground
                                made for you <br />to explore your musical side.
                            </p>
                            <div className="landing-buttons">
                                <a href="#creator-container" className="create-soundbite-button">
                                    CREATE A SOUNDBITE
                                </a>
                                <Login
                                    email = {email}
                                    setEmail = {setEmail}
                                    password = {password}
                                    setPassword = {setPassword}
                                    handleLogin = {handleLogin}
                                    handleSignUp = {handleSignUp}
                                    hasAccount = {hasAccount}
                                    sethasAccount = {sethasAccount}
                                    emailError = {emailError}
                                    passwordError = {passwordError} 
                                    show={this.state.show} 
                                    handleClose={this.hideModal}>
                                </Login>  
                                <button onClick = {this.showModal} className="signup-button"> LOG IN </button>
                            </div>
                        </div>
                    </div>
                    <div className="landing-header-right">
                        <div className="synth-icons">
                            <SynthIcons />
                        </div>
                    </div>
                </div>
                <div className="landing-bottom">
                    <div className="svg-arrow">
                        <div className="svg-bounce">
                            <div className="arrow">
                                <div className="clickarea">
                                    <a href="#creator-container">
                                    <Arrow />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-text-container">
                        <a href="#creator-container" className="bottom-text">
                            START CREATING
                        </a>
                    </div>
                </div >
            </div >
        )
    }
}