function evenbtrcountdowntimer() {
  console.log("Better Countdown Timer Started");
  var currTime = 50;
  for (var i = 0; i < 11; i++) {
    if (i == 10) {
      setTimeout(function () {
        document.getElementById("countdownstatus").innerHTML = "Blast Off!";
        currTime = currTime - 5;
      }, 5000 * i);
    } else if (i > 4) {
      setTimeout(function () {
        document.getElementById("countdownstatus").innerHTML =
          "WARNING: Less than half way to launch. Time left = " + currTime;
        currTime = currTime - 5;
      }, 5000 * i);
    } else {
      setTimeout(function () {
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
      }, 5000 * i);
    }
  }
}
