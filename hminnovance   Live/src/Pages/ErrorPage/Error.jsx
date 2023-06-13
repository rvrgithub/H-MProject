import React from 'react'
import "./error.css"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    // <div className="error_container">
    //   <div>
    //     <img src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif' alt='error' />
    //   </div>
    //   <div className=" col error-message">
    // <div>
    //   <span className="error-2"><span class="error-1">O</span>ops! You're lost</span>
    //   <p style={{ lineHeight: "35px" }}>Sorry the page you are looking could not be found</p>
    //   <Link to='/home' className='errorBtn'>Back to Home</Link>
    // </div>
    //   </div>
    // </div>
    <section >
      <div className='row' >
        <div className='col-md-7 ' >
          <img src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif' alt='error' style={{ width: "100%", height: "100%" }} />
        </div>
        <div className='col-md-5 m-auto'>
          <div className=" col error-message">
            <div>
              <span className="error-2"><span class="error-1">O</span>ops! You're lost</span>
              <p style={{ lineHeight: "35px" }}>Sorry the page you are looking could not be found
              </p>
              <Link to='/home' className='errorBtn'>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Error