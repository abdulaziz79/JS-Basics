document.getElementById("validate").addEventListener("click", function(event) {
    event.preventDefault();
    var ageInput = document.getElementById("age").value;
    var resultDiv = document.getElementById("result");

    if (parseInt(ageInput) > 18) {
        alert("you are over 18 ")

    } else {
        alert( "You are under 18");
    }
});