let count = 0
const numberLessons = 5
const lessons = document.getElementsByClassName('nextContents');
let i;

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
