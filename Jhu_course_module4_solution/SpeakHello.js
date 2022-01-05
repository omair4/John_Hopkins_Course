
(function (window){
  
var helloSpeaker = {};

var speakWord = "Hello";

  helloSpeaker.SpeakHello=function speak(name) {
    console.log(speakWord + " " + name);  
}

  window.helloSpeaker=helloSpeaker;
}) (window);


