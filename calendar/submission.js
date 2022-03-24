// Script to check user calendar input for correctness and to submit logged data

function checkSelection() {

  const task_id = sessionStorage.getItem("task_id");

  // get from sessionstorage as object
  var confirmedSessions = JSON.parse(
    sessionStorage.getItem("selectedSessions")
  );

  const numOfConfirmedSlots = Object.values(confirmedSessions).length;

  var isCorrect = true;

  switch (task_id) {
    case "1":
      // Book 1 slot in Semptember.
      if (numOfConfirmedSlots != 1) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var month = firstSelectedSlot.date.split(" ")[1];
      if (month != "Sep") {
        isCorrect = false;
        break;
      }
      break;
    case "2":
      // Book 1 slot that falls on a Monday.
      if (numOfConfirmedSlots != 1) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var day = firstSelectedSlot.date.split(" ")[0];
      if (day != "Mon") {
        isCorrect = false;
        break;
      }
      break;
    case "3":
      // Book 1 slot on 12 Sep 2022.
      if (numOfConfirmedSlots != 1) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      if (firstSelectedSlot.date != "Mon Sep 12 2022") {
        isCorrect = false;
        break;
      }
      break;
    case "4":
      // Book 1 slot that starts at 4.30 PM.
      if (numOfConfirmedSlots != 1) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      if (firstSelectedSlot.session != "9") {
        isCorrect = false;
        break;
      }
      break;
    case "5":
      // Book 1 slot that starts at 10.30 AM.
      if (numOfConfirmedSlots != 1) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      if (firstSelectedSlot.session != "3") {
        isCorrect = false;
        break;
      }
      break;
    case "6":
      // Book 1 slot that starts at 8.30 PM.
      if (numOfConfirmedSlots != 1) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      console.log(firstSelectedSlot)
      if (firstSelectedSlot.session != "13") {
        isCorrect = false;
        break;
      }
      break;
    case "7":
      // Book 2 slots exactly one week apart in the same month. (One slot per week)
      if (numOfConfirmedSlots != 2) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var month1 = firstSelectedSlot.date.split(" ")[1];
      var month2 = secondSelectedSlot.date.split(" ")[1];
      if (month1 != month2) {
        isCorrect = false;
        break;
      }
      var date1 = parseInt(firstSelectedSlot.date.split(" ")[2]);
      var date2 = parseInt(secondSelectedSlot.date.split(" ")[2]);
      if (Math.abs(date1 - date2) != 7) {
        isCorrect = false;
        break;
      }
      break;
    case "8":
      // Book 2 slots that fall on the same Monday.
      if (numOfConfirmedSlots != 2) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      if (firstSelectedSlot.date != secondSelectedSlot.date) {
        isCorrect = false;
        break;
      }
      var day1 = firstSelectedSlot.date.split(" ")[0];
      var day2 = secondSelectedSlot.date.split(" ")[0];
      if (day1 != "Mon" || day2 != "Mon") {
        isCorrect = false;
        break;
      }
      break;
    case "9":
      // Book 1 slot on 12 Sep 2022 and 1 slot on 19 Sep 2022.
      if (numOfConfirmedSlots != 2) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var date1 = firstSelectedSlot.date;
      var date2 = secondSelectedSlot.date;
      if (date1 != "Mon Sep 12 2022" && date2 != "Mon Sep 12 2022") {
        isCorrect = false;
        break;
      }
      if (date1 != "Mon Sep 19 2022" && date2 != "Mon Sep 19 2022") {
        isCorrect = false;
        break;
      }
      break;
    case "10":
      // Book 2 slots that starts at 4.30 PM.
      if (numOfConfirmedSlots != 2) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      if (
        firstSelectedSlot.session != "9" ||
        secondSelectedSlot.session != "9"
      ) {
        isCorrect = false;
        break;
      }
      break;
    case "11":
      // Book 2 slots that starts at 10.30 AM.
      if (numOfConfirmedSlots != 2) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      if (
        firstSelectedSlot.session != "3" ||
        secondSelectedSlot.session != "3"
      ) {
        isCorrect = false;
        break;
      }
      break;
    case "12":
      // Book 2 slots that starts at 8.30 PM.
      if (numOfConfirmedSlots != 2) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      if (
        firstSelectedSlot.session != "13" ||
        secondSelectedSlot.session != "13"
      ) {
        isCorrect = false;
        break;
      }
      break;
    case "13":
      // Book 3 slots exactly one week apart from one another in the same month. (One slot per week)
      if (numOfConfirmedSlots != 3) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var thirdSelectedSlot = Object.values(confirmedSessions)[2];
      var month1 = firstSelectedSlot.date.split(" ")[1];
      var month2 = secondSelectedSlot.date.split(" ")[1];
      var month3 = thirdSelectedSlot.date.split(" ")[1];
      if (month1 != month2 || month1 != month3) {
        isCorrect = false;
        break;
      }
      var date1 = firstSelectedSlot.date.split(" ")[2];
      var date2 = secondSelectedSlot.date.split(" ")[2];
      var date3 = thirdSelectedSlot.date.split(" ")[2];
      var dates = [date1, date2, date3];
      dates.sort();
      sessionStorage.setItem("dates", dates);
      for (var i = 1; i < 3; i++) {
        if (parseInt(dates[i]) - parseInt(dates[i - 1]) != 7) {
          isCorrect = false;
          break;
        }
      }
      break;
    case "14":
      // Book 3 slots that fall on the same Monday.
      if (numOfConfirmedSlots != 3) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var thirdSelectedSlot = Object.values(confirmedSessions)[2];
      if (
        firstSelectedSlot.date != secondSelectedSlot.date ||
        firstSelectedSlot.date != thirdSelectedSlot.date
      ) {
        isCorrect = false;
        break;
      }
      var day1 = firstSelectedSlot.date.split(" ")[0];
      var day2 = secondSelectedSlot.date.split(" ")[0];
      var day3 = thirdSelectedSlot.date.split(" ")[0];
      if (day1 != "Mon" || day2 != "Mon" || day3 != "Mon") {
        isCorrect = false;
        break;
      }
      break;
    case "15":
      // Book 1 slot on 12 Sept 2022, 1 slot on 19 Sep 2022, and 1 slot on 26 Sept 2022.
      if (numOfConfirmedSlots != 3) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var thirdSelectedSlot = Object.values(confirmedSessions)[2];
      var date1 = firstSelectedSlot.date;
      var date2 = secondSelectedSlot.date;
      var date3 = thirdSelectedSlot.date;
      if (
        date1 != "Mon Sep 12 2022" &&
        date2 != "Mon Sep 12 2022" &&
        date3 != "Mon Sep 12 2022"
      ) {
        isCorrect = false;
        break;
      }
      if (
        date1 != "Mon Sep 19 2022" &&
        date2 != "Mon Sep 19 2022" &&
        date3 != "Mon Sep 19 2022"
      ) {
        isCorrect = false;
        break;
      }
      if (
        date1 != "Mon Sep 26 2022" &&
        date2 != "Mon Sep 26 2022" &&
        date3 != "Mon Sep 26 2022"
      ) {
        isCorrect = false;
        break;
      }
      break;
    case "16":
      // Book 3 slots that starts at 4.30 PM.
      if (numOfConfirmedSlots != 3) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var thirdSelectedSlot = Object.values(confirmedSessions)[2];
      if (
        firstSelectedSlot.session != "9" ||
        secondSelectedSlot.session != "9" ||
        thirdSelectedSlot.session != "9"
      ) {
        isCorrect = false;
        break;
      }
      break;
    case "17":
      // Book 3 slots that starts at 10.30 AM.
      if (numOfConfirmedSlots != 3) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var thirdSelectedSlot = Object.values(confirmedSessions)[2];
      if (
        firstSelectedSlot.session != "3" ||
        secondSelectedSlot.session != "3" ||
        thirdSelectedSlot.session != "3"
      ) {
        isCorrect = false;
        break;
      }
      break;
    case "18":
      // Book 3 slots that starts at 8.30 PM.
      if (numOfConfirmedSlots != 3) {
        isCorrect = false;
        break;
      }
      var firstSelectedSlot = Object.values(confirmedSessions)[0];
      var secondSelectedSlot = Object.values(confirmedSessions)[1];
      var thirdSelectedSlot = Object.values(confirmedSessions)[2];
      if (
        firstSelectedSlot.session != "13" ||
        secondSelectedSlot.session != "13" ||
        thirdSelectedSlot.session != "13"
      ) {
        isCorrect = false;
        break;
      }
      break;
    default:
      break;
  }
  if (isCorrect) {
    // send logged data to forms
    sendLoggedData();

    var isComplete = sessionStorage.hasOwnProperty('loggingComplete')
        && sessionStorage.getItem('loggingComplete');
    if (isComplete) {
      // redirect to confirmation page TODO
      location.href = "confirmation.html";
    }

  } else {
    var currTries = parseInt(sessionStorage.getItem("numTries"));
    if (!currTries) {
        currTries = 0;
    }
    // increment num Tries
    sessionStorage.setItem("numTries", currTries + 1);
    console.log(sessionStorage.getItem("numTries"));
    sessionStorage.removeItem("selectedSessions");

    // display fail html
    location.href = "fail.html";
  }
}

// =========== Logging helper functions =========== 

// A persistent unique id for the user.
var uid = getUniqueId();

// Parse user agent string by looking for recognized substring.
function findFirstString(str, choices) {
    for (var j = 0; j < choices.length; j++) {
      if (str.indexOf(choices[j]) >= 0) {
        return choices[j];
      }
    }
    return '?';
  }
  
  // Generates or remembers a somewhat-unique ID with distilled user-agent info.
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

function sendLoggedData() {
    const startTime = parseInt(sessionStorage.getItem("startTime"));
    const timeNow = Date.now();
    const totalTime = (timeNow - startTime) / 1000; // in seconds.miliseconds
    const numClicks = sessionStorage.getItem("numClicks");
    const numTries = sessionStorage.getItem("numTries");
    const taskId = sessionStorage.getItem("task_id");
    const technique = "calendar";
    sendNetworkLog(uid, technique, taskId, totalTime, numClicks, numTries);
    sessionStorage.setItem('loggingComplete', true);
}

function sendNetworkLog(uid, technique, taskId, totalTime, numClicks, numTries) {
    console.log("SENDING NETWORK LOG", "time", totalTime, "clicks", numClicks, "tries", numTries);
    var formid = "1FAIpQLSf-H0XExwzcCAFtxS1yQi_6q1yzBt2qsmitQUrAiep_oGNphA";
    var data = {
        "entry.291160548": uid,
        "entry.1369922782": technique,
        "entry.1199872660": taskId,
        "entry.2053817221": totalTime,
        "entry.555222347": numTries,
        "entry.444426279": numClicks,
    };
    var params = [];
    for (key in data) {
        params.push(key + "=" + encodeURIComponent(data[key]));
    }

    const destLink = "https://docs.google.com/forms/d/e/" + formid + "/formResponse?&" + params.join("&") + "&submit=SUBMIT";
    // fetch(destLink, {
    //     origin: "*",
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'}, 
    //     body: JSON.stringify(data)
    //   }).then(res => {
    //     console.log("Request complete! response:", res);
    // })

    (new Image).src = destLink;
}
