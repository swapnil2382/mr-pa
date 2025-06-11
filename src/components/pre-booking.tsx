"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const services = [
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description: "Craft intuitive user interfaces and seamless experiences.",
    duration: "2-4 weeks",
    price: "From $2,999",
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Build modern, responsive web applications.",
    duration: "3-6 weeks",
    price: "From $4,999",
  },
  {
    id: "brand-identity",
    name: "Brand Identity & Logo",
    description: "Create a distinctive brand identity and logo.",
    duration: "1-2 weeks",
    price: "From $1,999",
  },
  {
    id: "game-development",
    name: "Game Development",
    description: "Develop engaging games and interactive experiences.",
    duration: "6-12 weeks",
    price: "From $9,999",
  },
  {
    id: "mobile-app",
    name: "Mobile App Design",
    description: "Design native and cross-platform mobile apps.",
    duration: "4-8 weeks",
    price: "From $5,999",
  },
  {
    id: "ai-integration",
    name: "AI Integration",
    description: "Integrate custom AI solutions for your business.",
    duration: "2-6 weeks",
    price: "From $3,999",
  },
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export default function PreBooking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Pre-booking submitted:", {
      service: services.find((s) => s.id === selectedService)?.name || selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    })
    // Reset form (optional, can be adjusted based on needs)
    setSelectedService("")
    setSelectedDate("")
    setSelectedTime("")
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

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
    <section id="pre-booking" className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight font-sans">
            Pre-Book Your AI Service
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Secure priority access to Mr. Pa’s AI-driven solutions. Select your service and schedule a consultation today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Service Selection & Booking Form */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 text-white-500" />
                Schedule Your Service
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Service Selection */}
                <div>
                  <label className="block text-gray-100 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    Select Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {services.map((service) => (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 sm:p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                          selectedService === service.id
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-white/10 hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-white text-sm sm:text-base mb-1 sm:mb-2">
                              {service.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-400 mb-2">{service.description}</p>
                            <div className="flex items-center space-x-3 sm:space-x-4 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {service.duration}
                              </span>
                              <span>{service.price}</span>
                            </div>
                          </div>
                          {selectedService === service.id && (
                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white-500 flex-shrink-0" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-100 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="bg-zinc-800 border-white/10 text-white rounded-lg h-10 sm:h-12 text-sm sm:text-base"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-100 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-100 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      <User className="w-4 h-4 inline mr-1.5" />
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-white/10 text-white rounded-lg h-10 sm:h-12 text-sm sm:text-base"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-100 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      <Mail className="w-4 h-4 inline mr-1.5" />
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-white/10 text-white rounded-lg h-10 sm:h-12 text-sm sm:text-base"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-100 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      <Phone className="w-4 h-4 inline mr-1.5" />
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-white/10 text-white rounded-lg h-10 sm:h-12 text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-100 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Company (Optional)
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-white/10 text-white rounded-lg h-10 sm:h-12 text-sm sm:text-base"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-100 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    <MessageSquare className="w-4 h-4 inline mr-1.5" />
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-zinc-800 border-white/10 text-white rounded-lg min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                    placeholder="Describe your project requirements and goals..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-600 hover:from-white-700 hover:to-white-700 text-white font-semibold py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300"
                >
                  Pre-Book Now
                </Button>
              </form>
            </motion.div>
          </motion.div>

          {/* Information & Benefits */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6 sm:space-y-8"
          >
            {/* What to Expect */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">What to Expect</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Free 30-minute consultation call",
                  "Detailed project scope analysis",
                  "AI-powered solution recommendations",
                  "Timeline and budget estimation",
                  "Custom proposal within 24 hours",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Priority Benefits */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Pre-Booking Benefits</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Priority queue access",
                  "15% early bird discount",
                  "Dedicated project manager",
                  "Weekly progress updates",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-white-500 rounded-full mr-2 sm:mr-3" />
                    <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Need Assistance?</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
                  <span className="text-gray-300 text-sm sm:text-base">hello@mrpa.ai</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
                  <span className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
                  <span className="text-gray-300 text-sm sm:text-base">Mon-Fri, 9AM-6PM EST</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}