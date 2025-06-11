import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text } from "@react-three/drei"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import * as THREE from "three"

interface MousePosition {
  x: number
  y: number
}

interface HeroProps {
  mousePosition: MousePosition
}

function AnimatedSphere({ mousePosition }: { mousePosition: MousePosition }) {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Mouse interaction
      const x = (mousePosition.x / window.innerWidth - 0.5) * 0.4
      const y = -(mousePosition.y / window.innerHeight - 0.5) * 0.4

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.02)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.5, 0.02)
    }

    // Continuous rotation
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Main central sphere */}
        <mesh ref={sphereRef}>
          <sphereGeometry args={[3, 64, 64]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9} 
            roughness={0.1} 
            envMapIntensity={1.2}
          />
        </mesh>

        {/* Outer ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[5, 0.03, 16, 100]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.8} 
            roughness={0.2}
            transparent 
            opacity={0.6}
          />
        </mesh>

        {/* Inner ring */}
        <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
          <torusGeometry args={[4.2, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.7} 
            roughness={0.3}
            transparent 
            opacity={0.4}
          />
        </mesh>

        {/* Orbital particles */}
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
          <mesh position={[4, 0, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.4}>
          <mesh position={[-3.5, 2, 1]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>

        <Float speed={2.2} rotationIntensity={1.2} floatIntensity={0.6}>
          <mesh position={[2, -3, -1]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#505050" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>
      </Float>
    </group>
  )
}

export default function Hero({ mousePosition }: HeroProps) {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-16 overflow-hidden">
      
      {/* 3D Background Animation */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, 10]} intensity={0.6} color="#1a1a1a" />
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={0.8} />

            <AnimatedSphere mousePosition={mousePosition} />
            <Environment preset="night" />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={false}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
              Mr. Pa
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-60"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Next-generation AI platform designed for enterprise excellence
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button className="bg-white hover:bg-zinc-100 text-black font-semibold px-10 py-4 rounded-lg transition-all duration-200 group flex items-center text-lg">
              Get Started
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

          <a href="#pre-booking">
  <button className="border-2 border-zinc-600 text-white hover:bg-zinc-900/50 font-semibold px-10 py-4 rounded-lg transition-all duration-200 flex items-center text-lg group">
    Pre-Booking 
  </button>
</a>

          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "500+", label: "Enterprise Clients" },
              { number: "99.9%", label: "System Uptime" },
              { number: "24/7", label: "Global Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zinc-500 font-medium text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-5"></div>
    </section>
  )
}