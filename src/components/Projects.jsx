import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div data-aos="fade-right" className="space-y-4">
            <span className="text-primary-gold font-bold tracking-[0.2em] uppercase text-xs">Portfolio</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              Featured <br />Projects.
            </h2>
          </div>

          <div data-aos="fade-left" className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat
                    ? "bg-primary-lavender text-black shadow-glow"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, i) => (
            <div key={project.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
