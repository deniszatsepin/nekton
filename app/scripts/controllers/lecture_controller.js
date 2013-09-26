(function(window, Em, App, undefined){

  App.LectureController = Ember.ObjectController.extend({
    button: function() {
      var progress = this.get('progress');
      var buttonName = '';
      switch (progress) {
        case 0:
          buttonName = 'Start lecture';
          break;
        case 100:
          buttonName = 'Revisit lecture';
          break;
        default:
          buttonName = 'Resume lecture';
      }
      return buttonName;
    }.property('progress')

  });


})(window, window.Ember, window.App);
