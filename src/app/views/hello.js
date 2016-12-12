import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from './template.hbs';

export default Marionette.ItemView.extend({

  template: template,

  serializeData() {
    return {
      name: 'world'
    };
  }

});
