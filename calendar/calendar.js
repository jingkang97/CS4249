// script to render calendar, avail timings and selected slots

const costPerSession = 13.91;

console.log("num ", sessionStorage.getItem("numTries"));

// create avail dates from mar 2022 to feb 2023 for the days 5/12/19/26, with all 15 slots
const sessNumToTime = {
    1: '08:30 AM - 09:30 AM',
    2: '09:30 AM - 10:30 AM',
    3: '10:30 AM - 11:30 AM',
    4: '11:30 AM - 12:30 PM',
    5: '12:30 PM - 13:30 PM',
    6: '13:30 PM - 14:30 PM',
    7: '14:30 PM - 15:30 PM',
    8: '15:30 PM - 16:30 PM',
    9: '16:30 PM - 17:30 PM',
    10: '17:30 PM - 18:30 PM',
    11: '18:30 PM - 19:30 PM',
    12: '19:30 PM - 20:30 PM',
    13: '20:30 PM - 21:30 PM',
    14: '21:30 PM - 22:30 PM',
    15: '22:30 PM - 23:30 PM',
}
const availDays = [5, 12, 19, 26];

var sessions = [];
function addSessions(month, year) {
    availDays.forEach(day => {
        const date = new Date(year, month, day);
        // only add if date is past today
        if (date > Date.now()) {
            for (const key in sessNumToTime) {
                sessions.push({
                    start: date.toISOString(),
                    end: date.toISOString(),
                    slot: sessNumToTime[key],
                    session: 'Session ' + key, 
                });
            }
        }
    });
    sessions.flat();
}

// mar - dec 2022
for (i = 2; i < 12; i++) {
    addSessions(i, 2022);
}
// jan - feb 2023
for (i = 0; i < 2; i++) {
    addSessions(i, 2023);
}

// render calendar
new Calendar({
    id: '#color-calendar',
    calendarSize: 'large',
    theme: 'glass',
    primaryColor: '#4F98DB',
    headerBackgroundColor: '#4F98DB',
    eventsData: sessions,
    dateChanged: (currentDate, events) => {
        const events_display = document.querySelector('.events-display');
        const date = currentDate.toDateString();
        document.getElementById('selected-date').innerHTML = date;

        let events_html = '';                
        events.forEach(event => {
            const sessionNum = event.session.substring("Session ".length);
            const key = date + sessionNum;

            selectedStatus = key in selectedSessions ? "selected" : "unselected";
            events_html += `
                <div id="available-timeslot" onclick="clickAvailTimeSlotHandler(this)" class="avail-timeslot ${selectedStatus}">
                    <p class="event-slot">${event.slot}</p>
                    <p>${event.session}<p>
                </div>
            `
        });

        if(events_html) {
            events_display.innerHTML = events_html;
        } else {
            events_display.innerHTML = '<div class="no-events-text">There are no more available slots. <br> Please select an available date that is marked in green.</div>';
        }
    },
});

// render timeslots 
if (document.querySelector(".selectedSlots").innerHTML.length == 0) {
    document.querySelector(".selectedSlots").innerHTML = `<p>Please select a timeslot above.</p>`
}

// Set task_id here
sessionStorage.setItem('task_id', '1')

let selectedSessions = {};

function clickAvailTimeSlotHandler(element) {
    const currDate = document.getElementById('selected-date').innerHTML;
    const sessionNo = element.innerHTML.split("Session")[1].trim().charAt(0);
    // add selected timeslot html only if timeslot not found in dict
    const key = currDate + sessionNo;
    if (!(key in selectedSessions)) {
        // add selected timeslot
        element.className = "avail-timeslot selected";
        selectedSessions[key] = {
            date: currDate,
            slot: element.querySelector(".event-slot").innerHTML,
            session: sessionNo,
            innerHTML: element.innerHTML
        };

    } else {
        // remove selected timeslot
        element.className = "avail-timeslot unselected";
        delete selectedSessions[key];
    }

    // render all selected slots in dict
    let allSelectedSlotsHtml = '';
    for (const value of Object.values(selectedSessions)) {
        allSelectedSlotsHtml += `
            <div class="selected-timeslot">
                <b>${value.date}</b>
                ${value.innerHTML}
            </div>
        `
    }
    const numOfSelectedSlots = Object.values(selectedSessions).length;

    // display html
    document.querySelector(".selectedSlots").innerHTML = allSelectedSlotsHtml;
    document.getElementsByClassName("total-sum")[0].innerText = (numOfSelectedSlots * costPerSession).toFixed(2);
}

function clickSubmitHandler() {
    console.log("submit clicked with selectedSessions: ", selectedSessions);

    // show popup alert if user submits without selecting any slots
    if (Object.values(selectedSessions).length == 0) {
        window.alert('Please select booking slot(s) before submission.')
    } else {
        // add to sessionstorage as string
        sessionStorage.setItem('selectedSessions', JSON.stringify(selectedSessions));
        sessionStorage.setItem('totalCost', 13.91 * Object.values(selectedSessions).length);

        checkSelection();
    }
}
