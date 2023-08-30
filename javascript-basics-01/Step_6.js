document.getElementById("validate").addEventListener("click", function() {
    var firstNumber = parseFloat(document.getElementById("first_number").value);
    var secondNumber = parseFloat(document.getElementById("second_number").value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        var remainder = firstNumber % secondNumber;
        alert("The remainder of dividing " + firstNumber + " by " + secondNumber + " is: " + remainder);
    } else {
        alert("Invalid input. Please enter valid numbers.");
    }
})
