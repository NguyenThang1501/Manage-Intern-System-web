import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container flexSB">
                <div className="logo">
                    <img src="./images/logo-hus.jpg" alt='logo-hus'/>
                    <div>
                        <h1>HUS - VNU</h1>
                        <span>STUDENT INTERNSHIP MANAGEMENT SYSTEM</span>
                    </div>
                    
                </div>
                <div className="social">
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>
                </div>
            </div>

        </section>
    </>
  )
}

export default Head
