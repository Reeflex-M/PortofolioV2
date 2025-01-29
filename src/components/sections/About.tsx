const About = () => {
  return (
    <section id="about" className="relative w-full min-h-[40vh] flex items-center justify-center py-20">
      {/* Fond flouté pour les particules */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      
      <div className="relative max-w-3xl w-full z-10">
        {/* Titre avec une ligne décorative */}
        <div className="flex items-center gap-4 mb-12 px-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
          <h2 className="text-2xl font-medium tracking-wide text-gray-900">À propos</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
        </div>

        {/* Contenu principal avec effet de carte subtil */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg p-8 mx-6 shadow-sm">
          <div className="flex flex-col space-y-8">
            {/* Information avec style minimaliste */}
            <div className="flex items-center space-x-4 text-lg">
              <span className="w-28 text-primary font-medium">Âge</span>
              <span className="text-gray-700 font-normal">20 ans</span>
            </div>

            <div className="flex items-center space-x-4 text-lg">
              <span className="w-28 text-primary font-medium">Formation</span>
              <span className="text-gray-700 font-normal">Recherche d'alternance Bac+4</span>
            </div>

            <div className="flex items-center space-x-4 text-lg">
              <span className="w-28 text-primary font-medium">Région</span>
              <span className="text-gray-700 font-normal">Bretagne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
