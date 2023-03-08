import React from 'react';
import { Link } from "react-router-dom";

export default function ListComp(){
    return(
        <div>
            <div className='main'>
            <div className='list'>
            <div className='titleComp'>
                    COMPONENT LIST
                </div>
            <div className='card'>
            <div className='containerCreate'>
                    
                </div>
                    
            </div>  
            </div>
            <button className='btnComp'><Link to="/">Back to main page</Link></button>
            
        </div>
        </div>
    )
}