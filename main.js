var weight = 0
var height = 0
var bmi = 0

var state = "imperial"

$("#calc").click(function() {
    weight = $("#weight").val()
    height = $("#height").val()

    if(state === "imperial") {
        bmi = (weight / Math.pow(height,2)) * 703
    } else {
        bmi = (weight / height / height)
        bmi = bmi * 10000
    }
    $("#bmi").text("~" + Math.floor(bmi))
}); 


$("#imperial").click(function() {
    $("#weightIn").text("Weight in Pounds:")
    $("#heightIn").text("Height in Inches:")
    state = "imperial";
});

$("#metric").click(function() {
    $("#weightIn").text("Weight in Kilograms:")
    $("#heightIn").text("Height in Centimeters")
    state = "metric";
});