const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);
const { sourceExts, assetExts } = defaultConfig.resolver;

const config = {
  resolver: {
    sourceExts: [...sourceExts, 'css'],
  },
};

const mergedConfig = mergeConfig(defaultConfig, config);

module.exports = withNativeWind(mergedConfig, { input: './global.css' });