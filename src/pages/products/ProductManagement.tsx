import { useState, useMemo } from "react";
import AddProduct from "./AddProduct";
import { useGetAllProductsQuery } from "../../redux/features/products/ProductApi";
import Search from "./Search";

interface Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
  rating: number;
  image: string;
}

const ProductManagement: React.FC = () => {
  const { data: products } = useGetAllProductsQuery(undefined);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("relevance");
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (!searchQuery.trim()) {
      return products; // No search query, return all products
    }
    return products.filter((product: Product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const openAddProductModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
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
          {filteredProducts?.map((product: Product) => (
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
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
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
        <span>Page {currentPage}</span>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={nextPage}>
          Next
        </button>
      </div>
      {/* Add Product Modal */}
      <AddProduct isOpen={isAddModalOpen} closeAddModal={closeAddModal} />
      {/* Edit Product Modal */}
    </div>
  );
};

export default ProductManagement;
