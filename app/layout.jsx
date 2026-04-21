import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Abi Portfolio",
  description: "Portfolio fullstack avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}