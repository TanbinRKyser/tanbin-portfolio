import type { Metadata } from 'next';
import './globals.css';

const siteUrl = new URL(process.env.URL ?? 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Tanbin R Kyser : AI Researcher & Software Engineer',
  description:
    'Portfolio of Md. Tanbin Rahid Kyser, working across machine learning, computer vision, and full-stack engineering.',
  openGraph: {
    title: 'Tanbin R Kyser : AI Researcher & Software Engineer',
    description:
      'Applied AI research, computer vision, and full-stack software engineering.',
    type: 'website',
    url: siteUrl,
    images: [{ url: new URL('/og.png', siteUrl), width: 1200, height: 630, alt: 'Tanbin Kyser portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanbin Kyser — AI Researcher & Software Engineer',
    description:
      'Applied AI research, computer vision, and full-stack software engineering.',
    images: [new URL('/og.png', siteUrl)],
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
