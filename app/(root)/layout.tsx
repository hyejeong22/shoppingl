import { Suspense } from 'react'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  )
}
