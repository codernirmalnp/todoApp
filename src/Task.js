import React from 'react'

const Task=({task,index,completeTask,removeTask})=>{
    return (
        <>
            <div
            style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.title}
            <button onClick={() => removeTask(index)}>Remove</button>

            <button
                
                onClick={() => completeTask(index)}>Completed</button>
           
        </div>
        </>
    )
}
export default Task;