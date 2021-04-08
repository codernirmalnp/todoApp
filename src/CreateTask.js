import React, { useState } from 'react';
const CreateTask=({addTask})=>{
    const [values,setValues]=useState()
    const handelChange=(e)=>{
        const {name,value}=e.target
      
        setValues({...values,[name]:value})
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        values ? addTask(values.title):alert("Please insert Task")
        setValues("")

    }
    return(
        <form onSubmit={handelSubmit}>
            <input type="text" name="title" value={values && values.title} onChange={handelChange}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}
export default CreateTask;