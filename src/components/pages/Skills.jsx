import Section from "../common/Section";
import Heading from "../common/Heading";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "VS Code", "Figma", "AWS"],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="container">
        <Heading className="md:max-w-md lg:max-w-2xl" title="My Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-n-8 rounded-2xl p-8 hover:bg-n-7 transition-colors"
            >
              <h3 className="h3 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-n-6 rounded-xl px-4 py-2 text-n-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
