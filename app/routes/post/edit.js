import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    save: function() {
      var post = this.currentModel;
      post.save().then(() => {
        this.transitionTo('post', post.id);
      });
    }
  }
});
