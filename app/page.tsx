import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { CodeEditor } from '../components/code-editor'
import { getCodeExample } from '../app/actions'
import { FeaturesGrid } from '../components/features-grid'
import { CTASection } from '@/components/cta-section'
import { NetBackground } from '@/components/net-background'

export default async function Home() {
  const pythonExample = await getCodeExample('python')
  const javascriptExample = await getCodeExample('javascript')
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
        {/* Net-like background */}
        <NetBackground />
        
        {/* Radial gradient for added depth */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-primary/0 to-transparent opacity-75" />

        {/* Hero content */}
        <div className="container relative">
          <div className="flex flex-col items-center justify-center space-y-10 py-32 text-center md:py-40">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              🚀 Proudly Open-Source
            </div>
            
            <h1 className="max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
              Modular Next Generation AI Platform For Your Applications
            </h1>
            
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Build intelligent applications with our comprehensive AI service platform. 
              Powerful, scalable, and easy to integrate.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/playground">
                  Try Playground <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid />

      {/* Features section */}
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to build AI-powered applications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform provides all the tools and features you need to create sophisticated AI applications quickly and efficiently.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <feature.icon className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get Started Section */}
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empower Your AI applications with Our Intelligent Memory Layer in Minutes
          </p>
          <div className="mt-4">
            <Button variant="link" size="lg" className="gap-2" asChild>
              <Link href="/docs">
                View documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <CodeEditor
            initialPythonCode={pythonExample}
            initialJavaScriptCode={javascriptExample}
          />
        </div>
      </section>
      <CTASection />
    </>
  )
}

const features = [
  {
    title: "Natural Language Processing",
    description:
      "Advanced NLP capabilities for understanding and generating human-like text.",
    icon: function Icon(props: React.ComponentProps<"svg">) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
  },
  {
    title: "Computer Vision",
    description:
      "Powerful image and video analysis capabilities for visual understanding.",
    icon: function Icon(props: React.ComponentProps<"svg">) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
  },
  {
    title: "Machine Learning",
    description:
      "State-of-the-art machine learning models for prediction and analysis.",
    icon: function Icon(props: React.ComponentProps<"svg">) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
          <path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
          <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      )
    },
  },
]

