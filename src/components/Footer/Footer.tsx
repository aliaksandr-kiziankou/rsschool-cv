import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__heading">
          <p className="section-label">Contact</p>

          <h2 className="footer__title">
            Let's work
            <br />
            together.
          </h2>

          <a
            className="footer__email"
            href="mailto:aliaksandr.kiziankou@gmail.com"
          >
            <span>aliaksandr.kiziankou@gmail.com</span>
            <ArrowUpRight size={22} />
          </a>
        </div>

        <div className="footer__bottom">
          <div className="footer__location">
            <span className="footer__label">Location</span>
            <span>Almaty, Kazakhstan</span>
          </div>

          <div className="footer__links">
            <a
              href="https://github.com/aliaksandr-kiziankou"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/aliaksandr-kiziankou-51560b417/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="footer__date">
            <span className="footer__label">Updated</span>
            <span>{currentYear}</span>
          </div>
        </div>

        <div className="footer__copyright">
          <span>© {currentYear} Aliaksandr Kiziankou</span>

          <a
            className="footer__rsschool"
            href="https://rs.school/"
            target="_blank"
            rel="noreferrer"
            aria-label="RS School"
          >
            <img
              src={`${import.meta.env.BASE_URL}rs_school_js.svg`}
              alt="RS School JavaScript course"
            />
          </a>

          <a href="#about">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}