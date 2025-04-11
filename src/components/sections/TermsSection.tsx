
import React from 'react';
import { FileText } from 'lucide-react';

const TermsSection = () => {
  return (
    <section id="terms" className="ms-section bg-ms-accent-dark/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <FileText size={40} className="text-ms-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-ms-accent">Terms & </span>
            <span className="text-ms-text-light">Conditions</span>
          </h2>
        </div>

        <div className="ms-card animate-slide-up">
          <div className="space-y-6 text-ms-text-light/80">
            <p>
              <strong className="text-ms-accent">Last Updated:</strong> April 11, 2025
            </p>
            
            <p>
              Please read these Terms & Conditions carefully before using the MS Bridge application.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">1. Acceptance of Terms</h3>
            <p>
              By accessing or using MS Bridge, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our application.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">2. License</h3>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use our application for your personal, non-commercial purposes.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">3. User Accounts</h3>
            <p>
              To use certain features of our application, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">4. Prohibited Activities</h3>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use our application for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Modify, adapt, or hack our application</li>
              <li>Use automated scripts to collect information from our application</li>
              <li>Interfere with or disrupt the operation of our application</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-ms-text-light">5. Intellectual Property</h3>
            <p>
              All content and materials available through our application, including but not limited to text, graphics, logos, icons, images, and software, are the property of MS Bridge and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">6. Disclaimer of Warranties</h3>
            <p>
              Our application is provided "as is" and "as available" without any warranties of any kind, either express or implied.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">7. Limitation of Liability</h3>
            <p>
              In no event shall MS Bridge be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our application.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">8. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of these Terms.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">9. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
            </p>
            
            <h3 className="text-xl font-semibold text-ms-text-light">10. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at terms@msbridge.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
