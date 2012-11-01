<p>
  This project implements a Tutorial on creating Bookmarklets with JavaScript/JQuery
</p>
<p>
To fully benefit from the tutorial you should download this project and run a local Sinatra server.
This is very easy, assuming that you are familar with Ruby and have it installed on your machine.
</p>
<p>
In the downloaded directory, run 'bundle install' then start the server with 'rackup -p 4567'. Point your browser at http://localhost:4567
to see the tutorial page along with live links
</p>


<h2 style="text-align: center">JQuery Bookmarklet Tutorial</h2>
<p>&nbsp;</p>

<p>A browser Bookmarklet is a simple way to invoke external JavaScript code on the contents of a web page. </p>

<p>They can be as simple as snippets of code contained within the URL of Bookmarklet itself.
Or they can trigger Javascripts on a remote server to perform more complex actions. In particular they can inject a script
into the current page so as to modify its behaviour.</p>

<p>This tutorial walks you through two types of bookmarklet.</p>

<h3>Example 1</h3>

<p class='indent-para'>The simpest form is a chunk of JS code contained in the Bookmarklet URL that invokes some action.</p>
<p class='indent-para'>This is a direct approach - you select some text, you click the bookmarklet and you get a result. If you want to repeat the process with
  some other text on the page then you have to click the bookmarklet link again.</p>

<p class='indent-para'>In this example you select text, click on the bookmarklet and google is invoked with the text:</p>

<p class='indent-para'>1: Drag this to your browser toolbar: <a href="javascript:(function(){
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
})();">Example 1</a></p>
<p class='indent-para'>2: Browse to a web page of your choice and select some text with your mouse</p>
<p class='indent-para'>3: Click on the Bookmarklet - this will open up a new tab containing a Google search with the selected text</p>
<p class='indent-para'>View the Source of this page to see the JavaScript code that makes up the Bookmarklet.</p>


<h3>Example 2</h3>

<p class='indent-para'>For many applications you need to invoke an action multiple times on a single page - looking up words in a dictionary would be a good
  example. Having to click on a Bookmarklet link every time is not a good solution. Instead you want to modify the behaviour of the page by injecting
  a custom JS script. A bookmarklet can be used to initiate this.</p>

<p class='indent-para'>In this example a simple, almost generic, bookmarklet installs a script from a remote server into the DOM of the current page.
 That script can then perform the action whenever it is triggered.</p>

<p class='indent-para'>The bulk of the code for this approach comes from
  <a href="http://www.latentmotion.com/how-to-create-a-jquery-bookmarklet/">how-to-create-a-jquery-bookmarklet</a>, written by Brett Barros of
  latentmotion.com, with some code input from Paul Irish. While that tutorial is very useful, I found it a bit difficult to follow. I'm hoping this
version is a little more descriptive.</p>

<p class='indent-para'>With this example, you click once on the bookmarklet to install the remote script. Any text that you select is echoed to a Div that
  is inserted at the top of the page.</p>

<p class='indent-para'>1: Drag this to your browser toolbar:
  <a href="javascript:(function(){var head=document.getElementsByTagName('head')[0],script=document.createElement('script');script.type='text/javascript';script.src='http://localhost:4567/example-2-injector.js?' + Math.floor(Math.random()*99999);head.appendChild(script);})(); void 0">Example 2</a>
</p>
<p class='indent-para'>2: Browse to a page of your choice</p>
<p class='indent-para'>3: Click the Bookmarklet link in your toolbar - you will see a gray box appear at the top of the page</p>
<p class='indent-para'>4: Select some text in your page - you should see it echoed in the top panel</p>
<p class='indent-para'>5: Select some more text - and it will also be echoed (without clicking the Bookmarklet link)</p>
<p class='indent-para'>6: Browse to a different page - the feature will no longer be active</p>

<p class='indent-para'>The example uses 3 JS scripts:</p>
  <ul class='indent-para'>
  <li><a href="example-2-bookmarklet.js">example-2-bookmarklet.js</a> - the code that gets installed in your toolbar</li>
  <li><a href="example-2-injector.js">example-2-injector.js</a> - the code that injects your custom js into the current page</li>
  <li><a href="example-2-custom.js">example-2-custom.js</a> - your custom js code</li>
  </ul>
<p class='indent-para'>
  The bookmarklet and injector scripts are fairly general purpose. The changes required should be pretty obvious and specify your server address
  and custom CSS and JS files.
</p>



<p class='indent-para'>Note that the bookmarklet expects you to have a server at http://localhost:4567 which can respond to the request.</p>

<p class='indent-para'>NOTE - When injecting a custom script into an arbitrary page you run the risk of conflicts with CSS styles and JS variables and functions.
Be sure to use unique variable/function names and explicitly specify your own CSS styles. There is no current way to turn off CSS inheritance that
I know of but look on the Web for some ideas.</p>

<p>&nbsp; <br/> &nbsp; </p>
<p>Robert Jones <a href="http://craic.com">Craic Computing LLC</a>  November 2012</p>
