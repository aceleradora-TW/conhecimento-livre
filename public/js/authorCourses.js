function authorCourses(itemId, collection) {
  axios({
    method:'get',
    url:'/authorCourses/'+itemId,
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
