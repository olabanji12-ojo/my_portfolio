import React from 'react';
import { personalInfo, skills, experience } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative transition-colors duration-300">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Story & Photo */}
          <div className="space-y-12">
            <div data-aos="fade-right" className="space-y-6">
              <span className="text-primary-lavender font-bold tracking-[0.2em] uppercase text-xs">My Story</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Bridging Logic <br />& Creativity.
              </h2>
              <p className="text-app-subtext text-lg leading-relaxed font-light transition-colors duration-300">
                {personalInfo.bio}
              </p>
            </div>

            <div data-aos="fade-right" data-aos-delay="100" className="flex flex-wrap gap-4">
              {skills.map((cat, i) => (
                <div key={i} className="space-y-3 w-full sm:w-[45%] lg:w-full">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary-gold/80">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:border-primary-lavender/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="space-y-12">
            <div data-aos="fade-left" className="space-y-6">
              <span className="text-primary-gold font-bold tracking-[0.2em] uppercase text-xs">Journey</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Professional <br />Experience.
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10 ml-2">
              {experience.map((exp, i) => (
                <div key={i} data-aos="fade-left" data-aos-delay={i * 100} className="relative pl-8 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white group-hover:bg-primary-gold transition-colors shadow-glow-gold" />

                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all shadow-glow hover:translate-x-1 duration-300">
                    <span className="text-primary-gold text-[10px] font-black uppercase tracking-widest">{exp.date}</span>
                    <h4 className="text-xl font-black text-white mt-1 uppercase tracking-tight">{exp.title}</h4>
                    <p className="text-primary-lavender text-sm font-bold mb-3">{exp.company}</p>
                    <p className="text-app-subtext text-sm leading-relaxed font-light">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
