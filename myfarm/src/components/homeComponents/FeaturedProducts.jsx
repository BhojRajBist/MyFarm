// src/components/FarmerProducts.jsx
// import React, { useState, useEffect } from 'react';
// import './FeaturedProducts.css';
import img from '/home/bhoj/Desktop/Final Year/MyFarm/myfarm/src/components/assets/istockphoto-90634594-612x612.jpg'

// const FarmerProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/farmer/products/');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleBuyClick = (productName) => {
//     // Add your logic for handling the buy action
//     console.log(`Buy clicked for ${productName}`);
//   };

//   return (
//     <div className="farmer-products">
//       <h2>Farmers Products</h2>
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img className="product-image" src={img} alt={product.product_name} />
//           <div className="product-details">
//             <h3>{product.product_name}</h3>
//             <p>Quantity Available: {product.quantity_available}</p>
//             <p>Price per Unit: {product.price_per_unit}</p>
//             <button className="buy-button" onClick={() => handleBuyClick(product.product_name)}>
//               Buy
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FarmerProducts;


// src/components/FarmerProducts.jsx
// src/components/FarmerProducts.jsx
// import React, { useState, useEffect } from 'react';
// import './FeaturedProducts.css';  // Import the CSS file

// const FarmerProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/farmer/products/');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="cards-container">
//       {products.map((product) => (
//         product.quantity_available > 0 && (
//           <div key={product.id} className="card">
//             {product.quantity_available < 5 && (
//               <div className="low-stock">Low Stock</div>
//             )}
//             <img src={img} alt={product.product_name} />
//             <h3>{product.product_name}</h3>
//             <p>Price per Unit: {product.price_per_unit}</p>
//             <p>Available Quantity: {product.quantity_available}</p>
//             <button className="button">Buy</button>
//           </div>
//         )
//       ))}
//     </div>
//   );
// };

// export default FarmerProducts;

// src/components/FarmerProducts.jsx
import React, { useState, useEffect } from 'react';
import './FeaturedProducts.css';  // Import the CSS file

const FarmerProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantityOrdered, setQuantityOrdered] = useState(1);
  const [buyerName, setBuyerName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/farmer/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };



 const  handleGetDirection =(product) =>{
    //write the get direction code here
  };

  const handleOrderSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/farmer/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: selectedProduct,
          quantity_ordered: quantityOrdered,
          buyer_name: buyerName,
        }),
      });

      if (response.ok) {
        console.log('Order placed successfully!');
        // You can add additional logic here, e.g., close the modal, update UI, etc.
      } else {
        console.error('Failed to place order.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="cards-container">
      {products.map((product) => (
        product.quantity_available > 0 && (
          <div key={product.id} className="card">
            {product.quantity_available < 5 && (
              <div className="low-stock">Low Stock</div>
            )}
            <img src={img} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p>Price per Unit: {product.price_per_unit}</p>
            <p>Available Quantity: {product.quantity_available}</p>
            <div className="button-container">
                  <button className="button" onClick={() => handleBuyClick(product)}>
                    Buy
                  </button>
                  <button className="get-direction-button" onClick={() => handleGetDirection(product)}>
                    Get Direction
                  </button>
            </div>
          </div>
        )
      ))}

      {selectedProduct && (
        <div className="order-form-modal">
          <h2>Place Order</h2>
          <p>Product: {selectedProduct.product_name}</p>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantityOrdered}
            onChange={(e) => setQuantityOrdered(e.target.value)}
          />
          <label htmlFor="buyerName">Buyer Name:</label>
          <input
            type="text"
            id="buyerName"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
          />
          <button className="button" onClick={handleOrderSubmit}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default FarmerProducts;

