import React, { useState, useMemo } from "react";
import AddProduct from "./AddProduct";
import { useGetAllProductsQuery } from "../../redux/features/products/ProductApi";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import Search from "./Search";
import { Link } from "react-router-dom";

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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products; // No search query, return all products
    }
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const openEditProductModal = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };
  const deleteProduct = () => {
    closeDeleteModal();
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

  // add modal functions
  const addProduct = () => {
    closeAddModal();
  };
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
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
          <option value="relevance"> Price</option>
          <option value="price">Relevance</option>
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
          {filteredProducts?.map((product) => (
            <tr className="border-b" key={product._id}>
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
      {/* add product */}
      <AddProduct
        isOpen={isAddModalOpen}
        closeAddModal={closeAddModal}
        addProduct={addProduct}
      />

      {/* Edit Product Modal */}
      <EditProduct
        isOpen={isEditModalOpen}
        closeEditModal={closeEditModal}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
        updateProduct={updateProduct}
      />
      {/* Delete Confirmation Modal */}
      <DeleteProduct
        isOpen={isDeleteModalOpen}
        closeDeleteModal={deleteProduct}
        deleteProduct={closeDeleteModal}
        editProduct={editProduct}
      />
    </div>
  );
};

export default ProductManagement;
