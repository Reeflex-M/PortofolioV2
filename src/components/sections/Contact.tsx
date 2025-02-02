import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      const result = await emailjs.sendForm(
        'service_6v20p09',
        'template_m6ja3wh',
        e.currentTarget,
        'hgN16lcKxwODTHpIn'
      );
      console.log('Email envoyé avec succès:', result.text);
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi:', error.text);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-white">
      {/* Arrière-plan moderne avec des formes géométriques */}
      <div className="absolute inset-0">
        {/* Gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent/10 to-white animate-gradient-slow" />
        
        {/* Formes géométriques flottantes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full mix-blend-overlay blur-xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full mix-blend-overlay blur-xl animate-float-slow-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full mix-blend-overlay blur-xl animate-pulse-slow" />
        
        {/* Grille subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(191,161,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(191,161,129,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-accent sm:text-5xl bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Vous avez un projet en tête ? Une offre d'alternance ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8 backdrop-blur-xl bg-white/50 p-8 rounded-2xl shadow-2xl border border-white/20">
            {/* Champs avec nouvelles interactions */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 outline-none transition-all duration-300 
                          focus:border-b-4 focus:border-accent focus:pb-4"
                placeholder=" "
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-focus-within:w-full" />
              <label
                htmlFor="name"
                className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focusedField === 'name' || formData.name
                              ? '-top-6 text-sm text-accent font-medium'
                              : 'top-1 text-gray-500'
                            }`}
              >
                Nom complet
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 outline-none transition-all duration-300 
                          focus:border-b-4 focus:border-accent focus:pb-4"
                placeholder=" "
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-focus-within:w-full" />
              <label
                htmlFor="email"
                className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focusedField === 'email' || formData.email
                              ? '-top-6 text-sm text-accent font-medium'
                              : 'top-1 text-gray-500'
                            }`}
              >
                Email
              </label>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 outline-none transition-all duration-300 
                          focus:border-b-4 focus:border-accent focus:pb-4"
                placeholder=" "
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-focus-within:w-full" />
              <label
                htmlFor="message"
                className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focusedField === 'message' || formData.message
                              ? '-top-6 text-sm text-accent font-medium'
                              : 'top-1 text-gray-500'
                            }`}
              >
                Message
              </label>
            </div>

            {/* Bouton avec états et animations */}
            <motion.button
              type="submit"
              disabled={submitStatus === 'loading'}
              whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.98 }}
              className={`w-full py-4 px-6 font-medium rounded-lg
                         relative overflow-hidden
                         ${submitStatus === 'loading' 
                           ? 'bg-gray-400 cursor-wait' 
                           : submitStatus === 'success'
                           ? 'bg-green-500'
                           : submitStatus === 'error'
                           ? 'bg-red-500'
                           : 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70'}
                         focus:outline-none focus:ring-2 focus:ring-accent/50
                         shadow-lg shadow-accent/20
                         flex items-center justify-center gap-3
                         transition-all duration-300`}
            >
              <AnimatePresence mode="wait">
                {submitStatus === 'loading' ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-white">Envoi en cours...</span>
                  </motion.div>
                ) : submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Message envoyé !</span>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-white">Erreur d'envoi</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-white">Envoyer le message</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
