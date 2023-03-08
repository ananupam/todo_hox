import React from 'react';
import { Link } from "react-router-dom";
import '../main.css'

export default function CreateComp(){
    return(
        <div className='main'>
            <div className='list'>
            <div className='titleComp'>
                    CREATE A NEW ENTRY
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
    )
    
}