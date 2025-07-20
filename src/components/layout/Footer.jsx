import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Code-with-saurabh",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saurabh-sharma-64643128b",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto: saurabhsharma12166@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon" className="hover:shadow-glow">
                  <link.icon className="h-5 w-5" />
                </Button>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© 2024 Saurabh Sharma. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of coffee.</span>
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;