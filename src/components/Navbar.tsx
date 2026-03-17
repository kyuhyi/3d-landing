import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    const handlers: { el: HTMLAnchorElement; handler: (e: Event) => void }[] = [];
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const handler = (e: Event) => {
        e.preventDefault();
        const el = e.currentTarget as HTMLAnchorElement;
        const section = el.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section);
          if (target) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: target, offsetY: 0 },
              ease: "power2.inOut"
            });
          }
        }
      };
      element.addEventListener("click", handler);
      handlers.push({ el: element, handler });
    });
    return () => {
      handlers.forEach(({ el, handler }) => {
        el.removeEventListener("click", handler);
      });
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/images/bsd-white.png" alt="BSD Class" style={{height: '36px'}} />
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="APPLY" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
