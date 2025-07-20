import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main hero animation timeline
      const tl = gsap.timeline();
      
      // Animate hero text with stagger
      tl.fromTo(textRef.current.children,
        { 
          y: 100, 
          opacity: 0,
          rotateX: 90 
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out"
        }
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(buttonsRef.current.children,
        { y: 30, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      );

      // Floating animation for the hero background
      gsap.to(".hero-bg", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-warm"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="hero-bg absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-primary/10" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-primary opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center z-10">
        <div ref={textRef} className="space-y-4 mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block hero-text">Saurabh</span>
            <span className="block hero-text">Sharma</span>
          </h1>
        </div>

        <motion.div
          ref={subtitleRef}
          className="space-y-4 mb-8 max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Creative Developer & Designer
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            Crafting beautiful, interactive experiences with modern web technologies. 
            Passionate about clean code, stunning design, and user-centered solutions.
          </p>
        </motion.div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection("#projects")}
            className="group"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://github.com/Code-with-saurabh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/saurabh-sharma-64643128b" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;