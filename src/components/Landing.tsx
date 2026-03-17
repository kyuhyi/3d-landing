import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>퍼널띵과 함께하는</h2>
            <h1>
              바이브
              <br />
              <span>코딩</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>BSD CLASS</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">MASTER</div>
              <div className="landing-h2-2">CLASS</div>
            </h2>
            <h2>
              <div className="landing-h2-info">CLASS</div>
              <div className="landing-h2-info-1">MASTER</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
