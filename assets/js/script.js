//  The current day is displayed at the top of the calendar
const dateTime = moment().format("MMM Do YYYY");
$("#date").text(dateTime);

const dateHour = moment().format("h");
console.log(dateHour);


$(".addButton").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
})

$(".clearButton").on("click", function () {
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.removeItem(time);

    applyVals();
})

function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function (index) {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        var $todo = $(".todo").eq(index);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $todo.removeClass("future");
            $todo.removeClass("present");
            $todo.addClass("past");
        }
        else if (blockTime === timeNow) {
            $todo.removeClass("past");
            $todo.removeClass("future");
            $todo.addClass("present");
        }
        else {
            $todo.removeClass("present");
            $todo.removeClass("past");
            $todo.addClass("future");

        }
    })
}

// Get item from local storage if any
function applyVals() {
    for (var i in localStorage) {
        if (localStorage.hasOwnProperty(i)) {
            // arrayOfValues.push(localStorage[i]);
            console.log(i, localStorage[i]);
        }
    }
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
}

timeTracker();
applyVals();


