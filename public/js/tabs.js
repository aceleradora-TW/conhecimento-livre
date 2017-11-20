function openList(evt, listName) {
  let i
  let tabcontent
  let tablinks

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }

  document.getElementById(listName).style.display = "block";
  evt.currentTarget.className += " is-active";
}
