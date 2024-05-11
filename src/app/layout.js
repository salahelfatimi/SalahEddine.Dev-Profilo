import './globals.css'
import Providers from "./providers";



export async function generateMetadata() {
  return {
    title: 'salahEddine.DEV',
    description: 'Full Stack Developer Protfilo  ',
    metadataBase: new URL(`https://www.salaheddin-dev.me`),
    images: [
      {
        url: `https://www.salaheddin-dev.me/opengraph-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        url: `https://www.salaheddin-dev.me/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "www.salaheddin-dev",
      },
    ],
    locale: "en",
    type: "website ",
  };
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
       <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
