import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    scheduleDate: '',
    scheduleTime: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev,[name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <h2 className="form-title">Book An Apointment</h2>
        <h3 className="form-title"> Ready to transform your smile? Fill out the form below and our reception team will confirm your visit shortly.</h3>
        
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address (City)"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <input
              type="date"
              name="scheduleDate"
              placeholder="Choose your Date"
              value={formData.scheduleDate}
              onChange={handleChange}
              className="form-input schedule-input"
            />
            <input
              type="time"
              name="scheduleTime"
              placeholder="Choose your Time"
              value={formData.scheduleTime}
              onChange={handleChange}
              className="form-input schedule-input"
            />
          </div>

          <div className="form-row full-width">
            <textarea
              name="message"
              placeholder="Your Message / Specific Concern"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="5"
            />
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-submit-btn">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
