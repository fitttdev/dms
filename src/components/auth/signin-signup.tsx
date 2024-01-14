
import { useState } from 'react';
import './signin-signup.css'
import email from '../../assets/images/email.png';
import password from '../../assets/images/password.png';
import person from '../../assets/images/person.png';

export const Signin = () => {
  const [action, setAction] = useState("Signin");

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {
            action === "Signin" ? <div></div> :
              <div className="input">
                <img src={person} alt="" />
                <input type="text" placeholder='Name' />
              </div>
          }
          <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder='Email' />
          </div>
          <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        {
          action === "Sign Up" ? <div></div> : <div className="forgot-password">
            Forgot password? <span><a href="#">Click Here</a></span>
          </div>
        }
        <div className="submit-container">
          <div
            className={action === "Signin" ? "submit gray" : "submit"}
            onClick={() => { setAction("Sign Up") }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => { setAction("Signin") }}
          >
            Signin
          </div>
        </div>
      </div>
    </>
  )
}
