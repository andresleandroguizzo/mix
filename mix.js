var imgactual = 1;
showSlides(imgactual);

function canviar(n) {
  showSlides(imgactual += n);
}

function currentSlide(n) {
  showSlides(imgactual = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imatge");
  if (n > slides.length) {imgactual = 1}    
  if (n < 1) {imgactual = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[imgactual-1].style.display = "block";  
}

setInterval(myTimer, 1000);

function myTimer() {
    var s = document.getElementById("seconds");
    var m = document.getElementById("minutes");
    s.innerHTML++;
    if (s.innerHTML < 10) {
      document.getElementById("seconds").innerHTML = "0"+s.innerHTML;
  }
  if (s.innerHTML == 60) {
    document.getElementById("seconds").innerHTML = "00";
    m.innerHTML++;
    if (m.innerHTML < 10) {
    document.getElementById("minutes").innerHTML = "0"+m.innerHTML;
    }
    if (m.innerHTML == 60) {
    document.getElementById("minutes").innerHTML = "00";
    }
  }
}
document.getElementById("in").onchange = function() {nom()};
function nom() {
    var x = document.getElementById("in").value;
    document.getElementById("teunom").innerHTML = x;
  }