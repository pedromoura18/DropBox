import { Provider } from "@/components/ui/provider"
import "../styles/globals.css"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export const metadata = {
  title: "Dropbox para Equipes — Tudo o que sua empresa precisa para trabalhar com eficiência",
  description: "Colabore continuamente e entregue o trabalho com mais rapidez usando o Dropbox.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
