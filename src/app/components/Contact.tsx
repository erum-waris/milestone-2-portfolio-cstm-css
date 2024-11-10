"use client"

import { useState}  from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Show the popup message
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center h-screen relative">
      {showPopup && (
        <div className="absolute top-10 md:top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
         Congrates Your message has been sent!
        </div>
      )}

<div className='max-w-md w-full transition-all duration-3000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(200,100,210)] mt-20 hover:scale-105 shadow-[0_0_8px_6px_rgba(219,219,219)]  rounded-xl md:px-[-8]'>
      <form
        onSubmit={handleSubmit}
        className=" p-8 mt-10  "
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="fatherName" className="block text-gray-700">Father Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter father's name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
</div>
  
    </div> 
  );
};

export default ContactForm;
