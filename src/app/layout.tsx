import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh | ML Engineer × Electrical Engineer",
  description:
    "Portfolio of Lokesh — ML Engineer and Electrical Engineer building intelligent systems across software, machine learning, and electrical engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if ("scrollRestoration" in history) {
                  history.scrollRestoration = "manual";
                }

                var navigation =
                  performance.getEntriesByType("navigation")[0];

                if (
                  navigation &&
                  navigation.type === "reload"
                ) {
                  if (window.location.hash) {
                    history.replaceState(
                      null,
                      document.title,
                      window.location.pathname +
                        window.location.search
                    );
                  }

                  window.scrollTo(0, 0);
                }
              })();
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}