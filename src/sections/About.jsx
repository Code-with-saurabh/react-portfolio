import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Palette, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation with stagger
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions with modern best practices"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, user-centered interfaces that delight users"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed, accessibility, and exceptional user experience"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver outstanding results"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                Creative Developer & Designer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a keen eye for design and 
                  a love for creating exceptional digital experiences. With expertise in 
                  modern web technologies, I bring ideas to life through clean code and 
                  intuitive user interfaces.
                </p>
                <p>
                  My journey in web development started with curiosity and has evolved 
                  into a profession where I constantly push the boundaries of what's 
                  possible on the web. I believe in the power of technology to solve 
                  real-world problems and create meaningful connections.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Problem Solving" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;