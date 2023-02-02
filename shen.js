'use strict';
document.querySelector(".section2").classList.add("hidden")
document.querySelector(".section3").classList.add("hidden")
document.querySelector(".section4").classList.add("hidden")

document.querySelector(".btn-1").onclick=function(){
    document.querySelector(".section").classList.add("hidden")
    document.querySelector(".section3").classList.add("hidden")
    document.querySelector(".section4").classList.add("hidden")
    document.querySelector(".section2").classList.remove("hidden")
    
}
document.querySelector(".btn-3").onclick=function(){
    document.querySelector(".section").classList.add("hidden")
    document.querySelector(".section2").classList.add("hidden")
    document.querySelector(".section3").classList.add("hidden")
    document.querySelector(".section4").classList.remove("hidden")
}

document.querySelector(".btn-2").onclick=function(){
    document.querySelector(".section").classList.add("hidden")
    document.querySelector(".section2").classList.add("hidden")
    document.querySelector(".section4").classList.add("hidden")
    document.querySelector(".section3").classList.remove("hidden")}
  