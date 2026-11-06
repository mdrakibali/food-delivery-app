export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  deliveryTime: string;
  image?: string;
}
