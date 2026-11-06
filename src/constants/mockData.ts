import type { Category, FoodItem } from '../types';

export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Burger', icon: '🍔' },
  { id: '2', name: 'Pizza', icon: '🍕' },
  { id: '3', name: 'Sushi', icon: '🍣' },
  { id: '4', name: 'Dessert', icon: '🍰' },
  { id: '5', name: 'Drinks', icon: '🥤' },
];

export const MOCK_FOODS: FoodItem[] = [
  {
    id: '1',
    name: 'Classic Cheeseburger',
    category: 'Burger',
    price: 8.99,
    rating: 4.8,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: 14.5,
    rating: 4.9,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500',
  },
  {
    id: '3',
    name: 'Fresh Salmon Sushi',
    category: 'Sushi',
    price: 12.0,
    rating: 4.7,
    deliveryTime: '30-40 min',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500',
  },
];

