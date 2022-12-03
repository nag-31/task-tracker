import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () => {
    console.log('click')
  }
  
  
  return (
    <div>
        <h1>
            {title}
            <Button text='Add' color='green' onClick = {onClick} />
        </h1>
    </div>
  )

}

Header.defaultProps={
    title:'title default'
    
}

Header.propTypes = {
    title : PropTypes.string.isRequired,

}
export default Header