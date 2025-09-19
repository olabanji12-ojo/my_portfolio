import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
            <h1 data-aos="fade-up" className="text-3xl text-blue-400 font-bold mb-4">Hi, I'm Emmanuel 👋</h1>
            <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold mb-4">Full Stack Developer</h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 max-w-lg">
                I craft exceptional digital experiences with modern web technologies. Specializing in React, Node.js, and cloud architecture to build scalable applications
            </p>

            <div className="flex flex-col md:flex-row md:space-x-6 mt-6 space-y-4 md:space-y-0">
                <a href="#projects" data-aos="fade-up" data-aos-delay="400"
                    className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition text-center">
                    View My Work
                </a>
                <a href="#contact" data-aos="fade-up" data-aos-delay="400"
                    className="px-6 py-3 bg-black text-white rounded-lg border border-white shadow-lg hover:bg-gray-700 transition text-center">
                    Get in Touch
                </a>
            </div>

            <div className="flex justify-center space-x-6 mt-6 text-white text-2xl">
                <a href="https://github.com/olabanji12-ojo" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/emmanuel-ojo-656406295" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:emmanuelojo291@gmail.com">
                    <FaEnvelope />
                </a>
            </div>

            <div className="flex justify-center mt-10">
                <FaChevronDown className="animate-bounce text-2xl text-white" />
            </div>
        </section>
    )
}

export default Home
