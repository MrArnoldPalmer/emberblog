import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('posts');
  this.route('projects');
  this.route('post', {path: '/post/:post_id'}, function() {
    this.route('edit');
  });
  this.route('project', {path: '/project/:project_id'}, function() {
    this.route('edit');
  });
  this.route('post.new', {path: '/post/new'});
  this.route('project.new', {path: '/project/new'});
});

export default Router;
