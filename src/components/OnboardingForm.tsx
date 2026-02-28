"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { createClient } from "@/lib/supabase/client";
import ProgressBar from "./ProgressBar";
import Step1Contact from "./steps/Step1Contact";
import Step2Business from "./steps/Step2Business";
import Step3Digital from "./steps/Step3Digital";
import Step4Goals from "./steps/Step4Goals";
import Step5Access from "./steps/Step5Access";
import Step6Final from "./steps/Step6Final";
import { OnboardingFormData } from "@/types/onboarding";
import { defaultValues } from "@/lib/default-values";
export default function OnboardingForm() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    control,
  } = useForm<OnboardingFormData>({
    defaultValues: defaultValues as OnboardingFormData,
    mode: "onBlur",
  });

  const competitorsFields = useFieldArray({
    control,
    name: "competitors",
  });

  const onSubmit = async (data: OnboardingFormData) => {
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("onboarding_submissions")
        .insert({ form_data: data });

      if (error) throw error;

      alert(
        "Thank you! Your onboarding form has been submitted. We'll review your answers and be in touch within 48 hours."
      );
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Something went wrong submitting your form. Please try again or contact us directly."
      );
    }
  };

  const stepFields: (keyof OnboardingFormData)[][] = [
    ["fullName", "role", "businessName", "businessType", "industry", "location", "tradingDuration", "email", "phone"],
    ["productsServices", "idealCustomer"],
    ["hasWebsite"],
    ["biggestGoal90Days", "businessIn12Months", "competitors"],
    ["websiteCmsUrl"],
    ["successIn90Days"],
  ];

  const nextStep = async () => {
    const fieldsToValidate = stepFields[step - 1];
    const valid = await trigger(fieldsToValidate);
    if (valid && step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
          e.preventDefault();
        }
      }}
      className="space-y-8"
    >
      <ProgressBar currentStep={step} />

      {step === 1 && <Step1Contact register={register} errors={errors} />}
      {step === 2 && <Step2Business register={register} errors={errors} />}
      {step === 3 && (
        <Step3Digital register={register} errors={errors} watch={watch} />
      )}
      {step === 4 && (
        <Step4Goals
          register={register}
          errors={errors}
          competitorsFields={competitorsFields}
        />
      )}
      {step === 5 && (
        <Step5Access register={register} errors={errors} watch={watch} />
      )}
      {step === 6 && <Step6Final register={register} errors={errors} />}

      <div className="flex flex-col-reverse justify-between gap-4 border-t border-emerald-100 pt-8 sm:flex-row">
        <button
          type="button"
          onClick={prevStep}
          disabled={step === 1}
          className={`rounded-lg px-6 py-2.5 font-medium transition-colors ${
            step === 1
              ? "cursor-not-allowed text-slate-400"
              : "text-slate-600 hover:bg-amber-50 hover:text-amber-800"
          }`}
        >
          Back
        </button>
        {step < 6 ? (
          <button
            type="button"
            onClick={nextStep}
            className="rounded-lg bg-emerald-600 px-8 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-emerald-500 hover:shadow-md"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-2.5 font-medium text-white shadow-sm transition-all hover:from-emerald-500 hover:to-emerald-600 hover:shadow-md"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
