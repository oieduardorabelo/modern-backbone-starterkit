'use strict';

const hbs = require('handlebars')

module.exports = {
  process(src, filename) {
    return `
      module.exports = ${hbs.precompile(src)};
    `;
  },
};
