'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const subjectOptions = [
  { value: '', label: 'Select a topic...' },
  { value: 'coaching-intensive', label: '1:1 Coaching Intensive' },
  { value: 'coaching-basic', label: '1:1 Basic Coaching' },
  { value: 'group-training', label: 'Group Training for Teams' },
  { value: 'course', label: 'On-Demand Course' },
  { value: 'speaking', label: 'Speaking Engagement' },
  { value: 'media', label: 'Media/Press Inquiry' },
  { value: 'other', label: 'General Question' },
];

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }
  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!data.subject) {
    errors.subject = 'Please select a topic';
  }
  if (!data.message || data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setIsError(false);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setIsSuccess(true);
      setFormData(initialFormState);
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="relative py-24 bg-[#000000] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7ED321]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#7ED321]/10 to-transparent border border-[#7ED321]/30 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#7ED321]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#7ED321]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-[#aaaaaa] text-lg mb-8">
              Thank you for reaching out. I&apos;ll review your message and get back to you
              within 24-48 hours.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSuccess(false)}
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3498db]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7ED321]/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              eyebrow="Send a Message"
              title="Get In Touch"
              subtitle="Fill out the form below and I'll get back to you within 24-48 hours."
              align="left"
            />

            {isError && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 mb-6"
              >
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <Input
                  label="Phone (Optional)"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Select
                label="What can I help you with?"
                name="subject"
                options={subjectOptions}
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                required
              />

              <Textarea
                label="Your Message"
                name="message"
                placeholder="Tell me about your situation, what you're looking to achieve, and any questions you have..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
              />

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121218] to-[#0a0a0a] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">
                What Happens Next?
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Quick Review',
                    description: 'I personally read every message that comes through.',
                  },
                  {
                    step: '02',
                    title: 'Thoughtful Response',
                    description: 'You\'ll receive a detailed response within 24-48 hours.',
                  },
                  {
                    step: '03',
                    title: 'Clear Next Steps',
                    description: 'If we\'re a good fit, I\'ll outline the best path forward for your situation.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#7ED321]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#7ED321] font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-[#888888] text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[#aaaaaa] text-sm">
                  <span className="text-[#7ED321] font-semibold">Pro tip:</span>{' '}
                  The more details you share about your current situation and goals,
                  the more helpful my response can be.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
