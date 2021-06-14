module.exports = {
  root: true,
  extends: "@react-native-community",
  plugins: ["import"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        alias: {
          _assets: "./assets",
          _components: "./src/components",
          _atoms: "./src/components/atoms",
          _molecules: "./src/components/molecules",
          _organisms: "./src/components/organisms",
          _navigations: "./navigations",
          _views: "./src/views",
          _contexts: "./src/contexts",
          _services: "./src/services",
          _styles: "./src/styles",
          _utils: "./utils",
        },
      },
    },
  },
};
