import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_action/user_action';


export default function (SpecificComponent, option, adminRoute=null) {

  // option의 종류
  // null : 아무나 출입이 가능한 페이지
  // true : 로그인한 유저만 출입이 가능한 페이지
  // false : 로그인한 유저는 출입 불가능한 페이지

  // amdinRoute의 값이 true인 경우 admin 유저만 들어갈 수 있는 페이지

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then(response =>{
        console.log(response)

        //로그인하지 않은 상태
        if(!response.payload.isAuth) {
          if(option) {
            props.history.push('/login')
          }


        } else {
          //로그인 한 상태
          if(adminRoute && !response.patload.isAdmin) { //어드민페이지에 어드민이 아닌자가 들어가려하면
            props.history.push('/');
          } else {
            if(option === false)
             props.history.push('/');
          }
        }
         
      })
    }, [])
    return (
      <SpecificComponent />
    )
  }
  return AuthenticationCheck
}

