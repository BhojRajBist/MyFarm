// ForgetPasswordForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ForgetPasswordForm = () => {
  const [formData, setFormData] = useState({
    phone_number: '',
    username: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/forget-password/', formData);
      console.log('Password reset link sent:', response.data);
      // Handle success, maybe show a message to the user
    } catch (error) {
      console.error('Password reset failed:', error.response.data);
      // Handle failure, show error to the user
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
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ForgetPasswordForm;
