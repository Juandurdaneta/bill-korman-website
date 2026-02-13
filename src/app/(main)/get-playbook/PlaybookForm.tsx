'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Download, Check, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import GlowingOrb from '@/components/ui/GlowingOrb';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const DOWNLOAD_URL =
  'https://drive.google.com/file/d/1zDGMujgltYZzmibjtvHOLYROKualy11c/view?usp=sharing';

const valueProps = [
  'Complete 168-Hour audit template',
  'Energy mapping worksheet',
  'Revenue forensics calculator',
  'Priority decision matrix',
  'Weekly implementation blueprint',
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

  return errors;
}

export default function PlaybookForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setIsError(false);
    setErrorMessage('');

    try {
      const response = await fetch('/api/playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <section className="relative min-h-screen flex items-center py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#000000]" />
        <GlowingOrb color="#7ED321" size={400} className="top-1/4 left-1/4" delay={0} blur={150} />
        <GlowingOrb color="#3498db" size={300} className="bottom-1/4 right-1/4" delay={1} blur={120} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#7ED321]/10 to-transparent border border-[#7ED321]/30 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#7ED321]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#7ED321]" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Playbook Is Ready!
            </h1>

            <p className="text-[#aaaaaa] text-lg mb-8 max-w-lg mx-auto">
              Click the button below to download The Time Ownership Playbook.
              We&apos;ve also sent a copy to your email.
            </p>

            <Button
              href={DOWNLOAD_URL}
              variant="accent"
              size="lg"
              showArrow
            >
              <Download className="w-5 h-5 mr-1" />
              Download Your Playbook
            </Button>

            <p className="text-[#555555] text-sm mt-6">
              Check your inbox (and spam folder) for the email copy.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Form state
  return (
    <section className="relative min-h-screen flex items-center py-24 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <GlowingOrb color="#3498db" size={400} className="top-1/4 right-0" delay={0} blur={150} />
      <GlowingOrb color="#7ED321" size={300} className="bottom-1/4 left-1/4" delay={1} blur={120} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Book Cover + Value Props */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="text-[#7ED321] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Free Download
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              The Time Ownership Playbook
            </h1>

            <p className="text-[#aaaaaa] text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              The exact framework used by high-performing entrepreneurs to reclaim
              20+ hours per week without sacrificing revenue.
            </p>

            {/* Value props */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">
                What&apos;s Inside
              </h3>
              {valueProps.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Check className="w-5 h-5 text-[#7ED321] flex-shrink-0" />
                  <span className="text-[#d0d0dd]">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f1c40f]/10 border border-[#f1c40f]/20">
              <span className="text-[#f1c40f] font-semibold text-sm">$497 value</span>
              <span className="text-[#888888] text-sm">— yours free today</span>
            </div>
          </motion.div>

          {/* Right Column - Book Cover + Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Book cover */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[200px] aspect-[3/4] rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/images/Cover the time ownership .jpg"
                  alt="The Time Ownership Playbook"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#121218] to-[#0a0a0a] border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#7ED321]/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#7ED321]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Get Your Free Copy</h2>
                  <p className="text-[#888888] text-sm">Instant download after signup</p>
                </div>
              </div>

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

              <form onSubmit={handleSubmit} className="space-y-5">
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

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Get My Free Playbook'
                  )}
                </Button>

                <p className="text-[#555555] text-xs text-center">
                  No credit card required. We respect your privacy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
