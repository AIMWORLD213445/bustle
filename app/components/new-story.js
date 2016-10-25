import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    saveStory1() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        headline: this.get('headline') ? this.get('headline') : "",
        body: this.get('body') ? this.get('body') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory2', params);
    }
  }
});
