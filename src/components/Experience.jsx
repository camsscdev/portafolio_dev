import { listExperience } from '../data/experiences';

export function Experience() {
  return (
    <section className="container-experience">
      <h1 className="title-card">Experiencia</h1>

      <div className="card">
        {listExperience.map((experience) => (
          <div key={experience.id} className="card-content">
            <h1 className="title">{experience.company}</h1>
            <h3 className="subtitle">{experience.subtitle}</h3>
            <h4>{experience.date}</h4>

            <ul className="list">
              {experience.listExperience.map((listExp, index) => (
                <li key={index} className="list-item">
                  {listExp.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
