import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LangingPage';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/auth/ResetPassword';
import { useSelector } from "react-redux";


function App() {
  const { access_token } = useSelector(state => state.auth);
  const [isAuthActive, setIsAuthActive] = useState(false);
  const [SignInState, setSignInState] = useState(false);



    // Check if access token exists in browser storage
    const access_token_stored = localStorage.getItem('access_token');
    
   

  const handleAuthActive = (isActive) => {
    setIsAuthActive(isActive);
  };

  const hadleSignInState =(SignInStateValue)=>
  {
    setSignInState(SignInStateValue)
    console.log(SignInStateValue)

  }

  return (
    <Router>
      <div className={`App ${isAuthActive ? 'auth-active' : ''}`}>
        <Header setAuthActive={handleAuthActive} SignInState={SignInState}/>
        <Routes>
          <Route path="/" element={<LandingPage isAuthActive={isAuthActive} OnSignInState={hadleSignInState} />} />
          <Route
            path="/dashboard"
            element={access_token||access_token_stored ? <Dashboard /> : <Navigate to="/" />}
          />
           <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
