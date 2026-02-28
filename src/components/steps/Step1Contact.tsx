"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import { OnboardingFormData } from "@/types/onboarding";

interface Props {
  register: UseFormRegister<OnboardingFormData>;
  errors: FieldErrors<OnboardingFormData>;
}

const businessTypes = [
  { value: "", label: "Select type" },
  { value: "sole-trader", label: "Sole trader" },
  { value: "ltd", label: "Limited company (Ltd)" },
  { value: "partnership", label: "Partnership" },
  { value: "llp", label: "LLP" },
  { value: "other", label: "Other" },
];

export default function Step1Contact({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-emerald-800">
        Contact Details
      </h2>
      <p className="text-slate-600">
        Let&apos;s start with the basics so we know exactly who we&apos;re working with.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          label="Full name"
          {...register("fullName")}
          error={errors.fullName?.message}
          required
          placeholder="Your full name"
        />
        <FormInput
          label="Role / job title"
          {...register("role")}
          error={errors.role?.message}
          required
          placeholder="e.g. Owner, Director"
        />
        <FormInput
          label="Business name"
          {...register("businessName")}
          error={errors.businessName?.message}
          required
          placeholder="Your business name"
        />
        <FormSelect
          label="Business type"
          {...register("businessType")}
          options={businessTypes}
        />
        <FormInput
          label="Industry / sector"
          {...register("industry")}
          error={errors.industry?.message}
          required
          placeholder="e.g. Plumbing, Consulting"
        />
        <FormInput
          label="Location (city / area)"
          {...register("location")}
          error={errors.location?.message}
          required
          placeholder="Where are you based?"
        />
        <FormInput
          label="How long has the business been trading?"
          {...register("tradingDuration")}
          placeholder="e.g. 2 years"
        />
        <FormInput
          label="Best email address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          required
          placeholder="you@business.com"
        />
        <FormInput
          label="Best phone number"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          required
          placeholder="07xxx xxxxxx"
          className="sm:col-span-2"
        />
      </div>
    </div>
  );
}
