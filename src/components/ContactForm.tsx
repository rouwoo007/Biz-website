'use client';

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
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: standardSchemaResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    reset();
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
          Message <span className="text-copper-600">*</span>
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

      {/* Status banner (success / submission feedback) */}
      <div role="status" aria-live="polite">
        {isSubmitSuccessful && (
          <p className="text-sm text-copper-700 bg-copper-50 border border-copper-200 rounded-lg px-4 py-3">
            Thank you &mdash; your enquiry has been received. We&apos;ll be in touch shortly!
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
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
