import './Languages.css';

const languages = [
  {
    name: 'English',
    level: 'B2',
  },
  {
    name: 'Russian',
    level: 'Native',
  },
  {
    name: 'Belarusian',
    level: 'Native',
  },
];

export function Languages() {
  return (
    <section id="languages" className="languages">
      <div className="languages__inner">
        <div className="languages__heading">
          <p className="section-label">Languages</p>

          <h2 className="languages__title">
            Communication
            <br />
            beyond code.
          </h2>
        </div>

        <div className="languages__list">
          {languages.map((language, index) => (
            <article className="language" key={language.name}>
              <span className="language__number">
                0{index + 1}
              </span>

              <h3 className="language__name">
                {language.name}
              </h3>

              <span className="language__level">
                {language.level}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}