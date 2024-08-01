import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  }

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        error = value.length === 0 ? 'Name is required' : '';
        break;
      case 'email':
        error = !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'Invalid email' : '';
        break;
      case 'message':
        error = value.length === 0 ? 'Message is required' : '';
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    console.log(errors);
    if (!name || !email || !message) {
      validateField('name', name);
      validateField('email', email);
      validateField('message', message);
      return;
    }
    setLoading(true);

    
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] glass-violet p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          className='mt-12 flex flex-col gap-8'
          onSubmit={handleSubmit}
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-4 text-white'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='glassmorphism py-4 px-6 rounded-lg border-none
              placeholder:text-secondary text-white outline-none font-medium'
            />
            {errors.name && <span className='text-red-500 italic'>{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4 text-white'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='glassmorphism py-4 px-6 rounded-lg border-none
              placeholder:text-secondary text-white outline-none font-medium'
            />
            {errors.email && <span className='text-red-500 italic'>{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4 text-white'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='glassmorphism py-4 px-6 rounded-lg border-none
              placeholder:text-secondary text-white outline-none font-medium'
            />
            {errors.message && <span className='text-red-500 italic'>{errors.message}</span>}
          </label>
          <button
            type='submit'
            className='glassmorphism btn-primary text-secondary hover:text-white'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');