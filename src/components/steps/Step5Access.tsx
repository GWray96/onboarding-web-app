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

const CONTENT_ASSETS = [
  "professional-photos",
  "product-photos",
  "video-content",
  "testimonials-written",
  "testimonials-video",
  "case-studies",
  "brand-guidelines",
  "previous-marketing-materials",
  "content-library",
];

const assetLabels: Record<string, string> = {
  "professional-photos": "Professional photos / team headshots",
  "product-photos": "Product photos",
  "video-content": "Video content",
  "testimonials-written": "Customer testimonials (written)",
  "testimonials-video": "Customer testimonials (video)",
  "case-studies": "Case studies or success stories",
  "brand-guidelines": "Brand guidelines (colours, fonts, logo)",
  "previous-marketing-materials": "Previous marketing materials",
  "content-library": "Content library (Drive, Dropbox)",
};

export default function Step5Access({ register, errors, watch }: Props) {
  const contentAssets = watch("contentAssets") || [];

  const toggleAsset = (asset: string) => {
    const current = contentAssets as string[];
    const next = current.includes(asset)
      ? current.filter((a) => a !== asset)
      : [...current, asset];
    return next;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-emerald-800">
        Access &amp; Permissions
      </h2>
      <p className="text-slate-600">
        We&apos;ll need access to run your marketing effectively. All credentials are kept
        strictly confidential. You can revoke access at any time.
      </p>
      <div className="space-y-6">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-6">
          <h3 className="mb-4 font-medium text-emerald-800">Website Access</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormInput
              label="CMS login URL (e.g. yoursite.com/wp-admin)"
              {...register("websiteCmsUrl")}
              placeholder="https://..."
            />
            <FormInput
              label="Username"
              {...register("websiteUsername")}
            />
            <FormInput
              label="Password (or &quot;I&apos;ll create a user for you&quot;)"
              type="password"
              {...register("websitePassword")}
              placeholder="Keep blank if you&apos;ll add us manually"
            />
            <FormInput
              label="Hosting provider (if known)"
              {...register("hostingProvider")}
            />
          </div>
        </div>
        <FormTextarea
          label="Social media access — for each active platform, add us as admin/editor or provide login details"
          {...register("socialAccessDetails")}
          rows={3}
          placeholder="e.g. Facebook: Added as Page Admin. Instagram: Will send login..."
        />
        <FormTextarea
          label="Email marketing tool access (Mailchimp, ConvertKit, etc.)"
          {...register("emailToolAccess")}
          rows={2}
          placeholder="I'll add you as team member / Login details..."
        />
        <div className="rounded-lg border border-amber-100 bg-amber-50/50 p-6">
          <h3 className="mb-4 font-medium text-amber-800">Content Assets</h3>
          <p className="mb-4 text-sm text-slate-600">
            Tick all that apply — we can use these in your marketing.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {CONTENT_ASSETS.map((asset) => (
              <label
                key={asset}
                className="flex cursor-pointer items-center gap-2 rounded border border-emerald-100 bg-white px-3 py-2 hover:bg-emerald-50/50"
              >
                <input
                  type="checkbox"
                  {...register("contentAssets")}
                  value={asset}
                  className="h-4 w-4 rounded border-slate-300"
                />
                <span className="text-sm text-slate-700">{assetLabels[asset]}</span>
              </label>
            ))}
          </div>
        </div>
        <FormSelect
          label="Case study preference — we'd love to document results for our portfolio"
          {...register("caseStudyPreference")}
          options={[
            { value: "", label: "Select" },
            { value: "named", label: "Named — happy to be featured" },
            { value: "anonymised", label: "Anonymised only" },
            { value: "discuss", label: "Let's discuss" },
          ]}
        />
      </div>
    </div>
  );
}
