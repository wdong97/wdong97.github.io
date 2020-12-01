function validateForm() {
  var x = document.forms["myForm"]["user_name"].value;
  var y = document.forms["myForm"]["user_email"].value;
  var z = document.forms["myForm"]["user_message"].value;
  if (x == "") {
    alert("name must be filled out");
    return false;
  }
  else if (y == "") {
    alert("email must be filled out");
    return false;
  }
  else if (z == "") {
    alert("message area cannot be blank");
    return false;
  }
}
