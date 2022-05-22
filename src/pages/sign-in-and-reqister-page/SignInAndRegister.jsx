import React from 'react'
import { Route, Routes } from 'react-router';
import Register from '../../components/register/Register'
import SignIn from '../../components/authentication/Authentication'


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
