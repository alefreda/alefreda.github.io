var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var text_type_writer = document.getElementById('type-writer');

var typewriter = new Typewriter(text_type_writer, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(800)
  .typeString('Software engineer')
  .pauseFor(300)
  .deleteChars(17)
  .typeString('Data engineer')
  .pauseFor(500)
  .start();

