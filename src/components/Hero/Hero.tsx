import { ArrowDownRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__inner">
        <div className="hero__image-wrapper">
          <img
            className="hero__image"
            src={`${import.meta.env.BASE_URL}avatar.png`}
            alt="Alex Kizenkov"
          />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">
            Frontend Developer
          </p>

          <h1 className="hero__title">
            Aliaksandr
            <br />
            Kiziankou
          </h1>

          <p className="hero__bio">
            Frontend developer focused on creating clean,
            responsive and visually engaging web interfaces.
          </p>

          <a className="hero__button" href="#portfolio">
            <span>View portfolio</span>
            <ArrowDownRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}