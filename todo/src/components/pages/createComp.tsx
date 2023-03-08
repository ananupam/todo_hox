import React, {Fragment, useState} from 'react';
import { useMutation } from 'react-query'
import axios from 'axios'

import { Link } from "react-router-dom";
import '../main.css'

interface PostData {
    id: number;
    taskid: string;
    title: string;
    description: string;
}
interface PostResponse {
    id: number;
}


export default function CreateComp(){
    const [taskid,setTaskid] = useState<string>('')
    const [title,setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [message, setMessage] = useState<PostResponse>({ id: 0 })

    async function createPost(data: PostData): Promise<PostResponse> { 
        const response = await axios.post<PostResponse>('http://localhost:3004/todos',data)
        setMessage(response.data)
        return response.data;

    }

    const {isLoading, isError, error, mutate} = useMutation<PostResponse, unknown, PostData>(createPost, {retry: 3})

    return(
        <div className='main'>
            <div className='list'>
            <div className='titleComp'>
                    CREATE A NEW ENTRY
                </div>
            <div className='card'>
                
                    <div className='containerCreate'>
                    <input className="box" type="text" placeholder="Task Id" value={taskid} onChange={e=>setTaskid(e.target.value)}/><br></br>
                    <input className="box" type="text" placeholder="Task Title" value={title} onChange={e=>setTitle(e.target.value)}/><br></br>
                    <textarea className="box" placeholder="Task Description" value={description} onChange={e=>setDescription(e.target.value)}/>
                    <button className='submitbtn' onClick={()=>{mutate({id: Date.now(),taskid, title, description})}}>Submit</button>
                </div>
            </div>  
            </div>
            <p> Created a new Post ID: {message && message.id}</p>
                <div style={{color: 'gray', background: '#234'}}>
                {isLoading ? 'Saving...' : ''}
                {isError ? (error as Error).message : ''}
    
      </div>
            <button className='btnComp'><Link to="/">Back to main page</Link></button>
            
        </div>
    )
    
}