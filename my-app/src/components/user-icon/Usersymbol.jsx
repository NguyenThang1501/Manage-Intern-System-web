import React from 'react'
import './usersymbol.css'
import { PiStudentBold } from "react-icons/pi";
const Usersymbol = () => {
  return (
    <div className='my-user'>
      <PiStudentBold className='student-icon'/>
      <div>
        <li className='user-name'>Hi, Thang</li>
        <li className='user-role'>Student</li>
      </div>

    </div>
  )
}

export default Usersymbol