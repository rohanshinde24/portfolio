// src/pages/Contact.js
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-4xl font-extrabold mb-6 text-primary-light dark:text-primary-dark text-center">
        Get In Touch
      </h2>
      <p className="max-w-xl mx-auto text-center text-primary-light dark:text-secondary-dark mb-8">
        I’m always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out below.
      </p>
      <ContactForm />
    </SectionWrapper>
  );
};

export default Contact;
