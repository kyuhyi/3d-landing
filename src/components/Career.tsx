import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          수강 과정 <span>&</span>
          <br /> 커리큘럼
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI 도구 마스터</h4>
                <h5>WEEK 1-2</h5>
              </div>
              <h3>기초</h3>
            </div>
            <p>
              Claude, ChatGPT, Cursor 등 최신 AI 코딩 도구를 배웁니다.
              프롬프트 엔지니어링의 기초를 익히고 AI와 효과적으로
              대화하는 방법을 학습합니다.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>웹 개발 실전</h4>
                <h5>WEEK 3-4</h5>
              </div>
              <h3>심화</h3>
            </div>
            <p>
              v0.dev, Bolt.new 등 노코드/로우코드 도구로 실제 웹사이트를
              제작합니다. React, Next.js의 기본 개념을 AI와 함께 학습하고
              배포까지 완료합니다.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>프로젝트 런칭</h4>
                <h5>WEEK 5-6</h5>
              </div>
              <h3>완성</h3>
            </div>
            <p>
              나만의 SaaS, 자동화 도구, 또는 포트폴리오 사이트를
              기획하고 완성합니다. 실제 사용자를 위한 서비스를
              런칭하고 피드백을 받습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
