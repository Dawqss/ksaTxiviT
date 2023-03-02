module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./__tests__/'],
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@navigation/*': './src/navigation/*',
          '@screens/*': './src/screens',
          '@store/*': './src/store',
          '@types/*': './src/types',
          '@utils/*': './src/utils',
          '@constants/*': './src/constants',
        },
      },
    ],
  ],
};
