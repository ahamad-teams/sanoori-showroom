export type Language = "en" | "bn";

export const copy = {
  en: {
    nav: { home: "Home", about: "About Us", products: "Products", contact: "Contact", shop: "Shop Now" },
    common: { browse: "Browse Products", contact: "Contact to Buy", details: "View Details", all: "All", back: "Back" },
    footer: {
      summary: "Sanitary ware, tiles, and building materials for homes, buildings, and projects in Bangladesh.",
      note: "Contact details will appear here once they are verified.",
      rights: "Sanoori Trading. All rights reserved.",
    },
  },
  bn: {
    nav: { home: "হোম", about: "আমাদের সম্পর্কে", products: "পণ্যসমূহ", contact: "যোগাযোগ", shop: "পণ্য দেখুন" },
    common: { browse: "পণ্য দেখুন", contact: "কথা বলে কিনুন", details: "বিস্তারিত দেখুন", all: "সব", back: "ফিরে যান" },
    footer: {
      summary: "বাংলাদেশে বাড়ি, ভবন ও প্রকল্পের জন্য স্যানিটারি ওয়্যার, টাইলস ও বিল্ডিং ম্যাটেরিয়ালস।",
      note: "যাচাই করা যোগাযোগের তথ্য পাওয়া গেলে এখানে দেখানো হবে।",
      rights: "Sanoori Trading. সর্বস্বত্ব সংরক্ষিত।",
    },
  },
} as const;

export const categories = [
  {
    id: "sanitary",
    label: { en: "Sanitary Ware", bn: "স্যানিটারি ওয়্যার" },
    description: {
      en: "Essential sanitary products for practical, modern bathrooms.",
      bn: "আধুনিক ও ব্যবহারিক বাথরুমের জন্য প্রয়োজনীয় স্যানিটারি পণ্য।",
    },
  },
  {
    id: "tiles",
    label: { en: "Tiles", bn: "টাইলস" },
    description: {
      en: "Tiles and finishing surfaces for homes and projects.",
      bn: "বাড়ি ও প্রকল্পের জন্য টাইলস ও ফিনিশিং সারফেস।",
    },
  },
  {
    id: "materials",
    label: { en: "Building Materials", bn: "বিল্ডিং ম্যাটেরিয়ালস" },
    description: {
      en: "Building materials for construction and everyday project needs.",
      bn: "নির্মাণকাজ ও দৈনন্দিন প্রকল্পের প্রয়োজনীয় নির্মাণসামগ্রী।",
    },
  },
] as const;

export const products: Array<{
  slug: string;
  name: Record<Language, string>;
  category: (typeof categories)[number]["id"];
  description: Record<Language, string>;
  image?: string;
  productId?: string;
}> = [];