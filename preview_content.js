class Preview{

  constructor() {

  }
  ImprimeConteudo(obj1){

    if(obj1 != null){
    console.log(obj1.descricao);
    console.log(obj1.titulo);
    return 1
}else{
    return 0
}

  }
}
module.exports = Preview
