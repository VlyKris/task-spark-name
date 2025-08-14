import { motion } from "framer-motion";
import { Heart, Sparkles, Zap, ArrowRight, Moon, Star, Flame, Skull, Droplets, CloudRain, Eye, Ghost } from "lucide-react";
import { AuthButton } from "@/components/auth/AuthButton";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950 to-black relative overflow-hidden">
      {/* Dark atmospheric overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Animated background elements - more intense */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-red-500 rounded-full opacity-80"
          animate={{
            y: [0, -30, 0],
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-purple-600 rounded-full opacity-70"
          animate={{
            y: [0, -25, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-600 rounded-full opacity-80"
          animate={{
            y: [0, -35, 0],
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Rain effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-8 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            animate={{
              y: [-20, window.innerHeight + 20],
            }}
            transition={{
              duration: 1.5 + Math.random() * 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="relative z-10 flex items-center justify-between p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-purple-700 to-black rounded-lg flex items-center justify-center border border-red-500/50">
            <Skull className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider">
            TASKSPARK
          </span>
        </motion.div>
        
        <div className="flex items-center space-x-4">
          <AuthButton />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-red-700 via-purple-800 to-black rounded-full flex items-center justify-center shadow-2xl shadow-red-500/30 border-2 border-red-500/50">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Eye className="w-16 h-16 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            EMBRACE
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">THE DARKNESS</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent text-5xl md:text-6xl">
            WITHIN
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          In the depths of chaos, find your purpose. TaskSpark is your guide through the shadows, 
          helping you transform your darkest moments into your greatest achievements.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <AuthButton 
              trigger={
                <button className="px-10 py-5 bg-gradient-to-r from-red-600 via-purple-700 to-pink-600 text-white font-black rounded-lg shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 flex items-center space-x-3 text-lg border border-red-500/50 hover:border-red-400/70">
                  <span>EMBRACE THE VOID</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              }
            />
          </motion.div>
          
          <motion.button
            className="px-10 py-5 border-2 border-purple-500/40 text-purple-300 font-bold rounded-lg hover:border-purple-400/60 hover:text-purple-200 transition-all duration-300 flex items-center space-x-3 text-lg bg-black/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>DIVE DEEPER</span>
            <Ghost className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section
        className="relative z-10 py-24 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-black text-center mb-20 text-white tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            WHY <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">EMBRACE</span> THE DARKNESS?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Heart className="w-10 h-10 text-red-400" />,
                title: "Bleeding Heart",
                description: "Every task cuts deep into your soul, making you feel alive with purpose and passion."
              },
              {
                icon: <Flame className="w-10 h-10 text-orange-500" />,
                title: "Burning Despair",
                description: "Let your inner fire consume the chaos, transforming pain into unstoppable motivation."
              },
              {
                icon: <Skull className="w-10 h-10 text-purple-400" />,
                title: "Death to Chaos",
                description: "Kill the disorder in your life with ruthless organization and dark determination."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-2xl p-10 hover:border-red-500/60 transition-all duration-500 group hover:bg-black/60"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-900/50 to-purple-900/50 rounded-xl flex items-center justify-center mb-8 group-hover:from-red-800/70 group-hover:to-purple-800/70 transition-all duration-500 border border-red-500/30">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-wide">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dark CTA Section */}
      <motion.section
        className="relative z-10 py-24 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-black/80 via-red-900/30 to-black/80 backdrop-blur-md border-2 border-red-500/40 rounded-3xl p-16"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-red-700 to-purple-800 rounded-full flex items-center justify-center border-2 border-red-500/50"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                  "0 0 40px rgba(239, 68, 68, 0.6)",
                  "0 0 20px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Droplets className="w-12 h-12 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
              Ready to <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">DIVE</span> Into the Abyss?
            </h2>
            <p className="text-2xl text-gray-300 mb-10 font-medium">
              Join the shadows where productivity meets darkness. Transform your chaos into controlled chaos.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <AuthButton 
                trigger={
                  <button className="px-12 py-6 bg-gradient-to-r from-red-600 via-purple-700 to-pink-600 text-white font-black rounded-xl shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300 text-xl border-2 border-red-500/50 hover:border-red-400/70">
                    DESCEND INTO MADNESS
                  </button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 py-16 px-6 border-t-2 border-red-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-purple-700 rounded-lg flex items-center justify-center border border-red-500/50">
              <Skull className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider">
              TASKSPARK
            </span>
          </div>
          <p className="text-gray-400 text-lg">
            © 2024 TaskSpark. Embrace the darkness, ignite your soul, one task at a time.
          </p>
          <p className="text-gray-500 text-sm mt-4 font-mono">
            "In darkness, we find our light. In chaos, we find our order."
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
