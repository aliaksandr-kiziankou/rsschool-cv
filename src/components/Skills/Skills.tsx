import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Server,
} from 'lucide-react';
import './Skills.css';

const skills = [
  {
    name: 'HTML5',
    description: 'Semantic and accessible markup',
    icon: Globe,
  },
  {
    name: 'CSS3',
    description: 'Responsive layouts and animations',
    icon: Palette,
  },
  {
    name: 'Git',
    description: 'Version control and collaboration',
    icon: GitBranch,
  },
  {
    name: 'TypeScript',
    description: 'Typed and maintainable applications',
    icon: Code2,
  },
  {
    name: 'React',
    description: 'Component-based interfaces',
    icon: Layers,
  },
  {
    name: 'REST API',
    description: 'Async data and API integration',
    icon: Server,
  },
  {
    name: 'JavaScript',
    description: 'Modern ES6+ and DOM APIs',
    icon: Braces,
  },
  {
    name: 'Responsive Design',
    description: 'Mobile, tablet and desktop',
    icon: Database,
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <div className="skills__heading">
          <p className="section-label">Skills</p>

          <h2 className="skills__title">
            Things I
            <br />
            work with.
          </h2>
        </div>

        <ul className="skills__grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <li className="skill-card" key={skill.name}>
                <div className="skill-card__icon">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="skill-card__title">
                    {skill.name}
                  </h3>

                  <p className="skill-card__description">
                    {skill.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}