import React from 'react';
import { Link } from "react-router-dom";
import {useQuery} from 'react-query'
import axios from 'axios'

interface PostData {
    id: number;
    taskid: string;
    title: string;
    description: string;
}

async function fetchTodos(){
    const {data} = await axios.get('http://localhost:3004/todos')    
    console.log(data)
    console.log("data print: fetchTodos")
    return data

}

export default function ListComp(){

    const {data, error, isError, isLoading } = useQuery('todos', fetchTodos) 
    // first argument is a string to cache and track the query result
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        if (error instanceof Error) {
            // ✅ TypeScript knows err is Error
            console.log(error.message);
          } else {
            console.log('Unexpected error', error);
          }
    }

    return(
        <div>
            <div className='main'>
            <div className='list'>
            <div className='titleComp'>
                    COMPONENT LIST
                </div>
            <div className='card'>
            <div className='containerList'>
            {
            data.map((post:PostData, index:any) => {
                return <ul key={index}> {post.taskid} : {post.title} <br></br>{post.description}</ul>
            })
        }

                </div>
                    
            </div>  
            </div>
            <button className='btnComp'><Link to="/">Back to main page</Link></button>
            
        </div>
        </div>
    )
}