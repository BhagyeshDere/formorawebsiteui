import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";

/* FONT SETUP */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/* ✅ METADATA MUST BE HERE */
export const metadata = {
  title: "FORMORA | International Furniture Manufacturer",
  description:
    "FORMORA is an international furniture manufacturing company delivering premium residential, office, and white-label furniture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-black antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
