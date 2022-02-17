import React,{useState}  from 'react';

const Cardx =() => {
    const [counter,setCounter] = useState(0);
    return  (
        <>
    <div className="card"> 
    <div className="card-header">This is a second heasr</div>
    <div className="card-body">lorem    lorem</div>
    <div className="card-footer">
        <button type="button" className="btn btn-dark m-2 py-1" onClick={()=>{setCounter(counter-1)}} disabled={(counter<0)? "disabled":""}>-</button>
        <span className="my-3 ">{counter+1}</span>
        <button type="button" className="btn btn-dark m-2 py-1" onClick= {()=>{setCounter(counter+1)}} disabled = {(counter>3)? "diabled":""}>+</button>
    </div>

    
    </div>
        </>

    )

}
export default Cardx;