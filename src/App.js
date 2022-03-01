
import './App.css'
import Homepage from '../src/pages/homepage/Homepage';


import {Route, Routes} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';


const Contact= () => {
   return <div> 
    <h1>Contact us via ......</h1>
  </div>
}

const SignIn = () => {
  return <div> 
   <h1>Sign in page</h1>
 </div>
}


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/shop' element= {<ShopPage />} />
          <Route path='/contact' element= {<Contact/>} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default App;
