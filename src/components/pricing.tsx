"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: [
      "AI design assistance",
      "Basic code generation",
      "5 projects per month",
      "Email support",
      "Standard templates",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    features: [
      "Everything in Basic",
      "Advanced AI capabilities",
      "Unlimited projects",
      "Priority support",
      "Custom templates",
      "Team collaboration",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Complete solution for large organizations",
    features: [
      "Everything in Pro",
      "Custom AI training",
      "Dedicated support",
      "White-label solutions",
      "Advanced security",
      "Custom integrations",
      "SLA guarantee",
    ],
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="pricing" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pricing</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core AI capabilities.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-white text-black px-4 py-1 rounded-full text-xs font-medium">Most Popular</div>
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl border ${
                  plan.popular ? "border-white bg-white/5" : "border-white/10 bg-zinc-900/30"
                }`}
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{plan.description}</p>

                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-zinc-400 ml-1">{plan.period}</span>}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-xl ${
                    plan.popular ? "bg-white text-black hover:bg-white/90" : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
