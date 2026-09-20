import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, Moon, Sun } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { copy, type Language } from "@/lib/site-content";

type SiteContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used inside SiteShell");
  return value;
}

function Brand() {
  return (
    <Link to="/" className="group inline-flex min-h-11 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <span aria-hidden="true" className="grid size-9 place-items-center border border-gold text-sm font-semibold text-gold">S</span>
      <span className="font-display text-lg font-semibold text-foreground">Sanoori Trading</span>
    </Link>
  );
}

function LanguageSwitcher({ language, setLanguage }: Pick<SiteContextValue, "language" | "setLanguage">) {
  return (
    <div className="flex h-11 items-center border border-border bg-background p-1" aria-label="Language">
      {(["en", "bn"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          aria-pressed={language === item}
          className="h-9 min-w-11 px-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground aria-pressed:bg-primary aria-pressed:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {item === "en" ? "EN" : "বাংলা"}
        </button>
      ))}
    </div>
  );
}

function Header({ language, setLanguage, theme, toggleTheme }: SiteContextValue) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const t = copy[language];
  useEffect(() => setOpen(false), [pathname]);
  const links = [
    { to: "/" as const, label: t.nav.home },
    { to: "/about" as const, label: t.nav.about },
    { to: "/products" as const, label: t.nav.products },
    { to: "/contact" as const, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-site grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Brand />
        <div className="hidden items-center gap-1 lg:flex">
          <nav aria-label="Primary navigation" className="flex items-center">
            {links.map((link) => (
              <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{link.label}</Link>
            ))}
          </nav>
          <Button asChild variant="gold" className="ml-3"><Link to="/products">{t.nav.shop}<ArrowRight /></Link></Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}>{theme === "light" ? <Moon /> : <Sun />}</Button>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
        <div className="flex items-center justify-end gap-1 lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}>{theme === "light" ? <Moon /> : <Sun />}</Button>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
            <SheetContent side="right" className="w-full max-w-none border-l border-border bg-background px-5 pt-20 sm:max-w-md">
              <SheetHeader className="text-left"><SheetTitle className="font-display text-2xl">Sanoori Trading</SheetTitle><SheetDescription>{language === "bn" ? "প্রধান মেনু" : "Main menu"}</SheetDescription></SheetHeader>
              <nav aria-label="Mobile navigation" className="mt-10 flex flex-col border-t border-border">
                {links.map((link) => <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} className="mobile-nav-link" activeProps={{ className: "mobile-nav-link mobile-nav-link-active" }}>{link.label}<ArrowRight /></Link>)}
              </nav>
              <Button asChild variant="gold" size="lg" className="mt-8 w-full"><Link to="/products">{t.nav.shop}<ArrowRight /></Link></Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Footer({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div><Brand /><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{t.footer.summary}</p></div>
        <div><p className="eyebrow">{language === "bn" ? "পণ্য" : "Products"}</p><div className="mt-4 flex flex-col gap-3 text-sm"><Link to="/products" search={{ category: "sanitary", q: "" }}>Sanitary Ware</Link><Link to="/products" search={{ category: "tiles", q: "" }}>Tiles</Link><Link to="/products" search={{ category: "materials", q: "" }}>Building Materials</Link></div></div>
        <div><p className="eyebrow">{language === "bn" ? "যোগাযোগ" : "Contact"}</p><p className="mt-4 text-sm leading-7 text-muted-foreground">{t.footer.note}</p><Link to="/contact" className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-primary">{t.nav.contact}<ArrowRight className="size-4" /></Link></div>
      </div>
      <div className="border-t border-border"><p className="mx-auto max-w-site px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">© {new Date().getFullYear()} {t.footer.rights}</p></div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("sanoori-language");
    const savedTheme = window.localStorage.getItem("sanoori-theme");
    if (savedLanguage === "bn") setLanguageState("bn");
    if (savedTheme === "dark") setTheme("dark");
  }, []);
  useEffect(() => { document.documentElement.classList.toggle("dark", theme === "dark"); window.localStorage.setItem("sanoori-theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = language === "bn" ? "bn" : "en"; window.localStorage.setItem("sanoori-language", language); }, [language]);
  const setLanguage = (next: Language) => setLanguageState(next);
  const value = { language, setLanguage, theme, toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light") };
  return <SiteContext.Provider value={value}><a href="#main-content" className="skip-link">Skip to content</a><Header {...value} /><main id="main-content">{children}</main><Footer language={language} /></SiteContext.Provider>;
}