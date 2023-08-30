document.getElementById("validate").addEventListener("click", function() {
    var shoeSize= parseFloat(document.getElementById("shoe_size").value);
    var birthYear= parseInt(document.getElementById("year").value);

    if (!isNaN(shoeSize) && !isNaN(birthYear)){
        var result = ((shoeSize * 2 + 5) *50 -birthYear +1766)
        alert("The result is: " + result);
    } else {
        alert("Invalid input. Please enter valid numbers.");
    }})