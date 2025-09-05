import React from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Sparkles, ArrowRight, Timer, Award } from 'lucide-react'

export default function Hero() {
  const openPurchaseLink = () => {
    if (true) {
      window.open('', '_blank')
    }
  }

  const scrollToProduct = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const FloatingIcon = ({ children, delay = 0, className = "" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [20, -10, -20, -30],
        x: [0, 10, -10, 5]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  )

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <FloatingIcon delay={0} className="top-20 left-10">
        <Heart className="w-8 h-8 text-white/60" />
      </FloatingIcon>
      
      <FloatingIcon delay={1} className="top-32 right-20">
        <Sparkles className="w-6 h-6 text-accent-300/70" />
      </FloatingIcon>
      
      <FloatingIcon delay={2} className="bottom-40 left-16">
        <Star className="w-7 h-7 text-white/50" />
      </FloatingIcon>
      
      <FloatingIcon delay={0.5} className="top-40 left-1/3">
        <Award className="w-5 h-5 text-accent-200/60" />
      </FloatingIcon>

      <div className="relative container-custom section-padding">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-300 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">Mais de 1000 clientes satisfeitos</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight text-shadow-lg"
              >
                Alfajores que
                <span className="block bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">
                  Transformam
                </span>
                <span className="block">seu Dia! ✨</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Cada mordida é uma <strong className="text-accent-200">explosão de sabor</strong> que dissolve o estresse e traz um sorriso ao seu rosto. Mais que um doce, é a pausa perfeita que você merece!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openPurchaseLink}
                  className="btn-accent flex items-center justify-center space-x-2 shadow-2xl"
                >
                  <Timer className="w-6 h-6" />
                  <span>Quero Meu Alfajor Agora!</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToProduct}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <Heart className="w-5 h-5" />
                  <span>Descobrir o Sabor</span>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-sm">Artesanal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Premium</div>
                  <div className="text-white/80 text-sm">Ingredientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-white/80 text-sm">Produção</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <motion.img
                    src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Alfajores_1757109580311.png"
                    alt="Alfajores Artesanais Alfajrr"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -top-4 -right-4 bg-accent-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg border-4 border-white"
                  >
                    ⭐ Bestseller!
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 }}
                    className="absolute -bottom-4 -left-4 bg-white text-primary-600 font-bold px-4 py-2 rounded-full shadow-lg border-4 border-accent-300"
                  >
                    🔥 Limitado!
                  </motion.div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -z-10 inset-0 bg-gradient-to-r from-accent-400/20 to-primary-300/20 blur-3xl rounded-full scale-110"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-white/80 text-center cursor-pointer"
            onClick={scrollToProduct}
          >
            <div className="text-sm mb-2">Descubra mais</div>
            <ArrowRight className="w-6 h-6 mx-auto rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}