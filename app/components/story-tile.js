import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    update(story, params) {
      this.sendAction('update', story, params);
    }
  }
});
