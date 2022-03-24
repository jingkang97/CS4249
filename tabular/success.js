
var uid = getUniqueId()
var startTime = sessionStorage.getItem("start_time");
var endTime = new Date().now();



var technique = "tabular"
var totaltimetaken = startTime - endTime
var retries = sessionStorage.getItem("retries")
var clicks = null
var taskid = null



console.log(uid, technique, totaltimetaken, retries, clicks, taskid);
sendNetworkLog(uid, technique, totaltimetaken, retries, clicks, taskid);

function getUniqueId() {
  if (!('uid' in localStorage)) {
    var browser = findFirstString(navigator.userAgent, [
      'Seamonkey', 'Firefox', 'Chromium', 'Chrome', 'Safari', 'OPR', 'Opera',
      'Edge', 'MSIE', 'Blink', 'Webkit', 'Gecko', 'Trident', 'Mozilla']);
    var os = findFirstString(navigator.userAgent, [
      'Android', 'iOS', 'Symbian', 'Blackberry', 'Windows Phone', 'Windows',
      'OS X', 'Linux', 'iOS', 'CrOS']).replace(/ /g, '_');
    var unique = ('' + Math.random()).substr(2);
    localStorage['uid'] = os + '-' + browser + '-' + unique;
  }
  return localStorage['uid'];
}


function sendNetworkLog(
    uid,
    technique,
    totaltimetaken,
    retries,
    clicks,
    taskid) {
  var formid = "e/1FAIpQLSd6apAmYV5hKSnryEXWNAlRMWwBuFU7H40QddAjMMUi0Z7XkA";
  var data = {
    "entry.314220540": uid,
    "entry.46738998": technique,
    "entry.372384347": totaltimetaken,
    "entry.524771083": retries,
    "entry.1316818887": clicks,
    "entry.1671783670": taskid
  };
  var params = [];
  for (key in data) {
    params.push(key + "=" + encodeURIComponent(data[key]));
  }
  // Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
  (new Image).src = "https://docs.google.com/forms/d/" + formid +
     "/formResponse?" + params.join("&");
}