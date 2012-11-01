/*
 * jQuery Bookmarklet - version 1.0
 * Originally written by: Brett Barros
 * With modifications by: Paul Irish
 *
 * If you use this script, please link back to the source
 *
 * Copyright (c) 2010 Latent Motion (http://latentmotion.com/how-to-create-a-jquery-bookmarklet/)
 * Released under the Creative Commons Attribution 3.0 Unported License,
 * as defined here: http://creativecommons.org/licenses/by/3.0/
 *
 */

/* This version is modified by Robert Jones (jones@craic.com)
   I think calling THIS script a Bookmarklet is a misnomer - for me the bookmarklet is the
   snippet of code that you drag to the browser toolbar. This script INJECTS custom JS and CSS
   files into the current page when triggered by the bookmarklet, along with the JQuery library

   It's a semantic difference but I think it is important...
   Also, the injection code is not minified, so you can see exactly what it does.
 */

var ver = 1;

window.injector = function(opts){fullFunc(opts)};

window.injector({
	// These are the styles, scripts and callbacks we include in our bookmarklet:
	// remove the random numbers once the code is in production - they are here to avoid caching issues in development
  css : ['http://localhost:4567/example.css?' + Math.floor(Math.random()*99999).toString() ],
  js  : ['http://localhost:4567/example-2-custom.js?'  + Math.floor(Math.random()*99999).toString() ],
  //	jqpath : 'myCustomjQueryPath.js', <-- option to include your own path to jquery

  ready : function(){
	  // Initiate your custom code
    _craic.init();
  }

})


// Dynamically load JQuery and the custom js and css files - unminified version

function fullFunc(opts){

  // User doesn't have to set jquery, we have a default.
  // This URL will get the Latest version of jquery (in the '1' series of releases)
  opts.jqpath = opts.jqpath || "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";

  function getJS(jsfiles){

    // Check if we've processed all of the JS files (or if there are none)
    if (jsfiles.length === 0) {
      opts.ready();
      return false;
    }

    // Load the first js file in the array
    $.getScript(jsfiles[0],  function(){
      // When it's done loading, remove it from the queue and call the function again
      getJS(jsfiles.slice(1));
    })
  }

  // Synchronous loop for css files
  function getCSS(csfiles){
    $.each(csfiles, function(i, val){
      $('<link>').attr({
        href: val,
        rel: 'stylesheet'
      }).appendTo('head');
    });
  }

  function getjQuery(filename) {

    // Create jQuery script element
    var fileref = document.createElement('script')
    fileref.type = 'text/javascript';
    fileref.src =  filename;

    // Once loaded, trigger other scripts and styles
    fileref.onload = function(){
      getCSS(opts.css); // load CSS files
      getJS(opts.js); // load JS files
    };

    document.body.appendChild(fileref);
  }

  getjQuery(opts.jqpath); // kick it off
};



