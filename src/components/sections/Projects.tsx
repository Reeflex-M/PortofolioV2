import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PdfViewer from '../PdfViewer';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  detailsUrl: string;
  pdfUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Personnel",
    description: "Portfolio moderne développé avec React et TypeScript, utilisant Framer Motion pour les animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/logo-m.png",
    detailsUrl: "/projects/portfolio-details",
  },
  {
    title: "PsychoQuizz",
    description: "Quizz, permettant d'orienter un étudiant : Programmation ou réseaux.",
    technologies: ["Php Symfony6", "Tailwind CSS", "MySQL"],
    imageUrl: "/projects/psychoquizz.png",
    pdfUrl: "./projects/psychoquizz-maquette.pdf"
  },
  {
    title: "Colisimba",
    description: "Application web de gestion logistique de colis, et de point de livraison.",
    technologies: ["Php Symfony6", "Bootstrap", "MySQL"],
    imageUrl: "/projects/colisimba.png",
    detailsUrl: "/projects/colisimba-details",
  },
  // Ajoutez vos autres projets ici
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  // Extraire toutes les technologies uniques
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filtrer les projets basés sur la technologie sélectionnée
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    e.preventDefault(); // Empêcher le comportement par défaut
    e.stopPropagation(); // Empêcher la propagation de l'événement
    setSelectedProject(project);
    if (project.pdfUrl) {
      setShowPdfViewer(true);
    }
  };

  const handleClosePdfViewer = () => {
    setShowPdfViewer(false);
  };

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group"
                onClick={(e) => handleProjectClick(project, e)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-[#1c1c1c] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    >
                      <div className="flex gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.title === "PsychoQuizz") {
                              setSelectedProject(project);
                              setShowPdfViewer(true);
                            }
                          }}
                          className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
                        >
                          {project.title === "PsychoQuizz" ? "Voir la maquette" : "En savoir plus"}
                        </button>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-accent px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Voir la démo
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
      
      {showPdfViewer && selectedProject?.pdfUrl && (
        <PdfViewer
          pdfUrl={selectedProject.pdfUrl}
          onClose={handleClosePdfViewer}
        />
      )}
    </section>
  );
};

export default Projects;
