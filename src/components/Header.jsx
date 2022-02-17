import React from 'react';

const header = () =>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a href="" className="navbar-brand">Website</a>
                <from action="" className="navbar-form d-flex">
                    <input type="text" className="form-control" placeholder="Search" />
                    <input type="submit" className="btn btn-danger" />
                </from>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="" className= "nav-link">Home</a></li>
                    <li className="nav-item"><a href="" className= "nav-link">About</a></li>
                </ul>
            </div>
        </nav>
        </>
    )

}
export default header;