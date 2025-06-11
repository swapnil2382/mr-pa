"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-zinc-900 to-black border border-white/5 rounded-3xl p-8 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
            Join thousands of creators, developers, and businesses who are already using Mr. Pa to accelerate their
            projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white hover:bg-white/90 text-black rounded-full px-8 py-6 text-lg font-medium group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
