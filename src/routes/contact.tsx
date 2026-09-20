import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSite } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Sanoori Trading" }, { name: "description", content: "Contact Sanoori Trading about sanitary ware, tiles, and building materials." }, { property: "og:title", content: "Contact Sanoori Trading" }, { property: "og:description", content: "Discuss your sanitary ware, tiles, or building material needs with Sanoori Trading." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/contact" }], links: [{ rel: "canonical", href: "/contact" }] }),
  component: ContactPage,
});

function ContactPage() {
  const { language } = useSite(); const bn = language === "bn"; const [notice, setNotice] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setNotice(true); };
  return <section className="section-shell py-14 sm:py-20"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">{bn?"যোগাযোগ":"Contact"}</p><h1 className="page-title mt-4">{bn?"আপনার প্রয়োজন নিয়ে কথা বলুন":"Tell us what you need"}</h1><p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">{bn?"পণ্য, পরিমাণ, দাম বা প্রাপ্যতা নিয়ে যোগাযোগ করতে পারবেন।":"Ask about a product, quantity, price, or availability."}</p><div className="mt-10 border-l-2 border-gold bg-secondary p-5"><p className="font-semibold">{bn?"যোগাযোগের তথ্য শিগগিরই যোগ হবে":"Contact details will be added soon"}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{bn?"যাচাই করা ফোন, WhatsApp, ইমেইল বা ঠিকানা না পাওয়া পর্যন্ত কোনো তথ্য দেখানো হচ্ছে না।":"No phone, WhatsApp, email, or address is shown until it is verified."}</p></div></div><form onSubmit={submit} noValidate className="border border-border bg-card p-5 sm:p-8"><div className="grid gap-6 sm:grid-cols-2"><Field id="name" label={bn?"নাম *":"Name *"} required/><Field id="phone" label={bn?"ফোন *":"Phone *"} type="tel" required/><Field id="email" label={bn?"ইমেইল":"Email"} type="email"/><Field id="product" label={bn?"পণ্য":"Product"}/><Field id="quantity" label={bn?"পরিমাণ":"Quantity"}/><div className="sm:col-span-2"><Label htmlFor="message">{bn?"বার্তা *":"Message *"}</Label><Textarea id="message" name="message" required rows={5} className="mt-2 min-h-32"/></div></div>{notice && <div role="status" className="mt-6 flex gap-3 border border-border bg-secondary p-4 text-sm leading-6"><AlertCircle className="mt-0.5 size-5 shrink-0 text-gold"/><p>{bn?"বার্তাটি পাঠানো হয়নি। সরাসরি পাঠানোর জন্য একটি যাচাই করা যোগাযোগ মাধ্যম এখনো যোগ করা হয়নি।":"Your message was not sent. A verified delivery channel has not been added yet."}</p></div>}<Button type="submit" variant="gold" size="lg" className="mt-7 w-full sm:w-auto"><Send/>{bn?"বার্তা প্রস্তুত করুন":"Prepare message"}</Button></form></div></section>;
}
function Field({id,label,type="text",required=false}:{id:string;label:string;type?:string;required?:boolean}){return <div><Label htmlFor={id}>{label}</Label><Input id={id} name={id} type={type} required={required} className="mt-2 h-12"/></div>}