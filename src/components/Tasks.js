import React from 'react'
//import { useState } from 'react'
import Task from './Task'


const Tasks = ({tasks,onDelete,onToggle}) => {
  return (
    <>
    {tasks.map((task) => (
      //console.log(task,789),
      <Task key={task.id} task={task}
      onDelete = {onDelete}
      onToggle={onToggle}
      />
    )

    )}
    </>
  )
}

export default Tasks