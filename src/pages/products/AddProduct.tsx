import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createProduct as createProductAction } from "../../redux/features/products/ProductSlice";
import { useCrateProductMutation } from "../../redux/features/products/ProductApi";

const AddProduct = ({ isOpen, closeAddModal }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    rating: 0,
    category: "",
    quantity: 0,
    image: "",
  });
  console.log(newProduct);
  const [createProductApi] = useCrateProductMutation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createProductApi(newProduct).unwrap();

      dispatch(createProductAction(response));
      closeAddModal();
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
              onClick={closeAddModal}
            >
              Cancel
            </button>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add Product
                </h3>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    value={newProduct.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="border p-2 w-full"
                  />
                  <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="border p-2 w-full mt-2"
                  />
                  <input
                    type="text"
                    name="category"
                    value={newProduct.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="border p-2 w-full mt-2"
                  />
                  <input
                    type="number"
                    name="quantity"
                    value={newProduct.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="border p-2 w-full mt-2"
                  />
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border p-2 w-full mt-2"
                  />
                  <input
                    type="number"
                    name="rating"
                    value={newProduct.rating}
                    onChange={handleChange}
                    placeholder="Rating"
                    className="border p-2 w-full mt-2"
                  />
                  <input
                    type="text"
                    name="image"
                    value={newProduct.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="border p-2 w-full mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
