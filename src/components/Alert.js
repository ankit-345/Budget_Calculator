import React from 'react'

const Alert = ({alert}) => {
  return (
    <>
    {/* { console.log(alert) } */}
    <div className='alert-box'>
      <p>{alert}</p>
    </div>
    </>
  )
}

export default Alert;