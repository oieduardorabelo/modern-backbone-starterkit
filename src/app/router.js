import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'lodash';

import AboutView from './views/about';
import DashboardView from './views/dashboard';

export default Backbone.Router.extend({

  routes: {
    'dashboard': 'dashboard',
    'about': 'about'
  },

  initialize() {
    $('body').append('<div id="js-app"></div>');
  },

  dashboard() {
    $('#js-app').empty().append(DashboardView.$el);
  },

  about() {
    $('#js-app').empty().append(AboutView.$el);
  }

});
