import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from './about.hbs';

var View = Marionette.ItemView.extend({

  template: template,

});

export default new View().render()
