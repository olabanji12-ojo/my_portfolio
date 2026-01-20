import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const personalInfo = {
  name: "Olabanji Ojo",
  title: "Full Stack Engineer & Teacher",
  mission: "Passionate about solving complex problems through logical reasoning and building scalable digital experiences that matter.",
  bio: "I am a final year Computer Science student at Osun State University with a deep-rooted passion for tutoring and problem-solving. My journey began with a curiosity for how things work, leading me from the basics of the web to building complex backend architectures. I believe that whatever we do, we owe it to ourselves and the world to do it well.",
  email: "emmanuelojo291@gmail.com",
  socials: [
    { icon: FaGithub, link: "https://github.com/olabanji12-ojo" },
    { icon: FaLinkedin, link: "https://linkedin.com/in/emmanuel-ojo-656406295" },
    { icon: FaEnvelope, link: "mailto:emmanuelojo291@gmail.com" }
  ]
};

export const skills = [
  { category: "Backend", items: ["Python", "Django", "DRF", "Go (Golang)", "PostgreSQL", "MongoDB", "Signals", "HTMX"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "PWA", "Bootstrap"] },
  { category: "DevOps & Tools", items: ["Docker", "Make.com (Automation)", "SEO Optimization", "Orange (Data Analysis)"] }
];

export const experience = [
  {
    title: "Web Developer & SEO Specialist",
    company: "Brookes Automation",
    date: "Jan 2026 - Present",
    desc: "Leading web development projects and driving organic growth through strategic SEO optimization."
  },
  {
    title: "Backend Developer",
    company: "Renda Africa",
    date: "April 2025 - Nov 2025",
    desc: "Developed and maintained REST APIs, working under the mentorship of Patrick Jesam to build robust logistics solutions."
  }
];

export const projects = [
  {
    title: "Queueless",
    category: "Full Stack",
    tech: ["React", "TypeScript", "React Router", "Go", "MongoDB", "Tailwind CSS"],
    desc: "An innovative carwash booking and management platform that eliminates wait times. Features include slot booking, worker assignment, and a robust admin dashboard.",
    img: ["/carwash1.png", "/carwash2.png", "/carwash3.png"],
    links: {
      github: "https://github.com/olabanji12-ojo/Car_Wash_Frontend",
      live: "http://queueless.online/"
    }
  },
  {
    title: "Bomffa",
    category: "Full Stack",
    tech: ["React", "React Router", "Tailwind CSS", "Firebase", "Paystack"],
    desc: "A premium e-commerce experience with seamless Paystack integration, real-time inventory tracking, and a sleek modern interface.",
    img: ["/bomffa1.png", "/bomffa2.png"],
    links: {
      github: "https://github.com/olabanji12-ojo/ob-s-project",
      live: "https://bomffa.store/"
    }
  },
  {
    title: "Automation & Integration",
    category: "Automation",
    tech: ["Make.com", "Webhooks"],
    desc: "Streamlining business workflows with complex Make.com scenarios. Integrated AI for automated responses and data processing.",
    img: ["/autimation.png"],
    links: {
      github: "https://github.com/olabanji12-ojo"
    }
  },
  {
    title: "Job Board",
    category: "Full Stack",
    tech: ["Python", "Django", "HTMX", "Sqlite", "Bootstrap", "Signals"],
    desc: "A platform connecting talent with opportunities. Features advanced job filtering, application tracking, and recruiter dashboards.",
    img: ["/job_board.png"],
    links: {
      github: "https://github.com/olabanji12-ojo/Job-Board",
      live: "#"
    }
  }
];
