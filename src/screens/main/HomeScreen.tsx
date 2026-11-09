import React from 'react';
import { ScrollView, View } from 'react-native';
import type { MainTabScreenProps } from '../../navigation/types';
import FeedProduct from './FeedProduct';
import HomeSlide from './HomeSlide';
import HomeTopBar from './HomeTopBar';

export default function HomeScreen(_props: MainTabScreenProps<'Home'>) {
  return (
    <View className="flex-1 bg-white">
      {/* 1. Fixed / Sticky Top Bar (Never scrolls away) */}
      <HomeTopBar />

      {/* 2. Scrollable Body Content */}
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-6 pt-4 pb-32"
      >
        <HomeSlide />
        <FeedProduct />
      </ScrollView>
    </View>
  );
}
