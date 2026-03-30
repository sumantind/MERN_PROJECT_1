import React, { useEffect, useState } from 'react'
import "./update.css";
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";

const UpdateUser = () => {

    const users = {
        name:"",
        email:"",
        address:""
    };

    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    const { id } = useParams();

    const inputHandler = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    };

    useEffect (()=>{
        axios.get(`http://localhost:5000/api/user/${ id }`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [id])

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/update/user/${id}`, user)
        .then((response)=>{
            // console.log("User updated Successfully");
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
                <div className="col-md-4 offset-md-4 updateuserform shadow-lg">
                    <h1 className='text-center'>Update User</h1>
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" value = {user.name} onChange={inputHandler} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" value = {user.email} onChange={inputHandler} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input type="text" name="address" value = {user.address} onChange={inputHandler} className="form-control" required />
                        </div>
                        <Link to={"/"} className="btn btn-secondary mt-3 float-start"><i className="fa-duotone fa-solid fa-backward"></i>Back</Link>
                        <button type="submit" className="btn btn-primary mt-3 float-end">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UpdateUser