import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis, useLenis } from "lenis/react";

const Nexa = localFont({
  src: [
    {
      path: "./fonts/nexa-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/nexa-extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/nexa-heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/nexa-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/nexa-light.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
});

export const metadata = {
  title: "Mahdi Hadjidj | Portfolio",
  description: "Creative developer portfolio showcasing projects built with Next.js",
  openGraph: {
    title: "Mahdi Hadjidj | Portfolio",
    description: "Creative developer portfolio showcasing projects built with Next.js",
    url: "https://mahdiiportfolio.netlify.app/",
    images: [
      {
        url: "https://raw.githubusercontent.com/mahdii-Dz/My-Portfolio/refs/heads/main/public/image.png", 
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi Hadjidj | Portfolio",
    description: "Creative developer portfolio showcasing projects built with Next.js",
    creator: "@mahdii_Dz",
    image: ["https://raw.githubusercontent.com/mahdii-Dz/My-Portfolio/refs/heads/main/public/image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/3.0.0/uicons-brands/css/uicons-brands.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/3.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-chubby/css/uicons-regular-chubby.css"
        ></link>
      </head>
      <body className={Nexa.className}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
