

import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';

const ContactForm = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      setIsMessageSent(true);

      resetForm();
    },
  });

  const form = useRef()

  
    const sendEmail = (e) => {
      e.preventDefault();
    
      if (formik.isValid) {
        message.info('Please wait. Your request is being processed.')
        emailjs
          .sendForm('service_yx27eem', 'template_0ush3se', form.current, 'SFBijCKOQC0zd_PaQ')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          })
          .finally(() => {
            setTimeout(() => {
              message.success("Email sent! We'll get back to you as soon as we can.");
            }, 2000);

          });
      } else {
        message.error('Please fill in all required fields.');
      }
  }; 

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <div className='contact-view'>
          <h2>Ask us any questions!</h2>
          <h5>Fill all the requirements needed to get in touch with us. We will be very much delighted to hear some of your feedbacks regarding our website.</h5>
          </div>
          </div>
    <form ref={form} onSubmit={sendEmail}>
      <div className='contactbox'>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
                name="name"
                placeholder='Please Input Your Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}
      </div>

      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
                name="email"
                placeholder='Your Email Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label htmlFor="subject"></label>
        <input
          type="text"
          id="subject"
                name="subject"
                placeholder='Subject'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
        {formik.touched.subject && formik.errors.subject && (
          <div className="error">{formik.errors.subject}</div>
        )}
      </div>

      <div>
        <label htmlFor="message"></label>
        <textarea
          id="message"
                name="message"
                placeholder='Message'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="error">{formik.errors.message}</div>
        )}
      </div>

            <button type="submit">
        {isMessageSent ? 'Message sent' : 'Submit'}
      </button>
        </div>
        </form>
      </div>
      </div>
            
  );
};

export default ContactForm;