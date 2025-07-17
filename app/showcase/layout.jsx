import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const metadata = {
  title: "Stream UI Component Gallery – Beautiful React Components",
  description:
    "Discover and copy-paste beautifully designed, responsive React components with Stream UI to accelerate your SaaS and web projects effortlessly.",
  openGraph: {
    title: "Stream UI Component Gallery – Beautiful React Components",
    description:
      "Discover and copy-paste beautifully designed, responsive React components with Stream UI to accelerate your SaaS and web projects effortlessly.",
    url: `${domain}/showcase`,
    siteName: "Stream UI",
    images: [
      {
        url: `${domain}/og-preview.png`,
        width: 1200,
        height: 630,
        alt: "Stream UI Gallery showcasing React components for SaaS and web projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stream UI Component Gallery – Beautiful React Components",
    description:
      "Discover and copy-paste beautifully designed, responsive React components with Stream UI to accelerate your SaaS and web projects effortlessly.",
    images: [`${domain}/twitter-preview.png`],
  },
};

export default function ComponentShowcaseLayout({children}) {
  return (
    <main className="font-poppins">
      {/* Navbar with dotted border */}
      <div className="border-l border-r border-dashed border-neutral-400 p-2 md:p-2 md:mx-12 sm:mx-2">
        <Navbar />
      </div>

      <div className="border-l border-r border-t border-dashed border-neutral-400 p-2 md:p-2 md:mx-12 sm:px-2">
        {children}
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
