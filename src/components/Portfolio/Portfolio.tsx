import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    title: 'Not Fight Club',
    description:
      'Single-page application with battle logic, movement and heroes featuring dynamic layouts, interactive elements and a strong visual focus.',
    image: `${import.meta.env.BASE_URL}portfolio/not-fight-club.png`,
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    liveUrl: 'https://aliaksandr-kiziankou.github.io/not-fight-club/',
    githubUrl: 'https://github.com/aliaksandr-kiziankou/not-fight-club',
    featured: true,
  },
  {
    title: 'Shelter',
    description:
      'A responsive multi-page website for an animal shelter, featuring pet profiles, interactive navigation, pagination and adaptive layouts for different screen sizes.',
    image: `${import.meta.env.BASE_URL}portfolio/shelter.png`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://aliaksandr-kiziankou.github.io/shelter/',
    githubUrl: 'https://github.com/aliaksandr-kiziankou/shelter',
    featured: false,
  },
  {
    title: 'JS Clock',
    description:
      'A JavaScript clock with multiple time zones, real-time updates and customizable alarms.',
    image: `${import.meta.env.BASE_URL}portfolio/clock.png`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs'],
    liveUrl: 'https://aliaksandr-js-clock.netlify.app/',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'JS Drum Kit',
    description:
      'An interactive browser drum kit with playable drum pads and a sampler. Play drums over built-in melodies or beats, with real-time keyboard and mouse controls.',
    image: `${import.meta.env.BASE_URL}portfolio/drum-kit.png`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
    liveUrl: 'https://aliaksandr-drum-kit.netlify.app/',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Christmas Shop',
    description:
      'A responsive Christmas-themed online shop with festive visual design, product presentation and interactive UI elements.',
    image: `${import.meta.env.BASE_URL}portfolio/christmas-shop.png`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://aliaksandr-christmas-shop.netlify.app/',
    githubUrl: '#',
    featured: false,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__inner">
        <div className="portfolio__heading">
          <p className="section-label">Portfolio</p>

          <h2 className="portfolio__title">
            Selected
            <br />
            work.
          </h2>
        </div>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <article
              className={`project ${
                project.featured ? 'project--featured' : ''
              }`}
              key={project.title}
            >
              <a
                className="project__image-wrapper"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project__image"
                  src={project.image}
                  alt={`${project.title} preview`}
                />

                <span className="project__view">
                  <ArrowUpRight size={20} />
                </span>
              </a>

              <div className="project__content">
                <div>
                  <h3 className="project__title">
                    {project.title}
                  </h3>

                  <p className="project__description">
                    {project.description}
                  </p>
                </div>

                <div className="project__footer">
                  <div className="project__technologies">
                    {project.technologies.map((technology) => (
                      <span
                        className="project__technology"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    className="project__github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.97c.85 0 1.71.12 2.51.37 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.59 5.05.36.32.68.94.68 1.9v2.83c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                        />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}