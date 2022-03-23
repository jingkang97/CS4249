// Adapted from http://web.mit.edu/6.813/www/sp18/assignments/as1-implementation/logging.js
//
// A simple Google-spreadsheet-based event logging framework.
//
// Add logging.js to your Web App to log standard input and custom events.
//
// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// document.dispatchEvent(new CustomEvent('log', { detail: {
//   eventName: 'myevent',
//   info: {key1: val1, key2: val2}
// }}));

var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
var LOG_VERSION = '0.1';           // Labels every entry with version: "0.1".

// These event types are intercepted for logging before jQuery handlers.
var EVENT_TYPES_TO_LOG = {
  mousedown: true,
  keydown: true
};

// These event properties are copied to the log if present.
var EVENT_PROPERTIES_TO_LOG = {
  which: true,
  pageX: true,
  pageY: true
};

// This function is called to record some global state on each event.
var GLOBAL_STATE_TO_LOG = function() {
  return {
  };
};

var loggingjs = (function() { // Immediately-Invoked Function Expression (IIFE); ref: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// Hooks up all the event listeners.
function hookEventsToLog() {
  // Set up low-level event capturing.  This intercepts all
  // native events before they bubble, so we log the state
  // *before* normal event processing.
  for (var event_type in EVENT_TYPES_TO_LOG) {
    document.addEventListener(event_type, logEvent, true);
  }
}

// Logs mouse clicks
function logEvent(event, customName, customInfo) {
    // console.log('event', event, 'customName', customName, 'customInfo', customInfo);
    
    var eventName = customName || event.type;
    if (eventName == "mousedown") {
        // get numMouseClicks
        var numClicks = parseInt(sessionStorage.getItem("numClicks"));
        if (!numClicks) {
            numClicks = 0;
        }
        // increment num Tries
        sessionStorage.setItem("numClicks", numClicks + 1);
        console.log("MOUSE CLICK!", sessionStorage.getItem("numClicks"));
    }
}

function setUpSessionStorage() {
    // initialise mouse clicks to 0
    var numClicks = parseInt(sessionStorage.getItem("numClicks"));
    if (!numClicks) {
        sessionStorage.setItem("numClicks", 0);
    }

    // initialise num tries to 0
    var numTries = parseInt(sessionStorage.getItem("numTries"));
    if (!numTries) {
        sessionStorage.setItem("numTries", 0);
    }
}

// OK, go.
if (ENABLE_NETWORK_LOGGING) {
  hookEventsToLog();
}

setUpSessionStorage();

// module pattern to allow some key functions to be "public"
return {
 logEvent,
};

}());
