import React from 'react';
import { Link } from "react-router-dom";
import CreateComp from './pages/createComp';

const Main =() => {
    return(
        <div className='optionbtns'>
        <button><Link to="/create">New Task</Link></button>
        <button><Link to="/delete">Delete Task</Link></button>
        <button><Link to="/update">Update Task</Link></button>
        <button><Link to="/list">List Task</Link></button>
        <button><Link to="/reorder">Reorder task</Link></button>
    </div>
    )
}

export default Main