javascript:(
  function(){
    var head=document.getElementsByTagName('head')[0], script=document.createElement('script');
    script.type='text/javascript';
    script.src='http://localhost:4567/example-2-injector.js?' + Math.floor(Math.random()*99999);
    head.appendChild(script);
  })(); void 0

