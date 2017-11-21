$('#deleteCourse').click(function(e) {
  e.preventDefault();
  var data = {};
  data.id = $('#id').text()
  $.ajax('http://localhost:3000/deleteCourse', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function() { console.log('success');},
    error  : function() { console.log('error');}
  });
})
