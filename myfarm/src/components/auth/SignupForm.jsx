// SignupForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    password: '',
    confirm_password: '',
    user_type: 'buyer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/signup/', formData);
      console.log('Signup successful:', response.data);
      // Handle successful signup, maybe redirect the user to login page
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // Handle signup failure, show error to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
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
        Confirm Password:
        <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required />
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;

