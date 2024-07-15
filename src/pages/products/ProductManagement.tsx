import React, { useState, useEffect } from "react";

import AddProduct from "./AddProduct";
import { useGetAllProductsQuery } from "../../redux/features/products/ProductApi";

const ProductManagement = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("relevance");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    // Load products and categories here, set totalPages
  }, []);

  const openEditProductModal = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const updateProduct = () => {
    // Update product logic here
    closeEditModal();
  };

  const openDeleteConfirmation = (product) => {
    setEditProduct(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const deleteProduct = () => {
    // Delete product logic here
    closeDeleteModal();
  };
  // add modal functions
  const openAddProductModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Load products for the previous page
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Load products for the next page
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={openAddProductModal}
        >
          Add Product
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="border p-2 w-full"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2"
        >
          <option value="">All Categories</option>
          {/* Render categories here */}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2"
        >
          <option value="relevance">Relevance</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>

      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/6 py-2">Image</th>
            <th className="w-1/4 py-2">Title</th>
            <th className="w-1/6 py-2">Price</th>
            <th className="w-1/4 py-2">Category</th>
            <th className="w-1/6 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr className="border-b" key={product.id}>
              <td className="py-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-12 w-12 object-cover"
                />
              </td>
              <td className="py-2">{product.title}</td>
              <td className="py-2">${product.price}</td>
              <td className="py-2">{product.category}</td>
              <td className="py-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => openEditProductModal(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => openDeleteConfirmation(product)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={prevPage}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={nextPage}>
          Next
        </button>
      </div>

      <AddProduct isOpen={isAddModalOpen} closeAddModal={closeAddModal} />

      {/* Edit Product Modal */}
      {isEditModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={updateProduct}
                >
                  Update
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
              </div>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Edit Product
                    </h3>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={editProduct.title}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            title: e.target.value,
                          })
                        }
                        placeholder="Title"
                        className="border p-2 w-full"
                      />
                      <input
                        type="number"
                        value={editProduct.price}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            price: e.target.value,
                          })
                        }
                        placeholder="Price"
                        className="border p-2 w-full mt-2"
                      />
                      <input
                        type="text"
                        value={editProduct.category}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            category: e.target.value,
                          })
                        }
                        placeholder="Category"
                        className="border p-2 w-full mt-2"
                      />
                      <input
                        type="number"
                        value={editProduct.quantity}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            quantity: e.target.value,
                          })
                        }
                        placeholder="Quantity"
                        className="border p-2 w-full mt-2"
                      />
                      <textarea
                        value={editProduct.description}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                        className="border p-2 w-full mt-2"
                      />
                      <input
                        type="number"
                        value={editProduct.rating}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            rating: e.target.value,
                          })
                        }
                        placeholder="Rating"
                        className="border p-2 w-full mt-2"
                      />
                      <input
                        type="text"
                        value={editProduct.image}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
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
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={deleteProduct}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
              </div>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Are you sure you want to delete this product?
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {editProduct.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Details */}
      {selectedProduct && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {selectedProduct.title}
                    </h3>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="h-64 w-full object-cover mt-4"
                    />
                    <div className="mt-4">
                      <p>
                        <strong>Price:</strong> ${selectedProduct.price}
                      </p>
                      <p>
                        <strong>Category:</strong> {selectedProduct.category}
                      </p>
                      <p>
                        <strong>Rating:</strong> {selectedProduct.rating}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {selectedProduct.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
