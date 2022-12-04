import React from 'react'
import { FaTimes} from 'react-icons/fa'
import Tasks from './Tasks'

const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className=
    {`task ${task.reminder ? 'reminder':''}` }
    
        onDoubleClick={() => 
        onToggle(task.id)}>
        {/* {console.log(task,task.id)} */}
        <h3>{task.text}
        <FaTimes onClick={ () => onDelete(task.id)}
        style={{ color:'red',cursor:'pointer'}}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task