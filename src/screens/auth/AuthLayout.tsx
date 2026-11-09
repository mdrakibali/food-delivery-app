import { useNavigation } from '@react-navigation/native';
import { MoveLeftIcon } from 'lucide-react-native';
import React from 'react';
import {
  Image,
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
  const navigate = useNavigation();

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white px-6 py-12"
      >
        {/* Header: Back Button & Center Logo */}
        <View className="flex-row items-center justify-between mb-8">
          <Pressable
            className="flex-row items-center gap-1.5 py-1"
            onPress={handleBack}
            hitSlop={10}
          >
            <MoveLeftIcon size={18} color="#222" />
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
