import React from 'react'
import Model from "../Model";
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';

// Props will be expecting a function type and all the others from Model as well
interface Props extends Model {
    updateStatus: (index : number) => void;
    deleteHandle : (index: number) => void;
}



const SingleTask = ( { index, todo, status, updateStatus, deleteHandle} : Props ) => {
    
  return (
    <div key={index}> 
        <h1 style={{ textDecoration: status===true? 'line-through' : 'None'}}> Task Description: { todo }</h1>
        
        <h1> Status : { status === true ? 'complete' : 'incomplete' } </h1>

        {/* Update status */}
            {
                status === true? <CloseOutlined onClick={ () => {
                    console.log(' -- triggered from Singletask.tsx --')
                    updateStatus(index)
                }} /> : <CheckOutlined onClick={ () => {
                    console.log(' -- triggered from Singletask.tsx --')
                    updateStatus(index)
                }}/>
            }
        {/* Delete item */}
        <DeleteOutlined onClick={ () => { deleteHandle(index)} }/>

    </div>
  )
}

export default SingleTask ; 