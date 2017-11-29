function deleteItem(itemId, collection) {
  var message;

  if (collection === 'author') {
    message = 'Esta operação deletará este autor. Você tem certeza disto?'
  } else if (collection === 'courses') {
    message = 'Esta operação deletará todos as aulas deste curso. Você tem certeza disto?'
  } else if (collection === 'contents') {
    message = 'Esta operação deletará essa aula. Você tem certeza disto?'
  }
  if (confirm(message)) {
    axios({
      method:'delete',
      url:'/deleteItem/'+itemId,
      data: {
        id: itemId,
        collection: collection
      }
    })
      .then(function (response) {
        console.log('sucess')
      })
      .catch(function (error) {
        console.log('error')
      })
  }
  window.location.reload()
}
