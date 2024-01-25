// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    phone_number: '',
    password: '',
    user_type: 'buyer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/login/', formData);
      console.log('Login successful:', response.data);
      // Handle successful login, maybe redirect the user to the dashboard
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login failure, show error to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />
      <label>
        User Type:
        <select name="user_type" value={formData.user_type} onChange={handleChange}>
          <option value="buyer">Buyer</option>
          <option value="farmer">Farmer</option>
        </select>
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
