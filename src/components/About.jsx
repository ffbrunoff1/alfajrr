import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Clock, Award, Zap, Smile, CheckCircle, ArrowRight } from 'lucide-react'

export default function About() {
  const openPurchaseLink = () => {
    if (true) {
      window.open('', '_blank')
    }
  }

  const problems = [
    {
      icon: Clock,
      title: "Dia Corrido e Cansativo",
      description: "A rotina agitada deixa você sem tempo para os pequenos prazeres da vida"
    },
    {
      icon: Zap,
      title: "Falta Algo Especial",
      description: "Você sente que precisa de algo para adoçar e alegrar seus momentos"
    },
    {
      icon: Smile,
      title: "Busca por Qualidade",
      description: "Cansado de doces industriais sem sabor e que não trazem satisfação real"
    }
  ]

  const solutions = [
    {
      icon: Heart,
      title: "Explosão de Sabor",
      description: "Cada mordida é uma experiência sensorial única que dissolve o estresse"
    },
    {
      icon: Star,
      title: "Momento Especial",
      description: "Transformamos qualquer instante comum em um momento de felicidade"
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados para garantir o máximo em sabor e textura"
    }
  ]

  const benefits = [
    "Massa macia e perfeita",
    "Recheio cremoso irresistível", 
    "Cobertura deliciosa",
    "100% artesanal",
    "Ingredientes premium",
    "Produção diária"
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="bg-primary-100 text-primary-600 px-6 py-3 rounded-full font-semibold text-lg mb-6 inline-block">
              🎯 O Problema que Você Enfrenta
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-6xl font-black gradient-text mb-8"
          >
            Você Já Se Pegou Desejando
            <span className="block">Algo Verdadeiramente Especial?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            O dia a dia pode ser corrido e cansativo, e muitas vezes sentimos que <strong className="text-primary-600">falta algo para adoçar nossas vidas</strong>. É nesse momento que nossos alfajores entram em cena!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 p-8 rounded-2xl border border-red-100 card-hover"
              >
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="bg-green-100 text-green-600 px-6 py-3 rounded-full font-semibold text-lg mb-6 inline-block">
              ✨ A Solução que Você Merece
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-6xl font-black gradient-text mb-8"
          >
            Alfajores que Transformam
            <span className="block">Qualquer Momento!</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Imagine morder um alfajor macio, com camadas perfeitas de massa, recheado com o doce mais cremoso que você pode imaginar, e envolto por uma <strong className="text-primary-600">cobertura deliciosa</strong>. 
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-3xl">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Alfajores_1757109580311.png"
                alt="Alfajores Premium Alfajrr"
                className="w-full h-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-accent-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow-xl"
              >
                🏆 Premium Quality
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl lg:text-5xl font-black text-white mb-8"
          >
            O Que Torna Nossos Alfajores Únicos?
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-300 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Cada bocado é uma <strong className="text-accent-200">viagem sensorial</strong> que dissolve o estresse e traz um sorriso ao seu rosto. Os alfajores são mais do que um doce - eles são a pausa perfeita no dia!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openPurchaseLink}
            className="btn-accent flex items-center justify-center space-x-3 mx-auto shadow-2xl"
          >
            <Heart className="w-6 h-6" />
            <span>Quero Experimentar Agora!</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}