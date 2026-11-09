import { Heart, Menu, Search, ShoppingBag } from 'lucide-react-native';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeTopBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: Math.max(insets.top, 16) }}
      className="bg-[#54A312] px-5 pb-4 rounded-b-3xl shadow-sm"
    >
      {/* Top Row: Menu + Location + Heart & Bag */}
      <View className="flex-row items-center justify-between py-2">
        {/* Left: Menu & Location */}
        <View className="flex-row items-center gap-3 flex-1 mr-2">
          <Pressable
            hitSlop={8}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-white/10"
          >
            <Menu size={24} color="#FFFFFF" strokeWidth={2.2} />
          </Pressable>

          <View className="flex-1">
            <Text className="text-white text-lg font-bold">Home</Text>
            <Text
              numberOfLines={1}
              className="text-white/85 text-xs font-medium"
            >
              Road 12, Banani, Dhaka
            </Text>
          </View>
        </View>

        {/* Right: Favorites & Cart Bag */}
        <View className="flex-row items-center gap-1.5">
          <Pressable
            hitSlop={8}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-white/10"
          >
            <Heart size={22} color="#FFFFFF" strokeWidth={2} />
          </Pressable>
          <Pressable
            hitSlop={8}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-white/10"
          >
            <ShoppingBag size={22} color="#FFFFFF" strokeWidth={2} />
          </Pressable>
        </View>
      </View>

      {/* Bottom Row: Search Pill */}
      <View className="mt-2.5 flex-row items-center bg-white rounded-full px-4 h-11 shadow-xs">
        <Search size={19} color="#9CA3AF" />
        <TextInput
          placeholder="Search for food & restaurants"
          placeholderTextColor="#9CA3AF"
          className="flex-1 ml-2.5 text-sm text-gray-800 py-0"
        />
      </View>
    </View>
  );
}
