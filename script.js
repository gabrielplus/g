function updateTimer() {
    future  = Date.parse("Dec 11, 2024 11:30:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '<span>days_</span></div>' +
        '<div>' + h + '<span>hours_</span></div>' +
        '<div>' + m + '<span>min_</span></div>' +
        '<div>' + s + '<span>sec</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
  