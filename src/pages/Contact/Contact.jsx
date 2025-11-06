import React, { useRef, useState } from 'react';
import './Contact.css';
import AnimatedPage from '../../components/AnimatedPage';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(null);

    // --- INGAT: GANTI EMAILJS ---
    emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        form.current, 
        'YOUR_PUBLIC_KEY'
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setSendSuccess(true);
          setIsSending(false);
          e.target.reset(); // Mengosongkan form setelah berhasil
      }, (error) => {
          console.log('FAILED...', error.text);
          setSendSuccess(false);
          setIsSending(false);
      });
  };

  return (
    <AnimatedPage>
      <section className="contact">
        <div className="container">
          <div className="contact-title-wrapper">
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact-content">
            {/* Bagian Info Kontak dari kodemu tetap dipertahankan */}
            <div className="contact-info">
              <h3>Let's build something great together!</h3>
              <p>
                Have a project in mind or just want to say hello? Fill out the form, and I'll get back to you as soon as possible.
              </p>
              <div className="contact-details">
                <p><strong>Email:</strong> rdmfr59@gmail.com</p>
                <p><strong>Location:</strong> Bandung, Indonesia</p>
              </div>
              <div className="contact-socials">
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="devicon-github-original"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="devicon-linkedin-plain"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="devicon-twitter-original"></i></a>
              </div>
            </div>
            
            {/* Formulir digabungkan dengan logika EmailJS */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
              </div>
              
              {/* Tombol dinamis dengan status loading */}
              <button type="submit" className="btn btn-primary" disabled={isSending}>
                {isSending ? (
                  <>
                    <FaSpinner className="spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>

              {/* Pesan feedback setelah mengirim */}
              {sendSuccess === true && (
                <p className="feedback-message success">
                  <FaCheckCircle /> Pesan berhasil terkirim! Terima kasih.
                </p>
              )}
              {sendSuccess === false && (
                <p className="feedback-message error">
                  <FaTimesCircle /> Oops! Gagal mengirim pesan. Coba lagi nanti.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;

