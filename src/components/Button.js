import React from 'react'

const Button = ({className, children, clickHandler}) => {
  return (
    <button className={`btn ${className}`} id="clear" onClick={clickHandler}>
          {children}
    </button>
  )
}

export default Button