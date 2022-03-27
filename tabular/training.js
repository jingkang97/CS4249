/**
 * 1: You want to select any session on 12 June 2022. Assuming you do not know what day 12 June 2022 is on, what is the best way to use the filter below?
 * 2: You want to select sessions 9 and 10 that falls on any weekday in January 2023. What is the best way to use the filter below? 
 */

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  return sPageURL.split("=")[1];
}

const training_id = GetURLParameter().toString();

sessionStorage.removeItem("slots"); // reset selected slots when back to filter page
var month_ids = JSON.parse(sessionStorage.getItem("month"));
if (!month_ids) {
  month_ids = {
    Mar22: false,
    Jul22: false,
    Nov22: false,
    Apr22: false,
    Aug22: false,
    Dec22: false,
    May22: false,
    Sep22: false,
    Jan23: false,
    Jun22: false,
    Oct22: false,
    Feb22: false,
  };
} else {
  for (i in month_ids) {
    // document.getElementById(i).checked = month_ids[i];
  }
}

var all = true;
var session_ids = JSON.parse(sessionStorage.getItem("session"));
if (!session_ids) {
  session_ids = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
  };
} else {
  for (i in session_ids) {
    if (all && !session_ids[i]) {
      all = false;
    }
    // document.getElementById(i).checked = session_ids[i];
  }
  if (all) {
    // document.getElementById("allsessions").checked = true;
  }
}

all = true;
var day_ids = JSON.parse(sessionStorage.getItem("day"));
if (!day_ids) {
  day_ids = {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  };
} else {
  for (i in day_ids) {
    if (all && !day_ids[i]) {
      all = false;
    }
    // document.getElementById(i).checked = day_ids[i];
  }
  if (all) {
    // document.getElementById("alldays").checked = true;
  }
}

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("click", function () {
        if (this.id in month_ids) {
            month_ids[this.id] = this.checked;
            for (month in month_ids) {
                if (month_ids[month]) {
                    sessionStorage.setItem("month", JSON.stringify(month_ids));
                    return;
                }
            }
            sessionStorage.removeItem("month");
        } else if (this.id in session_ids) {
            session_ids[this.id] = this.checked;
            sessionStorage.setItem("session", JSON.stringify(session_ids));
        } else if (this.id in day_ids) {
            day_ids[this.id] = this.checked;
            sessionStorage.setItem("day", JSON.stringify(day_ids));
        } else if (this.id == "allsessions") {
            for (i in session_ids) {
                session_ids[i] = this.checked;
                document.getElementById(i).checked = this.checked;
            }
            if (this.checked) {
                sessionStorage.setItem("session", JSON.stringify(session_ids));
            } else {
                sessionStorage.removeItem("session");
            }
        } else if (this.id == "alldays") {
            for (i in day_ids) {
                day_ids[i] = this.checked;
                document.getElementById(i).checked = this.checked;
            }
            if (this.checked) {
                sessionStorage.setItem("day", JSON.stringify(day_ids));
            } else {
                sessionStorage.removeItem("day");
            }
        }
    });
});

const task_1 = {
    'month': {"Mar22":false,"Jul22":false,"Nov22":false,"Apr22":false,"Aug22":false,"Dec22":false,"May22":false,"Sep22":false,"Jan23":false,"Jun22":true,"Oct22":false,"Feb22":false},
    'session': {"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true},
    'day': {"mon":true,"tue":true,"wed":true,"thu":true,"fri":true,"sat":true,"sun":true}
}

const task_2 = {
    'month': {"Mar22":false,"Jul22":false,"Nov22":false,"Apr22":false,"Aug22":false,"Dec22":false,"May22":false,"Sep22":false,"Jan23":true,"Jun22":false,"Oct22":false,"Feb22":false},
    'session': {"1":false,"2":false,"3":false,"4":false,"5":false,"6":false,"7":false,"8":false,"9":true,"10":true,"11":false,"12":false,"13":false,"14":false,"15":false},
    'day': {"mon":true,"tue":true,"wed":true,"thu":true,"fri":true,"sat":false,"sun":false}
}

function checkSelection() {
    if (sessionStorage.getItem('month') === null || sessionStorage.getItem('session') === null || sessionStorage.getItem('day') === null) {
        console.log('here')
        alert('Invalid selection. Please select at least 1 value for Month, Session, and Day.')
        return
    }

    const months = sessionStorage.getItem("month")
    const sessions = sessionStorage.getItem("session")
    const days = sessionStorage.getItem("day")

    switch (training_id){
        case '1':
            if (months === JSON.stringify(task_1['month']) && sessions === JSON.stringify(task_1['session']) && days === JSON.stringify(task_1['day'])) {
                alert("Correct! Proceed to the next question on Qualtrics")
                sessionStorage.clear()
                parent.postMessage("End of Training", "*");
            } else {
                alert("This is not the best way to filter. Please read the hints and try again.")
            }
            break
            case '2':
                if (months === JSON.stringify(task_2['month']) && sessions === JSON.stringify(task_2['session']) && days === JSON.stringify(task_2['day'])) {
                    alert("Correct! Proceed to the next section on Qualtrics")
                    sessionStorage.clear()
                    parent.postMessage("End of Training", "*");
                } else {
                    alert("This is not the best way to filter. Please read the hints and try again.")
                }
                break
        default:
            break
    }
}
