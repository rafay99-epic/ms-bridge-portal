import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    error: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormState((prev) => ({
        ...prev,
        error: "All fields are required.",
      }));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormState((prev) => ({
        ...prev,
        error: "Please enter a valid email address.",
      }));
      return;
    }

    // Here you would typically send the form data to an API
    console.log("Form submitted:", formState);

    // Simulate successful submission
    setFormState((prev) => ({
      ...prev,
      submitted: true,
      error: "",
    }));
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      message: "",
      submitted: false,
      error: "",
    });
  };

  return (
    <section id="contact" className="ms-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-ms-accent">Contact </span>
            <span className="text-ms-text-light">Us</span>
          </h2>
          <p className="text-ms-text-light/70 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch
            with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="ms-card h-full animate-slide-up">
              <h3 className="text-xl font-semibold mb-6 text-ms-text-light">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ms-accent/20 flex items-center justify-center text-ms-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-ms-text-light/70">Email</p>
                    <a
                      href="mailto:contact@msbridge.com"
                      className="text-ms-accent hover:underline"
                    >
                      99marafay@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ms-accent/20 flex items-center justify-center text-ms-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-ms-text-light/70">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-ms-accent hover:underline"
                    >
                      +92 (303) 5650798
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ms-accent/20 flex items-center justify-center text-ms-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-ms-text-light/70">Address</p>
                    <address className="not-italic text-ms-accent">
                      Office #SO5 2nd Floor, City Center Saddar Rawalpindi,
                      Pakistan
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              className="ms-card animate-slide-up"
              style={{ animationDelay: "150ms" }}
            >
              {formState.submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-ms-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle size={32} className="text-ms-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-ms-text-light">
                    Thank You!
                  </h3>
                  <p className="text-ms-text-light/70 mb-6">
                    Your message has been received. We'll get back to you
                    shortly.
                  </p>
                  <button onClick={resetForm} className="ms-button">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState.error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 py-2 px-4 rounded-lg">
                      {formState.error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-ms-text-light mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-ms-accent-dark/80 border border-ms-accent/20 rounded-lg py-2 px-4 text-ms-text-light focus:outline-none focus:border-ms-accent/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-ms-text-light mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-ms-accent-dark/80 border border-ms-accent/20 rounded-lg py-2 px-4 text-ms-text-light focus:outline-none focus:border-ms-accent/50"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-ms-text-light mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-ms-accent-dark/80 border border-ms-accent/20 rounded-lg py-2 px-4 text-ms-text-light focus:outline-none focus:border-ms-accent/50"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="ms-button w-full flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// ContactSection.tsx
// import React, { useState } from "react";
// import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
// import useWeb3FormHook from "../../hooks/useWeb3FormHook"; // Import the hook

// const ContactSection = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const {
//     handleSubmit,
//     isSubmitting,
//     isSuccess,
//     message,
//     error,
//     resetFormStatus,
//   } = useWeb3FormHook();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formState.name || !formState.email || !formState.message) {
//       alert("All fields are required."); // Using alert for simplicity, better UX would use a proper error message display
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formState.email)) {
//       alert("Please enter a valid email address."); // Using alert for simplicity
//       return;
//     }

//     handleSubmit(formState);
//   };

//   const resetForm = () => {
//     setFormState({
//       name: "",
//       email: "",
//       message: "",
//     });
//     resetFormStatus();
//   };

//   return (
//     <section id="contact" className="ms-section">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12 animate-fade-in">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             <span className="text-ms-accent">Contact </span>
//             <span className="text-ms-text-light">Us</span>
//           </h2>
//           <p className="text-ms-text-light/70 max-w-2xl mx-auto">
//             Have questions or feedback? We'd love to hear from you. Get in touch
//             with our team.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           <div className="lg:col-span-2">
//             <div className="ms-card h-full animate-slide-up">
//               <h3 className="text-xl font-semibold mb-6 text-ms-text-light">
//                 Get in Touch
//               </h3>
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 rounded-full bg-ms-accent/20 flex items-center justify-center text-ms-accent">
//                     <Mail size={20} />
//                   </div>
//                   <div>
//                     <p className="text-ms-text-light/70">Email</p>
//                     <a
//                       href="mailto:contact@msbridge.com"
//                       className="text-ms-accent hover:underline"
//                     >
//                       contact@msbridge.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 rounded-full bg-ms-accent/20 flex items-center justify-center text-ms-accent">
//                     <Phone size={20} />
//                   </div>
//                   <div>
//                     <p className="text-ms-text-light/70">Phone</p>
//                     <a
//                       href="tel:+1234567890"
//                       className="text-ms-accent hover:underline"
//                     >
//                       +1 (234) 567-890
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 rounded-full bg-ms-accent/20 flex items-center justify-center text-ms-accent">
//                     <MapPin size={20} />
//                   </div>
//                   <div>
//                     <p className="text-ms-text-light/70">Address</p>
//                     <address className="not-italic text-ms-accent">
//                       1234 Tech Street, San Francisco, CA 94107
//                     </address>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-3">
//             <div
//               className="ms-card animate-slide-up"
//               style={{ animationDelay: "150ms" }}
//             >
//               {isSuccess ? (
//                 <div className="text-center py-8">
//                   <div className="w-16 h-16 rounded-full bg-ms-accent/20 mx-auto mb-4 flex items-center justify-center">
//                     <CheckCircle size={32} className="text-ms-accent" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-ms-text-light">
//                     Thank You!
//                   </h3>
//                   <p className="text-ms-text-light/70 mb-6">
//                     {message ||
//                       "Your message has been received. We'll get back to you shortly."}
//                   </p>
//                   <button onClick={resetForm} className="ms-button">
//                     Send Another Message
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={onSubmit} className="space-y-6">
//                   {error && (
//                     <div className="bg-red-500/20 border border-red-500/50 text-red-200 py-2 px-4 rounded-lg">
//                       {error}
//                     </div>
//                   )}

//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-ms-text-light mb-2"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formState.name}
//                       onChange={handleChange}
//                       className="w-full bg-ms-accent-dark/80 border border-ms-accent/20 rounded-lg py-2 px-4 text-ms-text-light focus:outline-none focus:border-ms-accent/50"
//                       placeholder="Your name"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-ms-text-light mb-2"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formState.email}
//                       onChange={handleChange}
//                       className="w-full bg-ms-accent-dark/80 border border-ms-accent/20 rounded-lg py-2 px-4 text-ms-text-light focus:outline-none focus:border-ms-accent/50"
//                       placeholder="Your email"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-ms-text-light mb-2"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formState.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className="w-full bg-ms-accent-dark/80 border border-ms-accent/20 rounded-lg py-2 px-4 text-ms-text-light focus:outline-none focus:border-ms-accent/50"
//                       placeholder="Your message"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="ms-button w-full flex items-center justify-center gap-2"
//                     disabled={isSubmitting} // Disable button while submitting
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                     {isSubmitting ? null : <Send size={18} />}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
