import  { useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import { auth, creatUserDocumentFromAuth } from "../../firebase/firebaseConfig";
//import { useForm } from "react-hook-form";

import "./register.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const defaultFormField = {
  displayName: "",
  email: "",
  paswword: "",
  changePassword: ""
}




const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields || {};
   //const { register,  handleSubmit,  formState: { errors }, } = useForm();
  //console.log("formFields:", formFields);



  const resetFormFields = () => {
    setFormFields(defaultFormField)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormFields({ ...formFields, [name]: value });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("sorry, password do not match");
      return;
    }
    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        email,
        password 
      );

      await creatUserDocumentFromAuth(user, {displayName})

      resetFormFields();
      
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        alert('connection fail, please check your network')
      };
        if (error.code === "auth/email-already-in-use") {
          alert("Email already exist");
        } else {
          console.log("Account creation an error", error);
        }
   }
  }

  return (
    <div className="register">
      <h2>Create a new account</h2>
      <span className="title">
        register with a valid email and password or{" "}
        <Link className="link--item" to="/sign-in">
          {" "}
          click here to signin
        </Link>{" "}
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="display name"
          handleChange={handleChange}
          require="true"
          value={displayName}
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          label="confirm password"
          require="true"
          value={confirmPassword}
          handleChange={handleChange}
        />
        <Button  type="submit">Sign Up</Button>
      </form>
    </div>
  );
}


export default Register;


