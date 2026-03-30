import React, { useState } from 'react'
import "./adduser.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const AddUser = () => {

    const users = {
        name:"",
        email:"",
        address:""
    };

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    };

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/user", user)
        .then((response)=>{
            // console.log("User created Successfully");
            toast.success(response.data.message, {position:"top-right"});
            navigate("/");
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-md-4 offset-md-4 adduserform shadow-lg">
                    <h1 className='text-center'>Add New User</h1>
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" onChange={inputHandler} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" onChange={inputHandler} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input type="text" name="address" onChange={inputHandler} className="form-control" required />
                        </div>
                        <Link to={"/"} className="btn btn-secondary mt-3 float-start"><i className="fa-duotone fa-solid fa-backward"></i>Back</Link>
                        <button type="submit" className="btn btn-primary mt-3 float-end">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddUser