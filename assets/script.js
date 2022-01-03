function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeBoston1(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var boston1 = 'March 23 2022 23:30:00 GMT-0000'; 
initializeBoston1('clockdiv', boston1);

/* var boston2 = 'March 24 2022 23:30:00 GMT-0000'; 
initializeBoston2('clockdiv', boston1);

var spain = 'June 10 2022 15:00:00 GMT-0000'; 
initializeSpain('clockdiv', spain);

var boston1 = 'June 21 2022 01:00:00 GMT-0000'; 
initializeRedRocks('clockdiv', redrocks); */
