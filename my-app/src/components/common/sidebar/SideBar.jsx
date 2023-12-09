import React, { useState } from 'react'
import './Sidebar.css'
import {FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaUserAlt, FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const SideBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/student/student-infor",
            name:"Hồ sơ cá nhân",
            icon:<FaUserAlt/>
        },
        {
            path:"/student/student-register",
            name:"Đăng ký thực tập",
            icon:<FaUserAlt/>
        },
        {
            path:"/student/internship-positions",
            name:"Chi tiết các vị trí thực tập",
            icon:<FaRegChartBar/>
        },
        {
            path:"/student/news-internship",
            name:"Tin tuyển dụng",
            icon:<FaCommentAlt/>
        },
        {
            path:"/student/fqas",
            name:"FQAs",
            icon:<FaShoppingBag/>
        }
    ]
    return (
        <div className='container-sidebar'>
            <div style={{width: isOpen ? "350px" : "50px"}} className='sidebar'>
                <div className="top-section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo-sidebar">IMS</h1>
                    <div style={{marginLeft: isOpen ? "170px" : "0px"}} className='bars'>
                        <FaBars className='fa-bar' onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon-sidebar">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link-text'>{item.name}</div>                        
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>

        // <div>
        //     <div className=" container-fuid p-0 d-flex h-100">
        //         <div className='my-sidebar d-flex flex-column flex-shrink-0 p-3 text-white offcanvas-md offcanvas-start'>
        //             <a href="a" className='my-brand navbar-brand'>
        //                 <h5>HUS-IMS</h5>
        //             </a>
        //             <hr />
        //             <ul className='mynav nav nav-pills flex-column mb-auto'>
        //                 <li className='nav-item mb-5'>
        //                     <a href="#" className='nav-item-link d-flex align-items-center'>
        //                     <i className="navbar-icon fa-solid fa-file-contract"></i>
        //                         <div className='my-item ms-2'>Hồ sơ cá nhân</div>
        //                     <i className="navbar-icon-2 fa-solid fa-angle-right"></i>
        //                     </a>
        //                 </li>
        //                 <li className='nav-item mb-5'>
        //                     <a href="#" className='d-flex align-items-center'>
        //                         <i class="navbar-icon fa-regular fa-map"></i>
        //                         <div className='my-item ms-2'>Đăng ký thực tập</div>
        //                         <i class="navbar-icon-2 fa-solid fa-angle-right"></i>

        //                     </a>
        //                 </li>
        //                 <li className='nav-item mb-5'>
        //                     <a href="#" className='d-flex align-items-center'>
        //                         <i class="navbar-icon fa-solid fa-briefcase"></i>
        //                         <div className='my-item ms-2'>Chi tiết các vị trí thực tập</div>
        //                         <i class="navbar-icon-2 fa-solid fa-angle-right"></i>
        //                     </a>
        //                 </li>
        //                 <li className='nav-item mb-5'>
        //                     <a href="#" className='d-flex align-items-center'>
        //                         <i class="navbar-icon fa-regular fa-newspaper"></i>
        //                         <div className='my-item ms-2'>Tin tuyển dụng</div>
        //                         <i class="navbar-icon-2 fa-solid fa-angle-right"></i>
        //                     </a>
        //                 </li>
        //                 <li className='nav-item mb-5'>
        //                     <a href="#" className='d-flex align-items-center'>
        //                         <i class="navbar-icon fa-regular fa-circle-question"></i>
        //                         <div className='my-item ms-2'>FQAs</div>
        //                         <i class="navbar-icon-2 fa-solid fa-angle-right"></i>
        //                     </a>
        //                 </li>

        //             </ul>
        //         </div>
        //     </div>

        // </div>

    )
}

export default SideBar
