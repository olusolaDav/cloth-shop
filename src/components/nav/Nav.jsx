import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../dist/asset/logo.png'
import './nav.scss'
import {  signOutUser } from "../../firebase/firebaseConfig";

import { userContext } from "../context/user.context";

export function Header( ) {
 const {currentUser, setCurrentUser} = useContext(userContext)


 const signOutHandler = async () => {
   await signOutUser();
   setCurrentUser(null);
 };

  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <img src={logo} alt="logo" className="nav--logo" />{" "}
      </Link>
      <nav className="link">
        <Link className="link--item" to="/shop">
          SHOP
        </Link>
        <Link className="link--item" to="contact">
          CONTACT
        </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}