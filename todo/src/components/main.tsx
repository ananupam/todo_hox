import React from 'react';
import { Link } from "react-router-dom";
import CreateComp from './pages/createComp';
import './main.css'

const Main =() => {
    return(
        <div className='main'>
            
            <div className='list'>
                <div className='title'>
                    WELCOME, USER
                </div>
                <div className='card'>
                    <div className='text'>
                        <h1>Choose an option</h1>
                    </div>
                    <div className='container'>
                        <button className='btn'><Link to="/create">New Task</Link></button>
                        <button className='btn'><Link to="/delete">Delete Task</Link></button>
                        <button className='btn'><Link to="/update">Update Task</Link></button>
                        <button className='btn'><Link to="/list">List Task</Link></button>
                        <button className='btn'><Link to="/reorder">Reorder task</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main