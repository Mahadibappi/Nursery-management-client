export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  category: {
    image: string;
    details: Array<{ [key: string]: string }>;
  };
};

export type Category = {
  id: string;
  title: string;
  image: string;
  products: Product[];
};
