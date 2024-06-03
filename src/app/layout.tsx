import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

import Providers from "@/components/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>{children}</Providers>
          <VercelAnalytics />
        </main>
      </body>
    </html>
  );
}
