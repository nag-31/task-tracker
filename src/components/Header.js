import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
  
  
  return (
    <div>
        <h1>
            {title}
            {/* {console.log(showAdd,12)} */}
            <Button text={showAdd ? "Close":"Add"} 
            
            color={showAdd ?'red':'green'} onClick = {onAdd} />
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