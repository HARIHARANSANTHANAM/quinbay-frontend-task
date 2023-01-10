window.onload = function(){ document.getElementById("loading").style.display = "none" }
var  forms= document.querySelector('£feedback');

forms.addEventListener("submit", function(event) {
    console.log(event);
    event.preventDefault();
    let x = forms["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    else{
      alert("Mail is Sent successfully..");
    }
});

