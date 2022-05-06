//import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { Component } from 'react';
import { Link} from "react-router-dom";
import { signInWithGooglePopup, creatUserDocumentFromAuth } from '../../firebase/firebaseConfig';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';


import './sign-in.scss'


export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };




  logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user)
    console.log('user:', user)
 

    //console.log(user)
  }




  render() {
   

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">
          signin with your email and password or{" "}
          <Link className="link--item" to="/register">
            click here to create a new account
          </Link>
        </span>

        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={this.handleChange}
          require="true"
          value={this.state.email}
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          require="true"
          value={this.state.password}
          handleChange={this.handleChange}
        />
        <Button type="button" onClick={this.signInUser}>
          Sign in
        </Button>
        <Button type="button" onClick={this.logGoogleUser}>
          Sign in with Google
        </Button>
      </div>
    );
  }
}



