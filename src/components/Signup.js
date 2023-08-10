import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" , cpassword: ""})
    
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        const host = "http://localhost:5000";
        e.preventDefault();
        const {name, email, password} = credentials;
        const url = `${host}/api/auth/createuser`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password })
        });
        const json = await response.json()
        console.log(json) 
        if (json.success) {
        //Save the auth token and redirect 
        localStorage.setItem('token', json.authtoken);
        navigate("/login");
        }
        else {
            alert("Something went wrong")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className='container' onSubmit={handleSubmit}>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name="email" onChange={onChange}aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"  name='password' value={credentials.password} className="form-control" onChange={onChange}id="password" minLength={3}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={3}  required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

// return (
//     <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
//       {props.children}
//     </NoteContext.Provider>
//   )

export default Signup
