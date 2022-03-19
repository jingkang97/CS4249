// const mar = document.getElementById('Mar22')
// console.log(mar)
// mar.addEventListener('click', update)
// function update(e) {
//     console.log(e)
// }

const month_ids = {'Mar22': false, 'Jul22': false, 'Nov22': false, 'Apr22': false, 'Aug22': false, 'Dec22': false, 'May22': false, 'Sep22': false, 'Jan23': false, 'Jun22': false, 'Oct22': false, 'Feb22': false}
// console.log(month_ids)
// Object.keys(month_ids).map(function(key, index) {
//     month_ids[key] = document.getElementById(key).checked;
// })
// console.log(month_ids)
const session_ids = {'1': false, '2': false, '3': false, '4': false, '5': false, '6': false, '7': false, '8': false, 'allsessions': false}
const day_ids = {'mon': false, 'tue': false, 'wed': false, 'thu': false, 'fri': false, 'sat': false, 'sun': false, 'alldays': false}

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("click", function(){
        console.log(this.id);
        console.log(this.checked)
        if (this.id in month_ids) {
            month_ids[this.id] = this.checked
            sessionStorage.setItem('month', JSON.stringify(month_ids))
            console.log(sessionStorage.getItem('month'))
        } else if (this.id in session_ids) {
            session_ids[this.id] = this.checked
            sessionStorage.setItem('session', JSON.stringify(session_ids))
            console.log(sessionStorage.getItem('session'))
        } else if (this.id in day_ids) {
            day_ids[this.id] = this.checked
            sessionStorage.setItem('day', JSON.stringify(day_ids))
            console.log(sessionStorage.getItem('day'))
        }
    });
});