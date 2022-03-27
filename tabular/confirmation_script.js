if (sessionStorage.getItem('slots') === null || sessionStorage.getItem('slots').length === 0) {
  alert('Invalid selection. Please select at least 1 slot.')
  document.location.href = "selection.html"
}

const selected_slots = sessionStorage.getItem("slots").split(",");
var confirmation_table = document.getElementById("confirmation-table");
const total_row = document.getElementById("total_row");

function createCell(data) {
  let cell = document.createElement("td");
  cell.setAttribute("style", "font-weight: normal; color: black;");
  cell.innerHTML = data;
  return cell;
}

console.log(selected_slots);
selected_slots.forEach((slot) => {
  let slot_row = document.createElement("tr");
  const slot_info = slot.split("|");
  slot_info.forEach((info) => {
    slot_row.appendChild(createCell(info));
  });
  slot_row.appendChild(createCell("<b>$13.91</b>")); // session charge
  slot_row.appendChild(createCell("<b>$0.00</b>")); // venue charge
  total_row.parentNode.insertBefore(slot_row, total_row);
});

const total_session_charge =
  "$" + (selected_slots.length * 13.91).toFixed(2).toString();
document.getElementById("total_session_charge").innerHTML =
  total_session_charge;
document.getElementById("total_session_charge_value").innerHTML =
  total_session_charge;
document.getElementById("grand_total_value").innerHTML = total_session_charge;

const task_id = localStorage.getItem('task_id')
/**
 * task id format
 * <date string> <day string>|<slot #>|<session start>-<session end>|BBDC
 * eg: "26/03/2022 Sat|1|08:30-09:30|BBDC"
 * <date string> = dd/mm/yy
 * <day string> = Mon/Tue/.../Sun
 * <slot #> = 1/2/.../16
 * <session start> = hh:mm (24 hr)
 * <session end> = hh:mm (24 hr)
 */
function checkSelection() {
  var correct = true
  switch (task_id) {
    case '1': 
      //Book one slot in September.
      if (selected_slots.length != 1) {
        correct = false
        break
      }
      var month = selected_slots[0].split('|')[0].split(' ')[0].split('/')[1]
      if (month != "09") {
        correct = false
        break
      }
      break
    case '2':
      //Book one slot that falls on a Monday. 
      if (selected_slots.length != 1) {
        correct = false
        break
      }
      var day = selected_slots[0].split('|')[0].split(' ')[1]
      if (day != 'Mon') {
        correct = false
        break
      }
      break
    case '3':
      //Book a slot on 12 September 2022. 
      if (selected_slots.length != 1) {
        correct = false
        break
      }
      var date = selected_slots[0].split('|')[0].split(' ')[0]
      if (date != '12/09/2022') {
        correct = false
        break
      }
      break
    case '4':
      //Book a slot that starts at 4.30 PM.
      if (selected_slots.length != 1) {
        correct = false
        break
      }
      var slot = selected_slots[0].split('|')[1]
      if (slot != '9') {
        correct = false
        break
      }
      break
    case '5':
      //Book a slot that starts at 10.30 AM.
      if (selected_slots.length != 1) {
        correct = false
        break
      }
      var slot = selected_slots[0].split('|')[1]
      if (slot != '3') {
        correct = false
        break
      }
      break
    case '6':
      //Book a slot that starts at 8.30 PM.
      if (selected_slots.length != 1) {
        correct = false
        break
      }
      var slot = selected_slots[0].split('|')[1]
      if (slot != '13') {
        correct = false
        break
      }
      break
    case '7':
      //Book two slots exactly one week apart in the same month. (One slot per week)
      if (selected_slots.length != 2) {
        correct = false
        break
      }
      var month1 = selected_slots[0].split('|')[0].split(' ')[0].split('/')[1]
      var month2 = selected_slots[1].split('|')[0].split(' ')[0].split('/')[1]
      if (month1 != month2) {
        correct = false
        break
      }
      var day1 = selected_slots[0].split('|')[0].split(' ')[0].split('/')[0]
      var day2 = selected_slots[1].split('|')[0].split(' ')[0].split('/')[0]
      if (Math.abs(parseInt(day1) - parseInt(day2)) != 7) {
        correct = false
        break
      }
      break
    case '8':
      //Book two slots that fall on the same Monday. 
      if (selected_slots.length != 2) {
        correct = false
        break
      }
      var date1 = selected_slots[0].split('|')[0].split(' ')[0]
      var date2 = selected_slots[1].split('|')[0].split(' ')[0]
      if (date1 != date2) {
        correct = false
        break
      }
      var day1 = selected_slots[0].split('|')[0].split(' ')[1]
      var day2 = selected_slots[1].split('|')[0].split(' ')[1]
      if (day1 != 'Mon' || day2 != 'Mon') {
        correct = false
        break
      }
      break
    case '9':
      //Book a slot on 12 September 2022 and a slot on 19 September 2022. 
      if (selected_slots.length != 2) {
        correct = false
        break
      }
      var date1 = selected_slots[0].split('|')[0].split(' ')[0]
      var date2 = selected_slots[1].split('|')[0].split(' ')[0]
      if (date1 != '12/09/2022' && date2 != '12/09/2022') {
        correct = false
        break
      }
      if (date1 != '19/09/2022' && date2 != '19/09/2022') {
        correct = false
        break
      }
      break
    case '10':
      //Book two slots that starts at 4.30 PM.
      if (selected_slots.length != 2) {
        correct = false
        break
      }
      var slot1 = selected_slots[0].split('|')[1]
      var slot2 = selected_slots[1].split('|')[1]
      if (slot1 != '9' || slot2 != '9') {
        correct = false
        break
      }
      break
    case '11':
      //Book two slots that starts at 10.30 AM.
      if (selected_slots.length != 2) {
        correct = false
        break
      }
      var slot1 = selected_slots[0].split('|')[1]
      var slot2 = selected_slots[1].split('|')[1]
      if (slot1 != '3' || slot2 != '3') {
        correct = false
        break
      }
      break
    case '12':
      //Book two slots that starts at 8.30 PM.
      if (selected_slots.length != 2) {
        correct = false
        break
      }
      var slot1 = selected_slots[0].split('|')[1]
      var slot2 = selected_slots[1].split('|')[1]
      if (slot1 != '13' || slot2 != '13') {
        correct = false
        break
      }
      break
    case '13':
      //Book three slots exactly one week apart from one another in the same month. (One slot per week)
      if (selected_slots.length != 3) {
        correct = false
        break
      }
      var month1 = selected_slots[0].split('|')[0].split(' ')[0].split('/')[1]
      var month2 = selected_slots[1].split('|')[0].split(' ')[0].split('/')[1]
      var month3 = selected_slots[2].split('|')[0].split(' ')[0].split('/')[1]
      if (month1 != month2 || month1 != month3) {
        correct = false
        break
      }
      var day1 = selected_slots[0].split('|')[0].split(' ')[0].split('/')[0]
      var day2 = selected_slots[1].split('|')[0].split(' ')[0].split('/')[0]
      var day3 = selected_slots[2].split('|')[0].split(' ')[0].split('/')[0]
      var days = [day1, day2, day3]
      days.sort()
      for (var i = 1; i < 3; i++) {
          if (days[i] - days[i-1] != 7) {
            correct = false
            break
          }
      }
      break
    case '14':
      //Book three slots that fall on the same Monday. 
      if (selected_slots.length != 3) {
        correct = false
        break
      }
      var date1 = selected_slots[0].split('|')[0].split(' ')[0]
      var date2 = selected_slots[1].split('|')[0].split(' ')[0]
      var date3 = selected_slots[2].split('|')[0].split(' ')[0]
      if (date1 != date2 || date1 != date3) {
        correct = false
        break
      }
      var day1 = selected_slots[0].split('|')[0].split(' ')[1]
      var day2 = selected_slots[1].split('|')[0].split(' ')[1]
      var day3 = selected_slots[2].split('|')[0].split(' ')[1]
      if (day1 != 'Mon' || day2 != 'Mon' || day3 != 'Mon') {
        correct = false
        break
      }
      break
    case '15':
      //Book a slot on 12 September 2022 and a slot on 19 September 2022, and 26 September 2022. 
      if (selected_slots.length != 3) {
        correct = false
        break
      }
      var date1 = selected_slots[0].split('|')[0].split(' ')[0]
      var date2 = selected_slots[1].split('|')[0].split(' ')[0]
      var date3 = selected_slots[2].split('|')[0].split(' ')[0]
      if (date1 != '12/09/2022' && date2 != '12/09/2022' && date3 != '12/09/2022') {
        correct = false
        break
      }
      if (date1 != '19/09/2022' && date2 != '19/09/2022' && date3 != '19/09/2022') {
        correct = false
        break
      }
      if (date1 != '26/09/2022' && date2 != '26/09/2022' && date3 != '26/09/2022') {
        correct = false
        break
      }
      break
    case '16':
      //Book three slots that starts at 4.30 PM.
      if (selected_slots.length != 3) {
        correct = false
        break
      }
      var slot1 = selected_slots[0].split('|')[1]
      var slot2 = selected_slots[1].split('|')[1]
      var slot3 = selected_slots[2].split('|')[1]
      if (slot1 != '9' || slot2 != '9' || slot3 != '9') {
        correct = false
        break
      }
      break
    case '17':
      //Book three slots that starts at 10.30 AM.
      if (selected_slots.length != 3) {
        correct = false
        break
      }
      var slot1 = selected_slots[0].split('|')[1]
      var slot2 = selected_slots[1].split('|')[1]
      var slot3 = selected_slots[2].split('|')[1]
      if (slot1 != '3' || slot2 != '3' || slot3 != '3') {
        correct = false
        break
      }
      break
    case '18':
      //Book three slots that starts at 8.30 PM.
      if (selected_slots.length != 3) {
        correct = false
        break
      }
      var slot1 = selected_slots[0].split('|')[1]
      var slot2 = selected_slots[1].split('|')[1]
      var slot3 = selected_slots[2].split('|')[1]
      if (slot1 != '13' || slot2 != '13' || slot3 != '13') {
        correct = false
        break
      }
      break
    default:
      break
  }
  if (correct) {
    location.href = "success.html"
  } else {
    location.href = "fail.html"
    const retries = parseInt(localStorage.getItem("retries"))
    localStorage.setItem('retries', (retries + 1).toString())
    sessionStorage.clear()
  }
}