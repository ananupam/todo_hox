import React from 'react';
import { Link } from "react-router-dom";

export default function DeleteComp(){
    return(
        <div>
            <div className='main'>
            <div className='list'>
            <div className='titleComp'>
                    DELETE ENTRY
                </div>
            <div className='card'>
                
                    <div className='containerDelete'>
                    <input className="box" type="text" placeholder="Task Id"/><br></br>
                    <button className='submitbtn'>Submit</button>
                </div>
            </div>  
            </div>
            <button className='btnComp'><Link to="/">Back to main page</Link></button>
            
        </div>
        </div>
    )
}