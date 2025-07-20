import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "../components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack web application built with React, Redux, Express, and MongoDB, leveraging the power of the MERN stack for a seamless front-end and back-end experience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express js", "Redux"],
      category: "fullstack",
      demoUrl: "https://ecommercebazaar.netlify.app/",
      githubUrl: "https://github.com/Code-with-saurabh/React-Ecommerce-Site",
      featured: true,
    },
    {
      id: 2,
      title: "Chat Application",
      description:
        "A real-time chat application built with React. This project allows users to create an account, join chat rooms, and send messages in real-time. The application utilizes WebSocket for real-time communication and is designed to be user-friendly and responsive.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      tags: ["React", "Socket.io", "Node.js", "WebRTC", "Redux", "Express", "Node.js"],
      category: "fullstack",
      demoUrl: "https://github.com/Code-with-saurabh/Chat-app",
      githubUrl: "https://github.com/Code-with-saurabh/Chat-app",
      featured: true,
    },
    {
      id: 3,
      title: "Express User Profile API",
      description:
        "A backend API service using Express.js for user profile management, ideal for handling CRUD operations, authentication, and RESTful endpoints.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["Node.js", "Express", "REST API"],
      category: "backend",
      demoUrl: "https://github.com/Code-with-saurabh/express-user-profile",
      githubUrl: "https://github.com/Code-with-saurabh/express-user-profile",
    },
    {
      id: 4,
      title: "Java Servlet JSP Project",
      description:
        "Java-based web application using Servlet and JSP for managing dynamic content. A full-featured backend solution.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tags: ["Java", "Servlet", "JSP"],
      category: "backend",
      demoUrl: "https://github.com/Code-with-saurabh/JAVA-Project",
      githubUrl: "https://github.com/Code-with-saurabh/JAVA-Project",
    },
    {
      id: 5,
      title: "PHP Authentication System",
      description:
        "Simple and secure user authentication system using PHP and MySQL with session management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["PHP", "MySQL", "Authentication"],
      category: "backend",
      demoUrl: "https://github.com/Code-with-saurabh/PHP-Projects",
      githubUrl: "https://github.com/Code-with-saurabh/PHP-Projects",
    },
    {
      id: 6,
      title: "Python Todo List",
      description:
        "Amazing command-line TODO list manager built in Python.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      tags: ["Python"],
      category: "",
      demoUrl: "https://github.com/Code-with-saurabh/PHP-Projects",
      githubUrl: "https://github.com/Code-with-saurabh/PHP-Projects",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gradient-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Code-with-saurabh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
