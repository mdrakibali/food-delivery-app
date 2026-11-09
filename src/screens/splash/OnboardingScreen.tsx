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

  // User jokhon swipe korbe, edge-to-edge width diye offset nikhut vabe hishab hobe
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollOffset / SCREEN_WIDTH);
    if (currentIndex !== activeIndex && currentIndex >= 0 && currentIndex < SLIDES.length) {
      setActiveIndex(currentIndex);
    }
  };

  // Skip button: direct Welcome screen e niye jabe
  const handleSkip = () => {
    navigation.replace('Welcome');
  };

  // Next button: porer slide e scroll korbe
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
    <View className="flex-1 bg-white justify-between items-center py-12">
      {/* 1. Top Header Logo (Padded) */}
      <View className="px-6 w-full items-center">
        <Image
          source={require('../../assets/images/logo/sub-logo.png')}
          className="w-[70px] h-[24px]"
          resizeMode="contain"
        />
      </View>

      {/* 2. Full-Width Edge-to-Edge Slider (No side clipping) */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        className="w-full flex-grow-0"
        renderItem={({ item }) => (
          <View
            style={{ width: SCREEN_WIDTH }}
            className="items-center justify-center px-6 space-y-4"
          >
            <Image
              source={item.image}
              className="w-[474px] h-[474px] max-w-full max-h-[340px]"
              resizeMode="contain"
            />
            <View className="space-y-2">
              <Text className="text-4xl font-extrabold text-center text-gray-900 leading-tight">
                {item.title}
              </Text>
              <Text className="text-base text-gray-500 text-center px-2">
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />

      {/* 3. Bottom Controls (Indicator dots + Buttons) */}
      <View className="w-full px-6 space-y-6">
        {/* Modern Indicator Dots */}
        <View className="flex-row justify-center items-center gap-2">
          {SLIDES.map((_, index) => (
            <View
              key={index}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-7 bg-[#5EAD1D]' : 'w-2.5 bg-[#ECF1E8]'
              }`}
            />
          ))}
        </View>

        {/* Action Buttons Row */}
        <View className="w-full flex-row gap-3 justify-between items-center">
          <Pressable
            onPress={handleSkip}
            className="w-[98px] h-[52px] rounded-xl bg-[#ECF1E8] flex justify-center items-center active:opacity-80"
          >
            <Text className="font-bold text-[#5EAD1D] text-center text-base">
              Skip
            </Text>
          </Pressable>

          <Pressable
            onPress={handleNext}
            className="flex-1 h-[52px] rounded-xl bg-[#5EAD1D] flex justify-center items-center active:opacity-80"
          >
            <Text className="font-bold text-white text-center text-base">
              {activeIndex === SLIDES.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
