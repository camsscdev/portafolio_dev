import { images } from './skillsImage';

const SkillsLogo = [
  { img: images.htmlLogo, name: 'HTML' },
  { img: images.cssLogo, name: 'CSS' },
  { img: images.javascriptLogo, name: 'JavaScript' },
  { img: images.angular_logo, name: 'Angular' },
  { img: images.react_logo, name: 'React' },
  { img: images.ionic_logo, name: 'Ionic' },
  { img: images.redux_logo, name: 'Redux' },
  { img: images.figma_logo, name: 'Figma' },
  { img: images.figma_logo, name: 'Figma' },
  { img: images.node_logo, name: 'Node' },
];

export function Skills() {
  return (
    <div className="container-skills">
      <h1 className="title-skills">Habilidades</h1>
      <section className="container-card-skills">
        {SkillsLogo.map((skill, index) => (
          <div className="card-skill" key={index}>
            <img src={skill.img} alt={skill.name} />
          </div>
        ))}
      </section>
    </div>
  );
}
