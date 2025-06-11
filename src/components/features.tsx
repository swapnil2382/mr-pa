"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Zap, Shield, Sparkles, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced Intelligence",
    description: "Powered by state-of-the-art AI models that understand context and deliver exceptional results.",
    benefits: ["Natural language processing", "Context-aware responses", "Continuous learning"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Generate designs, code, and content in seconds, not hours. Experience the speed of AI-driven creation.",
    benefits: ["Instant generation", "Real-time processing", "Optimized workflows"],
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with enterprise-grade security and encryption at every step.",
    benefits: ["End-to-end encryption", "Compliance standards", "Secure infrastructure"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "Push the boundaries of what's possible with AI that thinks outside the box and delivers unique solutions.",
    benefits: ["Innovative solutions", "Creative automation", "Unique outputs"],
    color: "from-pink-500/20 to-rose-500/20"
  },
]

export default function Features() {
  const ref = useRef(null)
  const detailsRef = useRef(null)
  const [activeFeature, setActiveFeature] = useState(0)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index)
    // Only scroll on mobile (below lg breakpoint, 1024px)
    if (window.matchMedia("(max-width: 1023px)").matches && detailsRef.current) {
      const offsetTop = detailsRef.current.getBoundingClientRect().top + window.scrollY - 80 // Adjust for header offset
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  }

  const tabVariants = {
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
    
    <section id="features" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Core Capabilities
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Engineered for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Excellence
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Experience the next generation of AI technology designed to transform how you work, 
            create, and innovate in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12"
        >
          <motion.div variants={leftColumnVariants} className="lg:col-span-5">
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={tabVariants}
                  onClick={() => handleFeatureClick(index)}
                  className={`group cursor-pointer p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 ${
                    activeFeature === index
                      ? 'border-white/30 bg-white/5'
                      : 'border-gray-800/50 hover:border-gray-700/50'
                  }`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      activeFeature === index ? 'bg-white text-black' : 'bg-white/5 text-white'
                    }`}>
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg sm:text-xl font-semibold mb-1 sm:mb-2 transition-colors duration-300 ${
                        activeFeature === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        activeFeature === index ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className={`transition-all duration-300 ${
                      activeFeature === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                    }`}>
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={detailsRef}
            variants={rightColumnVariants}
            className="lg:col-span-7"
          >
            <div className="relative">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: activeFeature === index ? 1 : 0,
                    y: activeFeature === index ? 0 : 20,
                    scale: activeFeature === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`${activeFeature === index ? 'relative' : 'absolute inset-0 pointer-events-none'}`}
                >
                  <div className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12`}>
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                      <div className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-2xl">
                        <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Key Benefits</h4>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={activeFeature === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: benefitIndex * 0.1 + 0.2 }}
                          className="flex items-center space-x-2 sm:space-x-3"
                        >
                          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-200 text-sm sm:text-base">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}