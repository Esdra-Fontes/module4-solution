// SpeakGoodBye.js
// STEP 6: Wrap the contents inside an IIFE
(function(window) {

  // STEP 7: Creates the byeSpeaker object.
  var byeSpeaker = {};

  // Local variable with the word of farewell
  var speakWord = "Good Bye";

  // STEP 8: Adds the speak method to the object.
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the object within the global scope.
  window.byeSpeaker = byeSpeaker;

})(window);
