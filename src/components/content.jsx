import React from 'react';
import Card from './Card';
const Content = () => {
    return (
        <>
            <div className="container my-4">
            <div className="row">
            <div className="col-lg-3"><Card name="Mujahid" bg="bg-primary text-white "/></div>
            <div className="col-lg-3"><Card name="Alam" bg="bg-warning "/></div>
            <div className="col-lg-3"><Card name="Talha" bg="bg-success text-white"/></div>
            <div className="col-lg-3"><Card name="Afroz" bg="bg-danger"/></div>
                
            </div>
                
            </div>
        </>
    )
}
export default Content;