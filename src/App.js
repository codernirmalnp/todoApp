import {useState,useEffect} from 'react'
import CreateTask from './CreateTask'
import Task from './Task'
import './App.css';

function App() {
  const [tasks,setTasks]=useState([
   
  ])
  const[tasksleft,setTasksleft]= useState(0);
  useEffect( () => { 
    setTasksleft(tasks.filter(
        task => !task.completed).length)
 });
 console.log(tasksleft)

  const addTask=(title)=>{
    const newTasks=[...tasks,{title,completed:false}]
    setTasks(newTasks)
  }
  const completeTask=(index)=>{
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  }
  const removeTask=(index)=>{
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
  }
 
  
  return (
    <div className="App">
           
            <div className="create-task">
                <CreateTask addTask={addTask}/>
            </div>

           
            {tasksleft==0 && <h1>All task Completed</h1>}
            <div className="tasks">
                {
                    tasks.map((task,index)=>(
                        <Task
                            task = {task}
                            index= {index}
                            key = {index} 
                            completeTask={completeTask}
                            removeTask={removeTask}/>
                    ))   
                }
            </div>
    </div>
  );
}

export default App;
