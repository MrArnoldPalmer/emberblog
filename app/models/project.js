import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  screenshotURL: attr('string'),
  linkURL: attr('string'),
  text: attr('string')
});
