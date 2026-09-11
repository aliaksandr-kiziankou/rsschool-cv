import FlowField from '../kokonutui/flow-field';
import { GraduationCap } from 'lucide-react';
import './Courses.css';

const courses = [
  {
    year: '2026',
    title: 'JavaScript / Frontend | Summer bootcamp Q2',
    platform: 'RS School',
    description:
      'JavaScript, TypeScript, DOM, asynchronous programming, REST API and frontend development.',
    certificate: 'https://app.rs.school/certificate/nwjptttk',
  },
  {
    year: '2026',
    title: 'JavaScript / Frontend | Pre-School Q1',
    platform: 'RS School',
    description:
      'HTML, CSS, responsive layouts, JavaScript and modern frontend workflow.',
    certificate:'',
  },
];

export function Courses() {
  return (
    <section id="courses" className="courses">
      <FlowField
        className="courses__background"
        theme="aurora"
        density="sparse"
      >
        <div className="courses__background-content" />
      </FlowField>

      <div className="courses__content">
        <div className="courses__heading">
          <p className="section-label">Courses</p>

          <h2 className="courses__title">
            Learning
            <br />
            never stops.
          </h2>
        </div>

        <div className="courses__timeline">
          {courses.map((course) => (
            <article
              className="course"
              key={`${course.year}-${course.title}`}
            >
              <div className="course__marker">
                <GraduationCap size={20} strokeWidth={1.7} />
              </div>

              <div className="course__content">
                <span className="course__year">
                  {course.year}
                </span>

                <h3 className="course__title">
                  {course.title}
                </h3>

                <p className="course__platform">
                  {course.platform}
                </p>

                <p className="course__description">
                  {course.description}
                </p>

                {course.certificate && (
                  <a
                    href={course.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="course__certificate"
                  >
                    Certificate
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}