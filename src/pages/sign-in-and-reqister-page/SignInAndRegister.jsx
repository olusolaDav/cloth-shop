import React from 'react'
import { Route, Routes } from 'react-router';
import Register from '../../components/register/Register'
import SignIn from '../../components/sign-in/signIn'


export default function SignInAndRegister() {
  return (
    <div className="sign-register">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}
