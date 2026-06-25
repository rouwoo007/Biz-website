'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';

const projectTypes = [
  { value: '', label: 'Select a project type…' },
  { value: 'shopfitting', label: 'Shopfitting' },
  { value: 'commercial-fitout', label: 'Commercial Fitout' },
  { value: 'joinery-manufacturing', label: 'Joinery Manufacturing' },
  { value: 'cafe-restaurant-fitout', label: 'Cafe & Restaurant Fitout' },
  { value: 'retail-fitout', label: 'Retail Fitout' },
  { value: 'medical-dental-fitout', label: 'Medical & Dental Fitout' },
  { value: 'office-fitout', label: 'Office Fitout' },
  { value: 'other', label: 'Other' },
];

// Map a stored option value back to its human-readable label for the email.
const labelFor = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

const contactSchema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters'),
  company: z.string().optional(),
  phone: z
    .string()
    .min(8, 'Please enter a valid phone number')
    .regex(/^[\d\s+()-]+$/, 'Phone number contains invalid characters'),
  email: z.email('Please enter a valid email address'),
  projectType: z
    .string()
    .min(1, 'Please select a project type'),
  message: z.string().optional(),
  // Honeypot — must stay empty. Hidden from humans; bots tend to fill it.
  company_website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: standardSchemaResolver(contactSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // True only after hydration — keeps the submit button inert until JS is ready,
  // so the form can never fall back to a native (non-JS) GET submission that
  // would leak data into the URL and skip the email send.
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    setIsSuccess(false);

    // Silently drop bot submissions (honeypot field filled in).
    if (data.company_website) {
      setIsSuccess(true);
      reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError(
        'The enquiry form is not fully set up yet. Please email fixitup@outlook.com or call 0410 829 334 and we’ll help you straight away.'
      );
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Enquiry — ${data.name}`,
          from_name: 'Fix It Up Website',
          replyto: data.email,
          // Human-readable fields land directly in the notification email.
          Name: data.name,
          Company: data.company || '—',
          Phone: data.phone,
          Email: data.email,
          'Project Type': labelFor(projectTypes, data.projectType),
          Message: data.message || '—',
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result?.message || 'Submission failed. Please try again.');
      }

      setIsSuccess(true);
      reset();
    } catch {
      setSubmitError(
        'Sorry, we couldn’t send your enquiry just now. Please try again, or email fixitup@outlook.com directly.'
      );
    }
  };

  const inputBase =
    'block w-full rounded-lg border px-4 py-3 text-sm text-charcoal placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-copper-600 transition-colors';
  const inputNormal = `${inputBase} bg-white border-gray-200 hover:border-gray-300 focus:border-copper-600`;
  const inputError = `${inputBase} bg-white border-red-300 focus:ring-red-400`;
  const labelBase = 'block text-sm font-medium text-charcoal/80 mb-1.5';
  const errorBase = 'mt-1.5 text-xs text-red-500';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Honeypot: hidden from real users, catches spam bots that auto-fill fields. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company-website">Company website</label>
        <input
          id="contact-company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('company_website')}
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className={labelBase}>
          Full Name <span className="text-copper-600">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          className={errors.name ? inputError : inputNormal}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          {...register('name')}
        />
        {errors.name && (
          <p id="contact-name-error" className={errorBase} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Company (optional) */}
      <div>
        <label htmlFor="contact-company" className={labelBase}>
          Company{' '}
          <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <input
          id="contact-company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Retail Pty Ltd"
          className={errors.company ? inputError : inputNormal}
          {...register('company')}
        />
      </div>

      {/* Phone + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className={labelBase}>
            Phone <span className="text-copper-600">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="07 3000 0000"
            className={errors.phone ? inputError : inputNormal}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="contact-phone-error" className={errorBase} role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelBase}>
            Email <span className="text-copper-600">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={errors.email ? inputError : inputNormal}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="contact-email-error" className={errorBase} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="contact-project-type" className={labelBase}>
          Project Type <span className="text-copper-600">*</span>
        </label>
        <select
          id="contact-project-type"
          className={`${errors.projectType ? inputError : inputNormal} appearance-none cursor-pointer`}
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? 'contact-project-type-error' : undefined}
          {...register('projectType')}
          defaultValue=""
        >
          {projectTypes.map((pt) => (
            <option
              key={pt.value}
              value={pt.value}
              disabled={pt.value === ''}
            >
              {pt.label}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p id="contact-project-type-error" className={errorBase} role="alert">
            {errors.projectType.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelBase}>
          Message{' '}
          <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your project — scope, location, timeline…"
          className={`${errors.message ? inputError : inputNormal} resize-y`}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="contact-message-error" className={errorBase} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Status banner (success / error feedback) */}
      <div role="status" aria-live="polite">
        {isSuccess && (
          <p className="text-sm text-copper-700 bg-copper-50 border border-copper-200 rounded-lg px-4 py-3">
            Thank you &mdash; your enquiry has been received. We&apos;ll be in touch shortly!
          </p>
        )}
      </div>
      {submitError && (
        <div role="alert">
          <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {submitError}
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || !hasMounted}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-copper-600 text-white text-sm font-semibold hover:bg-copper-700 transition-colors shadow-copper-glow disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              />
            </svg>
            Sending…
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  );
}
