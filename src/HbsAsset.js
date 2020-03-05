const HTMLAsset = require("parcel-bundler/src/assets/HTMLAsset");

class HbsAsset extends HTMLAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
  }

  parse(code) {
    return super.parse(this.contents);
  }
}

module.exports = HbsAsset;
