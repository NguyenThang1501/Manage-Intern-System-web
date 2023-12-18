import React from 'react'
import SideBar from '../common/sidebar/SideBar'
import Usersymbol from '../user-icon/Usersymbol'
import './student.css'

const StudentView = () => {
  return (
    <div className='student-view'>
      <SideBar />
      <Usersymbol/>
      <div className='student-content'>
        <h3>Hướng dẫn sinh viên đăng ký thực tập</h3>
      </div>
      
    </div>

  )
}
export default StudentView
