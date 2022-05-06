import { Link, Outlet } from "react-router-dom";
import logo from '../../dist/asset/logo.png'
import './nav.scss'
import { auth } from "../../firebase/firebaseConfig";

export function Header( {currentUser}) {
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
          <div className="link--item" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="link--item" to="/sign-in">
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