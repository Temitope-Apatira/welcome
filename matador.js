(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = dd + 10,
        dayMonth = "11/30/",
        dday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > dday) {
      dday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(dday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)) + " : ",
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) + " : ",
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's here!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());