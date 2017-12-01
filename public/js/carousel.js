var count = 0
var numberLessons = 5
var lessons = document.getElementsByClassName('nextContents');
var i;

function nextPage() {
  document.getElementById('prev').disabled = false
  for (i = 0; i < lessons.length; i += 1) {
    lessons[i].style.display = 'none';
  }
  for (i = count; i < count + numberLessons; i += 1) {
    if (lessons[i] !== undefined) {
      lessons[i].style.display = 'flex';
    }
  }
  count = i;
  if (count >= lessons.length) { document.getElementById('next').disabled = true}
}

function prevPage() {
  document.getElementById('next').disabled = false
  count = count - ( numberLessons * 2 );
  for (i = 0; i < lessons.length; i += 1) {
    lessons[i].style.display = 'none';
  }
  for (i = count; i < count + numberLessons; i += 1) {
    if (lessons[i] !== undefined) {
      lessons[i].style.display = 'flex';
    }
  }
  count = i;
  if (count === numberLessons) { document.getElementById('prev').disabled = true}
}

document.addEventListener('DOMContentLoaded', function () {
  nextPage()
  document.getElementById('prev').disabled = true
});
