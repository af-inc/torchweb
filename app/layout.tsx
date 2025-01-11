import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { NavigationBar } from '@/components/navigation-bar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Service Platform',
  description: 'Next-generation AI service platform for building intelligent applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4">
            <NavigationBar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className={cn(
// //         "min-h-screen bg-background font-sans antialiased",
// //         inter.className
// //       )}>
// //         <ThemeProvider
// //           attribute="class"
// //           defaultTheme="dark"
// //           enableSystem
// //           disableTransitionOnChange
// //         >
// //           <NavigationBar />
// //           <main>
// //             {children}
// //           </main>
// //           <Footer />
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   )
// }

