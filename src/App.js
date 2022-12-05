import './App.css';

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useEffect, useState } from 'react';

const App = () => {
  const [showAddTask,setShowAddTask] =useState(false)
  const [tasks,setTasks] = useState([])
     
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      //console.log(tasksFromServer,699)
      setTasks(tasksFromServer)
    }
    
    getTasks()
  } , [])
  
   
  const fetchTasks = async () => {
    const res = fetch('http://localhost:5000/tasks')
    const data = (await res).json()
    return data
  }
    
  

    const addTask = async (task) => {
      //console.log()
      const res = await fetch(`http://localhost:5000/tasks`,
      {
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body :JSON.stringify(task)
      })
      const data = res.json()
      setTasks(...tasks,data)

      // const id=Math.floor(Math.random()*1000) + 1
      // const newTask= {id,...task}
      // setTasks([...tasks,newTask])

    }
    const deleteTask =  async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`,{
        method:'DELETE'
      })
      setTasks(tasks.filter((task) => task.id != id
      ))
      //console.log('im del' , id)
    }

    const toggleReminder =(id) => {
      setTasks(
        tasks.map((task) =>
         task.id ==id ? 
         {...task,reminder:! task.reminder} :task )
      )

    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {
        showAddTask &&  
        <AddTask onAdd={addTask}/>
      }
      
      {tasks.length > 0 ?
       (<Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle ={toggleReminder}
      />)  : 'No tasks'}
      
    </div>
  );
}

export default App;
