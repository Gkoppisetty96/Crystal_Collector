$( document ).ready(function(){

// wins/losses and total
var wins = 0;
var losses = 0;
var total = 0;

// pick a random target number
var target = Math.floor(Math.random()*101+19);
// attach to target number span
console.log("Target: " + target)
$("#target-number").text(target);

// assign random values to the 4 crystals
var numA = Math.floor(Math.random()*11+1);
var numB = Math.floor(Math.random()*11+1);
var numC = Math.floor(Math.random()*11+1);
var numD = Math.floor(Math.random()*11+1);
console.log("A:" + numA + " B:" + numB +" C:" + numC + " D:" + numD);

// reset function
function reset() {
    // reset target number
    target = Math.floor(Math.random()*101+19);
    console.log("Target: " + target)
    $("#target-number").text(target);
    // reset crystals
    var numA = Math.floor(Math.random()*11+1);
    var numB = Math.floor(Math.random()*11+1);
    var numC = Math.floor(Math.random()*11+1);
    var numD = Math.floor(Math.random()*11+1);
    console.log("A:" + numA + " B:" + numB +" C:" + numC + " D:" + numD);
    // reset total
    total = 0;
    $("#current").text(total);
}

// alerts for win/loss, and call reset
function gamerAlerts () {
    if (total === target) {
        alert ("You Win!!");
        console.log ("win");
        wins++;
        $("#wins-count").text(wins);
        reset();
    }
    else if (total > target) {
        alert ("You Lost :(");
        console.log ("lost");
        losses++;
        $("#losses-count").text(losses);
        reset()
    }
}

// set up the crystals
$("#amethyst").on('click', function () {
    total += numA;
    console.log("New total= " + total);
    $("#current").text(total);
    gamerAlerts();
})
$("#beryl").on('click', function () {
    total += numB;
    console.log("New total= " + total);
    $("#current").text(total);
    gamerAlerts();
})
$("#citrine").on('click', function () {
    total += numC;
    console.log("New total= " + total);
    $("#current").text(total);
    gamerAlerts();
})
$("#diamond").on('click', function () {
    total += numD;
    console.log("New total= " + total);
    $("#current").text(total);
    gamerAlerts();
})



// end of script
})