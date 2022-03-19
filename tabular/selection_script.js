const selected_months = JSON.parse(sessionStorage.getItem('month'))
const selected_months_string = () => {
    var string = ''
    for (id in selected_months) {
        if (selected_months[id]) {
            string += id.substring(0, 3) + '/20' + id.slice(-2) + ', '
        }
    }
    if (string.length > 0) {
        string = string.substring(0, string.length-2)
    }
    return string
}

const selected_sessions = JSON.parse(sessionStorage.getItem('session'))
const selected_sessions_string = () => {
    var string = ''
    // if (selected_sessions['allsessions']) {
    //     string = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'
    //     return string
    // }
    for (var i = 1; i <= 16; i++) {
        if (selected_sessions[i.toString()]) {
            string += i.toString() + ', '
        }
    }
    if (string.length > 0) {
        string = string.substring(0, string.length-2)
    }
    return string
}

const selected_days = JSON.parse(sessionStorage.getItem('day'))
const selected_days_string = () => {
    var string = ''
    // if (selected_days['alldays']) {
    //     string = 'Mon, Tue, Wed, Thu, Fri, Sat, Sun'
    //     return string
    // }
    const keys = Object.keys(selected_days)
    for (var i = 0; i < keys.length - 1; i++) {
        if (selected_days[keys[i]]) {
            string += keys[i][0].toUpperCase() + keys[i].substring(1) + ', '
        }
    }
    if (string.length > 0) {
        string = string.substring(0, string.length-2)
    }
    return string
}

document.getElementById("selected_month").textContent=selected_months_string()
document.getElementById("selected_session").textContent=selected_sessions_string()
document.getElementById("selected_day").textContent=selected_days_string()

function createHeader(header_name) {
    let header = document.createElement('th')
    header.innerHTML = header_name
    return header
}

function createSessionRow(date, day) {
    let row = document.createElement('tr')
    let date_cell = document.createElement('td')
    date_cell.innerHTML = date + '\n' + day
    row.appendChild(date_cell)
    let venue_cell = document.createElement('td')
    venue_cell.innerHTML = 'BBDC'
    row.appendChild(venue_cell)
    return row
}

const session_timings = ["", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30", "20:30", "21:30", "22:30"]

function createDescription(date, day, session) {
    let description = document.createElement('div')
    description.setAttribute('class', 'session_description')

    let date_info = document.createElement('div')
    date_info.setAttribute('id', 'session_info')
    let date_label = document.createElement('div')
    date_label.setAttribute('class', 'info_label')
    date_label.innerHTML = 'Date: '
    let date_value = document.createElement('span')
    date_value.innerHTML = date + ' (' + day + ')'
    date_info.appendChild(date_label)
    date_info.appendChild(date_value)

    let session_info = document.createElement('div')
    session_info.setAttribute('id', 'session_info')
    let session_label = document.createElement('div')
    session_label.setAttribute('class', 'info_label')
    session_label.innerHTML = 'Session: '
    let session_value = document.createElement('span')
    session_value.innerHTML = session.toString() + ' (' + session_timings[session] + '-' + session_timings[session+1] + ')'
    session_info.appendChild(session_label)
    session_info.appendChild(session_value)

    let venue_info = document.createElement('div')
    venue_info.setAttribute('id', 'session_info')
    let venue_label = document.createElement('div')
    venue_label.setAttribute('class', 'info_label')
    venue_label.innerHTML = 'Venue: '
    let venue_value = document.createElement('span')
    venue_value.innerHTML = 'BBDC'
    venue_info.appendChild(venue_label)
    venue_info.appendChild(venue_value)

    description.appendChild(date_info)
    description.appendChild(session_info)
    description.appendChild(venue_info)
    return description
}

var slots_table = document.getElementById("slots")

// populating table headers
let header_row = document.createElement('tr')
var headers = [
    createHeader("Date"),
    createHeader("Venue")
]
const session_ids = Object.keys(selected_sessions)
for (var i = 0; i < session_ids.length; i++) {
    if (selected_sessions[session_ids[i]]) {
        headers.push(createHeader("Session " + session_ids[i].toString()))
    }
}
headers.forEach(header_cell => {
    header_row.appendChild(header_cell)
})
slots_table.appendChild(header_row)

// populating table rows according to selected months (each month will have 4 avail dates, all sessions available)
const available_dates = [5, 12, 19, 26]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
for (i in selected_months) {
    if (selected_months[i]) {
        let month = months.indexOf(i.substring(0, 3))
        let year = '20' + i.slice(-2)
        available_dates.forEach(date => {
            let session_date = new Date(parseInt(year), month, date)
            console.log(session_date)
            let day = session_date.getDay()
            console.log(day)
            if (selected_days[days[day]]) {
                let day_string = days[day].charAt(0).toUpperCase() + days[day].slice(1)
                let date_string = session_date.toLocaleString('en-GB').substring(0,10)
                let session_row = createSessionRow(date_string, day_string)
                for (let j = 1; j <= 14; j++) {
                    if (selected_sessions[j]) {
                        let session_cell = document.createElement('td')
                        session_cell.setAttribute('class', 'session_cell')
                        let checkbox = document.createElement('input')
                        checkbox.setAttribute('type', 'checkbox')
                        let id = date_string + ' ' + day_string + '|' + j.toString() + '|' + session_timings[j] + '-' + session_timings[j+1] + '|' + 'BBDC'
                        checkbox.setAttribute('id', id)
                        session_cell.appendChild(checkbox)
                        let description = document.createElement('span')
                        description.setAttribute('class', 'hover_description')
                        description.appendChild(createDescription(date_string, day_string, j))
                        // let description = createDescription(date_string, day_string, j)
                        session_cell.appendChild(description)
                        session_row.appendChild(session_cell)
                    }
                }
                for (let j = 15; j <= 16; j++) {
                    if (selected_sessions[j]) {
                        let session_cell = document.createElement('td')
                        session_row.appendChild(session_cell)
                    }
                }
                slots_table.appendChild(session_row)
            }
        })
    }
}

if (slots_table.rows.length <= 1) {
    alert('No slots found that fits your selection! Please click try again and reselect.')
    document.location.href = "index.html"
}

var selected_slots = sessionStorage.getItem('slots')
if (!selected_slots) {
    selected_slots = []
} else {
    selected_slots = selected_slots.split(',')
    selected_slots.forEach((slot_id) => {
        document.getElementById(slot_id).checked = true
    })
}
var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function(cb) {
    cb.addEventListener("click", function() {
        console.log(this.id)
        if (this.checked) {
            selected_slots.push(this.id)
            sessionStorage.setItem('slots', selected_slots.toString())
        } else {
            selected_slots = selected_slots.filter(item => item !== this.id)
            sessionStorage.setItem('slots', selected_slots.toString())
        }
        console.log(sessionStorage.getItem('slots'))
    })
})