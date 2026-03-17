import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Simple fade-in animations (without SplitText)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.15,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".landing-h2-info", ".landing-h2-info-1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Simple loop animation for text switching
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  
  tl.to(".landing-h2-info", { opacity: 0, y: -40, duration: 0.8 }, 2)
    .to(".landing-h2-info-1", { opacity: 1, y: 0, duration: 0.8 }, 2.2)
    .to(".landing-h2-info-1", { opacity: 0, y: -40, duration: 0.8 }, 5)
    .to(".landing-h2-info", { opacity: 1, y: 0, duration: 0.8 }, 5.2);
    
  const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  
  tl2.to(".landing-h2-1", { opacity: 0, y: -40, duration: 0.8 }, 2)
    .to(".landing-h2-2", { opacity: 1, y: 0, duration: 0.8 }, 2.2)
    .to(".landing-h2-2", { opacity: 0, y: -40, duration: 0.8 }, 5)
    .to(".landing-h2-1", { opacity: 1, y: 0, duration: 0.8 }, 5.2);
}
