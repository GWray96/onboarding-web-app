"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";
import { OnboardingFormData } from "@/types/onboarding";

interface Props {
  register: UseFormRegister<OnboardingFormData>;
  errors: FieldErrors<OnboardingFormData>;
}

export default function Step2Business({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-emerald-800">
        Your Products &amp; Customers
      </h2>
      <p className="text-slate-600">
        Help us understand what you sell and who you&apos;re trying to reach.
      </p>
      <div className="space-y-6">
        <FormTextarea
          label="Describe what your business sells. List main products/services and price points"
          {...register("productsServices")}
          error={errors.productsServices?.message}
          required
          placeholder="e.g. Website design from £500, SEO packages from £800/mo..."
          rows={4}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormInput
            label="Which product or service generates the most revenue?"
            {...register("topRevenueProduct")}
            placeholder="Your top earner"
          />
          <FormInput
            label="Which product/service do you want to grow most?"
            {...register("productToGrow")}
            placeholder="Where you want to focus"
          />
          <FormInput
            label="Average transaction value / customer spend"
            {...register("avgTransactionValue")}
            placeholder="e.g. £250"
          />
        </div>
        <FormTextarea
          label="Describe your ideal customer (age, location, needs, frustrations, where they spend time online)"
          {...register("idealCustomer")}
          error={errors.idealCustomer?.message}
          required
          placeholder="Be as specific as possible..."
          rows={4}
        />
        <FormTextarea
          label="Why do customers choose YOU over competitors? What do they say when they recommend you?"
          {...register("whyChooseYou")}
          placeholder="Your unique selling points..."
          rows={3}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormInput
            label="Approximate number of active customers"
            {...register("activeCustomers")}
            placeholder="e.g. 150"
          />
          <FormInput
            label="Approximate current monthly revenue"
            {...register("monthlyRevenue")}
            placeholder="e.g. £15,000"
          />
          <FormInput
            label="Target monthly revenue"
            {...register("targetMonthlyRevenue")}
            placeholder="e.g. £25,000"
          />
          <FormInput
            label="How many new customers per month would hit that target?"
            {...register("newCustomersNeeded")}
            placeholder="e.g. 20"
          />
          <FormInput
            label="Average lifetime value of a customer"
            {...register("customerLifetimeValue")}
            placeholder="How much does a customer spend over the full relationship?"
          />
        </div>
      </div>
    </div>
  );
}
