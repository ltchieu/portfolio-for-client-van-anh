import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaPhone } from 'react-icons/fa';
import '../styles/ContactInfo.css';

const ContactInfo = () => {
  return (
    <section id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-desc">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="contact-links">
          <a href="mailto:vananhvo2309@gmail.com" className="social-icon" aria-label="Email">
            <FiMail />
          </a>
          <a href="tel:+84395673098" className="social-icon" aria-label="PhoneNumber">
            <FaPhone />
          </a>
          {/* <a href="#" className="social-icon" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <FiInstagram />
          </a> */}
        </div>

        <button className="btn btn-primary" onClick={() => window.location.href = 'mailto:vananhvo2309@gmail.com'}>
          SAY HELLO
        </button>

        <div className="footer-text">
          © {new Date().getFullYear()} Vo Le Van Anh. All rights reserved.
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
