import "./globals.css";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const metadata = {
  title: "Stream UI – Beautiful, Copy-Paste UI Components for Your Projects",
  description:
    "Modern, developer-friendly React component library for your next project.",
  openGraph: {
    title: "Stream UI – Beautiful, Copy-Paste UI Components for Your Projects",
    description:
      "Modern, developer-friendly React component library for your next project.",
    url: `${domain}`,
    siteName: "Stream UI",
    images: [
      {
        url: `${domain}/ogImages/landing.png`,
        width: 1200,
        height: 630,
        alt: "Stream UI Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  X: {
    card: "summary_large_image",
    title: "Stream UI – Beautiful, Copy-Paste UI Components for Your Projects",
    description:
      "Stream UI offers a beautiful, accessible collection of reusable UI components ready to copy-paste into your projects, helping you build faster with consistent design.",
    images: [`${domain}/ogImages/landing.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="font-poppins bg-gray-100">
        {children}
      </body>
    </html>
  );
}