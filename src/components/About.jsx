import React from 'react';

const About = () => {
  const skills = ['Python', 'Django', 'JavaScript', 'React', 'SQL', 'Tailwind', 'MongoDB'];

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Renda Africa',
      desc: "Developed and maintained REST APIs for the company's web platform.",
      date: '2025 [April - November]',
    },

    // {
    //   title: 'Frontend Intern',
    //   company: 'Tech Solutions',
    //   desc: 'Built responsive web pages using React and Tailwind CSS.',
    //   date: '2021–2022',
    // },
    // {
    //   title: 'Full Stack Intern',
    //   company: 'Innovatech',
    //   desc: 'Worked on Django backend and integrated frontend React components.',
    //   date: '2020–2021',
    // },
    
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 data-aos="fade-right" className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <p data-aos="fade-right" className="text-gray-400 text-center mb-8">
        Passionate about creating digital solutions that make a difference
      </p>

      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* Left column */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-8">
          <div data-aos="zoom-in">
            {/* Using public folder path */}
            <img
              src="/portfolio-image.jpg"
              alt="Emmanuel Ojo"
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-gray-800"
            />
          </div>

          <p data-aos="fade-left" className="text-gray-400 leading-relaxed text-center lg:text-left">
            I am a Computer Science student at Osun State University 👨🏾‍💻.
            Passionate about backend development in Django and exploring frontend
            with modern tools like Tailwind CSS.
          </p>

          <h3 data-aos="fade-up" className="text-3xl font-bold mb-4">Technical Skills</h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5">
            {skills.map((s) => (
              <span key={s} className="bg-gray-600 text-white px-3 py-1 rounded shadow-sm">{s}</span>
            ))}
          </div>
        </div>

        {/* Right column (Experience) */}
        <div data-aos="fade-up" className="flex-1 flex flex-col gap-6">
          <h3 data-aos="fade-up" className="text-3xl font-bold mb-6 text-center lg:text-left">Experience</h3>

          {experiences.map((exp) => (
            <div key={exp.title} data-aos="fade-up" className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
              <p className="text-gray-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-2">{exp.desc}</p>
              <p className="text-gray-500 text-sm">{exp.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
