import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd}) => {
  
  
  return (
    <div>
        <h1>
            {title}
            <Button text='Add' color='green' onClick = {onAdd} />
        </h1>
    </div>
  )

}

Header.defaultProps={
    title:'Task Tracker'
    
}

Header.propTypes = {
    title : PropTypes.string.isRequired,

}
export default Header