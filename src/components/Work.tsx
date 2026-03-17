import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  // 모바일에서는 가로 스크롤 비활성화 (세로 스택)
  if (window.innerWidth <= 900) return;

  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          수강생 <span>프로젝트</span>
        </h2>
        <div className="work-flex">
          {[
            { name: "AI 챗봇 서비스", category: "SaaS", tools: "Claude, Next.js, Vercel", image: "/images/project-01.jpg" },
            { name: "자동화 대시보드", category: "Dashboard", tools: "React, n8n, Supabase", image: "/images/project-02.jpg" },
            { name: "포트폴리오 사이트", category: "Landing", tools: "Cursor, Three.js, GSAP", image: "/images/project-03.jpg" },
            { name: "크롬 확장 프로그램", category: "Extension", tools: "Bolt.new, Chrome API", image: "/images/project-04.jpg" },
            { name: "SNS 자동화 봇", category: "Automation", tools: "Node.js, Telegram API", image: "/images/project-05.jpg" },
            { name: "이커머스 랜딩", category: "E-commerce", tools: "v0.dev, Stripe, Next.js", image: "/images/project-06.jpg" },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>사용 도구</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
