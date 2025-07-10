import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

export const metadata = {
  title: "Component Gallery – Stream UI",
  description: "Explore a gallery of beautiful, reusable, accessible UI components ready to copy and integrate into your projects with Stream UI.",
  openGraph: {
    title: "Component Gallery – Stream UI",
    description: "Explore a gallery of beautiful, reusable, accessible UI components ready to copy and integrate into your projects with Stream UI.",
    url: `${domain}/showcase`,
    siteName: "Stream UI",
    images: [
      {
        url: `${domain}/og-preview.png`,
        width: 1200,
        height: 630,
        alt: "Stream UI Component Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Component Gallery – Stream UI",
    description: "Explore a gallery of beautiful, reusable, accessible UI components ready to copy and integrate into your projects with Stream UI.",
    images: [`${domain}/twitter-preview.png`],
  },
};

export default function ComponentShowcaseLayout({children}) {
  return (
    <main className="font-poppins">
      {/* Navbar with dotted border */}
      <div className="border-l border-r border-dashed border-neutral-400 p-2 md:p-2 mx-12">
        <Navbar />
      </div>

      <div className="border-l border-r border-t border-dashed border-neutral-400 p-2 md:p-2 mx-12">
        {children}
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
