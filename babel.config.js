module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
<<<<<<< HEAD
    /*plugins: ["expo-router/babel"],*/
=======
    plugins: ["expo-router/babel"],
>>>>>>> ea391de81ed3ba0f136d08f9384d089cb8dfd7f7
  };
};
