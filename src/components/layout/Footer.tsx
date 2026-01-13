import Link from 'next/link';
import { Clock, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Bill', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'The 168 Game Book', href: 'https://www.amazon.com/168-Game-Time-Ownership-Management/dp/B0D9YCKD9G', external: true },
    { label: 'Convention 2026', href: 'https://the168gameconvention.com', external: true },
  ],
  resources: [
    { label: 'Free Playbook', href: '/#playbook' },
    { label: '1:1 Coaching', href: '/services#coaching' },
    { label: 'Group Training', href: '/services#group' },
    { label: 'Online Course', href: '/services#course' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3498db] to-[#5dade2] flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#5dade2] tracking-tight">THE 168 GAME</span>
                <span className="text-[10px] text-[#888888] uppercase tracking-widest">Bill Korman</span>
              </div>
            </Link>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              Transform your relationship with time. Stop managing it. Start owning it.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#5dade2]/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#888888] hover:text-[#85c1e9] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#888888] hover:text-[#85c1e9] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-[#85c1e9] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@the168game.com"
                  className="flex items-center gap-3 text-[#888888] hover:text-[#85c1e9] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@the168game.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-[#888888] hover:text-[#85c1e9] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#555555] text-sm">
            © {new Date().getFullYear()} Bill Korman. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[#555555] hover:text-[#888888] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#555555] hover:text-[#888888] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
