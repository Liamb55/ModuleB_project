
// function mtoast is used as messages responding to input as opposed to using an alert

function mtoast (smsg) {
  var toast = document.getElementById("mtoast");
  toast.innerText = smsg;
  toast.classList.add("show");
  
  
  toast.style.display="inline";
  toast.style.visibility = 'visible'
}

// reversing the year,month,date format to allow for comparison with date input when booking
function formatDate(dateValue){
  const dt = new Date(dateValue);

  var dYear = dt.getUTCFullYear().toString();
  var dMonth = String(dt.getUTCMonth()+1).padStart(2, '0');
  var dDay = String(dt.getUTCDay()).padStart(2, '0');
  
  return dDay.concat("-", dMonth, "-", dYear);
}
// checking there is an input
function isValid(input) {
  if (input != "") {
    return true
  }
  else {
    return false
  }
}

function isDateAvailable(dt) {
  var isFound = false;
  
  for (i=0; i <= TourDates.length-1; i++) {
    if (dt.localeCompare(TourDates[i][0].toString()) == 0) {
      isFound = true;
      break; //exit for loop after item found
    }
    else {
      isFound = false;
    }
  }

  if (isFound) {
    return i
  }
  else {
    return -1;
  }
}

function responseShowMessage(route){
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let date = document.getElementById("myDate").value;
 
  var email_ok = isValid(email);
  var name_ok = isValid(name);
  var date_ok = isValid(date);
  
  if (email_ok  && name_ok && date_ok){
    //Check Availability
    var dtIndex = isDateAvailable(date);

    if (dtIndex > -1) {
      var numPlaces = TourDates[dtIndex][route];
      if (numPlaces > 0) {
        // Places Available
        TourDates[dtIndex][route] = TourDates[dtIndex][route] - 1;
        mtoast("Thank you for your booking, we will email you shortly");
      }
      else {
        mtoast("No places available")
      }
    }
    else {
      mtoast("Date not available")
    }
  }
  else {
    var msg = "";
    if (!email_ok) {msg = msg + "Email Required\n"};
    if (!name_ok) {msg = msg + "Name Required\n"};
    if (!date_ok) {msg = msg + "Date Required"};
    mtoast(msg);
  }
}
 
function responseRating( ){
  let msg="Thank you for your rating, we appreciate your feedback";
    mtoast(msg);
  }
    

function checkAvailability(tour){
    var str;
    var div = document.getElementById("div_availabledates");
    div.innerText = "";

   for (i=0; i <= TourDates.length-1; i++) {   
    let str= TourDates[i][0].toString().concat("  -  Places ", TourDates[i][tour])
    div.innerText = div.innerText.concat(str, "\n");
    }
  }

