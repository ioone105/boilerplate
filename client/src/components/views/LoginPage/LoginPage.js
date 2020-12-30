// import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginUser} from '../../../_action/user_action';

function LoginPage(props) {


  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (a) => {
    setPassword(a.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log('email : ' + Email);
    // console.log('Password : ' + Password);

    let body = {
      email : Email,
      password : Password
    }

    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          props.history.push('/')
        } else {
          alert('Error');
        }
      })
    
  }


  return (
    <div>
      <div style={{
      display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height: '100vh'
    }}>

        <form 
          style={{display:'flex', flexDirection:'column'}}
          onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler} />
          <br />
          <button>
            Login
          </button>


        </form>

      </div>
    </div>
  )
}

export default LoginPage