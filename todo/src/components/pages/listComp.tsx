import React from 'react';
import { Link } from "react-router-dom";

export default function ListComp(){
    return(
        <div>List Component
            <button><Link to="/">Back to main page</Link></button>
        </div>
    )
}