import { z } from "zod";

const socialAccountSchema = z.object({
  platform: z.string(),
  handle: z.string(),
  followers: z.string(),
  postFrequency: z.string(),
  active: z.boolean(),
});

const competitorSchema = z.object({
  name: z.string(),
  website: z.string(),
});

export const step1Schema = z.object({
  fullName: z.string().min(1, "Required"),
  role: z.string().min(1, "Required"),
  businessName: z.string().min(1, "Required"),
  businessType: z.string(),
  industry: z.string().min(1, "Required"),
  location: z.string().min(1, "Required"),
  tradingDuration: z.string(),
  email: z.string().email("Valid email required"),
  phone: z.string().min(1, "Required"),
});

export const step2Schema = z.object({
  productsServices: z.string().min(1, "Required"),
  topRevenueProduct: z.string(),
  productToGrow: z.string(),
  avgTransactionValue: z.string(),
  idealCustomer: z.string().min(1, "Required"),
  whyChooseYou: z.string(),
  activeCustomers: z.string(),
  monthlyRevenue: z.string(),
  targetMonthlyRevenue: z.string(),
  newCustomersNeeded: z.string(),
  customerLifetimeValue: z.string(),
});

export const step3Schema = z.object({
  hasWebsite: z.string(),
  websiteUrl: z.string().optional(),
  websiteBuilder: z.string(),
  websitePlatform: z.string(),
  websiteEditAccess: z.string(),
  websiteLastUpdated: z.string(),
  hasBlog: z.string(),
  monthlyVisitors: z.string(),
  hasGoogleProfile: z.string(),
  googleVerified: z.string(),
  googleReviewsCount: z.string(),
  googleRating: z.string(),
  googleVisibility: z.string(),
  socialAccounts: z.array(socialAccountSchema),
  topSocialPlatform: z.string(),
  collectsEmail: z.string(),
  emailCollectionMethod: z.string(),
  emailTool: z.string(),
  emailListSize: z.string(),
  sendsNewsletter: z.string(),
  runsPaidAds: z.string(),
  paidAdPlatforms: z.string(),
  monthlyAdSpend: z.string(),
  adsPromoting: z.string(),
  costPerLead: z.string(),
  referrals: z.string(),
  directories: z.string(),
  offlineMarketing: z.string(),
  previousAgencyExperience: z.string(),
});

export const step4Schema = z.object({
  biggestGoal90Days: z.string().min(1, "Required"),
  businessIn12Months: z.string().min(1, "Required"),
  biggestFrustration: z.string(),
  whatHasntWorked: z.string(),
  magicWandFix: z.string(),
  competitors: z.array(competitorSchema),
  competitorsDoWell: z.string(),
  competitorsDoBadly: z.string(),
  brandPersonality: z.string(),
  whatMakesDifferent: z.string(),
  marketingTone: z.string(),
});

export const step5Schema = z.object({
  websiteCmsUrl: z.string(),
  websiteUsername: z.string(),
  websitePassword: z.string(),
  hostingProvider: z.string(),
  socialAccessDetails: z.string(),
  emailToolAccess: z.string(),
  contentAssets: z.array(z.string()),
  caseStudyPreference: z.string(),
});

export const step6Schema = z.object({
  anythingElse: z.string(),
  successIn90Days: z.string().min(1, "Required"),
});
