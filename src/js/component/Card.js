import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "./../store/appContext"

const Card = () => {

    const params = useParams();
    console.log(params.idContact);


    const { store, actions } = useContext(Context);


    return (
        <div className="container pt-5">
            

            {store.contacts.map((value, index) => (


                <div className="row border mt-4">
                    <div className=" py-3 d-flex flex-row">
                        <div className="col-2">
                            <div className=""><img className="rounded-circle w-100 h-100" src="https://picsum.photos/150/150?random=2" /></div>
                        </div>
                        <div className="d-flex flex-column col-8 ps-4">
                            <h3>{value.name}</h3>
                            <div className="text-secondary"> <p><i className="fa-solid fa-location-dot pe-3 pt-3 "></i>{value.address} </p></div>
                            <div className="text-secondary"> <p><i className="fa-solid fa-phone-flip pe-3"></i>{value.phone}</p></div>
                            <div className="text-secondary"> <p><i className="fa-solid fa-envelope pe-3"></i>{value.email}</p></div>
                        </div>

                        <Link to={`/editcontact/${value.id}`} className="icon-link">
                            <i className="fa-solid fa-pen pe-5 dark"></i>
                        </Link>
                        <span className="icon-button" onClick={() => { actions.deleteContact(index) }}>
                            <i className="fa-solid fa-trash-can"></i>
                        </span>



                    </div>
                </div>

            ))}



        </div>

    )
}

export default Card