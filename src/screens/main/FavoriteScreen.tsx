import React from 'react';
import { Text, View } from 'react-native';

export default function FavoriteScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold text-gray-800">Favorites</Text>
      <Text className="text-sm text-gray-500 mt-1">Your favorite foods will appear here</Text>
    </View>
  );
}

