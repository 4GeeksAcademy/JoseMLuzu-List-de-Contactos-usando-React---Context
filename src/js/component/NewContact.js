import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



const NewContact = () => {

    const { store, actions } = useContext(Context)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');


    return (

        <div className="">
            <div className="container p-3" style={{ width: "1200px" }}>
                <form>
                    <legend className="d-flex justify-content-center fs-1"><b>Add a new contact</b></legend>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" id="name" aria-describedby="emailHelp" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter phone" id="phone" aria-describedby="emailHelp" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" id="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                    </div>
                    <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-primary" onClick={() => { actions.addNewContact(name, phone, email, address) }}>Save</button>
                    </div>

                </form>
                <Link to="/">
                    <span>or get back to contacts</span>
                </Link>
            </div>
        </div>

    )
}

export default NewContact