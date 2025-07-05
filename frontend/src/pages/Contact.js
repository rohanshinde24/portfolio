// src/pages/Contact.js
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-white dark:bg-neutral-900">
      <h2 className="text-4xl font-extrabold mb-8 sm:mb-12 text-primary-light dark:text-primary-dark text-center">
        Get In Touch
      </h2>
      <p className="max-w-xl mx-auto text-center text-primary-light dark:text-secondary-dark mb-8 sm:mb-12 text-base sm:text-lg">
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out below.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
