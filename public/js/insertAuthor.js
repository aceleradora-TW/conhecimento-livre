function insertAuthor(itemId) {
  axios({
    method: 'get',
    url: '/insertAuthor/'+itemId,
    data: {
      id: itemId
    }
  })
    .then(function (response) {
      console.log('sucess')
    })
    .catch(function (error) {
      console.log('error')
    })
}
