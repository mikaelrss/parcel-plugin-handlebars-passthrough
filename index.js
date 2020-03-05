module.exports = bundler => {
  console.log("handy mandy");
  bundler.addAssetType(
    "hbs",
    require.resolve("parcel-bundler/src/assets/HTMLAsset")
  );
  bundler.addAssetType(
    "handlebars",
    require.resolve("parcel-bundler/src/assets/HTMLAsset")
  );
};
