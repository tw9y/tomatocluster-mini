var NewClusterView = require('./newClusterView');


/**
 * StartView handles login in the start page
 */
module.exports = Backbone.View.extend({
  el: $('#start'),

  events: {
    "click #create-cluster": "createCluster"
  },

  createCluster: function(evt) {
    if (this.createModal) this.createModal.remove();
    this.createModal = new NewClusterView();
    this.createModal.render();
  },

  render: function() {
    return this;
  }
});
