'use strict';

const hb = require('handlebars')

module.exports = {
  process(src, filename) {
    return `
      module.exports = ${JSON.stringify(hb.compile(src)({}))}
    `;
  },
};
