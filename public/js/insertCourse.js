function insertCourse(itemId) {
  axios({
    method: 'get',
    url: '/insertCourse/'+itemId,
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
