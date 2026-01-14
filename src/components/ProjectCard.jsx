import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCard = ({ title, desc, img, links, tech }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = Array.isArray(img) ? img : [img];

  const nextImg = (e) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="group glass rounded-[2.5rem] overflow-hidden hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl shadow-glow h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden bg-white/5">
        {/* Images */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 ${index === currentImg ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Gallery Controls */}
        {images.length > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImg}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-primary-lavender hover:text-black transition-all backdrop-blur-md"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                onClick={nextImg}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-primary-lavender hover:text-black transition-all backdrop-blur-md"
              >
                <FaChevronRight size={12} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); setCurrentImg(i); }}
                  className={`h-1 rounded-full transition-all ${i === currentImg ? "w-4 bg-primary-lavender" : "w-1 bg-white/50"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-8 space-y-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none transition-colors duration-300">{title}</h3>
          <div className="flex gap-4">
            {links.github && links.github !== "#" && (
              <a href={links.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-lavender transition-colors text-xl">
                <FaGithub />
              </a>
            )}
            {links.live && links.live !== "#" && (
              <a href={links.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-gold transition-colors text-xl">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed font-light flex-grow">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t) => (
            <span key={t} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-primary-lavender transition-colors border border-white/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
