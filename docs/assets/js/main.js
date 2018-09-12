function $_require(script) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = './assets/js/' + script;
  document.body.appendChild(s);
}
