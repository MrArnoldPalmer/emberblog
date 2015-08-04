import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    save: function() {
      var project = this.currentModel;
      project.save().then(() => {
        this.transitionTo('project', project.id);
      });
    }
  }
});
