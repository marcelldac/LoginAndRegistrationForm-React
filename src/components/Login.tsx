import React, { useState } from "react"
export const Login = (props:any) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(email);
    }


    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder="YourMail@email.com" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" id="" placeholder="******" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')} >Don't Have An Account? Register Here!</button>
        </div>
    )
}