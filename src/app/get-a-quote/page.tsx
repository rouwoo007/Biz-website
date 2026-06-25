'use client';

import { useState } from 'react';
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
  budgetRange: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
});

const step3Schema = z.object({
  description: z.string().min(20, 'Please provide at least 20 characters describing your project'),
  heardAboutUs: z.string().min(1, 'Please let us know how you found us'),
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

// --- Shared style helpers ----------------------------------------------------

const inputBase =
  'block w-full rounded-lg border px-4 py-3 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-copper-500 transition-colors';
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
                className={[
                  'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors',
                  isComplete
                    ? 'bg-copper-500 text-white'
                    : isActive
                    ? 'bg-copper-500 text-white ring-4 ring-copper-100'
                    : 'bg-gray-100 border border-gray-200 text-gray-400',
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
                  isActive ? 'text-copper-600' : isComplete ? 'text-gray-500' : 'text-gray-300',
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

function Step1({ onNext }: { onNext: (data: Step1Data) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({ resolver: standardSchemaResolver(step1Schema) });

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
          {...register('name')}
        />
        {errors.name && <p className={errorBase} role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="q-company" className={labelBase}>
          Company{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
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
            {...register('phone')}
          />
          {errors.phone && <p className={errorBase} role="alert">{errors.phone.message}</p>}
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
            {...register('email')}
          />
          {errors.email && <p className={errorBase} role="alert">{errors.email.message}</p>}
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
}: {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({ resolver: standardSchemaResolver(step2Schema) });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate className="space-y-5">
      <div>
        <label htmlFor="q-project-type" className={labelBase}>
          Project Type <span className="text-copper-600">*</span>
        </label>
        <select
          id="q-project-type"
          defaultValue=""
          className={`${errors.projectType ? inputError : inputNormal} appearance-none cursor-pointer`}
          {...register('projectType')}
        >
          {PROJECT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.projectType && <p className={errorBase} role="alert">{errors.projectType.message}</p>}
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
          {...register('location')}
        />
        {errors.location && <p className={errorBase} role="alert">{errors.location.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-budget" className={labelBase}>
            Budget Range <span className="text-copper-600">*</span>
          </label>
          <select
            id="q-budget"
            defaultValue=""
            className={`${errors.budgetRange ? inputError : inputNormal} appearance-none cursor-pointer`}
            {...register('budgetRange')}
          >
            {BUDGET_RANGES.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budgetRange && <p className={errorBase} role="alert">{errors.budgetRange.message}</p>}
        </div>

        <div>
          <label htmlFor="q-timeline" className={labelBase}>
            Timeline <span className="text-copper-600">*</span>
          </label>
          <select
            id="q-timeline"
            defaultValue=""
            className={`${errors.timeline ? inputError : inputNormal} appearance-none cursor-pointer`}
            {...register('timeline')}
          >
            {TIMELINES.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.timeline && <p className={errorBase} role="alert">{errors.timeline.message}</p>}
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
}: {
  onSubmit: (data: Step3Data) => void;
  onBack: () => void;
  isSubmitting: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({ resolver: standardSchemaResolver(step3Schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="q-description" className={labelBase}>
          Project Description <span className="text-copper-600">*</span>
        </label>
        <textarea
          id="q-description"
          rows={5}
          placeholder="Tell us about your project — scope, special requirements, materials, finishes, etc."
          className={`${errors.description ? inputError : inputNormal} resize-y`}
          {...register('description')}
        />
        {errors.description && <p className={errorBase} role="alert">{errors.description.message}</p>}
      </div>

      <div>
        <p className={labelBase}>
          Attachments{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
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
            <p className="text-xs text-gray-400 mt-1">
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
          defaultValue=""
          className={`${errors.heardAboutUs ? inputError : inputNormal} appearance-none cursor-pointer`}
          {...register('heardAboutUs')}
        >
          {HEARD_ABOUT_US.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.heardAboutUs && <p className={errorBase} role="alert">{errors.heardAboutUs.message}</p>}
      </div>

      <StepNavigation step={3} onBack={onBack} isSubmitting={isSubmitting} />
    </form>
  );
}

// --- Shared navigation buttons -----------------------------------------------

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
        disabled={isSubmitting}
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
  const [, setStep2Data] = useState<Step2Data | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleStep3 = async (_data: Step3Data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    alert(
      `Thank you, ${step1Data?.name}! Your quote request has been received. Our team will be in touch within one business day.`
    );
    setCurrentStep(1);
    setStep1Data(null);
    setStep2Data(null);
  };

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

            <StepIndicator current={currentStep} />

            <div className="rounded-xl bg-cream border border-gray-100 p-6 sm:p-10">
              <div className="mb-7">
                <p className="text-xs font-semibold text-copper-600 uppercase tracking-widest mb-1">
                  Step {currentStep} of {STEPS.length}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal">
                  {STEPS[currentStep - 1].label}
                </h2>
              </div>

              {currentStep === 1 && <Step1 onNext={handleStep1} />}
              {currentStep === 2 && (
                <Step2
                  onNext={handleStep2}
                  onBack={() => setCurrentStep(1)}
                />
              )}
              {currentStep === 3 && (
                <Step3
                  onSubmit={handleStep3}
                  onBack={() => setCurrentStep(2)}
                  isSubmitting={isSubmitting}
                />
              )}
            </div>

            <p className="mt-6 text-center text-xs text-gray-400 leading-relaxed">
              Your information is kept private and will only be used to prepare
              your quote. No spam, ever.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
