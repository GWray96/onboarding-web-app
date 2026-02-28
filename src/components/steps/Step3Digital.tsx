"use client";

import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import FormTextarea from "../form/FormTextarea";
import { OnboardingFormData } from "@/types/onboarding";

interface Props {
  register: UseFormRegister<OnboardingFormData>;
  errors: FieldErrors<OnboardingFormData>;
  watch: UseFormWatch<OnboardingFormData>;
}

const yesNo = [
  { value: "", label: "Select" },
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not-sure", label: "Not sure" },
];

const websitePlatforms = [
  { value: "", label: "Select" },
  { value: "wordpress", label: "WordPress" },
  { value: "wix", label: "Wix" },
  { value: "squarespace", label: "Squarespace" },
  { value: "shopify", label: "Shopify" },
  { value: "custom", label: "Custom" },
  { value: "dont-know", label: "Don't know" },
];

export default function Step3Digital({ register, errors, watch }: Props) {
  const hasWebsite = watch("hasWebsite");
  const hasGoogleProfile = watch("hasGoogleProfile");
  const collectsEmail = watch("collectsEmail");
  const runsPaidAds = watch("runsPaidAds");

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-slate-800">
        <span className="text-emerald-700">Your Current Digital Presence</span>
      </h2>
      <p className="text-slate-600">
        We need a picture of where your business appears online.
      </p>

      {/* Website */}
      <div className="space-y-4 rounded-lg border border-emerald-100 bg-emerald-50/50 p-6">
        <h3 className="font-medium text-emerald-800">Website</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormSelect
            label="Do you have a website?"
            {...register("hasWebsite")}
            options={yesNo}
          />
          {hasWebsite === "yes" && (
            <>
              <FormInput
                label="Website URL"
                {...register("websiteUrl")}
                placeholder="https://..."
              />
              <FormInput
                label="Who built it?"
                {...register("websiteBuilder")}
                placeholder="DIY, agency, freelancer, platform"
              />
              <FormSelect
                label="Platform"
                {...register("websitePlatform")}
                options={websitePlatforms}
              />
              <FormSelect
                label="Can you edit it?"
                {...register("websiteEditAccess")}
                options={[
                  { value: "", label: "Select" },
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "need-check", label: "Need to check" },
                ]}
              />
              <FormInput
                label="When was it last updated?"
                {...register("websiteLastUpdated")}
                placeholder="e.g. Last month"
              />
              <FormSelect
                label="Does it have a blog?"
                {...register("hasBlog")}
                options={yesNo}
              />
              <FormInput
                label="Roughly how many visitors per month?"
                {...register("monthlyVisitors")}
                placeholder="If known"
              />
            </>
          )}
        </div>
      </div>

      {/* Google */}
      <div className="space-y-4 rounded-lg border border-emerald-100 bg-emerald-50/50 p-6">
        <h3 className="font-medium text-emerald-800">Google Presence</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormSelect
            label="Google Business Profile (Google Maps listing)?"
            {...register("hasGoogleProfile")}
            options={yesNo}
          />
          {hasGoogleProfile === "yes" && (
            <>
              <FormInput
                label="Is it verified and up to date?"
                {...register("googleVerified")}
                placeholder="Yes / No"
              />
              <FormInput
                label="How many Google reviews?"
                {...register("googleReviewsCount")}
                placeholder="Number"
              />
              <FormInput
                label="Average Google rating"
                {...register("googleRating")}
                placeholder="e.g. 4.5"
              />
              <FormSelect
                label="Do you show up when Googling your main services?"
                {...register("googleVisibility")}
                options={[
                  { value: "", label: "Select" },
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "sometimes", label: "Sometimes" },
                ]}
              />
            </>
          )}
        </div>
      </div>

      {/* Social & Email & Ads - condensed */}
      <div className="space-y-4 rounded-lg border border-amber-100 bg-amber-50/50 p-6">
        <h3 className="font-medium text-amber-800">Social, Email &amp; Advertising</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput
            label="Active social accounts (e.g. Instagram @handle, LinkedIn URL)"
            {...register("topSocialPlatform")}
            placeholder="List platforms and handles"
            className="sm:col-span-2"
          />
          <FormSelect
            label="Do you collect email addresses?"
            {...register("collectsEmail")}
            options={yesNo}
          />
          {collectsEmail === "yes" && (
            <>
              <FormInput
                label="How? (Website form, checkout, lead magnet)"
                {...register("emailCollectionMethod")}
              />
              <FormInput
                label="Email tool (Mailchimp, ConvertKit, etc.)"
                {...register("emailTool")}
              />
              <FormInput
                label="Email list size"
                {...register("emailListSize")}
                placeholder="Number of subscribers"
              />
              <FormInput
                label="Do you send regular emails/newsletters?"
                {...register("sendsNewsletter")}
                placeholder="Yes / How often / No"
              />
            </>
          )}
          <FormSelect
            label="Currently running paid ads?"
            {...register("runsPaidAds")}
            options={yesNo}
          />
          {runsPaidAds === "yes" && (
            <>
              <FormInput
                label="Which platforms? (Google, Meta, etc.)"
                {...register("paidAdPlatforms")}
              />
              <FormInput
                label="Monthly ad spend"
                {...register("monthlyAdSpend")}
                placeholder="e.g. £500"
              />
              <FormInput
                label="What are the ads promoting?"
                {...register("adsPromoting")}
              />
              <FormInput
                label="Cost per lead or cost per customer? (if known)"
                {...register("costPerLead")}
              />
            </>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <FormTextarea
          label="Referrals — do you get them? Do you ask for them?"
          {...register("referrals")}
          rows={2}
        />
        <FormInput
          label="Listed on any directories? (Yell, Checkatrade, Bark, TrustPilot)"
          {...register("directories")}
        />
        <FormInput
          label="Offline marketing? (Flyers, events, networking)"
          {...register("offlineMarketing")}
        />
        <FormTextarea
          label="Worked with a marketing agency/freelancer before? How did it go?"
          {...register("previousAgencyExperience")}
          rows={2}
        />
      </div>
    </div>
  );
}
