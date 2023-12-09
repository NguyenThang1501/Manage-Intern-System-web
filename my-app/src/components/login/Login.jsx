import './login.css'
import React, { useState, useEffect } from 'react'
import { loginAPI } from '../../services/UserServices';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

const token = '$2b$12$tvaCRm7ovjHaX.iGUn0yZudWXdlXS9fqk9nTvNmZmAzamVBQSZUjW'
const Login = () => {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         navigate.push('/add')
    //     }
    // }, [])

    // async function login() {
    //     console.warn(username, password)
    //     let item = { username, password }

    //     fetch('http://localhost:8000/auth/token', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ username, password }),
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 // Xử lý phản hồi thành công
    //                 return response.json();
    //             } else {
    //                 // Xử lý lỗi phản hồi
    //                 throw new Error('Yêu cầu không thành công');
    //             }
    //         })
    //         .then(data => {
    //             // Nhận mã JWT từ phản hồi backend
    //             const jwtToken = data.token;

    //             // Lưu trữ mã JWT trong trạng thái hoặc sử dụng
    //             // nó cho các yêu cầu API tiếp theo


    //             // Thực hiện các hành động khác sau khi nhận được mã JWT
    //             // ...
    //             axios.get("http://localhost:8000/auth/view-my-profile", {
    //                 headers: {
    //                     Authorization: `Bearer ${jwtToken}`
    //                 }
    //             })
    //                 // ,{
    //                 //     method: 'GET',
    //                 //     headers:{
    //                 //         "content-type":"application/json",
    //                 //         "accept":'application/json'
    //                 //     },
    //                 // }
    //                 .then(response => response.json())
    //                 .then(json => console.log(json))
    //                 .catch(e => console.error(e))
    //         })
    //         .catch(error => {
    //             // Xử lý lỗi
    //             console.error(error);
    //         });



        // axios.get("http://localhost:8000/auth/view-my-profile", {
        //     headers:{
        //         Authorization: `Bearer ${token}`
        //     }
        // }
        // axios.get("http://localhost:8000/auth/view-my-profile", {
        //     headers:{
        //         Authorization: `Bearer ${jwtToken}`
        //     }
        // })
        // ,{
        //     method: 'GET',
        //     headers:{
        //         "content-type":"application/json",
        //         "accept":'application/json'
        //     },
        // }
        // .then(response => response.json())
        // .then(json=> console.log(json))
        // .catch(e => console.error(e))

        // result = await result.json();
        // localStorage.setItem("user-infor",JSON.stringify(result))
        // navigate.push("/add")


    


    //}

    const login = async () => {
        try {
            const response = await axios.post('http://localhost:8000/auth/token',{
                username: username,
                password: password,
            });
            console.log(response.data)
        } catch (error){
            console.log(error)
        }
    }

    const handleLogin = async () => {
        alert("me")
        if (!username || !password) {

        }

        let res = await loginAPI(username, password);
        if (res && res.token) {
            localStorage.setItem("token", res.token)
        }
        console.log(">>>check login")
    }
    const handleSubmit = async e => {

    }
    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row row-login">
                    <div className="col-md-6 side-image">
                        <div className="text">
                            <p>Join the community of developers <i>- ludiflex</i></p>
                        </div>

                    </div>
                    <div className="col-md-6 right">

                        <div className="input-box">

                            <header className='header-login'>Đăng nhập</header>
                            <div className="input-field">
                                <input type="text"
                                    className="input"
                                    id="username" required="" autoComplete="off"
                                    value={username}
                                    onChange={(event) => setusername(event.target.value)} />
                                <label htmlFor="username">username</label>

                            </div>
                            <div className="input-field">
                                <input type="password" className="input"
                                    id="pass" required=""
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                                <label htmlFor="pass">Password</label>
                            </div>

                            <div className="input-field" onSubmit={handleSubmit}>
                                <input onClick={login} type="submit" className="submit" value="Đăng nhập" />
                            </div>
                            <div className="signin">
                                <span>
                                    <Link to="/">Quay lại trang chủ</Link>    
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div classNameName='row'>
        //     <div classNameName="col-6">
        //         <p>hello</p>
        //     </div>
        //     <div classNameName="col-6">
        //         <div classNameName="title">Đăng nhập</div>
        //         <div classNameName="text">username</div>
        //         <input
        //             type="text"
        //             placeholder="username"
        //             value={username}
        //             onChange={(event) => setusername(event.target.value)}
        //         />
        //         <div classNameName='input-2'>
        //             <input
        //                 type= {isShowPassword === true ? "text" : "password"}
        //                 placeholder="password"
        //                 value={password}
        //                 onChange={(event) => setPassword(event.target.value)}
        //             />
        //             <i classNameName={isShowPassword === true ? 'fa-solid fa-eye' :'fa-solid fa-eye-slash'}
        //                 onClick={() => setIsShowPassword(!isShowPassword)}

        //             ></i>

        //         </div>
        //         <button 
        //             classNameName={username && password ? "active": ""}
        //             disabled={username && password ? false : true}
        //             onClick={() => handleLogin()}
        //         >Đăng nhập</button>
        //         <div classNameName='back'>
        //             <i classNameName='fa-solid fa-angles-left'></i>Go back
        //         </div>
        //     </div>
        // </div>  
    )
}

export default Login