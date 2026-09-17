import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omar Temani -- Software Engineer",
  description: "Omar Temani — Software Engineer & Web Developer.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} bg-[#0C0C0C]`}>
      <body className="bg-[#0C0C0C] text-[#D7E2EA] antialiased selection:bg-[#B600A8] selection:text-white">
        <div id="root" className="bg-[#0C0C0C] min-h-screen overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
