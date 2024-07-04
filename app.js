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

//   if (Number(screenHeight) >= 10 && Number(screenHeight) <= 20) {
//     console.log(document.getElementById("first-head-a"));
//     document.getElementById("first-head-a").style.display = "none";
//     document.getElementById("first-head-b").style.display = "block";
//   } else {
//     document.getElementById("first-head-a").style.display = "block";
//     document.getElementById("first-head-b").style.display = "none";
//   }
}


let blogs_section = document.getElementById("blogs-section");
let countdownCalled = false;
if (blogs_section) {
  window.addEventListener("scroll", () => {
    if (!countdownCalled && eval(window.scrollY + 10) >= blogs_section.offsetTop) {
      console.log('test');
      $('.line-toggle').css('background-color','white');
      $('#in-svg').attr('fill','#fff');
    }else{
      $('.line-toggle').css('background-color','black');
      $('#in-svg').attr('fill','#000');
      
    }
  });
}

