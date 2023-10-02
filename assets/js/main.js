function countdown() {
  var targetDate = new Date("12/3/2023").getTime();

  var countdownInterval = setInterval(function() {
    var currentDate = new Date().getTime();
    var timeDifference = targetDate - currentDate;
 
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = days + " ngày " + hours + " giờ "
      + minutes + " phút " + seconds + " giây ";
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Ngày mục tiêu đã trôi qua.";
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function(event) {
  countdown();
});


