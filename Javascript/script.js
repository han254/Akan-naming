//Form validation
var YY, MM, DD, d, dayvalue;
var weekDays = [
  "Sunday",
  "MOnday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sartuday",
];
var akanMales = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateForm(e) {
     e.preventDefault(e)
  var gender = document.querySelector("input[name='gender']:checked");
  var day =document.myForm.date.value;
  if (
    document.myForm.year.value == "" ||
    document.myForm.year.value.length != 4 ||
    document.myForm.year.value > 2022 ||
    document.myForm.year.value < 1900
  ) {
    alert("Please Enter a valid Year Of Birth");
    document.myForm.year.focus();
    return false;
 } else if (
    document.myForm.month.selectedIndex == -1 ||
    document.myForm.month.selectedIndex < 1
  ) {
    alert("Please select Your Month of Birth!");
     document.myForm.month.focus();
    return false;
  } else if (
    day <= 0 ||
    day >= 32
  ) {
    alert("Please Enter a valid Date Of Birth!");
    document.myForm.day.focus();
    return false;