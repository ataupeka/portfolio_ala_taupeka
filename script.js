document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".navigation").classList.toggle("change");
  });


  gsap.from(".animation1", {x:-100,duration: 0.6, opacity: 0, delay: 0.7})
  gsap.from(".animation2", {x:-100,duration: 0.6, opacity: 0, delay: 0.9})
  gsap.from(".animation3", {x:-100,duration: 0.6, opacity: 0, delay: 1})
  gsap.from(".animation4", {x:-100,duration: 0.6, opacity: 0, delay: 1.2})

  gsap.to(".potential", {x:100,duration: 0.6, delay: 1.7})
  gsap.from(".section-1-textThree", {x:-10,duration: 1.5, opacity: 0, delay: 0.6})




  let text = "  created by Ala Taupeka 2023";
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector("#par").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);

    }

}


type();
