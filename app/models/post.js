import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: attr('string'),
  title: attr('string'),
  text: attr('string'),
  created: attr('date'),
  published: attr('date')
});
