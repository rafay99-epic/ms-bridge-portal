import { useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Navbar from "@/components/Navbar";
import TermsSection from "@/components/sections/TermsSection";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Terms = () => {
  useEffect(() => {
    document.title = "MS Bridge - Terms and Conditions";
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-ms-accent-dark text-ms-text-light"
      >
        <Navbar />

        <main>
          <LayoutGroup>
            <motion.section
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12"
            >
              <TermsSection />
            </motion.section>
          </LayoutGroup>
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Terms;
