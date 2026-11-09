import { Plus, Star } from 'lucide-react-native';
import React, { useState } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

interface CategoryItem {
  id: string;
  name: string;
}

interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  rating?: number;
  image: ImageSourcePropType;
}

const CATEGORIES: readonly CategoryItem[] = [
  { id: 'offers', name: 'Offers' },
  { id: 'burger', name: 'Burger' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'donuts', name: 'Donuts' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'dessert', name: 'Dessert' },
];

const PRODUCTS: readonly ProductItem[] = [
  {
    id: '1',
    name: 'Classic Burger',
    category: 'Burger',
    price: 12.75,
    rating: 4.8,
    image: require('../../assets/images/product/burger.jpg'),
  },
  {
    id: '2',
    name: 'Cola',
    category: 'Offers',
    price: 3.99,
    rating: 4.4,
    image: {
      uri: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80',
    },
  },
  {
    id: '3',
    name: 'Sweet Donuts',
    category: 'Dessert',
    price: 6.99,
    rating: 4.7,
    image: require('../../assets/images/product/dessert.jpeg'),
  },
  {
    id: '4',
    name: 'Italian Pizza',
    category: 'Pizza',
    price: 15.5,
    rating: 4.6,
    image: require('../../assets/images/product/pizza.jpg'),
  },
  {
    id: '5',
    name: 'Creamy Pasta',
    category: 'Pasta',
    price: 11.2,
    rating: 4.5,
    image: require('../../assets/images/product/pasta1.jpg'),
  },
  {
    id: '6',
    name: 'Spicy Penne',
    category: 'Pasta',
    price: 13.0,
    rating: 4.3,
    image: require('../../assets/images/product/pasta2.jpeg'),
  },
  {
    id: '7',
    name: 'Choco Cake',
    category: 'Dessert',
    price: 8.5,
    rating: 4.9,
    image: require('../../assets/images/product/dessert2.webp'),
  },
  {
    id: '8',
    name: 'Double Burger',
    category: 'Burger',
    price: 14.99,
    rating: 4.9,
    image: {
      uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    },
  },
];

export default function FeedProduct() {
  const [activeCategory, setActiveCategory] = useState<string>('Offers');

  const filteredProducts =
    activeCategory === 'Offers'
      ? PRODUCTS
      : PRODUCTS.filter(
          item =>
            item.category.toLowerCase() === activeCategory.toLowerCase() ||
            (activeCategory === 'Donuts' && item.category === 'Dessert'),
        );

  const renderCategoryItem = ({ item }: { item: CategoryItem }) => {
    const isSelected = activeCategory === item.name;

    return (
      <Pressable
        onPress={() => setActiveCategory(item.name)}
        className={`px-6 py-3 rounded-xl mr-3 border ${
          isSelected
            ? 'bg-[#EDF4EA] border-[#E2EDE0]'
            : 'bg-white border-gray-200'
        }`}
      >
        <Text
          className={`text-base ${
            isSelected
              ? 'text-[#2E332B] font-bold'
              : 'text-gray-500 font-medium'
          }`}
        >
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className="w-full py-6">
      {/* Category Filter Tabs */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryItem}
      />

      {/* 2-Column Product Grid */}
      <View className="flex-row flex-wrap justify-between mt-6">
        {filteredProducts.map(product => (
          <Pressable
            key={product.id}
            className="w-[48%] bg-white rounded-3xl p-2.5 mb-4 shadow-sm border border-gray-100"
          >
            {/* Product Image Container */}
            <View className="relative w-full h-36 rounded-2xl overflow-hidden bg-gray-50">
              <Image
                source={product.image}
                className="w-full h-full"
                resizeMode="cover"
              />
              {/* Rating Badge */}
              {product.rating ? (
                <View className="absolute bottom-2 left-2 flex-row items-center bg-white/90 px-2 py-0.5 rounded-full shadow-xs">
                  <Star size={11} color="#F59E0B" fill="#F59E0B" />
                  <Text className="text-[11px] font-bold text-gray-800 ml-1">
                    {product.rating.toFixed(1)}
                  </Text>
                </View>
              ) : null}
            </View>

            {/* Product Name */}
            <Text
              numberOfLines={1}
              className="text-[15px] font-semibold text-gray-900 mt-2.5"
            >
              {product.name}
            </Text>

            {/* Price & Add Button */}
            <View className="flex-row items-center justify-between mt-1.5">
              <Text className="text-base font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </Text>
              <Pressable
                hitSlop={8}
                className="w-8 h-8 rounded-full bg-[#EDF4EA] items-center justify-center active:opacity-70"
              >
                <Plus size={18} color="#54A312" strokeWidth={2.5} />
              </Pressable>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
