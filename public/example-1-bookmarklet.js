javascript:(
  function(){
    var s = '';
    if (window.getSelection) {
      s = window.getSelection();
    } else if (document.getSelection) {
      s = document.getSelection();
    } else if (document.selection) {
      s = document.selection.createRange().text;
    }
    if (s == '') {
      s = prompt('Enter text to search with Google');
    }
    if ((s != '') && (s != null)) {
      window.open('https://www.google.com/search?q=' + s);
    }
  }
)();
