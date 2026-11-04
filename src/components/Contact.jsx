import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Check, Copy, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto link preparation
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:shahranansari2008@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shahranansari2008@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e2433]/60 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-sky-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's connect & collaborate.
          </h2>
          <p className="text-slate-400 max-w-xl text-base">
            I am currently open to internship opportunities, frontend projects, and software engineering conversations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#11141c] border border-[#1e2433] space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Contact Details
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#161c28] border border-[#222c40] flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-400">Email</div>
                    <a
                      href="mailto:shahranansari2008@gmail.com"
                      className="text-sm font-medium text-white hover:text-sky-300 transition-colors block truncate"
                    >
                      shahranansari2008@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-[#161c28] border border-[#232d42] text-slate-400 hover:text-sky-300 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#161c28] border border-[#222c40] flex items-center justify-center text-sky-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone</div>
                    <a
                      href="tel:+918470863395"
                      className="text-sm font-medium text-white hover:text-sky-300 transition-colors"
                    >
                      +91 8470863395
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#161c28] border border-[#222c40] flex items-center justify-center text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <p className="text-sm font-medium text-slate-200">
                      Kanpur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-[#1e2433]/70 space-y-3">
                <a
                  href="mailto:shahranansari2008@gmail.com"
                  className="w-full py-3 px-4 rounded-xl bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 hover:shadow-glow-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me Directly</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/shahran-ansari-b8524b30a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#161c28] border border-[#222c40] text-slate-300 hover:text-white hover:border-slate-500 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/shahranansari2008-rgb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#161c28] border border-[#222c40] text-slate-300 hover:text-white hover:border-slate-500 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11141c] border border-[#1e2433] space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below to compose and send a message directly to my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161c28] border border-[#222c40] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161c28] border border-[#222c40] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Discuss an internship role, project collaboration, or tech opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161c28] border border-[#222c40] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 hover:shadow-glow-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>

                {/* Honest Integration Notice */}
                <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#1e2433] flex items-start gap-2.5 text-xs text-slate-400">
                  <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="text-slate-300 font-medium">Integration Notice:</span> Submitting launches your default email client with your message pre-formatted. To configure headless automated form delivery without email client redirection, a service such as Netlify Forms or Formspree can be integrated.
                  </p>
                </div>

                {submitted && (
                  <p className="text-xs text-emerald-400 text-center font-medium">
                    ✓ Email client opened. Looking forward to connecting with you!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
