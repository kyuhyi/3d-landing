import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const clickHandlers: { el: HTMLDivElement; handler: () => void }[] = [];
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          container.addEventListener("click", handler);
          clickHandlers.push({ el: container, handler });
        }
      });
    }
    return () => {
      clickHandlers.forEach(({ el, handler }) => {
        el.removeEventListener("click", handler);
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          커<span className="hat-h2">리</span>
          <div>
            큘<span className="do-h2">럼</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI 코딩</h3>
              <h4>AI와 대화하며 코딩하기</h4>
              <p>
                Claude, GPT, Gemini 등 최신 AI 도구를 활용해
                원하는 기능을 자연어로 설명하고 코드를 생성합니다.
              </p>
              <h5>배우는 도구들</h5>
              <div className="what-content-flex">
                <div className="what-tags">Claude</div>
                <div className="what-tags">Cursor</div>
                <div className="what-tags">v0.dev</div>
                <div className="what-tags">Bolt.new</div>
                <div className="what-tags">Lovable</div>
                <div className="what-tags">Replit</div>
                <div className="what-tags">GitHub Copilot</div>
                <div className="what-tags">ChatGPT</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>프로젝트</h3>
              <h4>실전 프로젝트 완성</h4>
              <p>
                랜딩페이지, SaaS, 자동화 도구 등 실제로 동작하는
                프로젝트를 직접 기획하고 완성합니다.
              </p>
              <h5>만들 수 있는 것들</h5>
              <div className="what-content-flex">
                <div className="what-tags">랜딩페이지</div>
                <div className="what-tags">SaaS 서비스</div>
                <div className="what-tags">자동화 봇</div>
                <div className="what-tags">Chrome 확장</div>
                <div className="what-tags">API 서버</div>
                <div className="what-tags">대시보드</div>
                <div className="what-tags">AI 챗봇</div>
                <div className="what-tags">포트폴리오</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
