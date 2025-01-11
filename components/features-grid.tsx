'use client'

import { Brain, Headphones, ShoppingBag, User } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Enhance customer satisfaction with chatbots that remember past interactions, reducing repetition and speeding up resolution times"
  },
  {
    icon: User,
    title: "Personal AI Companion",
    description: "Create AI companions that truly know you, recalling preferences and past conversations for more meaningful interactions."
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "Develop smarter AI agents that learn from each interaction, becoming more personalized and effective over time"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Increase sales with AI that remembers customer preferences, providing tailored product recommendations that feel personal"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FeaturesGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-24 sm:py-32">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Content */}
      <div className="container relative">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border bg-background/50 p-8 backdrop-blur transition-all hover:border-primary/50 hover:bg-accent/50"
            >
              {/* Icon wrapper */}
              <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

