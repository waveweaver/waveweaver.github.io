/* Enhancement only: hovering or focusing a skill lights the projects and roles where it was used.
   The page is complete without this script. */
(function () {
  var chips = document.querySelectorAll('.chip[data-p]');
  if (!chips.length) return;

  function clear() {
    document.querySelectorAll('.lit').forEach(function (el) { el.classList.remove('lit'); });
    chips.forEach(function (c) { c.classList.remove('on'); });
  }

  function light(chip) {
    clear();
    chip.classList.add('on');
    chip.getAttribute('data-p').split(/\s+/).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.classList.add('lit');
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener('mouseenter', function () { light(chip); });
    chip.addEventListener('focus', function () { light(chip); });
    chip.addEventListener('mouseleave', clear);
    chip.addEventListener('blur', clear);
  });
})();
