import "./globals.css";
import { personalInfo } from "./data";

export const metadata = {
  title: personalInfo.metaTitle,
  description: personalInfo.metaDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[var(--color-canvas)] text-[var(--color-ink)] antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
