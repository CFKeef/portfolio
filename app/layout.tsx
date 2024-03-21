import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

const inter = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Patryck Golebiewski",
  description: "Tinkerer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <main className="flex min-h-screen max-w-2xl flex-col p-8 lg:mx-auto gap-8">
          <aside className="flex w-full flex-row justify-start ">
            <Nav />
          </aside>
          {children}
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
