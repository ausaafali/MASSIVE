document.querySelector(".toggle").addEventListener("click", function () {
  this.classList.toggle("activate");
  document.getElementById("lead-bar").classList.toggle("side-bar-hidden");
  document.body.classList.toggle("overflow-hidden");
});
window.onscroll = function () {
  myFunction();
};

let screenHeight =
  (window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight)) *
  100;
function myFunction() {
  let screenHeight =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  //var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = screenHeight + "%";
  //console.log(Number(screenHeight));
  if (Number(screenHeight) > 25) {
    document
      .getElementsByClassName("circler")[1]
      .classList.add("colored-circle");
  } else {
    document
      .getElementsByClassName("circler")[1]
      .classList.remove("colored-circle");
  }
  if (Number(screenHeight) > 50) {
    document
      .getElementsByClassName("circler")[2]
      .classList.add("colored-circle");
  } else {
    document
      .getElementsByClassName("circler")[2]
      .classList.remove("colored-circle");
  }
  if (Number(screenHeight) > 75) {
    document
      .getElementsByClassName("circler")[3]
      .classList.add("colored-circle");
  } else {
    document
      .getElementsByClassName("circler")[3]
      .classList.remove("colored-circle");
  }
  if (Number(screenHeight) > 99) {
    document
      .getElementsByClassName("circler")[4]
      .classList.add("colored-circle");
  } else {
    document
      .getElementsByClassName("circler")[4]
      .classList.remove("colored-circle");
  }
}

let blogs_section = document.getElementById("blogs-section");
let countdownCalled = false;
if (blogs_section) {
  window.addEventListener("scroll", () => {
    if (
      !countdownCalled &&
      eval(window.scrollY + 10) >= blogs_section.offsetTop
    ) {
      console.log("test");
      $(".line-toggle").css("background-color", "white");
      $("#in-svg").attr("fill", "#fff");
    } else {
      $(".line-toggle").css("background-color", "black");
      $("#in-svg").attr("fill", "#000");
    }
  });
}

// CARDS SERV
document.addEventListener("scroll", function () {
  const cards = [
    document.getElementById("vid-card-1"),
    document.getElementById("vid-card-2"),
    document.getElementById("vid-card-3"),
  ];
  const overlapThreshold = 400; //(to change when to blur)

  for (let i = 0; i < cards.length - 1; i++) {
    const currentCard = cards[i];
    const nextCard = cards[i + 1];
    const currentCardRect = currentCard.getBoundingClientRect();
    const nextCardRect = nextCard.getBoundingClientRect();

    if (nextCardRect.top <= currentCardRect.bottom - overlapThreshold) {
      currentCard.classList.add("blur");
    } else {
      currentCard.classList.remove("blur");
    }
  }
});
// CARDS SERV

// SERVICES
$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPosition = $(this).scrollTop();
    var section2Offset = $("#yinyan-2").offset().top;
    var section3Offset = $("#yinyan-3").offset().top; // Ensure this matches your third section ID

    console.log(section3Offset); // Check the offset value in the console

    if (scrollPosition >= section3Offset) {
      $(".section").removeClass("active"); // Remove active class from all sections
      $("#yinyan-3").addClass("active"); // Add active class to section 3
    } else if (scrollPosition >= section2Offset) {
      $(".section").removeClass("active"); // Remove active class from all sections
      $("#yinyan-2").addClass("active"); // Add active class to section 2
    } else {
      $(".section").removeClass("active"); // Remove active class from all sections
      $("#yinyan-1").addClass("active"); // Add active class to section 1 (default)
    }
  });
});
// SERVICES

// random img

// random img

// svgs

// svgs
