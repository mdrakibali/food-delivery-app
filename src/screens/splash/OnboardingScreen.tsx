import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  View,
} from 'react-native';
import type { RootStackScreenProps } from '../../navigation/types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface OnboardingSlide {
  id: string;
  image: any;
  title: string;
  description: string;
}

const SLIDES: OnboardingSlide[] = [
  {
    id: '1',
    image: require('../../assets/images/splash/chef.png'),
    title: 'Welcome to the most tastiest app',
    description: 'You know, this app is edible meaning you can eat it!',
  },
  {
    id: '2',
    image: require('../../assets/images/splash/delivery-man.png'),
    title: 'We use nitro on bicycles for delivery!',
    description: "For very fast delivery we use nitro on bicycles, kidding, but we're very fast.",
  },
  {
    id: '3',
    image: require('../../assets/images/splash/birthday-girl.png'),
    title: "We're the besties of birthday peoples",
    description: 'We send cakes to our plus members, (only one cake per person)',
  },
];

export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Real-time scroll listener: swipe korar sathe sathe smooth vabe index update hobe
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollOffset / SCREEN_WIDTH);
    if (currentIndex !== activeIndex && currentIndex >= 0 && currentIndex < SLIDES.length) {
      setActiveIndex(currentIndex);
    }
  };

  const handleSkip = () => {
    navigation.replace('Welcome');
  };

  const handleNext = () => {
    if (activeIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
      setActiveIndex(activeIndex + 1);
    } else {
      navigation.replace('Welcome');
    }
  };

  return (
    <View className="w-full h-full bg-white flex justify-between items-center py-16">
      {/* 1. Top Logo */}
      <View className="px-6 w-full items-center">
        <Image
          source={require('../../assets/images/logo/sub-logo.png')}
          className="w-[70px] h-[24px]"
          resizeMode="contain"
        />
      </View>

      {/* 2. Full-Width Edge-to-Edge Slider */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })}
        renderItem={({ item }) => (
          <View
            style={{ width: SCREEN_WIDTH }}
            className="items-center justify-center space-y-6"
          >
            {/* Image container: no side padding, scales naturally */}
            <Image
              source={item.image}
              className="w-[320px] h-[320px] max-w-[85vw]"
              resizeMode="contain"
            />

            {/* Text container: padded cleanly with px-6 */}
            <View className="px-6 space-y-3">
              <Text className="text-4xl font-extrabold text-center text-gray-900 leading-tight">
                {item.title}
              </Text>
              <Text className="text-base text-gray-500 text-center px-4">
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />

      {/* 3. Bottom Controls */}
      <View className="w-full px-6 space-y-6">
        {/* Original Circular Indicator Dots */}
        <View className="flex-row justify-center items-center gap-2 py-3">
          {SLIDES.map((_, index) => (
            <View
              key={index}
              className={`size-4 rounded-full ${
                index === activeIndex ? 'bg-[#5EAD1D]' : 'bg-[#ECF1E8]'
              }`}
            />
          ))}
        </View>

        {/* Buttons Row */}
        <View className="w-full flex-row gap-2 justify-between items-center">
          <Pressable
            onPress={handleSkip}
            className="w-[98px] h-[52px] rounded-lg bg-[#ECF1E8] flex justify-center items-center active:opacity-80"
          >
            <Text className="font-bold text-[#5EAD1D] text-center py-3">
              Skip
            </Text>
          </Pressable>

          <Pressable
            onPress={handleNext}
            className="flex-1 h-[52px] rounded-lg bg-[#5EAD1D] flex justify-center items-center active:opacity-80"
          >
            <Text className="font-bold text-white text-center py-3">
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
