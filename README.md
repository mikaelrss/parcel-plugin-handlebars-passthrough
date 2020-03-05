# plugin-parcel-handlebars-passthrough

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Motivation

This is a parcel plugin to build handlebars files without transforming the contents of the layouts during build. This is intended to be used 
when you use parcel for bundling your application but still want to render some values through handlebars server-side. 