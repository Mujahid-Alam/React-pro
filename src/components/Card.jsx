import React,{useState} from 'react';
// hooks
// incapsulation
const Card = (props) => {
    const [counter,setCounter] = useState(0);
    return (
        <React.Fragment>
        <div className={"card "+props.bg}>
        <div className="card-header ">{props.name}</div>
            <div className="card-body">Theratione quia odit quam sint nisi! Dolore enim in ducimus dolores maxime ab sint! </div>
            <div className="card-footer d-flex">
            
             <button type="button" className="btn btn-dark m-1 px-3 " 
             onClick= {()=>{setCounter(counter-1)}} 
             disabled={(counter<=0)? "disabled":""} >-</button> 
            
             <span className="my-3">{counter}</span>
             <button type="button" className="btn btn-dark m-1 px-3" onClick={(e)=>{setCounter(counter+1)}}>+</button>
             </div>
        </div>

       </React.Fragment>
    )
}
export default Card;



// {(counter <=0 )? "" :
// <button type="button" className="btn btn-dark m-1 px-3" onClick={(e)=>{setCounter(counter-1)}}>-</button> 
