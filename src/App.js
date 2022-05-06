
import './App.css'
import Homepage from '../src/pages/homepage/Homepage';
import {Header} from './components/nav/Nav'
import {Route, Routes} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';
//import SignInAndRegister from './pages/sign-in-and-reqister-page/SignInAndRegister';
import SignIn from './components/sign-in/signIn';
import Register from './components/register/Register';
import React from 'react';
//import { auth, createUserProfileDocument } from './firebase/firebaseConfig';


const Contact= () => {
   return <div> 
    <h1>Contact us via ......</h1>
  </div>
}



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // componentDidMount() {
  //   const { setCurrentUser } = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot((snapShot) => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });
  //     }

  //     setCurrentUser(userAuth);
  //   });
  // }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    );
  }
}

export default App;
 