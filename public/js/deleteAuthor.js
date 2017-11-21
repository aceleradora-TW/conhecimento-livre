function deleteAuthor(evt, id) {
  var data = {};
  data.id = id
  $.ajax('http://localhost:3000/deleteAuthor', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function() { console.log('success');},
    error  : function() { console.log('error');}
  });
}
