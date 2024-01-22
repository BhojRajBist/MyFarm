import React, { useState } from 'react';
import axios from 'axios';

const FarmerPosts = () => {
  const [formData, setFormData] = useState({
    farm_name: '',
    email_or_contact: '',
    farm_type: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/farmer/farmers/', formData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Error posting farmer data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Farm Name:
        <input type="text" name="farm_name" value={formData.farm_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email or Contact:
        <input type="text" name="email_or_contact" value={formData.email_or_contact} onChange={handleChange} />
      </label>
      <br />
      <label>
        Farm Type:
        <input type="text" name="farm_type" value={formData.farm_type} onChange={handleChange} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FarmerPosts;
