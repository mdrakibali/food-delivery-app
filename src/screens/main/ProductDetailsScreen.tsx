import {
  ArrowLeft,
  Check,
  Clock,
  Flame,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { RootStackScreenProps } from '../../navigation/types';

interface AddOnOption {
  id: string;
  name: string;
  price: number;
}

const DEFAULT_ADDONS: readonly AddOnOption[] = [
  { id: '1', name: 'Extra Cheddar Cheese', price: 1.5 },
  { id: '2', name: 'Spicy Secret Sauce', price: 0.75 },
  { id: '3', name: 'Crispy Beef Bacon', price: 2.0 },
  { id: '4', name: 'Caramelized Onions', price: 0.99 },
];

export default function ProductDetailsScreen({
  route,
  navigation,
}: RootStackScreenProps<'ProductDetails'>) {
  const { product } = route.params;
  const insets = useSafeAreaInsets();

  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['1']);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  // Calculate total price based on base price, quantity and selected addons
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = DEFAULT_ADDONS.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalPrice = (product.price + addonsTotal) * quantity;

  const handleAddToCart = () => {
    Alert.alert(
      'Added to Cart! 🛒',
      `${quantity}x ${product.name} has been added to your cart ($${totalPrice.toFixed(
        2
      )}).`,
      [
        {
          text: 'Continue Shopping',
          style: 'cancel',
        },
        {
          text: 'Go to Cart',
          onPress: () => {
            navigation.navigate('Main', { screen: 'Cart' });
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Scrollable Product Details Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 110 }}
      >
        {/* Hero Image Container */}
        <View className="relative w-full h-80 bg-gray-100">
          <Image
            source={product.image}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Floating Top Bar (Back & Favorite buttons) */}
          <View
            style={{ paddingTop: Math.max(insets.top, 16) }}
            className="absolute top-0 left-0 right-0 px-5 flex-row items-center justify-between"
          >
            {/* Back Button */}
            <Pressable
              hitSlop={10}
              onPress={() => navigation.goBack()}
              className="w-11 h-11 rounded-full bg-white/95 items-center justify-center shadow-md active:bg-gray-100"
            >
              <ArrowLeft size={22} color="#1F2937" strokeWidth={2.2} />
            </Pressable>

            {/* Favorite Button */}
            <Pressable
              hitSlop={10}
              onPress={() => setIsFavorite(fav => !fav)}
              className="w-11 h-11 rounded-full bg-white/95 items-center justify-center shadow-md active:bg-gray-100"
            >
              <Heart
                size={22}
                color={isFavorite ? '#E04F36' : '#1F2937'}
                fill={isFavorite ? '#E04F36' : 'transparent'}
                strokeWidth={2}
              />
            </Pressable>
          </View>
        </View>

        {/* Content Body Sheet */}
        <View className="px-6 pt-6 -mt-6 bg-white rounded-t-3xl">
          {/* Rating, Delivery Time & Calories Badges */}
          <View className="flex-row items-center gap-3">
            {/* Rating */}
            <View className="flex-row items-center bg-[#FEF3C7] px-3 py-1 rounded-full">
              <Star size={13} color="#D97706" fill="#D97706" />
              <Text className="text-xs font-bold text-[#92400E] ml-1">
                {product.rating ? product.rating.toFixed(1) : '4.8'}
              </Text>
              <Text className="text-xs text-[#B45309] ml-1">
                ({product.reviewsCount ?? 120}+)
              </Text>
            </View>

            {/* Delivery Time */}
            <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full">
              <Clock size={13} color="#6B7280" />
              <Text className="text-xs font-medium text-gray-700 ml-1">
                {product.deliveryTime ?? '20-25 min'}
              </Text>
            </View>

            {/* Calories */}
            <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full">
              <Flame size={13} color="#EF4444" />
              <Text className="text-xs font-medium text-gray-700 ml-1">
                {product.calories ?? '380 kcal'}
              </Text>
            </View>
          </View>

          {/* Product Title and Quantity Selector */}
          <View className="flex-row items-center justify-between mt-4">
            <View className="flex-1 mr-4">
              <Text className="text-2xl font-extrabold text-gray-900 leading-tight">
                {product.name}
              </Text>
              <Text className="text-xs font-semibold text-[#54A312] mt-1 uppercase tracking-wider">
                {product.category}
              </Text>
            </View>

            {/* Quantity Selector: [-] 1 [+] */}
            <View className="flex-row items-center bg-gray-100 rounded-full px-2 py-1">
              <Pressable
                onPress={handleDecrement}
                hitSlop={8}
                className="w-8 h-8 rounded-full bg-white items-center justify-center shadow-xs active:bg-gray-50"
              >
                <Minus size={15} color="#1F2937" strokeWidth={2.5} />
              </Pressable>
              <Text className="text-base font-bold text-gray-900 px-3.5">
                {quantity}
              </Text>
              <Pressable
                onPress={handleIncrement}
                hitSlop={8}
                className="w-8 h-8 rounded-full bg-[#54A312] items-center justify-center shadow-xs active:opacity-90"
              >
                <Plus size={15} color="#FFFFFF" strokeWidth={2.5} />
              </Pressable>
            </View>
          </View>

          {/* About / Description */}
          <View className="mt-5">
            <Text className="text-base font-bold text-gray-900 mb-2">
              Description
            </Text>
            <Text className="text-sm text-gray-500 leading-relaxed">
              {product.description ??
                'Prepared with fresh organic ingredients, premium seasoning, and grilled to perfection. Served fresh and warm with chef-special secret dressing.'}
            </Text>
          </View>

          {/* Choice of Add-ons */}
          <View className="mt-6">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-base font-bold text-gray-900">
                Choice of Add-ons
              </Text>
              <Text className="text-xs font-medium text-gray-400">
                Optional
              </Text>
            </View>

            {DEFAULT_ADDONS.map(addon => {
              const isSelected = selectedAddons.includes(addon.id);

              return (
                <Pressable
                  key={addon.id}
                  onPress={() => toggleAddon(addon.id)}
                  className={`flex-row items-center justify-between p-3.5 mb-2.5 rounded-2xl border ${
                    isSelected
                      ? 'border-[#54A312] bg-[#F2F8ED]'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <View className="flex-row items-center gap-3">
                    {/* Checkbox box */}
                    <View
                      className={`w-5 h-5 rounded-md items-center justify-center border ${
                        isSelected
                          ? 'bg-[#54A312] border-[#54A312]'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {isSelected ? (
                        <Check size={13} color="#FFFFFF" strokeWidth={3} />
                      ) : null}
                    </View>

                    <Text
                      className={`text-sm font-medium ${
                        isSelected ? 'text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      {addon.name}
                    </Text>
                  </View>

                  <Text
                    className={`text-sm font-semibold ${
                      isSelected ? 'text-[#54A312]' : 'text-gray-500'
                    }`}
                  >
                    +${addon.price.toFixed(2)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Bar with Total Price & Add to Cart */}
      <View
        style={{ paddingBottom: Math.max(insets.bottom, 16) }}
        className="absolute bottom-0 left-0 right-0 bg-white px-6 pt-3.5 border-t border-gray-100 flex-row items-center justify-between shadow-lg"
      >
        {/* Total Price */}
        <View>
          <Text className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Total Price
          </Text>
          <Text className="text-2xl font-extrabold text-[#54A312]">
            ${totalPrice.toFixed(2)}
          </Text>
        </View>

        {/* Add to Cart Button */}
        <Pressable
          onPress={handleAddToCart}
          className="flex-row items-center bg-[#54A312] px-7 py-4 rounded-2xl shadow-md active:opacity-90"
        >
          <ShoppingBag size={20} color="#FFFFFF" strokeWidth={2.2} />
          <Text className="text-white text-base font-bold ml-2.5">
            Add to Cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

