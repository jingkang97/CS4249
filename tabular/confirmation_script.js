const selected_slots = sessionStorage.getItem("slots").split(",");
var confirmation_table = document.getElementById("confirmation-table");
const total_row = document.getElementById("total_row");

function createCell(data) {
  let cell = document.createElement("td");
  cell.setAttribute("style", "font-weight: normal;");
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

function checkSelection() {
  for (let i = 0; i < selected_slots.length; i++) {
    let slot = selected_slots[i];
    console.log(slot);

    if (slot != "") {
      //hard-coded string, should be the correct ans
      // go to error, restart page
      location.href = "fail.html";
    } else {
      // success
      location.href = "success.html";
    }
  }
}
