import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
    actions: {
      updateStoryForm() {
        this.set('updateStoryForm', true);
      },
      update(story) {
        var params = {
          author: this.get('author'),
          headline: this.get('headline'),
          body: this.get('body'),
          image: this.get('image'),
        };
        this.set('updateStoryForm', false);
        this.sendAction('update', story, params);
      }
    }
  });
