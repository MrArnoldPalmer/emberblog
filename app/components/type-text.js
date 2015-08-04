import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'text-center'],
  didInsertElement: function() {
    Ember.$(function(){
        Ember.$(".type-text").typed({
            strings: ["Web Developer..."],
            typeSpeed: 100
        });
    });
  }
});
