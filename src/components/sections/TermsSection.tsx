import React from "react";
import { FileText } from "lucide-react";

const TermsSection = () => {
  return (
    <section id="terms" className="ms-section bg-ms-accent-dark/50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <FileText size={40} className="text-ms-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-ms-accent">Terms & </span>
            <span className="text-ms-text-light">Conditions</span>
          </h2>
          <p className="text-ms-text-light/70 text-sm">
            Please review our terms carefully before using MS Bridge
          </p>
        </div>

        <div className="ms-card animate-slide-up bg-ms-gray-dark rounded-2xl shadow-lg p-8 space-y-10">
          <div className="text-ms-text-light/80 space-y-8 text-base leading-relaxed">
            <p>
              <strong className="text-ms-accent">Effective Date:</strong> March
              21, 2025
            </p>

            {[
              {
                title: "1. Welcome to MS Bridge",
                content: `Please read these Terms and Conditions carefully before using the MS Bridge app. By accessing or using MS Bridge, you agree to comply with these terms. If you do not agree, please refrain from using the app.`,
              },
              {
                title: "2. Acceptance of Terms",
                content: `By registering or using MS Bridge, you agree to these Terms and Conditions. If you do not agree, you must discontinue use immediately. Your continued use of the app signifies your acceptance.`,
              },
              {
                title: "3. User Accounts",
                list: [
                  "User registration and authentication are mandatory to prevent spam accounts.",
                  "We use Firebase Authentication for secure account management.",
                  "Users can register, log in, and reset their passwords securely within the app.",
                  "You are responsible for maintaining the confidentiality of your account credentials. Any unauthorized access or use of your account is your responsibility.",
                ],
              },
              {
                title: "4. Data Storage & Privacy",
                list: [
                  "Your notes and tasks are stored locally first, giving you full control over your data.",
                  "Synchronization with Firebase occurs when you choose to sync.",
                  "All authentication-related data is encrypted.",
                  "We do NOT view, collect, or share any personal data or content you create.",
                  "No third parties have access to your data.",
                  "We are not liable for any data loss due to software issues, hacking attempts, or your own actions.",
                ],
              },
              {
                title: "5. Acceptable Use Policy",
                list: [
                  "Use the app for any illegal or unauthorized purpose.",
                  "Modify, distribute, or copy any part of the app without prior written consent.",
                  "Engage in activities that may disrupt the normal functioning of the app or compromise its security.",
                  "Attempt to reverse engineer, decompile, or extract the source code of the app.",
                ],
              },
              {
                title: "6. Usage of Imported Notes",
                list: [
                  "Imported notes from rafay99.com are public and accessible within the app.",
                  "These notes are for personal learning purposes only. Redistribution, commercial use, or misuse is strictly prohibited.",
                ],
              },
              {
                title: "7. Limitation of Liability",
                content: `MS Bridge is provided "as is" without any warranties, express or implied. We are not responsible for any loss or damage resulting from the use or inability to use the app. We do not guarantee that the app will be free from bugs, errors, or security vulnerabilities.`,
              },
              {
                title: "8. Changes to Terms",
                content: `We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted within the app or on our website. Continued use of MS Bridge after changes are made constitutes acceptance of the new terms.`,
              },
              {
                title: "9. Governing Law & Jurisdiction",
                content: `These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Pakistan. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts in Pakistan.`,
              },
            ].map(({ title, content, list }, index) => (
              <div key={index} className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold text-ms-text-light mb-2">
                  {title}
                </h3>
                {content && <p className="text-ms-text-light/80">{content}</p>}
                {list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
