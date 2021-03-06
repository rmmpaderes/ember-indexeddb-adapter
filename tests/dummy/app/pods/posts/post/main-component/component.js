import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'section',
  elementId: 'find-record',

  actions: {
    updatePost() {
      this.set('post.title', 'Dummy Post');
      this.attrs.post.save();
    },

    deletePost() {
      this.attrs.post.destroyRecord();
    }
  }
});
