import React from "react";
import { Shield } from "lucide-react";

const PrivacySection = () => {
  return (
    <section id="privacy" className="ms-section py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <Shield size={40} className="text-ms-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-ms-accent">Privacy </span>
            <span className="text-ms-text-light">Policy</span>
          </h2>
          <p className="text-ms-text-light/70 text-sm">
            Your privacy is important to us. Please review this policy
            carefully.
          </p>
        </div>

        <div className="ms-card animate-slide-up bg-ms-gray-dark rounded-2xl shadow-lg p-8 space-y-10">
          <div className="space-y-6 text-ms-text-light/80">
            <p>
              <strong className="text-ms-accent">Effective Date:</strong> March
              21, 2025
            </p>

            <p>
              Welcome to MS Bridge. This Privacy Policy explains how we collect,
              use, and protect your information when you use our app. By using
              our services, you agree to the collection and use of your data in
              accordance with this policy.
            </p>

            {[
              {
                title: "1. Information We Collect",
                content: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personal Information:</strong> Email and other
                      details you provide at registration.
                    </li>
                    <li>
                      <strong>Notes and Tasks:</strong> Stored locally and
                      synced with our servers.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Data on how you interact with
                      the app.
                    </li>
                    <li>
                      <strong>Device Information:</strong> Model, OS, app
                      version, etc.
                    </li>
                    <li>
                      <strong>Log Data:</strong> IP addresses, browser types,
                      and timestamps.
                    </li>
                  </ul>
                ),
              },
              {
                title: "2. Use of Your Information",
                content: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and maintain services.</li>
                    <li>Authenticate your identity.</li>
                    <li>Sync notes/tasks across devices.</li>
                    <li>Personalize your experience.</li>
                    <li>Send important service-related communications.</li>
                  </ul>
                ),
              },
              {
                title: "3. Data Storage and Security",
                content: (
                  <p>
                    We use Firebase (by Google) for secure data storage. For
                    more details, visit their{" "}
                    <a
                      href="https://firebase.google.com/support/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ms-accent underline"
                    >
                      Privacy and Security page
                    </a>
                    . We apply encryption and access controls, but no method is
                    100% secure.
                  </p>
                ),
              },
              {
                title: "4. Data Encryption",
                content: (
                  <p>
                    All authentication data is encrypted. We also use secure
                    communication protocols like HTTPS for all data
                    transmissions.
                  </p>
                ),
              },
              {
                title: "5. Third-Party Services",
                content: (
                  <p>
                    We do not share your personal information except as needed
                    for our services or as required by law. Services like
                    Firebase follow their own privacy policies.
                  </p>
                ),
              },
              {
                title: "6. Data Retention and Deletion",
                content: (
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Retention:</strong> Data is kept as long as
                      necessary for service delivery.
                    </li>
                    <li>
                      <strong>Deletion:</strong> You can request deletion of
                      your data/account. Once deleted, it cannot be recovered.
                    </li>
                    <li>
                      <strong>Backups:</strong> Temporary backups may be kept
                      for continuity and compliance.
                    </li>
                  </ul>
                ),
              },
              {
                title: "7. User Rights",
                content: (
                  <p>
                    You have the right to access, update, or delete your data.
                    You can also withdraw consent when applicable.
                  </p>
                ),
              },
              {
                title: "8. Children’s Privacy",
                content: (
                  <p>
                    MS Bridge is not intended for users under 13. We do not
                    knowingly collect data from children. If we become aware of
                    such data, we will delete it.
                  </p>
                ),
              },
              {
                title: "9. Changes to This Policy",
                content: (
                  <p>
                    We may update this policy from time to time. Changes will be
                    posted on this page or via in-app notifications. Please
                    review periodically.
                  </p>
                ),
              },
              {
                title: "10. Contact Us",
                content: (
                  <p>
                    For questions regarding this Privacy Policy, contact us at{" "}
                    <a
                      href="mailto:99marafay@gmail.com"
                      className="text-ms-accent underline"
                    >
                      99marafay@gmail.com
                    </a>
                    .
                  </p>
                ),
              },
              {
                title: "11. Additional Information",
                content: (
                  <p>
                    For more on how we handle data, please refer to our Terms of
                    Service.
                  </p>
                ),
              },
            ].map(({ title, content }, index) => (
              <div key={index} className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold text-ms-text-light mb-2">
                  {title}
                </h3>
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
