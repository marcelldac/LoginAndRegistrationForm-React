import React, { useState } from "react";

export const Register = (props:any) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(email);
    }


    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name='name' id='name' placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder="youremail@gmail.com" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" id="" placeholder="******" />
                <button type="submit" >Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')} >Already Have An Account? Login Here!</button>
        </div>
    )
}