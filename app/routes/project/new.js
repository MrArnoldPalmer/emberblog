import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('project');
  },
  actions: {
    save: function() {
      var project = this.currentModel;
      project.save().then(() => {
        this.transitionTo('projects');
      });
    }
  }
});
