import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PdfViewer from '../PdfViewer';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  detailsUrl?: string;
  pdfUrl?: string;
  demoUrl?: string;
  buttonText?: string;
}

const projects: Project[] = [
  // Projets fixes (3 premiers)
  {
    title: "Site vitrine",
    description: "Site vitrine pour l'association les mistoufles, utilisant l'API de Facebook. (Automatisation des animaux en adoption)",
    technologies: ["React", "Tailwindcss", "Node.js"],
    imageUrl: "/projects/mistoufles.png",
    detailsUrl: "https://refugelesmistoufles.fr",
  },
  {
    title: "Application de gestion d'animaux d'un refuge",
    description: "Application web permettant de gérer les animaux de la famille d'accueil. (Statistiques ..)",
    technologies: ["Django", "React", "TailwindCSS", "MySQL"],
    imageUrl: "/projects/mistoufles-gestion.png",
    pdfUrl: "./projects/maquette_mistoufles_gestion.pdf"
  },
  {
    title: "bibliodrive",
    description: "Application web de gestion de bibliothèque avec système de réservation et de retrait de livres.",
    technologies: ["Django", "TailwindCSS", "MySQL"],
    imageUrl: "/projects/bibliodrive.jpg",
    pdfUrl: "./projects/maquette_bibliodrive.pdf"
  },
  // Projets carousel (projets existants + nouveaux)
  {
    title: "Portfolio Personnel",
    description: "Portfolio moderne dévelopé avec React et TypeScript, utilisant Framer Motion pour les animations.",
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
    pdfUrl: "./projects/colisimba-maquette.pdf"
  },
  {
    title: "Carte de Fidélité",
    description: "Application mobile de carte de fidélité permettant aux utilisateurs de gérer leurs points de fidélité.",
    technologies: ["C#", "MAUI", "XAML"],
    imageUrl: "/projects/projet_fidelite.png",
    pdfUrl: "./projects/Projet_fidelite_maquette.pdf"
  },
  {
    title: "Moteur de jeu de carte",
    description: "Framework de développement pour créer différents types de jeux de cartes. Une base modulaire et extensible pour implémenter n'importe quel jeu de cartes.",
    technologies: ["Django", "Python", "TailwindCSS", "MySQL"],
    imageUrl: "/projects/carte_splash.png",
    pdfUrl: "./projects/Projet_carte_maquette.pdf",
    buttonText: "Exemple d'utilisation d'api"
  },
  {
    title: "JRPG Utility",
    description: "Application web facilitant l'organisation et le déroulement des sessions de JRPG entre amis. Utilisation de LocalStorage.",
    technologies: ["React", "TailwindCSS"],
    imageUrl: "/projects/jrpg.png",
    detailsUrl: "https://reeflex-m.github.io/Rpg-utility/"
  }
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    touchThreshold: 10,
    arrows: true,
    lazyLoad: "ondemand" as const, // Type assertion pour LazyLoadTypes
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerMode: true,
          centerPadding: '20px',
          dots: true
        }
      }
    ]
  };

  // Extraire toutes les technologies uniques
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filtrer d'abord tous les projets
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  // Puis diviser en sections principales et autres
  const filteredMainProjects = filteredProjects.slice(0, 3);
  const filteredOtherProjects = filteredProjects.slice(3);

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

        {/* Style personnalisé pour les flèches du carousel */}
        <style>
          {`
            .slick-prev, .slick-next {
              z-index: 10;
              width: 40px;
              height: 40px;
            }
            .slick-prev {
              left: -5px;
            }
            .slick-next {
              right: -5px;
            }
            .slick-prev:before, .slick-next:before {
              font-size: 40px;
              opacity: 0.75;
            }
            @media (max-width: 640px) {
              .slick-prev {
                left: 0;
              }
              .slick-next {
                right: 0;
              }
              .slick-prev:before, .slick-next:before {
                font-size: 24px;
              }
            }
          `}
        </style>

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

        {/* Grille des projets principaux */}
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            layout
          >
            {filteredMainProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                handleProjectClick={handleProjectClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Carousel des autres projets */}
        {filteredOtherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              Autres Projets
            </h3>
            <Slider {...carouselSettings}>
              {filteredOtherProjects.map((project, index) => (
                <div key={project.title} className="px-2">
                  <ProjectCard
                    project={project}
                    index={index + filteredMainProjects.length}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    handleProjectClick={handleProjectClick}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* PDF Viewer */}
        {showPdfViewer && selectedProject && selectedProject.pdfUrl && (
          <PdfViewer
            pdfUrl={selectedProject.pdfUrl}
            onClose={handleClosePdfViewer}
          />
        )}
      </motion.div>
    </section>
  );
};

// Composant ProjectCard extrait pour la réutilisation
const ProjectCard = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
  handleProjectClick
}: {
  project: Project;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  handleProjectClick: (project: Project, e: React.MouseEvent) => void;
}) => {
  const handleExternalLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.detailsUrl?.startsWith('http')) {
      window.open(project.detailsUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="bg-[#1c1c1c] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-contain"
          />
          {project.title !== "Portfolio Personnel" && (
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
            >
              <div className="flex gap-4">
                {project.detailsUrl?.startsWith('http') ? (
                  <button
                    onClick={handleExternalLink}
                    className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
                  >
                    Visiter le site
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.pdfUrl) {
                        handleProjectClick(project, e);
                      }
                    }}
                    className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
                  >
                    {project.buttonText || (project.pdfUrl ? "Afficher la maquette" : "En savoir plus")}
                  </button>
                )}
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
          )}
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
                className="px-3 py-1 text-sm rounded-full bg-[#2c2c2c] text-gray-300 hover:bg-accent/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
