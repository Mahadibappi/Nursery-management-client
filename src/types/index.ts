export type TProduct = {
  _id: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  category: string;
  height: string;
  potSize: string;
};

export type TCategory = {
  id: string;
  title: string;
  image: string;
  products: TProduct[];
};
