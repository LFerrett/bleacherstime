function getTimeRemaining(endtime) {
  var boston1Total = Date.parse(endtime) - Date.parse(new Date());
  var boston1Sec = Math.floor((boston1Total / 1000) % 60);
  var boston1Min = Math.floor((boston1Total / 1000 / 60) % 60);
  var boston1Hrs = Math.floor((boston1Total / (1000 * 60 * 60)) % 24);
  var boston1Days = Math.floor(boston1Total / (1000 * 60 * 60 * 24));
  
  return {
    boston1Total,
    boston1Days,
    boston1Hrs,
    boston1Min,
    boston1Sec
  };
}

function initializeBoston1(id, endtime) {
  var clock = document.getElementById(id);
  var boston1daysSpan = clock.querySelector('.boston1days');
  var boston1hoursSpan = clock.querySelector('.boston1hours');
  var boston1minutesSpan = clock.querySelector('.boston1minutes');
  var boston1secondsSpan = clock.querySelector('.boston1seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    boston1daysSpan.innerHTML = t.boston1Days;
    boston1hoursSpan.innerHTML = ('0' + t.boston1Hrs).slice(-2);
    boston1minutesSpan.innerHTML = ('0' + t.boston1Min).slice(-2);
    boston1secondsSpan.innerHTML = ('0' + t.boston1Sec).slice(-2);

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
