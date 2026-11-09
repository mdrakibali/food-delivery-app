import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ImageSourcePropType } from 'react-native';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  rating?: number;
  reviewsCount?: number;
  deliveryTime?: string;
  calories?: string;
  description?: string;
  image: ImageSourcePropType;
}

// 1. Auth Stack Param List
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerifyAccount: { email?: string } | undefined;
  VerifyForgotPassword: { email?: string } | undefined;
  ResetPassword: undefined;
  CreateProfile: undefined;
};

// 2. Main Tab/Stack Param List
export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  Favorite: undefined;
  Notification: undefined;
  Profile: undefined;
};

// 3. Root Stack Param List (Main Parent)
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Welcome: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  ProductDetails: { product: ProductItem };
};

// Type helpers for navigation props in screens
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
