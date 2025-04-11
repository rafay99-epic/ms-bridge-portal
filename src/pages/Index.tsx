import { useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ScreenshotsSection from "@/components/sections/ScreenshotsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AdvancedFeaturesSection from "@/components/sections/AdvancedFeaturesSection";
import PrivacySection from "@/components/sections/PrivacySection";
import TermsSection from "@/components/sections/TermsSection";
import ContactSection from "@/components/sections/ContactSection";
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

const Index = () => {
  useEffect(() => {
    document.title = "MS Bridge - Android Application";
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-ms-accent-dark text-ms-text-light mt-12"
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
            >
              <HeroSection />
            </motion.section>

            <motion.section
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ScreenshotsSection />
            </motion.section>

            <motion.section
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeaturesSection />
            </motion.section>

            <motion.section
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AdvancedFeaturesSection />
            </motion.section>

            <motion.section
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <PrivacySection />
            </motion.section>

            <motion.section
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TermsSection />
            </motion.section>

            <motion.section
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactSection />
            </motion.section>
          </LayoutGroup>
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
