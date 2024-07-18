const ImageGallery = () => {
  return (
    <div className="px-20">
      <div className="text-center text-2xl font-serif font-semibold p-2 mb-4">
        <h2>Our best Products</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
        <div className="relative row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.thetreecenter.com/c/uploads/rhodendron-chionoides-1-450x450.webp"
            alt=""
          />
        </div>
        <div className="relative col-span-2 row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.thetreecenter.com/c/uploads/tiddlywinks-kalmia-1-340x453.png"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.thetreecenter.com/c/uploads/2021/01/Keepsake_Kalmia_1-copy-340x453.webp"
            alt=""
          />
        </div>

        <div className="relative">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.thetreecenter.com/c/uploads/limeglow-juniper-1-340x453.webp"
            alt=""
          />
        </div>
        <div className="relative row-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.thetreecenter.com/c/uploads/rhodendron-chionoides-1-450x450.webp"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.thetreecenter.com/c/uploads/pacific-blue-shore-juniper-1-340x453.png"
            alt=""
          />
        </div>
        <div className="relative col-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.thetreecenter.com/c/uploads/2022/02/Old_Gold_Juniper_1-copy-340x453.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
