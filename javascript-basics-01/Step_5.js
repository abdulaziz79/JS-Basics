
document.getElementById("validate").addEventListener("click", function() {
    var firstNumber = parseFloat(document.getElementById("first_number").value);
    var secondNumber = parseFloat(document.getElementById("second_number").value);
    var result = firstNumber * secondNumber;

    if (!isNaN(result)) {
        var resultMessage = "The result of multiplying " + firstNumber + " and " + secondNumber + " is: " + result;
        var userInput = prompt(resultMessage);
        if (userInput === null) {
            console.log("User canceled the prompt.");
        }
    } else {
        alert("Invalid input. Please enter valid numbers.");
    }
});