import "./globals.css";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const metadata = {
  title: "Stream UI – Copy-Paste SaaS UI Components for Faster Building",
  description:
    "A clean, developer-friendly React component library focused on SaaS builders. Copy-paste ready, accessible, and consistent components to launch your SaaS products faster.",
  openGraph: {
    title: "Stream UI – Copy-Paste SaaS UI Components for Faster Building",
    description:
      "A clean, developer-friendly React component library focused on SaaS builders. Copy-paste ready, accessible, and consistent components to launch your SaaS products faster.",
    url: `${domain}`,
    siteName: "Stream UI",
    images: [
      {
        url: `${domain}/ogImages/landing.png`,
        width: 1200,
        height: 630,
        alt: "Stream UI SaaS UI Components Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  X: {
    card: "summary_large_image",
    title: "Stream UI – Copy-Paste SaaS UI Components for Faster Building",
    description:
      "Developer-friendly, accessible React UI components designed for SaaS builders. Speed up your SaaS launch with consistent, modern design.",
    images: [`${domain}/ogImages/landing.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={domain} />
        <meta
          name="keywords"
          content="SaaS UI components, React SaaS components, Stream UI, reusable UI components, developer tools, SaaS design system, copy-paste components"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Stream UI",
              url: domain,
              potentialAction: {
                "@type": "SearchAction",
                target: `${domain}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-poppins bg-gray-100 scrollbar-hide">{children}</body>
    </html>
  );
}