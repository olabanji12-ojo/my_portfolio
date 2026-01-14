import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 relative z-10">
        <a href="#home" className="text-xl font-black tracking-tighter uppercase group flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary-gold" />
          <span className="text-white transition-colors duration-300">
            {personalInfo.name.split(' ')[0]}<span className="text-primary-lavender">{personalInfo.name.split(' ')[1]}</span>
          </span>
        </a>

        <div className="flex gap-8">
          {personalInfo.socials.map((social, i) => (
            <a key={i} href={social.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">{new Date().getFullYear()} {personalInfo.name}</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 italic">Built with React & Passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;