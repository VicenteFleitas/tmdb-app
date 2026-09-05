module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '^react-native-config$': '<rootDir>/__mocks__/react-native-config.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-redux|@reduxjs/toolkit|@tanstack/react-query|immer|@react-navigation)/)',
  ],
};
