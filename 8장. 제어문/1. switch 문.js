// switch (표현식) {
// 	case 표현식1:
// 		switch 문의 표현식과 표현식1이 일치하면 실행될 문;
// 		break;
// case 표현식2:
// 		switch 문의 표현식과 표현식2이 일치하면 실행될 문;
// 		break;
// default:
// 		switch 문의 표현식과 일치하는 case 문이 없을 경우 실행되는 문;
// }
var month = 1;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month number";
    break;
}

console.log("The month is " + monthName);
