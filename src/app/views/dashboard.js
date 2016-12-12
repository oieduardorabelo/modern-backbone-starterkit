import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from './dashboard.hbs';

var View = Marionette.ItemView.extend({

  template: template,

  serializeData() {
    return {
      name: 'world'
    };
  }

});

export default new View().render()
