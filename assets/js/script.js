//  The current day is displayed at the top of the calendar
const dateTime = moment().format("MMM Do YYYY");
$("#date").text(dateTime);

const dateHour = moment().format("h");
console.log(dateHour);


// timeblocks for standard business hours
$(".edit").on("click", function () {
    var status = document.getElementById("todoText").isContentEditable;
    $("#todoText").prop("contenteditable", !status);
});


// Get value from element on input events


// Set some value
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

    // Compare row id to current hour and sets color accordingly


// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist
