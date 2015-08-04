import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('post');
  },
  actions: {
    save: function() {
      var post = this.currentModel;
      post.save().then(() => {
        this.transitionTo('posts');
      });
    }
  }
});
