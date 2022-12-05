import './App.css';

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react';

const App = () => {
  const [showAddTask,setShowAddTask] =useState(false)
  const [tasks,setTasks] = useState([
      
        {
          "id": 1,
          "text": "Doctors Appointment",
          "day": "Feb 5th at 2:30pm",
          "reminder": true
        },
        {
          "id": 2,
          "text": "Meeting at School",
          "day": "Feb 6th at 1:30pm",
          "reminder": true
        },
    
    
  ])

    const addTask = (task) => {
      //console.log()
      const id=Math.floor(Math.random()*1000) + 1
      const newTask= {id,...task}
      setTasks([...tasks,newTask])

    }
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id != id
      ))
      console.log('im del' , id)
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
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
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
