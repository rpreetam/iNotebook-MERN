import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials]= useState({email: '', password:''});
    let history = useHistory();
    const host = process.env.REACT_APP_HOST
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response = await fetch( `${host}/api/auth/login`,{
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json()
        if (json.success){
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
             history.push("/")
            props.showAlert("Loggedin Successfully", "success")
        }
        else{
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e)=> {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Login to countinue to Inotebook</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login