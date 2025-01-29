import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 opacity-10" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">
            Contactez-moi
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8 backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-xl">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm
                          focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-300 pointer-events-none
                          ${focusedField === 'name' || formData.name
                            ? '-top-2 text-sm text-secondary bg-white px-2'
                            : 'top-3 text-gray-500'
                          }`}
              >
                Nom complet
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm
                          focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none
                          ${focusedField === 'email' || formData.email
                            ? '-top-2 text-sm text-secondary bg-white px-2'
                            : 'top-3 text-gray-500'
                          }`}
              >
                Email
              </label>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm
                          focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 pointer-events-none
                          ${focusedField === 'message' || formData.message
                            ? '-top-2 text-sm text-secondary bg-white px-2'
                            : 'top-3 text-gray-500'
                          }`}
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 text-white font-medium rounded-lg
                         bg-gradient-to-r from-secondary to-secondary/80
                         hover:from-secondary/90 hover:to-secondary/70
                         focus:outline-none focus:ring-2 focus:ring-secondary/50
                         shadow-lg shadow-secondary/20
                         transition-all duration-300"
            >
              Envoyer
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
