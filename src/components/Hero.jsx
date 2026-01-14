import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 relative overflow-hidden transition-colors duration-300">
            {/* Background Accent */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-lavender/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl z-10 flex flex-col items-center">

                {/* Profile Picture */}
                <div data-aos="zoom-in" className="relative mb-8 group">
                    <div className="absolute inset-0 bg-primary-lavender blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                    <img
                        src="/portfolio-image.jpg"
                        alt={personalInfo.name}
                        className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white/10 group-hover:border-primary-lavender/50 transition-all duration-500 shadow-2xl grayscale-[30%] group-hover:grayscale-0"
                    />
                </div>

                <p data-aos="fade-up" className="text-primary-gold font-bold tracking-[0.2em] mb-4 uppercase text-xs sm:text-sm">
                    Hi, I'm {personalInfo.name.split(' ')[0]} 👋
                </p>

                <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                    Full Stack<br />
                    <span className="text-gradient">Engineer & Tutor</span>
                </h1>

                <p data-aos="fade-up" data-aos-delay="200" className="text-app-subtext text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
                    {personalInfo.mission}
                </p>

                {/* Social Icons - Moved Up to prevent overlap */}
                <div data-aos="fade-up" data-aos-delay="250" className="flex justify-center space-x-8 mb-10 text-app-subtext text-2xl">
                    {personalInfo.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary-lavender transition-all transform hover:scale-125 hover:-translate-y-1"
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#projects" data-aos="fade-up" data-aos-delay="300"
                        className="w-full sm:w-auto px-10 py-4 bg-primary-lavender text-black rounded-full font-black hover:scale-105 active:scale-95 transition-all shadow-glow uppercase tracking-wider text-sm">
                        Explore My Work
                    </a>
                    <a href="#contact" data-aos="fade-up" data-aos-delay="300"
                        className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/20 rounded-full font-black hover:bg-white/5 transition-all text-sm uppercase tracking-wider">
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-app-subtext uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
                <FaChevronDown className="animate-bounce text-lg text-primary-lavender" />
            </div>
        </section>
    );
}

export default Hero;
