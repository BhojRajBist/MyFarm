import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ForgetPasswordForm from './ForgetPasswordForm';

const AuthComponent = () => {
  const [activeForm, setActiveForm] = useState('');

  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
  };

  return (
    <div>
      <button onClick={() => handleFormChange('signup')}>Signup</button>
      <button onClick={() => handleFormChange('login')}>Login</button>
      <button onClick={() => handleFormChange('forgetPassword')}>Forget Password</button>
      <button onClick={handleLogout}>Logout</button>

      {activeForm === 'signup' && <SignupForm />}
      {activeForm === 'login' && <LoginForm />}
      {activeForm === 'forgetPassword' && <ForgetPasswordForm />}
    </div>
  );
};

export default AuthComponent;
