 /**
  * ONE SLOT - DATE PREFERENCE
  * 1: Book one slot in September.
  * 2: Book one slot that falls on a Monday. 
  * 3: Book a slot on 12 September 2022. 
  * 
  * TWO SLOTS - DATE PREFERENCE
  * 7: Book two slots exactly one week apart in the same month. (One slot per week)
  * 8: Book two slots that fall on the same Monday. 
  * 9: Book a slot on 12 September 2022 and a slot on 19 September 2022. 
  * 
  * THREE SLOTS - DATE PREFERENCE
  * 13: Book three slots exactly one week apart from one another in the same month. (One slot per week)
  * 14: Book three slots that fall on the same Monday. 
  * 15: Book a slot on 12 September 2022 19 September 2022, and 26 September 2022. 
  * 
  * SET TASK ID IN SESSION STORAGE ACCORDING TO THIS ID LIST, WILL BE USED TO VALIDATE SELECTED SLOTS
  */
// sessionStorage.setItem('task_id', '1')
// sessionStorage.setItem('start_time', new Date().toString())




sessionStorage.removeItem('slots') // reset selected slots when back to filter page
var month_ids = JSON.parse(sessionStorage.getItem('month'))
if (!month_ids) {
    month_ids = {'Mar22': false, 'Jul22': false, 'Nov22': false, 'Apr22': false, 'Aug22': false, 'Dec22': false, 'May22': false, 'Sep22': false, 'Jan23': false, 'Jun22': false, 'Oct22': false, 'Feb22': false}
} else {
    for (i in month_ids) {
        document.getElementById(i).checked = month_ids[i]
    }
}

var all = true
var session_ids = JSON.parse(sessionStorage.getItem('session'))
if (!session_ids) {
    session_ids = {'1': false, '2': false, '3': false, '4': false, '5': false, '6': false, '7': false, '8': false, '9': false, '10': false, '11': false, '12': false, '13': false, '14': false, '15': false, '16': false}
} else {
    for (i in session_ids) {
        if (all && !session_ids[i]) {
            all = false
        }
        document.getElementById(i).checked = session_ids[i]
    }
    if (all) {
        document.getElementById('allsessions').checked = true
    }
}

all = true
var day_ids = JSON.parse(sessionStorage.getItem('day'))
if (!day_ids) {
    day_ids = {'mon': false, 'tue': false, 'wed': false, 'thu': false, 'fri': false, 'sat': false, 'sun': false}
} else {
    for (i in day_ids) {
        if (all && !day_ids[i]) {
            all = false
        }
        document.getElementById(i).checked = day_ids[i]
    }
    if (all) {
        document.getElementById('alldays').checked = true
    }
    
}

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("click", function(){
        console.log(this.id);
        console.log(this.checked)
        if (this.id in month_ids) {
            month_ids[this.id] = this.checked
            for (month in month_ids) {
                if (month_ids[month]) {
                    console.log('hhhh' + month)
                    sessionStorage.setItem('month', JSON.stringify(month_ids))
                    return
                }
            }
            sessionStorage.removeItem('month')
            console.log(sessionStorage.getItem('month'))
        } else if (this.id in session_ids) {
            session_ids[this.id] = this.checked
            sessionStorage.setItem('session', JSON.stringify(session_ids))
            console.log(sessionStorage.getItem('session'))
        } else if (this.id in day_ids) {
            day_ids[this.id] = this.checked
            sessionStorage.setItem('day', JSON.stringify(day_ids))
            console.log(sessionStorage.getItem('day'))
        } else if (this.id == 'allsessions') {
            for (i in session_ids) {
                session_ids[i] = this.checked
                document.getElementById(i).checked = this.checked
            }
            if (this.checked) {
                sessionStorage.setItem('session', JSON.stringify(session_ids))
            } else {
                sessionStorage.removeItem('session')
            }
        } else if (this.id == 'alldays') {
            for (i in day_ids) {
                day_ids[i] = this.checked
                document.getElementById(i).checked = this.checked
            }
            if (this.checked) {
                sessionStorage.setItem('day', JSON.stringify(day_ids))
            } else {
                sessionStorage.removeItem('day')
            }
        }
    });
});