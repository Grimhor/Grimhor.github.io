  function show() {
    var id = location.hash.slice(1);
    if (!document.getElementById(id)) id = 'about';
    document.querySelectorAll('section').forEach(function (s) { s.classList.toggle('on', s.id === id); });
    document.querySelectorAll('nav a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + id); });
  }
  window.addEventListener('hashchange', show);
  show();

  var lb = document.getElementById('lb');
  document.querySelectorAll('main img').forEach(function (img) {
    img.addEventListener('click', function () {
      document.getElementById('lbimg').src = img.src;
      lb.classList.add('on');
    });
  });
  lb.addEventListener('click', function () { lb.classList.remove('on'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('on'); });
