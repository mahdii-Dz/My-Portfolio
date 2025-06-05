import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis, useLenis } from 'lenis/react'

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
  title: "Mahdi portfolio",
  description: "Mahdi hadjidj portfolio website developed with Nextjs!",
  icons:{
    icon: "/icon.png"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi hadjidj portfolio website",
    description: "Mahdi hadjidj portfolio website developed with Nextjs!",
    creator: "@mahdii_Dz",
    image: 'https://cdn-icons-png.flaticon.com/512/4072/4072409.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-brands/css/uicons-brands.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-chubby/css/uicons-regular-chubby.css'></link>
      </head>
      <body
      className={Nexa.className}
      >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
