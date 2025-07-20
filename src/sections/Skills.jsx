import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "JavaScript", level: 95, color: "#F7DF1E" },
        { name: "TypeScript", level: 40, color: "#3178C6" },
        { name: "HTML/CSS", level: 98, color: "#E34F26" },
        { name: "Tailwind CSS", level: 50, color: "#06B6D4" },
        { name: "GSAP", level: 30, color: "#88CE02" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Python", level: 45, color: "#3776AB" },
        { name: "java", level: 40, color: "#3776AB" },
        { name: "Express", level: 82, color: "#000000" },
        { name: "MongoDB", level: 78, color: "#47A248" },
        // { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "REST APIs", level: 88, color: "#FF6B6B" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "#F05032" },
        // { name: "Docker", level: 12, color: "#2496ED" },
        { name: "Github", level: 80, color: "#FF9900" },
        { name: "Postman", level: 25, color: "#F24E1E" },
        { name: "Webpack", level: 75, color: "#8DD6F9" },
        { name: "Testing", level: 80, color: "#C21325" }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill categories
      skillsRef.current.querySelectorAll('.skill-category').forEach((category, index) => {
        gsap.fromTo(category,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: category,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate skill bars
      skillsRef.current.querySelectorAll('.skill-bar').forEach((bar, index) => {
        gsap.fromTo(bar,
          { width: "0%" },
          {
            width: bar.dataset.level + "%",
            duration: 1.5,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Constantly learning and evolving with the latest technologies to deliver 
            cutting-edge solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category glass-card p-8"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-center text-gradient-primary">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="skill-bar absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                        data-level={skill.level}
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold mb-8 text-muted-foreground">
            Technologies I Love Working With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React", "JavaScript", "TypeScript", "Node.js", "express js", "MongoDB",
              "Html","css", "Git", "Postman", "PHP", "Java","Python", "Tailwind"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-subtle rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;