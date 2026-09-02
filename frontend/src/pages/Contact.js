// src/pages/Contact.js
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-surface dark:bg-surface-dark">
      <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-8 sm:mb-12 text-ink dark:text-ink-dark text-center">
        Get In Touch
      </h2>
      <p className="max-w-xl mx-auto text-center text-muted dark:text-muted-dark mb-8 sm:mb-12 text-base sm:text-lg">
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out below.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
