import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Search, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSite } from "@/components/site-shell";
import { categories, copy, products } from "@/lib/site-content";
import heroImage from "@/assets/sanoori-showroom-hero.jpg";
import sanitaryImage from "@/assets/category-sanitary.jpg";
import tilesImage from "@/assets/category-tiles.jpg";
import materialsImage from "@/assets/category-materials.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanoori Trading | Sanitary Ware, Tiles & Building Materials" },
      { name: "description", content: "Explore sanitary ware, tiles, and building materials from Sanoori Trading in Bangladesh." },
      { property: "og:title", content: "Sanoori Trading | Sanitary Ware, Tiles & Building Materials" },
      { property: "og:description", content: "A simple digital showroom for sanitary ware, tiles, and building materials in Bangladesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const categoryImages = { sanitary: sanitaryImage, tiles: tilesImage, materials: materialsImage };

function HomePage() {
  const { language } = useSite();
  const t = copy[language];
  const bn = language === "bn";
  return (
    <>
      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-hero text-hero-foreground">
        <img src={heroImage} alt="Architectural bathroom interior illustrating Sanoori Trading product categories" width={1920} height={1200} fetchPriority="high" className="absolute inset-0 size-full object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hero)_0%,color-mix(in_oklab,var(--hero)_92%,transparent)_35%,color-mix(in_oklab,var(--hero)_20%,transparent)_72%)]" />
        <div className="section-shell relative flex min-h-[calc(100svh-4.5rem)] items-center py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Sanoori Trading</p>
            <h1 className="display-title mt-5 max-w-3xl">{bn ? "স্যানিটারি ওয়্যার, টাইলস ও বিল্ডিং ম্যাটেরিয়ালস" : "Sanitary Ware, Tiles & Building Materials"}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-hero-foreground/85 sm:text-lg">{bn ? "আপনার বাড়ি, ভবন ও নির্মাণকাজের জন্য প্রয়োজনীয় পণ্য।" : "Quality products for your home, building, and project needs."}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><Link to="/contact">{t.common.contact}<ArrowRight /></Link></Button><Button asChild variant="heroOutline" size="lg"><Link to="/products">{t.common.browse}</Link></Button></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 hidden border-t border-r border-hero-foreground/25 px-8 py-5 text-xs text-hero-foreground/75 md:block">{bn ? "বাংলাদেশের জন্য সহজ পণ্য অভিজ্ঞতা" : "A simpler product experience for Bangladesh"}</div>
      </section>

      <section className="section-shell py-20 sm:py-28">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><p className="eyebrow">{bn ? "পণ্যের বিভাগ" : "Explore categories"}</p><h2 className="page-title mt-4">{bn ? "আপনার কাজের জন্য যা প্রয়োজন" : "Find what your space needs"}</h2></div><p className="max-w-xl text-base leading-8 text-muted-foreground md:justify-self-end">{bn ? "বাথরুম থেকে পুরো ভবন—সহজে বিভাগ বেছে পণ্য খুঁজুন।" : "From bathrooms to complete building projects, start with the category that matches your need."}</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 md:grid-rows-2">
          {categories.map((category, index) => (
            <Link key={category.id} to="/products" search={{ category: category.id, q: "" }} className={`group relative min-h-80 overflow-hidden border border-border bg-card ${index === 0 ? "md:row-span-2 md:min-h-[42rem]" : "md:min-h-0"}`}>
              <img src={categoryImages[category.id]} alt="" width={index === 0 ? 960 : 1200} height={index === 0 ? 1200 : 800} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,color-mix(in_oklab,var(--hero)_90%,transparent),transparent_70%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-hero-foreground sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">0{index + 1}</p><h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{category.label[language]}</h3><p className="mt-2 max-w-md text-sm leading-6 text-hero-foreground/80">{category.description[language]}</p><span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">{t.common.browse}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 sm:py-28"><div className="section-shell"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">{bn ? "ডিজিটাল শোরুম" : "Digital showroom"}</p><h2 className="page-title mt-4">{bn ? "পণ্যসমূহ" : "Products"}</h2></div><Button asChild variant="outline"><Link to="/products">{t.common.browse}<ArrowRight /></Link></Button></div>{products.length === 0 && <div className="mt-12 border border-border bg-background px-6 py-16 text-center sm:px-10"><Shapes className="mx-auto size-9 text-gold" aria-hidden="true" /><h3 className="mt-5 font-display text-3xl font-semibold">{bn ? "পণ্যের তালিকা প্রস্তুত হচ্ছে" : "The product catalogue is being prepared"}</h3><p className="mx-auto mt-3 max-w-lg leading-7 text-muted-foreground">{bn ? "যাচাই করা পণ্যের তথ্য ও ছবি যোগ হলে এখানে দেখা যাবে।" : "Verified product details and images will appear here when the catalogue is added."}</p></div>}</div></section>

      <section className="section-shell py-20 sm:py-28"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">{bn ? "সহজ কেনাকাটা" : "A simple process"}</p><h2 className="page-title mt-4">{bn ? "দেখুন, বুঝুন, কথা বলুন" : "See, understand, then talk"}</h2></div><ol className="grid gap-px bg-border sm:grid-cols-3">{[{ icon: Search, en: "Explore", bn: "পণ্য দেখুন", enText: "Browse the categories and find a suitable product.", bnText: "বিভাগ থেকে আপনার প্রয়োজনের পণ্য খুঁজুন।" },{ icon: MessageCircle, en: "Discuss", bn: "কথা বলুন", enText: "Ask about price, availability, and quantity.", bnText: "দাম, প্রাপ্যতা ও পরিমাণ নিয়ে কথা বলুন।" },{ icon: ArrowRight, en: "Decide", bn: "সিদ্ধান্ত নিন", enText: "Confirm the details directly with Sanoori Trading.", bnText: "Sanoori Trading-এর সাথে তথ্য নিশ্চিত করুন।" }].map((step, index) => <li key={step.en} className="bg-background p-7"><step.icon className="size-6 text-gold" aria-hidden="true" /><p className="mt-8 text-xs font-semibold text-muted-foreground">0{index + 1}</p><h3 className="mt-2 font-display text-2xl font-semibold">{bn ? step.bn : step.en}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{bn ? step.bnText : step.enText}</p></li>)}</ol></div></section>

      <section className="bg-primary text-primary-foreground"><div className="section-shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-sm font-semibold text-gold">Sanoori Trading</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">{bn ? "সঠিক পণ্য খুঁজে নিতে সাহায্য প্রয়োজন?" : "Need help finding the right product?"}</h2><p className="mt-4 text-primary-foreground/75">{bn ? "আপনার প্রয়োজন নিয়ে আমাদের সাথে কথা বলুন।" : "Talk to us about what you need."}</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button asChild variant="gold" size="lg"><Link to="/contact">{t.common.contact}<ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/products">{t.common.browse}</Link></Button></div></div></section>
    </>
  );
}