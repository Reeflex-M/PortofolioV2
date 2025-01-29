import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../effects/ParticlesBackground';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen">
      <ParticlesBackground />
      {/* Gradient d'arrière-plan principal */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-50/60" />
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Container principal avec bordure subtile et ombre douce */}
          <div className="relative w-full text-center max-w-3xl mx-auto">
            {/* Fond décoratif avec blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-50/60 backdrop-blur-[2px] rounded-3xl 
                          border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]" />
            
            {/* Contenu avec padding et position relative */}
            <div className="relative px-8 py-12 sm:px-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                <span className="block text-primary">Mathis Floch</span>
                <span className="block mt-4 text-3xl sm:text-4xl lg:text-5xl">
                  je suis un étudiant{' '}
                  <TypeAnimation
                    sequence={['développeur', 1000]}
                    wrapper="span"
                    speed={50}
                    className="font-['Share_Tech_Mono'] text-accent"
                    repeat={0}
                  />
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Passionné par la création d'expériences web modernes et intuitives.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:text-white hover:scale-105 transition-all"
                >
                  Me contacter
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white hover:scale-105 transition-all"
                >
                  Voir mes projets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
