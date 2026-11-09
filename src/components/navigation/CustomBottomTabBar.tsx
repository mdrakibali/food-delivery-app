import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  Bell,
  Compass,
  Heart,
  Home,
  ShoppingCart,
  Triangle,
} from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TabName = 'Home' | 'Explore' | 'Cart' | 'Favorite' | 'Notification';

const TAB_ITEMS: readonly TabName[] = [
  'Home',
  'Explore',
  'Cart',
  'Favorite',
  'Notification',
];

function TabIcon({ name, focused }: { name: TabName; focused: boolean }) {
  const color = focused ? '#54A312' : '#9CA3AF';
  const strokeWidth = focused ? 2.2 : 1.8;

  switch (name) {
    case 'Home':
      return <Home size={25} color={color} strokeWidth={strokeWidth} />;
    case 'Explore':
      return <Compass size={25} color={color} strokeWidth={strokeWidth} />;
    case 'Cart':
      return <ShoppingCart size={25} color={color} strokeWidth={strokeWidth} />;
    case 'Favorite':
      return <Heart size={25} color={color} strokeWidth={strokeWidth} />;
    case 'Notification':
      return (
        <View className="relative">
          <Bell size={25} color={color} strokeWidth={strokeWidth} />
          {/* Notification Red Badge Dot */}
          <View className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#E04F36] border-2 border-white" />
        </View>
      );
    default:
      return null;
  }
}

export default function CustomBottomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  // Ensure enough breathing space above the iPhone home indicator
  const bottomPadding = Math.max(insets.bottom, 16);

  return (
    <View
      style={{ paddingBottom: bottomPadding }}
      className="bg-white border-t border-gray-100 flex-row items-center justify-around pt-3 shadow-md"
    >
      {TAB_ITEMS.map(tabName => {
        const route = state.routes.find(r => r.name === tabName);
        const isFocused = state.routes[state.index]?.name === tabName;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route ? route.key : tabName,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tabName);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route ? route.key : tabName,
          });
        };

        return (
          <Pressable
            key={tabName}
            onPress={onPress}
            onLongPress={onLongPress}
            hitSlop={12}
            className="items-center justify-center py-1 px-3"
          >
            {/* Tab Icon - Active thakle samanno baka (-8deg) hobe */}
            <View style={isFocused ? styles.activeIcon : undefined}>
              <TabIcon name={tabName} focused={isFocused} />
            </View>

            {/* Active Green Triangle Indicator */}
            {isFocused ? (
              <Triangle
                size={7}
                color="#54A312"
                fill="#54A312"
                className="mt-1"
              />
            ) : (
              <View className="h-[7px] mt-1" />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    transform: [{ rotate: '-8deg' }],
  },
});
