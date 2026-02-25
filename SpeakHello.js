// SpeakHello.js
// STEP 2: Wrap the entire contents inside an IIFE
(function(window) {

  // STEP 3: Creates the helloSpeaker object.
  var helloSpeaker = {};

  // Local variable with the greeting word
  var speakWord = "Hello";

  // STEP 4: Adds the speak method to the object.
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the object within the global scope.
  window.helloSpeaker = helloSpeaker;

})(window);
