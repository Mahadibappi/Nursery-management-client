import React from "react";

const DeleteProduct = ({
  isOpen,
  closeDeleteModal,
  deleteProduct,
  editProduct,
}) => {
  if (!isOpen) return null;

  return (
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
                  <p className="text-sm text-gray-500">{editProduct.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
