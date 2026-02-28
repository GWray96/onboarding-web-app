"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormTextarea from "../form/FormTextarea";
import { OnboardingFormData } from "@/types/onboarding";

interface Props {
  register: UseFormRegister<OnboardingFormData>;
  errors: FieldErrors<OnboardingFormData>;
}

export default function Step6Final({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-emerald-800">Final Thoughts</h2>
      <p className="text-slate-600">
        Anything else we should know? The more detail you give, the faster we can move.
      </p>
      <div className="space-y-6">
        <FormTextarea
          label="Is there anything else we should know about your business, marketing, or goals?"
          {...register("anythingElse")}
          rows={4}
          placeholder="Anything we haven't covered..."
        />
        <FormTextarea
          label="What does success look like for you at the end of our first 90 days together? Paint the picture."
          {...register("successIn90Days")}
          error={errors.successIn90Days?.message}
          required
          rows={4}
          placeholder="What would make you say 'this was worth it'?"
        />
      </div>
    </div>
  );
}
