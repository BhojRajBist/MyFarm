import React, { useState } from 'react';
import axios from 'axios';
import AddPost from './AddPost'

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
  
    const formData = new FormData();
    formData.append('product_name', productDetails.product_name);
    formData.append('quantity_available', productDetails.quantity_available);
    formData.append('price_per_unit', productDetails.price_per_unit);
  
    // Ensure that product_photo is not null before appending it to the form data
    if (productDetails.product_photo) {
      formData.append('product_photo', productDetails.product_photo);
    }
  
    try {
      const response = await fetch('http://localhost:8000/farmer/products/', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        console.error('Failed to create post:', response.statusText);
        // Handle the error or show a message to the user.
        return;
      }
  
      // Post created successfully.
      console.log('Post created successfully:', await response.json());
      // Optionally, reset the form or redirect to another page.
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle the error or show a message to the user.
    }
  };

  return (
    <div className='main'>
      <div> <AddPost /> </div>
      <div>
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

    </div>
    </div>
    
  );
};

export default FarmerPosts;
