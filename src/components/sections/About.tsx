const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">À propos de moi</h2>
          <div className="mt-6 text-xl text-gray-600">
            <p className="mb-4">
              Passionné par le développement web depuis [X] ans, je crée des applications web modernes
              et performantes qui répondent aux besoins des utilisateurs.
            </p>
            <p>
              Ma stack technique principale inclut React, TypeScript, et les frameworks modernes
              de développement web.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Experience Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-primary text-2xl font-bold mb-2">2+</div>
            <div className="text-lg font-semibold text-gray-900">Années d'expérience</div>
            <p className="mt-2 text-gray-600">En développement web et création d'applications</p>
          </div>

          {/* Projects Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-primary text-2xl font-bold mb-2">15+</div>
            <div className="text-lg font-semibold text-gray-900">Projets réalisés</div>
            <p className="mt-2 text-gray-600">Applications web et sites responsive</p>
          </div>

          {/* Skills Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-primary text-2xl font-bold mb-2">10+</div>
            <div className="text-lg font-semibold text-gray-900">Technologies maîtrisées</div>
            <p className="mt-2 text-gray-600">Framework et outils de développement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
