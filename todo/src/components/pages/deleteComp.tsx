import React from 'react';
import { Link } from "react-router-dom";

export default function DeleteComp(){
    return(
        <div>Delete Component
            <button><Link to="/">Back to main page</Link></button>
        </div>
    )
}