


//  Slider list
$(".slider .content").css("left : -size");
const open = document.getElementById("open");
const close = document.getElementById("close");
const size = $(".slider .content").outerWidth(true)

// open slider
function openSlider(){
    $(".slider")
    .animate({left : 0 }, 500)
    $("#open")
    .animate({left : size }, 1000)
    
    $(".sec-content").removeClass("text-center")
    .animate({left : "100px" }, 500)
}
open.addEventListener("click" , function(){
    openSlider();
})
// close slider
function closeSlider(){
    $(".slider")
.animate({left : -size }, 500)
$("#open")
    .animate({left : 0 }, 1300)
$(".sec-content").removeClass("text-center")
.animate({left : 0 }, 500)
}
close.addEventListener("click" , function(){
    closeSlider();
})
// ==============


// slider down
$(".slideDown").not(":first").hide()
// 1st
const firstSinger = document.getElementById("singerOne");
function sliderDown1(){
    $(".slideDown").slideUp(500);
    $(".slider-down-1").slideToggle(500);
}
firstSinger.addEventListener("click", function(){
    sliderDown1();
})

// 2nd
const secSinger = document.getElementById("singerTwo");
function sliderDown2(){
    $(".slideDown").slideUp(500);
    $(".slider-down-2").slideToggle(500);
}
secSinger.addEventListener("click", function(){
    sliderDown2();
})

// 3rd
const thirdSinger = document.getElementById("singerThree");
function sliderDown3(){
    $(".slideDown").slideUp(500);
    $(".slider-down-3").slideToggle(500);
}
thirdSinger.addEventListener("click", function(){
    sliderDown3();
})

// 4th
const fourthSinger = document.getElementById("singerFour");
function sliderDown4(){
    $(".slideDown").slideUp(500);
    $(".slider-down-4").slideToggle(500);
}
fourthSinger.addEventListener("click", function(){
    sliderDown4();
})

// ==============

// counter countDown

const countDownDate = new Date("Oct 25, 2023 00:00:00").getTime();
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now ;
   const days = Math.floor(Math.abs(distance) / (1000 * 60 * 60 * 24));
   const hours = Math.floor ((Math.abs(distance)  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((Math.abs(distance)  % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((Math.abs(distance)  % (1000 * 60)) / 1000);
    
    const isPast = distance < 0;

    document.getElementById("days").innerHTML = (isPast ? "-" : "") + days + " D"
    document.getElementById("hours").innerHTML = hours + " H"
    document.getElementById("minutes").innerHTML = minutes +" M"
    document.getElementById("seconds").innerHTML = seconds + " S"
    if (distance < 0) {
    }
}, 1000);


// ==============

// Char counter


const textArea = document.getElementById ("textArea");
const charCounter = document.getElementById ("numOFChar");
const maxChar = 100;

textArea.addEventListener("input",function(){
    const remainingChars = maxChar - textArea.value.length;
    charCounter.textContent = remainingChars;
})
