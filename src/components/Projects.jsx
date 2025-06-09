import github from '../assets/github_icon.png';
import logo from '../assets/imagen_1.jpg';
import live from '../assets/live.png';

import { listProjects } from '../data/projects';

export function Project() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <section className="container-projects">
        <h1>Proyectos</h1>
        <div className="container-projects--card">
          {listProjects.map((project) => (
            <div
              className="container-projects--card__content-card"
              key={project.id}>
              <div className="container-projects--card__content-card__header">
                <img src={logo} alt="nueva imgen" width={300} />
              </div>
              <div className="container-projects--card__content-card__body">
                <h3>{project.title}</h3>
              </div>
              <div className="overlay">
                <button onClick={() => handleRedirect(project.github)}>
                  <img src={github} alt="" width={23} /> Código
                </button>
                <button>
                  {' '}
                  <img src={live} alt="" width={23} /> Vivo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
