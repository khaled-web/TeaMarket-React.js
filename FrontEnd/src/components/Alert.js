import React from 'react'
import {UseAppContext} from '../context/appContext'
import '../assets/css/alert.css'

const Alert = () => {
  const {alertType, alertText} = UseAppContext()
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}

export default Alert 
