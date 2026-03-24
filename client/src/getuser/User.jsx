import React, { useEffect, useState } from 'react';
import "./user.css";
import axios from "axios";

const User = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
                const response = await axios.get(`${apiUrl}/api/users`);
                setUsers(response.data);
                setError("");
            } catch (error) {
                console.log("Error while fetching the data", error);
                setError("Unable to load users.");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="my-5">
                <button className="btn btn-primary">Add user <i className="fa-solid fa-user-plus"></i></button>
                <div className="table-responsive userTable">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {error ? (
                                <tr>
                                    <td colSpan="5" className="text-center">{error}</td>
                                </tr>
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center">No users found</td>
                                </tr>
                            ) : users.map((user, index) => {
                                return (
                                    <tr key={user._id || index}>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td className='actionButton'>
                                            <button className="btn btn-info btn-sm">
                                                <i className='fa-solid fa-pen-to-square'></i>
                                            </button>
                                            <button className="btn btn-danger btn-sm">
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
