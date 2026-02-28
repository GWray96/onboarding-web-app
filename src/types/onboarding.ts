export interface SocialAccount {
  platform: string;
  handle: string;
  followers: string;
  postFrequency: string;
  active: boolean;
}

export interface Competitor {
  name: string;
  website: string;
}

export interface OnboardingFormData {
  // Section 1: About You & Your Business
  fullName: string;
  role: string;
  businessName: string;
  businessType: string;
  industry: string;
  location: string;
  tradingDuration: string;
  email: string;
  phone: string;
  productsServices: string;
  topRevenueProduct: string;
  productToGrow: string;
  avgTransactionValue: string;
  idealCustomer: string;
  whyChooseYou: string;
  activeCustomers: string;
  monthlyRevenue: string;
  targetMonthlyRevenue: string;
  newCustomersNeeded: string;
  customerLifetimeValue: string;

  // Section 2: Digital Presence
  hasWebsite: string;
  websiteUrl: string;
  websiteBuilder: string;
  websitePlatform: string;
  websiteEditAccess: string;
  websiteLastUpdated: string;
  hasBlog: string;
  monthlyVisitors: string;
  hasGoogleProfile: string;
  googleVerified: string;
  googleReviewsCount: string;
  googleRating: string;
  googleVisibility: string;
  socialAccounts: SocialAccount[];
  topSocialPlatform: string;
  collectsEmail: string;
  emailCollectionMethod: string;
  emailTool: string;
  emailListSize: string;
  sendsNewsletter: string;
  runsPaidAds: string;
  paidAdPlatforms: string;
  monthlyAdSpend: string;
  adsPromoting: string;
  costPerLead: string;
  referrals: string;
  directories: string;
  offlineMarketing: string;
  previousAgencyExperience: string;

  // Section 3: Goals & Challenges
  biggestGoal90Days: string;
  businessIn12Months: string;
  biggestFrustration: string;
  whatHasntWorked: string;
  magicWandFix: string;
  competitors: Competitor[];
  competitorsDoWell: string;
  competitorsDoBadly: string;
  brandPersonality: string;
  whatMakesDifferent: string;
  marketingTone: string;

  // Section 4: Access & Permissions
  websiteCmsUrl: string;
  websiteUsername: string;
  websitePassword: string;
  hostingProvider: string;
  socialAccessDetails: string;
  emailToolAccess: string;
  contentAssets: string[];
  caseStudyPreference: string;

  // Section 5: Final Thoughts
  anythingElse: string;
  successIn90Days: string;
}
