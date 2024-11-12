var dv = document.getElementById("content"); 
dv.style.opacity = 0; // Set initial opacity to 0 for fade-in effect
var val = 0;
var ok = 2; // Initialize ok variable

function timer() {
    var start = new Date(2023, 10, 13, 0, 0); // Start date and time
    var t = new Date() - start;
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    if (h < 10) h = "0" + h;
    var m = Math.floor(t / 1000 / 60 % 60);
    if (m < 10) m = "0" + m;
    var s = Math.floor(t / 1000 % 60);
    if (s < 10) s = "0" + s;

    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

// Start the timer function every second
timer();
setInterval(timer, 1000);

// Start the fade-in effect when ok is set to 2
fadeInterval = setInterval(function() {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
