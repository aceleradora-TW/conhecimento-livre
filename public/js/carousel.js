var count = 0
var numberLessons = 5
var lessons = document.querySelectorAll('.nextContents');
var i;

function hideLessons() {
  lessons.forEach(function(lesson) {
    lesson.style.display = 'none';
  })
}

function displayLessonsOfCurrentPage() {
  for (i = count; i < count + numberLessons; i += 1) {
    if (lessons[i] !== undefined) {
      lessons[i].style.display = 'flex';
    }
  }
  count = i;
}

function nextPage() {
  document.getElementById('prev').disabled = false;

  hideLessons();
  displayLessonsOfCurrentPage();

  if (count >= lessons.length) {
    document.getElementById('next').disabled = true;
  }
}

function prevPage() {
  document.getElementById('next').disabled = false;
  count = count - ( numberLessons * 2 );

  hideLessons();
  displayLessonsOfCurrentPage();

  if (count === numberLessons) {
    document.getElementById('prev').disabled = true;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  nextPage();
  document.getElementById('prev').disabled = true;
});
