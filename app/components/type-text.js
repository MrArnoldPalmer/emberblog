import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'text-center'],
  didInsertElement: function() {
    Ember.$(function(){
        Ember.$(".type-text").typed({
            strings: ["Web Developer", "Some Projects..."],
            typeSpeed: 100
        });
    });
  }
});
