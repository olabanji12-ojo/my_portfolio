import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projectData = [
        {
          title: "Foam Up",
          desc: "A comprehensive car wash management platform that bridges the gap between car owners and car wash businesses. Features interactive maps, smart booking, real-time tracking, and secure payments. Built with React, Tailwind CSS, Go, and MongoDB.",
          img: "/Detailed design of bike logo template _ Free Vector.jpeg",
          link1: "https://foam-up.vercel.app/",
          link2: "https://github.com/olabanji12-ojo/foam-up",
          
        },
        {
          title: "Job Board",
          desc: "A Django-powered job portal connecting employers and job seekers. Employers can post jobs while job seekers can browse, search, and apply. Features role-based authentication, job search functionality, pagination, and partial page updates with HTMX.",
          img: "/job_board.png",
          link1: "",
          link2: "https://github.com/olabanji12-ojo/job-board"
        },

        {
          title: "Blog Platform",
          desc: "An interactive chatbot built with Django and integrated with the Gemma:2B language model via API. Features real-time streaming responses, user input processing, and seamless conversation flow. Perfect for customer support and AI assistance applications.",
          img: "/ai_chatbot.png",
          link1: "", 
          link2: "https://github.com/olabanji12-ojo/Chatbot_Project"  
        },
      ];
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-up">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
