let tl=gsap.timeline({
    repeat: -1
});

tl 
.to(".imagecontainer" , {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 3
   }, 'flag')
.to(".text h1" , {
    ease: Expo.easeInOut, 
    stagger: 3,
    top: 0
    }, 'flag')

.to(".text h1" , {
    delay: 3,
    ease: Expo.easeInOut, 
    stagger: 3,
    top: "-100%"
    }, 'flag')      
    
