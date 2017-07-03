app.service('PageTitle', function() {
  var title = 'Productmate';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});