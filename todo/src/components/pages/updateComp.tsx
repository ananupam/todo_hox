import React from 'react';
import { Link } from "react-router-dom";


export default function UpdateComp(){
    return(
        <div>
            <div className='main'>
            <div className='list'>
            <div className='titleComp'>
                    UPDATE  ENTERY
                </div>
            <div className='card'>
                
                    <div className='containerCreate'>
                    <input className="box" type="text" placeholder="Task Id"/><br></br>
                    <input className="box" type="text" placeholder="Task Name"/><br></br>
                    <textarea className="box" placeholder="Task Description"/>
                    <button className='submitbtn'>Submit</button>
                </div>
            </div>  
            </div>
            <button className='btnComp'><Link to="/">Back to main page</Link></button>
            
        </div>
        </div>
    )
}