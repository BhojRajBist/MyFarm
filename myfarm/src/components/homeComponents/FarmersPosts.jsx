import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './FarmersPosts.css';

const FarmersPosts = ({ onCreatePost }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    image: '/path/to/default-image.jpg',
    title: 'Default Title',
    farmName: 'Default Farm',
    quantity: 'Default Quantity',
    price: 'Default Price',
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFormData({
      ...formData,
      image: URL.createObjectURL(file),
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/farmer/farmer-posts/', formData);
      console.log('API Response:', response.data);

      onCreatePost(formData);

      setFormData({
        image: '/path/to/default-image.jpg',
        title: 'Default Title',
        farmName: 'Default Farm',
        quantity: 'Default Quantity',
        price: 'Default Price',
      });
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <section className="farmers-posts">
      <h2>Farmers' Posts</h2>
      <div className="post-grid">
        {isFormVisible ? (
          <div className="post-card form-card">
            <form>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag 'n' drop an image here, or click to select one</p>
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
