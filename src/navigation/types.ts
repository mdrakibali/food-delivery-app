import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type SplashScreenList = {
  MainSplahScreen: undefined;
  ChefSplahScreen: undefined;
  DeliverySplahScreen: undefined;
  BirthdayGirlSplahScreen: undefined;
  BurgerSplahScreen: undefined;
};

// 1. Auth Stack Param List
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

// 2. Main Tab/Stack Param List
export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

// 3. Root Stack Param List (Main Parent)
export type RootStackParamList = {
  Splash: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

// Type helpers for navigation props in screens
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type SplashScreenProps<T extends keyof SplashScreenList> =
  NativeStackScreenProps<SplashScreenList, T>;
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

