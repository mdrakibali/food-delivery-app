import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigation<any>();
  const scrollViewRef = useRef<React.ElementRef<typeof ScrollView>>(null);

  useEffect(() => {
    const showEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';

    const showSub = Keyboard.addListener(showEvent, () => {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    });

    return () => {
      showSub.remove();
    };
  }, []);

  const handleBack = () => {
    if (navigate.canGoBack()) {
      navigate.goBack();
    } else {
      // Jodi kono karone stack khali thake, parent er Welcome screen e niye jabe
      navigate.getParent()?.navigate('Welcome');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 bg-white">
      <ScrollView
        ref={scrollViewRef}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white px-6 py-16"
      >
        {/* Header: Back Button & Center Logo */}
        <View className="flex-row items-center justify-between mb-8">
          <Pressable
            className="flex-row items-center gap-1.5 py-1"
            onPress={handleBack}
            hitSlop={10}
          >
            <ChevronLeft size={18} color="#222" />
            <Text className="text-base font-semibold text-gray-800">Back</Text>
          </Pressable>

          <Image
            source={require('../../assets/images/logo/sub-logo.png')}
            className="w-[70px] h-[24px]"
            resizeMode="contain"
          />

          {/* Dummy view for center alignment */}
          <View className="w-[50px]" />
        </View>

        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
