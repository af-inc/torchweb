import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="dark container py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-background/10 to-background/80 px-6 py-24 shadow-2xl">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-20" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Ready to start shipping reliable AI apps faster?
          </h2>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get started with TorchBits, Correlly Studio, and EdgeCV to enhance your AI app development, from prototype to production.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/demo">
                Get a demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 bg-background/50 backdrop-blur hover:bg-accent/50" asChild>
              <Link href="/signup">
                Sign up for free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

