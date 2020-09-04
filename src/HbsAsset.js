const HTMLAsset = require("parcel-bundler/lib/assets/HTMLAsset");

const handlebarsExpression = (path) => {
  return /{{.+?}}/.test(path);
};

class HbsAsset extends HTMLAsset {
  addDependency(name, options) {
    if (!handlebarsExpression(options.resolved))
      return super.addDependency(name, options);
  }

  processSingleDependency(path, options) {
    return handlebarsExpression(path)
      ? path
      : super.processSingleDependency(path, options);
  }
}

module.exports = HbsAsset;
