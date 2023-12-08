import React, { useState } from 'react';
import './ContactForm.css';



const ContactForm = () => {
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);


  const handleEmailClick = () => {
    window.location.href = 'mailto:kimbasile23@gmail.com';
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    try {
      const response = await fetch("http://localhost:2023/api/feedback/feedback", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Feedback submitted successfully:', responseData);

        setShowFeedbackMessage(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Error submitting feedback:', response.statusText);
        setFeedbackMessage('An error occurred while submitting feedback.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setFeedbackMessage('An unexpected error occurred.');
    }
  };



  return (
    <div className="contact-container">

      <div className="contact-heading">
        <h1 className="contact-heading-text">Contact us</h1>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or <br />  <button onClick={handleEmailClick} class="bg-blue-900 hover:bg-cyan-950 text-white">Email Us </button> you can also call us on :+250 783 842 055.</p>
      </div>
      <div className="contact-form">
        <section className="contact-section">
          <div className="contact-form-wrapper">
            <div className="contact-form-content">
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5 outline-none"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5 outline-none"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5 outline-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">What can we help you with?</label>
                  <textarea
                    id="message"
                    name="message"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5 outline-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="w-32 text-white font-medium rounded-full text-sm px-6 py-2.5 text-center bg-blue-900 hover:bg-cyan-950 hover:text-white rounded py-1 px-2 rounded">
                  <button type="submit">Submit</button>
                </div>
                {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
              </form>
            </div>
          </div>
        </section>
        {showFeedbackMessage && (
          <div className="feedback-popup">
            <p>Thank you for your feedback!</p>
            <button onClick={() => setShowFeedbackMessage(false)}>Close</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactForm;
