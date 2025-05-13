gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in").forEach(elem => {
  gsap.to(elem, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

gsap.utils.toArray(".slide-in").forEach(elem => {
  gsap.to(elem, {
    opacity: 1,
    x: 0,
    duration: 1.2,
    x: -50,
    scrollTrigger: {
      trigger: elem,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

gsap.utils.toArray(".scale-in").forEach(elem => {
  gsap.fromTo(elem, 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
});
