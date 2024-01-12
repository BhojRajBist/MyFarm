import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './FarmersPosts.css';

const defaultState = {
  image: '/path/to/default-image.jpg', // Replace with your default image path
  title: '',
  farmName: '',
  quantity: '',
  price: '',
};

const FarmersPosts = ({ onCreatePost }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [state, setState] = useState(defaultState);
  const [error, setError] = useState(null); // Manage errors

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setState({
        ...state,
        image: event.target.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFormChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      error: null, // Clear any previous errors on field change
    });
  };

  const handleCreatePost = async () => {
    setError(null); // Clear any existing errors before submission

    try {
      const formData = new FormData();
      formData.append('image', state.image);
      formData.append('title', state.title);
      formData.append('farmName', state.farmName);
      formData.append('quantity', state.quantity);
      formData.append('price', state.price);

      const response = await axios.post('http://127.0.0.1:8000/farmer/farmer-posts/', formData);
      console.log('API Response:', response.data);

      // Notify parent component
      onCreatePost(state);

      // Reset form and hide
      setState(defaultState);
      setIsFormVisible(false);
    } catch (error) {
      setError(error.message); // Display error message to the user
    }
  };

  return (
    <section className="farmers-posts">
      <h2>Farmers' Posts</h2>
      <div className="post-grid">
        {isFormVisible ? (
          <div className="post-card form-card">
            <form>
              {error && <div className="error">{error}</div>} {/* Display error message */}
              <label htmlFor="image">Image</label>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p> click to select a file</p>
              </div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                placeholder="Title"
              />
              <input
                type="text"
                name="farmName"
                value={formData.farmName}
                onChange={handleFormChange}
                placeholder="Farm Name"
              />
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleFormChange}
                placeholder="Quantity"
              />
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                placeholder="Price"
              />
              <button type="button" onClick={handleCreatePost}>
                Create Post
              </button>
            </form>
          </div>
        ) : (
          <button onClick={() => setIsFormVisible(true)}>Create Post</button>
        )}
      </div>
    </section>
  );
};

export default FarmersPosts;
