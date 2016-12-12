'use strict';

const hb = require('handlebars')

module.exports = {
  process(src, filename) {
    //
    // needs to return the correct template object to the Marionette View,
    // currently, we are compiling hbs without data
    //
    return `
      module.exports = ${JSON.stringify(hb.compile(src)({}))}
    `;
  },
};
