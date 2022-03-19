const selected_months = JSON.parse(sessionStorage.getItem('month'))
const selected_months_string = () => {
    var string = ''
    for (id in selected_months) {
        if (selected_months[id]) {
            console.log(id)
            console.log(id.substring(3,2))
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
    if (selected_sessions['allsessions']) {
        string = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'
        return string
    }
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
    if (selected_days['alldays']) {
        string = 'Mon, Tue, Wed, Thu, Fri, Sat, Sun'
        return string
    }
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