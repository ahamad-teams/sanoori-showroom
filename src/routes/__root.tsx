import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div className="section-shell flex min-h-[70vh] items-center justify-center py-20 text-center"><div><p className="eyebrow">404</p><h1 className="page-title mt-4">Page not found</h1><p className="mx-auto mt-5 max-w-md text-muted-foreground">The page may have moved or is not available.</p><Button asChild className="mt-8"><Link to="/">Go home</Link></Button></div></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => reportLovableError(error, { boundary: "tanstack_root_error_component" }), [error]);
  return <div className="section-shell flex min-h-[70vh] items-center justify-center py-20 text-center"><div><p className="eyebrow">Something went wrong</p><h1 className="page-title mt-4">This page didn’t load</h1><p className="mt-5 text-muted-foreground">Please try again.</p><Button className="mt-8" onClick={() => { router.invalidate(); reset(); }}>Try again</Button></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sanoori Trading" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('sanoori-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} /><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><SiteShell><Outlet /></SiteShell></QueryClientProvider>;
}