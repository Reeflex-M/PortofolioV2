import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 60, color: "#61DAFB" },
      { name: "TypeScript", level: 60, color: "#3178C6" },
      { name: "JavaScript", level: 70, color: "#F7DF1E" },
      { name: "HTML/CSS", level: 90, color: "#E34F26" },
      { name: "TailwindCSS", level: 85, color: "#38B2AC" },
      { name: "Bootstrap", level: 85, color: "#7952B3" },
      { name: "Flutter", level: 70, color: "#02569B" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80, color: "#339933" },
      { name: "Python (django)", level: 80, color: "#3776AB" },
      { name: "Java", level: 40, color: "#007396" },
      { name: "C#", level: 60, color: "#239120" },
      { name: "C", level: 20, color: "#A8B9CC" },
      { name: "PHP (Symfony)", level: 70, color: "#777BB4" },
      { name: "MySQL", level: 75, color: "#4479A1" },
    ]
  },
  {
    title: "Divers",
    skills: [
      { name: "Git", level: 70, color: "#F05032" },
      { name: "Docker", level: 60, color: "#2496ED" },
      { name: "Linux", level: 70, color: "#FCC624" },
      { name: "Figma", level: 75, color: "#F24E1E" },
    ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="relative w-full min-h-[60vh] flex items-center justify-center py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-6xl w-full z-10 px-6">
        {/* Titre principal */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
          <h2 className="text-2xl font-medium tracking-wide text-gray-900">Compétences</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
        </div>

        {/* Grille des catégories */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              {/* Titre de la catégorie */}
              <h3 className="text-xl font-medium text-primary text-center pb-4 border-b border-gray-200">
                {category.title}
              </h3>
              
              {/* Compétences de la catégorie */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: (categoryIndex * category.skills.length + skillIndex) * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    {/* Particules décoratives */}
                    <motion.div
                      className="absolute -right-2 top-1/2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      animate={inView ? {
                        opacity: [0, 1, 0],
                        x: [0, 10],
                        y: [-10, 10],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: (categoryIndex * category.skills.length + skillIndex) * 0.1,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
