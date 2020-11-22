import React from 'react';

export class Login extends React.Component {
    
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
        console.log("sethasaccount is"+this.props.sethasAccount);

        const showHideClassName = show ? "modal display-block" : "modal display-none";

        return (
        <div className={showHideClassName}>
            <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <p className="errorMessage">{emailError}</p>
                    <label>Password</label>
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
                                    <button onClick={
                                        handleLogin}>
                                         Sign In</button>
                                        <p>Don't have an account? <span onClick={() => 
                                        sethasAccount(!hasAccount)
                                        }>Sign up</span></p>
                                </>
                            ) :
                            (
                                <>
                                    <button onClick={
                                    handleSignUp
                                    }>Sign Up</button>
                                    <p>Have an account? <span onClick={() => sethasAccount(!hasAccount)}>Sign in</span></p>
                                </>
                            )}
                        <button onClick={handleClose}>close</button>
                    </div>
                </div>

            </section>
        </div>
    )}
}
// const Login = (props) => {
//     const {
//         email,
//         setEmail,
//         password,
//         setPassword,
//         handleLogin,
//         handleSignUp,
//         hasAccount,
//         sethasAccount,
//         emailError,
//         passwordError,
//         show,
//         handleClose} = this.props;
//         console.log("email is"+this.props.email);
//         console.log("email locally is"+email);
//     const showHideClassName = show ? "modal display-block" : "modal display-none";
//     return (
//         <div className={showHideClassName}>
//             <section className="login">
//                 <div className="loginContainer">
//                     <label>Username</label>
//                     <input type="text"
//                         autoFocus
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)} />
//                     <p className="errorMessage">{emailError}</p>
//                     <label>Password</label>
//                     <input type="password"
//                         autoFocus
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} />
//                     <p className="errorMessage">{passwordError}</p>
//                     <div className="btnContainer">
//                         {hasAccount ?
//                             (
//                                 <>
//                                     <button onClick={handleLogin}>Sign In</button>
//                                     <p>Don't have an account? <span onClick={() => sethasAccount(!hasAccount)}>Sign up</span></p>
//                                 </>
//                             ) :
//                             (
//                                 <>
//                                     <button onClick={handleSignUp}>Sign Up</button>
//                                     <p>Have an account? <span onClick={() => sethasAccount(!hasAccount)}>Sign in</span></p>
//                                 </>
//                             )}
//                         <button onClick={handleClose}>close</button>
//                     </div>
//                 </div>

//             </section>
//         </div>
//     )
// }
// export default Login;