import React from 'react'
import Layout from '../Components/layouts/Layout'

const Cart = () => {
  return (
    <>
    <Layout>

    <div className="cart-item flex items-center justify-between border-b py-4">
      {/* Product Image and Details */}
      <div className="item-details flex items-center gap-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Product Name"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">Product Name</h3>
          <p className="text-gray-600">$29.99</p>
        </div>
      </div>

      {/* Quantity Section */}
      <div className="quantity-controls flex items-center gap-2">
        <button className="px-3 py-1 bg-gray-200 rounded">-</button>
        <span className="font-medium">1</span>
        <button className="px-3 py-1 bg-gray-200 rounded">+</button>
      </div>

      {/* Total Price */}
      <p className="text-gray-800 font-semibold">$29.99</p>

      {/* Remove Button */}
      <button className="text-red-500 hover:text-red-700">Remove</button>
    </div>
 {/* -------------------------------------------------------------------------------- */}
    <div className="cart-item flex items-center justify-between border-b py-4">
      {/* Product Image and Details */}
      <div className="item-details flex items-center gap-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Product Name"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">Product Name</h3>
          <p className="text-gray-600">$29.99</p>
        </div>
      </div>

      {/* Quantity Section */}
      <div className="quantity-controls flex items-center gap-2">
        <button className="px-3 py-1 bg-gray-200 rounded">-</button>
        <span className="font-medium">1</span>
        <button className="px-3 py-1 bg-gray-200 rounded">+</button>
      </div>

      {/* Total Price */}
      <p className="text-gray-800 font-semibold">$29.99</p>

      {/* Remove Button */}
      <button className="text-red-500 hover:text-red-700">Remove</button>
    </div>
 


    </Layout>
      
    </>
  )
}

export default Cart
