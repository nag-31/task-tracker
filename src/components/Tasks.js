import React from 'react'
//import { useState } from 'react'
import Task from './Task'


const Tasks = ({tasks}) => {
  return (
    <>
    {tasks.map((task) => (
      //console.log(task,789),
      <Task key={task.id} task={task}/>
    )

    )}
    </>
  )
}

export default Tasks