export const metadata = {
  title: 'Projeto React POS - IFRN',
  description: 'Criado na disciplina de Programação Orientada a Serviços (POS)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
