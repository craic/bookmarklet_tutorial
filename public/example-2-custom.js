// This file contain JavaScript functions that do something custom in your application

// Be sure to use a Unique name for your library - e.g. _craic

var _craic = (function(){

  // return the currently selected text - the alternate versions are to handle browser variation
  // Sorry, not sure where I got this snippet from... I think it is pretty generic
  var getSelectedText = function(){
    var t = '';
    if(window.getSelection){
      t = window.getSelection();
    }else if(document.getSelection){
      t = document.getSelection();
    }else if(document.selection){
      t = document.selection.createRange().text;
    }
    return t;
  }

  var init = function(){
    // insert an empty div  at the start of the body - with a unique ID
    $("body").prepend("<div id='craic-div'></div>");

    // When a mouseup event occurs, get the selected text and create an alert containing the text
    // NOTE that this is not set up for double click selection of an entire word, etc. so the mouseup will trigger with an empty string

    $("body :visible").mouseup(function(e) {
      e.preventDefault();
      var t = getSelectedText();
      //console.log(t);
      // this updates div '#craic-div' with the selected text
      $("#craic-div").text(t);
      return false;
    });
  }

  // return attributes that are function pointers... these are the functions that will be called in the bookmarklet
  return {
    init: function(){
      return init();
    }
  }

})
(); // final parens execute the function immediately
