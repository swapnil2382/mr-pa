import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Operational Efficiency',
    description: 'Reduce time-consuming manual processes',
    additional: 'Streamline day-to-day business operations with intelligent automation',
    category: 'Productivity'
  },
  {
    number: '02',
    title: 'Task Management Excellence',
    description: 'Eliminate missed deadlines and forgotten tasks',
    additional: 'Intelligent reminder systems for clients and team coordination',
    category: 'Management'
  },
  {
    number: '03',
    title: 'Seamless Integration',
    description: 'Quick execution without workflow disruption',
    additional: 'Automate management processes while maintaining current operations',
    category: 'Integration'
  },
  {
    number: '04',
    title: 'Centralized Control',
    description: 'Unified workspace for all business tools',
    additional: 'Everything you need accessible from one intelligent platform',
    category: 'Organization'
  },
  {
    number: '05',
    title: 'Intelligent Automation',
    description: 'Advanced workflow automation solutions',
    additional: 'Comprehensive automation that adapts to your business needs',
    category: 'Automation'
  },
];

export default function ServicesBlog() {
  const ref = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium">
              Business Transformation
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Why Businesses
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Choose Us
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-light">
            Mr. Pa delivers intelligent automation solutions that transform how businesses operate, 
            ensuring competitive advantage through streamlined processes and enhanced productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-8 space-y-4 sm:space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className="group relative"
              >
                <div className="relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-gray-600/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                  
                  <div className="relative z-10 flex items-start space-x-4 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white text-black rounded-lg sm:rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                          {service.number}
                        </div>
                        <motion.div
                          variants={floatingVariants}
                          animate="animate"
                          className="absolute -top-2 -right-2 text-xl sm:text-2xl"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs font-medium">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-100 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-base sm:text-lg mb-2 sm:mb-3 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {service.additional}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-4 space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h4 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">Impact Metrics</h4>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">85%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Time Reduction</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Task Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3x</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Productivity Boost</div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Ready to Transform?</h4>
              <p className="text-gray-800 mb-4 sm:mb-6 text-sm leading-relaxed">
                Join hundreds of businesses already benefitting from AI-powered automation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-gray-900 transition-colors duration-300 text-sm sm:text-base"
              >
                Start Your Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}