import "./globals.css";


export const metadata = {
  title: 'Auto Persona',
  description: 'Configure your car with ease',
  keywords: 'car,nextjs,tailwind,auto,configurator,personality,car customization, car configuration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/inter.min.css" /> 
      </head>
      <body>{children}</body>
    </html>
  )
}
