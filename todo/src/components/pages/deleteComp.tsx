import React,{Fragment, useState} from 'react';
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import axios from 'axios';

interface PostResponse {
    id: string;
}

export default function DeleteComp(){
    const [id,setId] = useState<string>('')
    
    async function deleteTodos(id:string) { 
        const response = await axios.delete('http://localhost:3004/todos/${id}')
        console.log("deleted row",response)
        return response.data
    }

    const { isLoading, mutate } = useMutation((values:any)=> deleteTodos(values.id), { onSuccess(data) {},
        onError(error: any) {},});
    return(
        <div>
            <div className='main'>
            <div className='list'>
            <div className='titleComp'>
                    DELETE ENTRY
                </div>
            <div className='card'>
                
                    <div className='containerDelete'>
                    <input className="box" type="text" placeholder="Task Id" value={id} onChange={e=>setId(e.target.value)}/><br></br>
                    <button className='submitbtn'onClick={()=>{mutate({id})}}>Submit</button>
                </div>
            </div>  
            </div>
            <button className='btnComp'><Link to="/">Back to main page</Link></button>
            
        </div>
        </div>
    )
}