'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { z } from 'zod';

// --- Schemas -----------------------------------------------------------------

const step1Schema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters'),
  company: z.string().optional(),
  phone: z
    .string()
    .min(8, 'Please enter a valid phone number')
    .regex(/^[\d\s+()-]+$/, 'Phone number contains invalid characters'),
  email: z.email('Please enter a valid email address'),
});

const step2Schema = z.object({
  projectType: z.string().min(1, 'Please select a project type'),
  location: z.string().min(2, 'Please enter a suburb or location'),
  siteAddress: z.string().optional(),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
});

const step3Schema = z.object({
  description: z.string().optional(),
  heardAboutUs: z.string().min(1, 'Please let us know how you found us'),
  // Honeypot — must stay empty. Hidden from humans; bots tend to fill it.
  company_website: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

// --- Options -----------------------------------------------------------------

const PROJECT_TYPES = [
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

const BUDGET_RANGES = [
  { value: '', label: 'Select a budget range…' },
  { value: 'under-50k', label: 'Under $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k-250k', label: '$100,000 – $250,000' },
  { value: '250k-500k', label: '$250,000 – $500,000' },
  { value: '500k-1m', label: '$500,000 – $1,000,000' },
  { value: 'over-1m', label: 'Over $1,000,000' },
  { value: 'not-sure', label: 'Not sure yet' },
];

const TIMELINES = [
  { value: '', label: 'Select a timeline…' },
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-3months', label: 'Within 1–3 months' },
  { value: '3-6months', label: 'Within 3–6 months' },
  { value: '6-12months', label: 'Within 6–12 months' },
  { value: 'over-12months', label: 'More than 12 months away' },
  { value: 'flexible', label: 'Flexible / not sure yet' },
];

const HEARD_ABOUT_US = [
  { value: '', label: 'Select an option…' },
  { value: 'google', label: 'Google search' },
  { value: 'referral', label: 'Referral from someone I know' },
  { value: 'social-media', label: 'Social media' },
  { value: 'repeat-client', label: 'Returning client' },
  { value: 'industry-event', label: 'Industry event or trade show' },
  { value: 'signage', label: 'Saw your signage / van' },
  { value: 'other', label: 'Other' },
];

// Map a stored option value back to its human-readable label for the email.
const labelFor = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

// --- Shared style helpers ----------------------------------------------------

const inputBase =
  'block w-full rounded-lg border px-4 py-3 text-sm text-charcoal placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-copper-500 transition-colors';
const inputNormal = `${inputBase} bg-white border-gray-200 hover:border-gray-300 focus:border-copper-500`;
const inputError = `${inputBase} bg-white border-red-300 focus:ring-red-400`;
const labelBase = 'block text-sm font-medium text-charcoal/80 mb-1.5';
const errorBase = 'mt-1.5 text-xs text-red-500';

// --- Step indicator ----------------------------------------------------------

const STEPS = [
  { number: 1, label: 'Your Details' },
  { number: 2, label: 'Project Details' },
  { number: 3, label: 'Additional Info' },
];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEPS.map((step, idx) => {
        const isActive = step.number === current;
        const isComplete = step.number < current;
        return (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                aria-current={isActive ? 'step' : undefined}
                className={[
                  'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors',
                  isComplete
                    ? 'bg-copper-500 text-white'
                    : isActive
                    ? 'bg-copper-500 text-white ring-4 ring-copper-100'
                    : 'bg-gray-100 border border-gray-200 text-gray-600',
                ].join(' ')}
              >
                {isComplete ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={[
                  'mt-2 text-xs font-medium whitespace-nowrap',
                  isActive ? 'text-copper-700' : isComplete ? 'text-gray-500' : 'text-gray-500',
                ].join(' ')}
              >
                {step.label}
              </span>
            </div>

            {idx < STEPS.length - 1 && (
              <div
                className={[
                  'h-px w-12 sm:w-20 mx-1 mb-5 transition-colors',
                  isComplete ? 'bg-copper-500' : 'bg-gray-200',
                ].join(' ')}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// --- Step 1 ------------------------------------------------------------------

function Step1({
  onNext,
  defaultValues,
}: {
  onNext: (data: Step1Data) => void;
  defaultValues?: Partial<Step1Data>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: standardSchemaResolver(step1Schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate className="space-y-5">
      <div>
        <label htmlFor="q-name" className={labelBase}>
          Full Name <span className="text-copper-600">*</span>
        </label>
        <input
          id="q-name"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          className={errors.name ? inputError : inputNormal}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'q-name-error' : undefined}
          {...register('name')}
        />
        {errors.name && <p id="q-name-error" className={errorBase} role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="q-company" className={labelBase}>
          Company{' '}
          <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <input
          id="q-company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Retail Pty Ltd"
          className={inputNormal}
          {...register('company')}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-phone" className={labelBase}>
            Phone <span className="text-copper-600">*</span>
          </label>
          <input
            id="q-phone"
            type="tel"
            autoComplete="tel"
            placeholder="07 3000 0000"
            className={errors.phone ? inputError : inputNormal}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'q-phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone && <p id="q-phone-error" className={errorBase} role="alert">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="q-email" className={labelBase}>
            Email <span className="text-copper-600">*</span>
          </label>
          <input
            id="q-email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={errors.email ? inputError : inputNormal}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'q-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && <p id="q-email-error" className={errorBase} role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <StepNavigation step={1} />
    </form>
  );
}

// --- Step 2 ------------------------------------------------------------------

function Step2({
  onNext,
  onBack,
  defaultValues,
}: {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
  defaultValues?: Partial<Step2Data>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: standardSchemaResolver(step2Schema),
    defaultValues: {
      projectType: '',
      location: '',
      siteAddress: '',
      budgetRange: '',
      timeline: '',
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate className="space-y-5">
      <div>
        <label htmlFor="q-project-type" className={labelBase}>
          Project Type <span className="text-copper-600">*</span>
        </label>
        <select
          id="q-project-type"
          className={`${errors.projectType ? inputError : inputNormal} appearance-none cursor-pointer`}
          aria-invalid={!!errors.projectType}
          aria-describedby={errors.projectType ? 'q-project-type-error' : undefined}
          {...register('projectType')}
        >
          {PROJECT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.projectType && <p id="q-project-type-error" className={errorBase} role="alert">{errors.projectType.message}</p>}
      </div>

      <div>
        <label htmlFor="q-location" className={labelBase}>
          Location / Suburb <span className="text-copper-600">*</span>
        </label>
        <input
          id="q-location"
          type="text"
          placeholder="e.g. Fortitude Valley, Brisbane QLD"
          className={errors.location ? inputError : inputNormal}
          aria-invalid={!!errors.location}
          aria-describedby={errors.location ? 'q-location-error' : undefined}
          {...register('location')}
        />
        {errors.location && <p id="q-location-error" className={errorBase} role="alert">{errors.location.message}</p>}
      </div>

      <div>
        <label htmlFor="q-site-address" className={labelBase}>
          Full Site Address{' '}
          <span className="text-gray-500 font-normal">(if known)</span>
        </label>
        <input
          id="q-site-address"
          type="text"
          autoComplete="street-address"
          placeholder="e.g. Shop 4, 120 Edward Street, Brisbane City QLD 4000"
          className={inputNormal}
          {...register('siteAddress')}
        />
        <p className="mt-1.5 text-xs text-gray-500">
          The exact address of the property or tenancy where the work will take place.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-budget" className={labelBase}>
            Budget Range <span className="text-copper-600">*</span>
          </label>
          <select
            id="q-budget"
            className={`${errors.budgetRange ? inputError : inputNormal} appearance-none cursor-pointer`}
            aria-invalid={!!errors.budgetRange}
            aria-describedby={errors.budgetRange ? 'q-budget-error' : undefined}
            {...register('budgetRange')}
          >
            {BUDGET_RANGES.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budgetRange && <p id="q-budget-error" className={errorBase} role="alert">{errors.budgetRange.message}</p>}
        </div>

        <div>
          <label htmlFor="q-timeline" className={labelBase}>
            Timeline <span className="text-copper-600">*</span>
          </label>
          <select
            id="q-timeline"
            className={`${errors.timeline ? inputError : inputNormal} appearance-none cursor-pointer`}
            aria-invalid={!!errors.timeline}
            aria-describedby={errors.timeline ? 'q-timeline-error' : undefined}
            {...register('timeline')}
          >
            {TIMELINES.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.timeline && <p id="q-timeline-error" className={errorBase} role="alert">{errors.timeline.message}</p>}
        </div>
      </div>

      <StepNavigation step={2} onBack={onBack} />
    </form>
  );
}

// --- Step 3 ------------------------------------------------------------------

function Step3({
  onSubmit,
  onBack,
  isSubmitting,
  defaultValues,
}: {
  onSubmit: (data: Step3Data) => void;
  onBack: () => void;
  isSubmitting: boolean;
  defaultValues?: Partial<Step3Data>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: standardSchemaResolver(step3Schema),
    defaultValues: {
      description: '',
      heardAboutUs: '',
      company_website: '',
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot: hidden from real users, catches spam bots that auto-fill fields. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="q-company-website">Company website</label>
        <input
          id="q-company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('company_website')}
        />
      </div>

      <div>
        <label htmlFor="q-description" className={labelBase}>
          Project Description{' '}
          <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="q-description"
          rows={5}
          placeholder="Tell us about your project — scope, special requirements, materials, finishes, etc."
          className={`${errors.description ? inputError : inputNormal} resize-y`}
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? 'q-description-error' : undefined}
          {...register('description')}
        />
        {errors.description && <p id="q-description-error" className={errorBase} role="alert">{errors.description.message}</p>}
      </div>

      <div>
        <p className={labelBase}>
          Attachments{' '}
          <span className="text-gray-500 font-normal">(optional)</span>
        </p>
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-200 bg-cream px-6 py-8 text-center cursor-pointer hover:border-copper-300 transition-colors group">
          <div className="w-10 h-10 rounded-full bg-copper-50 flex items-center justify-center group-hover:bg-copper-100 transition-colors">
            <svg
              className="w-5 h-5 text-copper-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal/70">
              Drag &amp; drop files here, or{' '}
              <span className="text-copper-600">browse</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Plans, drawings, photos — PDF, PNG, JPG up to 20 MB
            </p>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="q-heard" className={labelBase}>
          How did you hear about us? <span className="text-copper-600">*</span>
        </label>
        <select
          id="q-heard"
          className={`${errors.heardAboutUs ? inputError : inputNormal} appearance-none cursor-pointer`}
          aria-invalid={!!errors.heardAboutUs}
          aria-describedby={errors.heardAboutUs ? 'q-heard-error' : undefined}
          {...register('heardAboutUs')}
        >
          {HEARD_ABOUT_US.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.heardAboutUs && <p id="q-heard-error" className={errorBase} role="alert">{errors.heardAboutUs.message}</p>}
      </div>

      <StepNavigation step={3} onBack={onBack} isSubmitting={isSubmitting} />
    </form>
  );
}

// --- Shared navigation buttons -----------------------------------------------

// True only after the component has hydrated in the browser. Used to keep the
// submit button inert until JS is ready, so the form can never fall back to a
// native (non-JS) GET submission that would leak data into the URL and skip the
// email send.
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

function StepNavigation({
  step,
  onBack,
  isSubmitting,
}: {
  step: number;
  onBack?: () => void;
  isSubmitting?: boolean;
}) {
  const isLast = step === 3;
  const hasMounted = useHasMounted();

  return (
    <div className={`flex gap-3 pt-2 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
      {step > 1 && onBack && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-sm font-medium text-charcoal hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !hasMounted}
        className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-copper-500 text-white text-sm font-semibold hover:bg-copper-600 transition-colors shadow-copper-glow disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLast ? (
          isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Submitting…
            </>
          ) : (
            <>
              Submit Request
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </>
          )
        ) : (
          <>
            Next
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}

// --- Page --------------------------------------------------------------------

export default function GetAQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);
  const [step3Data, setStep3Data] = useState<Step3Data | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleStep1 = (data: Step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep2 = (data: Step2Data) => {
    setStep2Data(data);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep3 = async (data: Step3Data) => {
    setStep3Data(data);
    setSubmitError(null);

    // Silently drop bot submissions (honeypot field filled in).
    if (data.company_website) {
      setSubmittedName(step1Data?.name ?? null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const s1 = step1Data;
    const s2 = step2Data;
    if (!s1 || !s2) {
      setSubmitError('Something went wrong — please start the form again.');
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError(
        'The quote form is not fully set up yet. Please email fixitup@outlook.com or call 0410 829 334 and we’ll help you straight away.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Quote Request — ${s1.name}`,
          from_name: 'Fix It Up Website',
          replyto: s1.email,
          // Human-readable fields land directly in the notification email.
          Name: s1.name,
          Company: s1.company || '—',
          Phone: s1.phone,
          Email: s1.email,
          'Project Type': labelFor(PROJECT_TYPES, s2.projectType),
          'Location / Suburb': s2.location,
          'Site Address': s2.siteAddress || '—',
          'Budget Range': labelFor(BUDGET_RANGES, s2.budgetRange),
          Timeline: labelFor(TIMELINES, s2.timeline),
          'How they heard about us': labelFor(HEARD_ABOUT_US, data.heardAboutUs),
          'Project Description': data.description || '—',
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result?.message || 'Submission failed. Please try again.');
      }

      setSubmittedName(s1.name);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setSubmitError(
        'Sorry, we couldn’t send your request just now. Please try again, or email fixitup@outlook.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitted = submittedName !== null;

  return (
    <>
      {/* -- Hero ------------------------------------------------------------ */}
      <section className="bg-cream border-b border-gray-100">
        <div className="container mx-auto py-14 sm:py-20">
          <div className="mb-5">
            <span className="inline-block w-10 h-1 rounded-full bg-copper-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal leading-tight">
            Get a Free Quote
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            Tell us about your project and we&apos;ll prepare a detailed, no-obligation
            quote tailored to your specific requirements.
          </p>
        </div>
      </section>

      {/* -- Form section ---------------------------------------------------- */}
      <section className="bg-white">
        <div className="container mx-auto py-14 sm:py-20">
          <div className="max-w-2xl mx-auto">

            {isSubmitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-xl bg-cream border border-copper-200 p-8 sm:p-10 text-center"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-copper-50 text-copper-600 mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h2 className="text-2xl font-bold text-charcoal mb-3">
                  Thank you{submittedName ? `, ${submittedName}` : ''}!
                </h2>
                <p className="text-base text-gray-600 leading-relaxed max-w-md mx-auto">
                  Your quote request has been received. Our team will review your project
                  details and be in touch within one business day to organise your free
                  site visit.
                </p>
              </div>
            ) : (
              <>
                {/* What happens next */}
                <div className="rounded-xl bg-copper-50 border border-copper-200 p-6 sm:p-7 mb-10">
                  <h2 className="text-sm font-semibold text-copper-700 uppercase tracking-widest mb-4">
                    What happens next
                  </h2>
                  <ol className="space-y-3">
                    {[
                      'We review your details and respond within one business day.',
                      'We arrange a free, no-obligation site visit to understand your space.',
                      'You receive a detailed, fixed-price written proposal.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-charcoal/80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <StepIndicator current={currentStep} />

                <div className="rounded-xl bg-cream border border-gray-100 p-6 sm:p-10">
                  <div className="mb-7">
                    <p
                      role="status"
                      aria-live="polite"
                      className="text-xs font-semibold text-copper-700 uppercase tracking-widest mb-1"
                    >
                      Step {currentStep} of {STEPS.length}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-charcoal">
                      {STEPS[currentStep - 1].label}
                    </h2>
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm text-red-700 leading-relaxed">{submitError}</p>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <Step1 onNext={handleStep1} defaultValues={step1Data ?? undefined} />
                  )}
                  {currentStep === 2 && (
                    <Step2
                      onNext={handleStep2}
                      onBack={() => setCurrentStep(1)}
                      defaultValues={step2Data ?? undefined}
                    />
                  )}
                  {currentStep === 3 && (
                    <Step3
                      onSubmit={handleStep3}
                      onBack={() => {
                        setSubmitError(null);
                        setCurrentStep(2);
                      }}
                      isSubmitting={isSubmitting}
                      defaultValues={step3Data ?? undefined}
                    />
                  )}
                </div>

                <p className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
                  Your information is kept private and will only be used to prepare
                  your quote. No spam, ever.
                </p>
              </>
            )}

          </div>
        </div>
      </section>
    </>
  );
}
