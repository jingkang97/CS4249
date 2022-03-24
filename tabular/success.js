var uid = sessionStorage.getItem("uid")
var taskID = sessionStorage.getItem("task_id")
var startTime = sessionStorage.getItem("start_time")
var endTime = new Date().toString()
var time = null
var eventName = null
var target = null
var info = null
var path = window.location.pathname;
var page = path.split("/").pop();
var retries = sessionStorage.getItem("retries")



console.log(uid, time, eventName, target, info, page, retries, startTime, endTime, taskID);
sendNetworkLog(uid, time, eventName, target, info, page, retries, startTime, endTime, taskID);
  
function sendNetworkLog(
    uid,
    time,
    eventname,
    target,
    info,
    page,
    retries,
    starttime,
    endtime,
    taskid) {
  var formid = "e/1FAIpQLSe8yewpMUaAnTZNac7TN06pDN-FNx-zF7pFzH157PHqfYhNFw";
  var data = {
    "entry.85448220": uid,
    "entry.2060888453": time,
    "entry.198434459": eventname,
    "entry.1489605823": target,
    "entry.194930874": info,
    "entry.1631208694": page,
    "entry.1666937607": retries,
    "entry.1507192564": starttime,
    "entry.1599371994": endtime,
    "entry.1608643112": taskid
  };
  var params = [];
  for (key in data) {
    params.push(key + "=" + encodeURIComponent(data[key]));
  }
  // Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
  (new Image).src = "https://docs.google.com/forms/d/" + formid +
     "/formResponse?" + params.join("&");
}