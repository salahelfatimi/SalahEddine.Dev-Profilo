import './globals.css'
import Providers from "./providers";




export const metadata = {
  title: 'salahEddine.DEV',
  description: 'Protfilo',
  
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
