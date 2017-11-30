let count = 0
const numberClasses = 5
const classes = document.getElementsByClassName('nextContents');
let i;

function nextPage() {
  document.getElementById('prev').style.display = 'inline'
  for (let k = 0; k < classes.length; k += 1) {
    classes[k].style.display = 'none';
  }
  for (i = count; i < count + numberClasses; i += 1) {
    if (classes[i] !== undefined) {
      classes[i].style.display = 'flex';
    }
  }
  count = i;
  if (count >= classes.length) { document.getElementById('next').style.display = 'none' }
}

function prevPage() {
  document.getElementById('next').style.display = 'inline'
  count = count - ( numberClasses * 2 );
  for (let k = 0; k < classes.length; k += 1) {
    classes[k].style.display = 'none';
  }
  for (i = count; i < count + numberClasses; i += 1) {
    if (classes[i] !== undefined) {
      classes[i].style.display = 'flex';
    }
  }
  count = i;
  if (count === numberClasses) { document.getElementById('prev').style.display = 'none' }
}

$(document).ready(function () {
  nextPage()
  document.getElementById('prev').style.display = 'none'
});
