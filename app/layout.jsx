import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Abi Portfolio",
  description: "Portfolio fullstack avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true} className="bg-slate-50 text-slate-900">
        <Providers>
          <Header />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}