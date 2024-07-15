import React, { useState } from "react";

const AddProduct = ({ isOpen, closeAddModal, addProduct }) => {
  const [newProduct, setNewProduct] = useState({});

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => addProduct(newProduct)}
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
                      value={newProduct.title}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          title: e.target.value,
                        })
                      }
                      placeholder="Title"
                      className="border p-2 w-full"
                    />
                    <input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          price: e.target.value,
                        })
                      }
                      placeholder="Price"
                      className="border p-2 w-full mt-2"
                    />
                    <input
                      type="text"
                      value={newProduct.category}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          category: e.target.value,
                        })
                      }
                      placeholder="Category"
                      className="border p-2 w-full mt-2"
                    />
                    <input
                      type="number"
                      value={newProduct.quantity}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          quantity: e.target.value,
                        })
                      }
                      placeholder="Quantity"
                      className="border p-2 w-full mt-2"
                    />
                    <textarea
                      value={newProduct.description}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          description: e.target.value,
                        })
                      }
                      placeholder="Description"
                      className="border p-2 w-full mt-2"
                    />
                    <input
                      type="number"
                      value={newProduct.rating}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          rating: e.target.value,
                        })
                      }
                      placeholder="Rating"
                      className="border p-2 w-full mt-2"
                    />
                    <input
                      type="text"
                      value={newProduct.image}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          image: e.target.value,
                        })
                      }
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
    )
  );
};

export default AddProduct;
