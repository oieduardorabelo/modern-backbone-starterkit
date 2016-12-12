import $ from 'jquery';
import Backbone from 'backbone';
import chai from 'chai';

let expect = chai.expect;

import Router from '../src/app/router';


describe('Integration tests', function() {
  Backbone.history.start();

  const router = new Router();

  let $app = $('#js-app');

  describe('Dashboard page sample testing', function() {
    it('should render hello world on first render', function() {
      router.navigate('dashboard', {trigger: true, replace: true});
      //
      // jest.hbsPreprocessor.js need's a tweak to return the correct
      // template object, currently, we are compiling hbs without data
      //
      expect($app.text()).to.equal('Hello !');
    });
  });

  describe('About page sample testing', function() {
    it('should render Im the about page', function() {
      router.navigate('about', {trigger: true, replace: true});
      expect($app.text()).to.equal('Im the about page');
    });
  });

});
