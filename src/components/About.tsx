import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">바이브코딩이란?</h3>
        <p className="para">
          AI와 대화하며 코딩하는 새로운 개발 방식입니다.
          코드를 한 줄씩 외우는 대신, AI에게 원하는 것을 설명하고
          함께 만들어갑니다. 프로그래밍 경험이 없어도 
          아이디어만 있으면 누구나 개발자가 될 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
