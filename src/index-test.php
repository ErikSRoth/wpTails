<?php
/** Header Code */
?>
<html>
    <head>
        <title>My Website</title>
    </head>
    <body>
        <h1>My Website is here</h1>
        <p>Welcome to my website!</p>
        <p>Here is a list of my favorite things:</p>
        <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
        </ul>
        <p>Here is a picture of a kitten:</p>
        <img src="kitten.jpg" alt="Kitten" />
        <p>Goodbye! LOL</p>

        <script id="__bs_script__">//<![CDATA[
  (function() {
    try {
      var script = document.createElement('script');
      if ('async') {
        script.async = true;
      }
      script.src = 'https://HOST:3000/browser-sync/browser-sync-client.js?v=2.29.3'.replace("HOST", location.hostname);
      if (document.body) {
        document.body.appendChild(script);
      } else if (document.head) {
        document.head.appendChild(script);
      }
    } catch (e) {
      console.error("Browsersync: could not append script tag", e);
    }
  })()
//]]></script>
    </body>