import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Personnel",
    description: "Portfolio moderne développé avec React et TypeScript, utilisant Framer Motion pour les animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/projects/logo-m.png",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Portfolio Personnel 2",
    description: "Portfolio moderne développé avec React et TypeScript, utilisant Framer Motion pour les animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/projects/logo-m.png",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Portfolio Personnel 3",
    description: "Portfolio moderne développé avec React et TypeScript, utilisant Framer Motion pour les animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/projects/logo-m.png",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  // Ajoutez vos autres projets ici
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Extraire toutes les technologies uniques
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filtrer les projets basés sur la technologie sélectionnée
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#0c0c0c]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Mes Projets
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Découvrez mes dernières réalisations et explorez les technologies que j'utilise
        </p>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
              ${!selectedTech 
                ? 'bg-accent text-white' 
                : 'bg-[#1c1c1c] text-gray-400 hover:bg-[#2c2c2c]'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tous
          </motion.button>
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${selectedTech === tech 
                  ? 'bg-accent text-white' 
                  : 'bg-[#1c1c1c] text-gray-400 hover:bg-[#2c2c2c]'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </div>

        {/* Grille de projets */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="bg-[#1c1c1c] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    >
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
                          >
                            Voir sur GitHub
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-accent px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            Demo Live
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full transition-colors duration-300
                            ${selectedTech === tech 
                              ? 'bg-accent text-white' 
                              : 'bg-[#2c2c2c] text-gray-300 hover:bg-accent/20'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
