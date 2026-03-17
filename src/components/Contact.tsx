import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>수강 신청</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>문의</h4>
            <p>
              <a href="mailto:bsd@bsd.ac" data-cursor="disable">
                bsd@bsd.ac
              </a>
            </p>
            <h4>카카오톡</h4>
            <p>
              <a href="https://open.kakao.com/o/sBSDClass" target="_blank" data-cursor="disable">
                오픈채팅 상담
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>SNS</h4>
            <a
              href="https://www.instagram.com/bsd_funneldding"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.threads.net/@bsd_funneldding"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Threads <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@BSDClass"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              AI와 함께하는 <br /> <span>BSD 바이브코딩</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 BSD Class
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
