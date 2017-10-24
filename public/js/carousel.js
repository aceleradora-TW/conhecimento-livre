function carousel() {
  document.getElementById("clickMe").onclick = function () {

    let list = document.querySelectorAll("li");

    for (let i = 0; i < list.length; ++i) {
      list[i].classList.toggle('carousel-invisible')
      list[i].classList.toggle('carousel-visible')
    }
  }
}
