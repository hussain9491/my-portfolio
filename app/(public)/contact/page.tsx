// app/contact.tsx
"use client";

import ContactForm from "../../components/Contactform";
import Footer from "../../components/Footer";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-100">
      <Footer/>
      <ContactForm />
                                
      
      <div id='contactme' className="space-y-6">
                        <h3 className="text-xl font-semibold flex justify-center text-gray-800">Contact Information</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-center space-x-3">
                            <FaEnvelope className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-600 ">hfareed376@gmail.com</span>
                          </div>
                          <div className="flex items-center justify-center space-x-3">
                            <FaPhone className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-600">+1 (555) 123-4567</span>
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-gray-200">
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4  flex items-center justify-center">Find me on</h3>
                          <div className=" space-x-4  flex items-center justify-center">
                            <a
                              href="https://github.com/hussain9491"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600  flex items-center justify-center hover:text-blue-600 transition-colors"
                            >
                              <FaGithub size={50} />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/hussain-ali-7021aa2b8/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600  hover:text-blue-600 transition-colors"
                            >
                              <FaLinkedin size={50} />
                            </a>
      
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600  hover:text-blue-600 transition-colors"
                            >
                              <FaInstagram size={50} />
                            </a>
                          </div>
                        </div>
                      </div>
      
      
    </div>
  );
};

export default ContactPage;