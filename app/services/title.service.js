app.service('PageTitle', function() {
  var title = 'Paul Antoine - Web Developer';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});