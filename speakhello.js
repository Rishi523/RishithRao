{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww29200\viewh15960\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE\
// See Lecture 52, part 2\
\
\
// STEP 3: Create an object, called 'helloSpeaker' to which you will attach\
// the "speak" method and which you will expose to the global context\
// See Lecture 52, part 1\
// var helloSpeaker =\
\
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.\
\
\
// STEP 4: Rewrite the 'speak' function such that it is attached to the\
// helloSpeaker object instead of being a standalone function.\
// See Lecture 52, part 2\
\
// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it\
// 'helloSpeaker' on the global scope as well.\
// See Lecture 52, part 2\
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)\
// xxxx.xxxx = helloSpeaker;\
\
\
(function(window) \{\
	var speakWord = "Hello";\
	var helloSpeaker = function (name) \{\
		console.log(speakWord + " " + name);\
	\}\
\
	window.helloSpeaker = helloSpeaker;\
\
\})(window);\
}