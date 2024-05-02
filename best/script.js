function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
init()
let crsr =document.querySelector(".cursor")
let main =document.querySelector(".main")
main.addEventListener("mousemove",function(det){
crsr.style.left = det.x+20+"px"
crsr.style.top = det.y+20+"px"
});



gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 30%",
        end: "top 0%",
        scrub: 3
    }
});

tl.to(".page1 h1", {
    x: -100,
    duration: 1
},"anim");

tl.to(".page1 h2", {
    x: 100,
    duration: 1 
}, "anim");
tl.to(".video1",{
    width:"90%"
},"anim")

gsap.registerPlugin(ScrollTrigger);

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -110%",
        end: "top -120%",
        scrub: 3
    }
});
t2.to(".main",{
  backgroundColor:"white"
})

let t3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      start: "top -250%",
      end: "top -200%",
      scrub: 3
  }
});
t3.to(".main",{
  backgroundColor:"black"
})

let boxes = document.querySelectorAll(".box");

boxes.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    let att = elem.getAttribute("data-image");
    crsr.style.width = "8vw";
    crsr.style.height = "8vw";
    crsr.style.backgroundImage = `url('${att}')`;
    crsr.borderRadius="0";
    crsr.borderRadious= "0";
  });
});

boxes.forEach(function(elem) {
  elem.addEventListener("mouseleave", function() {
    let att = elem.getAttribute("data-image");
    crsr.style.width = "1vw";
    crsr.style.height = "1vw";
    crsr.style.backgroundImage = `url('${none}')`;
    crsr.borderRadius= "50%";
  });
});
//var h4=document.querySelectorAll(".nav h4")
//var purple = document.querySelector(".purple")
//h4.forEach(function(elem){
  //elem.addEventListener("mouseenter",function(){
   // purple.style.display="block";
   // purple.style.opacity = "1"
 // })
//})
//elem.addEventListener("mouseleave",function(){
 // purple.style.display="none";
 // purple.style.opacity = "0"
//})
