import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        {/* State Provider / Redux wrapper ekhane hobe */}
        {/* <Provider store={store}> */}

        {/* App er Root Navigation Container */}
        {/* <RootNavigator /> */}
        {/* </Provider> */}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
