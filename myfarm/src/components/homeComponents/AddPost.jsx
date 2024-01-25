// src/components/AddPost.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddPost.css';

const AddPost = () => {
  const [productDetails, setProductDetails] = useState({
    product_name: '',
    quantity_available: 0,
    price_per_unit: 0.0,
    product_photo: null,
    farmer: '',
  });

  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    // Fetch the list of farmers from the backend
    const fetchFarmers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/farmer/farmers/');
        setFarmers(response.data);
      } catch (error) {
        console.error('Error fetching farmers:', error);
      }
    };

    fetchFarmers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_name', productDetails.product_name);
    formData.append('quantity_available', productDetails.quantity_available);
    formData.append('price_per_unit', productDetails.price_per_unit);
    formData.append('product_photo', productDetails.product_photo);
    formData.append('farmer', productDetails.farmer);

    try {
      const response = await axios.post('http://localhost:8000/farmer/products/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Post created successfully:', response.data);
        // Optionally, reset the form or redirect to another page.
      } else {
        console.error('Failed to create post:', response.statusText);
        // Handle the error or show a message to the user.
      }
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle the error or show a message to the user.
    }
  };

  return (
    <div className="add-post-container">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="product_name"
            value={productDetails.product_name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantity Available:
          <input
            type="number"
            name="quantity_available"
            value={productDetails.quantity_available}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Price per Unit:
          <input
            type="number"
            name="price_per_unit"
            value={productDetails.price_per_unit}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Product Photo:
          <input
            type="file"
            name="product_photo"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Farmer:
          <select
            name="farmer"
            value={productDetails.farmer}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Farmer</option>
            {farmers.map((farmer) => (
              <option key={farmer.id} value={farmer.id}>{farmer.farm_name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
