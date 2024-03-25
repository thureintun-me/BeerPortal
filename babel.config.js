module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@components": "./src/components/index",
          "@hooks": "./src/hooks/index",
          "@screens/*": ["src/screens/index"],
          "@utils/*": ["src/utils/index"],
        },
      },
    ],
  ],
};
