import React from 'react'
import { FaTimes} from 'react-icons/fa'
import Tasks from './Tasks'

const Task = ({task,onDelete}) => {
  return (
    <div className='task'>
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