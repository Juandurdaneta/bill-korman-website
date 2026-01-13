import { Metadata } from 'next';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import CalendlySection from './CalendlySection';

export const metadata: Metadata = {
  title: 'Contact | The 168 Game - Bill Korman',
  description:
    'Get in touch with Bill Korman. Schedule a free consultation, ask questions about coaching, or discuss how The 168 Game can help you reclaim your time.',
  openGraph: {
    title: 'Contact Bill Korman | The 168 Game',
    description:
      'Schedule a free consultation and start your journey to time ownership.',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <CalendlySection />
    </>
  );
}
