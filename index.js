module.exports = bundler => {
  console.log("Bundndndynd");
  bundler.addAssetType("hbs", require.resolve("./src/HbsAsset"));
  bundler.addAssetType("handlebars", require.resolve("./src/HbsAsset"));
};
