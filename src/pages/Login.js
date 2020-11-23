import React from 'react';
import closeIcon from './icons/noun_Close_3610311.png'

export class Login extends React.Component {
    
    constructor() {
        super()

        this.onSignInClick = this.onSignInClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
    }

    onSignInClick() {
        this.props.handleLogin();
    }

    onSignUpClick() {
        this.props.handleSignUp();

    }

    render(){
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
            passwordError,
            show,
            handleClose} = this.props;
        console.log("sethasaccount is" + this.props.sethasAccount);

        const showHideClassName = show ? "modal display-block" : "modal display-none";

        return (
        <div className={showHideClassName}>
            <section className="login">
                <div className="loginContainer">
                <img src={closeIcon} className="close-button" alt="Close window" onClick={handleClose} />
                    <label>EMAIL</label>
                    <input type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <p className="errorMessage">{emailError}</p>
                    <label>PASSWORD</label>
                    <input type="password"
                        autoFocus
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <p className="errorMessage">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ?
                            (
                                <>
                                    <button className="signin-button" onClick={
                                        this.onSignInClick}>
                                         SIGN IN</button>
                                        <p className="no-account-text">Don't have an account?  <span className="signin-prompt" onClick={() => 
                                        sethasAccount(!hasAccount)
                                        }>Sign up</span></p>
                                </>
                            ) :
                            (
                                <>
                                    <button className="signin-button" onClick={
                                    this.onSignUpClick
                                    }>SIGN UP</button>
                                    <p className="no-account-text">Have an account? <span className="signin-prompt" onClick={() => sethasAccount(!hasAccount)}>Sign in</span></p>
                                </>
                            )}
                    </div>
                </div>

            </section>
        </div>
    )}
}
