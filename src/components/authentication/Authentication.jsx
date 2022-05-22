//import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useContext } from "react";
import { Link} from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../firebase/firebaseConfig";

import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import {userContext} from '../context/user.context'

import './sign-in.scss'

const defaultFormFields = {
  email: "",
  password: ""
}




const Authentication = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields || {};
 
 const { setCurrentUser } = useContext(userContext);

 const resetFormFields = () => {
   setFormFields(defaultFormFields);
 };

 const signInWithGoogle = async () => {
   const { user } = await signInWithGooglePopup();
   await createUserDocumentFromAuth(user)
   setCurrentUser(user);
   console.log(user);
 };

 const handleSubmit = async (event) => {
   event.preventDefault();

   try {
     const { user } = await signInAuthUserWithEmailAndPassword(email, password);
     resetFormFields();
     setCurrentUser(user);
     console.log('user', user);
   } catch (error) {
     switch (error.code) {
       case "auth/wrong-password":
         alert("incorrect password for email");
         break;
       case "auth/user-not-found":
         alert("no user associated with this email");
         break;
       default:
         console.log(error);
     }
   }
 };



   const handleChange = (event) => {
     const { name, value } = event.target;

     setFormFields({ ...formFields, [name]: value });
   };






    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">
          signin with your email and password or{" "}
          <Link className="link--item" to="/register">
            click here to create a new account
          </Link>
        </span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={handleChange}
            require="true"
            value={email}
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            require="true"
            value={password}
            handleChange={handleChange}
          />
          <Button type="submit">Sign in</Button>

          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </form>
      </div>
    );
}

export default Authentication


