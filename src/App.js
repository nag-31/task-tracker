import './App.css';

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react';

const App = () => {

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
      <Header title={'Task Tracker'}/>
      <AddTask/>
      {tasks.length > 0 ?
       (<Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle ={toggleReminder}
      />)  : 'No tasks'}
      
    </div>
  );
}

export default App;
