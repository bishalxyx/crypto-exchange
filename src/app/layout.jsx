"use client"
import "./globals.css";
import {Assistant} from 'next/font/google'
import Header from "@/components/Header";


const assistantFont=Assistant({
  weight:['400','500','600','700','800'],
  subsets:['latin'],
  display:'swap'
})

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${assistantFont.className} antialiased   min-h-screen`}
        >
          {/* <Header/> */}
        {children}
      </body>
    </html>
  );
}
