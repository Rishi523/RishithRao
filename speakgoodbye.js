<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1">// NOTE! The steps in this file are basically identical to the ones you</p>
<p class="p1">// performed in the SpeakHello.js file.</p>
<p class="p2"><br></p>
<p class="p1">// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE</p>
<p class="p1">// See Lecture 52, part 2</p>
<p class="p2"><br></p>
<p class="p2"><br></p>
<p class="p1">// STEP 7: Create an object, called 'byeSpeaker' to which you will attach</p>
<p class="p1">// the "speak" method and which you will expose to the global context</p>
<p class="p1">// See Lecture 52, part 1</p>
<p class="p1">// var byeSpeaker =</p>
<p class="p2"><br></p>
<p class="p1">// DO NOT attach the speakWord variable to the 'byeSpeaker' object.</p>
<p class="p2"><br></p>
<p class="p2"><br></p>
<p class="p1">// STEP 8: Rewrite the 'speak' function such that it is attached to the</p>
<p class="p1">// byeSpeaker object instead of being a standalone function.</p>
<p class="p1">// See Lecture 52, part 2</p>
<p class="p2"><br></p>
<p class="p2"><br></p>
<p class="p1">// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it</p>
<p class="p1">// 'byeSpeaker' on the global scope as well.</p>
<p class="p1">// xxxx.xxxx = byeSpeaker;</p>
<p class="p2"><br></p>
<p class="p2"><br></p>
<p class="p1">(function(window) {</p>
<p class="p1"><span class="Apple-tab-span">	</span>var speakWord = "Good Bye";</p>
<p class="p1"><span class="Apple-tab-span">	</span>var byeSpeaker = function (name) {</p>
<p class="p1"><span class="Apple-converted-space">  <span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span>console.log(speakWord + " " + name);</p>
<p class="p1"><span class="Apple-tab-span">	</span>}</p>
<p class="p2"><span class="Apple-tab-span">	</span></p>
<p class="p1"><span class="Apple-tab-span">	</span>window.byeSpeaker = byeSpeaker;</p>
<p class="p2"><br></p>
<p class="p1">})(window);</p>
</body>
</html>
