
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section id="privacy" className="ms-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Shield size={40} className="text-ms-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-ms-accent">Privacy </span>
            <span className="text-ms-text-light">Policy</span>
          </h2>
        </div>

        <div className="ms-card animate-slide-up">
          <div className="space-y-6 text-ms-text-light/80">
            <p>
              <strong className="text-ms-accent">Last Updated:</strong> April 11, 2025
            </p>
            
            <p>
              MS Bridge ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by MS Bridge.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, such as when you create an account, use our services, or contact customer support. This may include your name, email address, phone number, and device information.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">How We Use Your Information</h3>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect our users. We may also use the information to communicate with you about our services, provide customer support, and for research and analytical purposes.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">Information Sharing</h3>
            <p>
              We do not share your personal information with third parties except as described in this Privacy Policy. We may share your information with service providers who perform services on our behalf, when required by law, or in connection with a merger, acquisition, or sale of assets.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">Data Security</h3>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">Your Rights</h3>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@msbridge.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
