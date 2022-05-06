import React, { Component } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import {auth} from "../../firebase/firebaseConfig";

import "./register.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "", telephone: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

register = async () => {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            this.state.email,
            this.state.password
        );
        console.log(user);
        }catch (error){
            console.log(error.message)
        }
    }


  render() {
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

        <Button onClick={this.register}>Register</Button>
      </div>
    );
  }
}


