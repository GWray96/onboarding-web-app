"use client";

import { UseFormRegister, FieldErrors, UseFieldArrayReturn } from "react-hook-form";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";
import { OnboardingFormData } from "@/types/onboarding";

interface Props {
  register: UseFormRegister<OnboardingFormData>;
  errors: FieldErrors<OnboardingFormData>;
  competitorsFields: UseFieldArrayReturn<OnboardingFormData, "competitors">;
}

export default function Step4Goals({ register, errors, competitorsFields }: Props) {
  const { fields, append, remove } = competitorsFields;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-emerald-800">
        Goals, Challenges &amp; Vision
      </h2>
      <p className="text-slate-600">
        Your honest answers here shape everything we build for you.
      </p>
      <div className="space-y-6">
        <FormTextarea
          label="What is the single biggest goal you want to achieve with your marketing in the next 90 days?"
          {...register("biggestGoal90Days")}
          error={errors.biggestGoal90Days?.message}
          required
          placeholder="Be as specific as possible..."
          rows={4}
        />
        <FormTextarea
          label="Where do you want your business to be in 12 months? (Revenue, customer count, reputation)"
          {...register("businessIn12Months")}
          error={errors.businessIn12Months?.message}
          required
          placeholder="Paint the picture..."
          rows={4}
        />
        <FormTextarea
          label="What is the single biggest frustration with your marketing right now?"
          {...register("biggestFrustration")}
          placeholder="What keeps you up at night?"
          rows={3}
        />
        <FormTextarea
          label="What have you tried before that didn't work? (Honest answers save us from repeating mistakes)"
          {...register("whatHasntWorked")}
          placeholder="Previous attempts..."
          rows={3}
        />
        <FormTextarea
          label="If you could wave a magic wand and fix one thing about how you get customers, what would it be?"
          {...register("magicWandFix")}
          placeholder="Dream fix..."
          rows={2}
        />
        <div className="space-y-4 rounded-lg border border-amber-100 bg-amber-50/50 p-6">
          <h3 className="font-medium text-amber-800">Your Top 3 Competitors</h3>
          <p className="text-sm text-slate-600">
            Local, online, or businesses you admire — help us understand the landscape.
          </p>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-4 rounded border border-emerald-100 bg-white p-4">
              <div className="flex-1 space-y-2">
                <FormInput
                  label={`Competitor ${index + 1} — Name`}
                  {...register(`competitors.${index}.name`)}
                  placeholder="Business name"
                />
                <FormInput
                  label="Website / Social"
                  {...register(`competitors.${index}.website`)}
                  placeholder="URL"
                />
              </div>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-6 self-start rounded border border-amber-200 px-3 py-1 text-sm text-amber-700 hover:bg-amber-50"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {fields.length < 3 && (
            <button
              type="button"
              onClick={() => append({ name: "", website: "" })}
              className="rounded-lg border border-dashed border-emerald-300 px-4 py-2 text-sm text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50/50"
            >
              + Add competitor
            </button>
          )}
        </div>
        <FormTextarea
          label="What do your competitors do well that you'd like to replicate?"
          {...register("competitorsDoWell")}
          rows={2}
        />
        <FormTextarea
          label="What do they do badly that you think you could beat?"
          {...register("competitorsDoBadly")}
          rows={2}
        />
        <FormInput
          label="Describe your brand personality in 3 words"
          {...register("brandPersonality")}
          placeholder="e.g. Professional, friendly, bold"
        />
        <FormTextarea
          label="What makes your business different? Your unique angle, story, or approach?"
          {...register("whatMakesDifferent")}
          rows={3}
        />
        <FormInput
          label="What tone do you want your marketing to have?"
          {...register("marketingTone")}
          placeholder="e.g. Professional, friendly, bold, educational"
        />
      </div>
    </div>
  );
}
