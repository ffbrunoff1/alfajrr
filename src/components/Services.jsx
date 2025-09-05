import React from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Clock, Award, Zap, Shield, Gift, CheckCircle, ArrowRight, Timer, Sparkles } from 'lucide-react'

export default function Services() {
  const openPurchaseLink = () => {
    if (true) {
      window.open('', '_blank')
    }
  }

  const benefits = [
    {
      icon: Heart,
      title: "Pausa Perfeita no Seu Dia",
      description: "Um momento só seu que merece ser celebrado, transformando qualquer instante comum em felicidade pura",
      highlight: "Bem-estar Instantâneo"
    },
    {
      icon: Star,
      title: "Experiência Sensorial Única",
      description: "Cada mordida é uma viagem de sabores que dissolve o estresse e desperta todos os seus sentidos",
      highlight: "Prazer Garantido"
    },
    {
      icon: Award,
      title: "Qualidade Premium Incomparável",
      description: "Ingredientes selecionados com carinho para garantir o máximo em sabor, textura e satisfação",
      highlight: "Excelência Artesanal"
    },
    {
      icon: Clock,
      title: "Produção Diária Fresquinha",
      description: "Feitos no mesmo dia para você receber sempre o máximo de frescor e sabor em cada alfajor",
      highlight: "Sempre Fresco"
    },
    {
      icon: Zap,
      title: "Energia Positiva Instantânea",
      description: "Mais que um doce, é um impulsionador de humor que traz sorrisos e momentos de alegria",
      highlight: "Mood Booster"
    },
    {
      icon: Shield,
      title: "Tradição e Confiança",
      description: "Receita tradicional aperfeiçoada com mais de 1000 clientes satisfeitos que recomendam",
      highlight: "Aprovado por Milhares"
    }
  ]

  const guarantees = [
    {
      icon: CheckCircle,
      title: "Satisfação 100% Garantida",
      description: "Se não ficar completamente satisfeito, devolvemos seu dinheiro"
    },
    {
      icon: Gift,
      title: "Embalagem Especial",
      description: "Perfeito para presentear ou se presentear com todo carinho"
    },
    {
      icon: Timer,
      title: "Entrega Rápida",
      description: "Receba seus alfajores fresquinhos no menor tempo possível"
    }
  ]

  const urgencyReasons = [
    "📦 Produção limitada diária",
    "🔥 Alta demanda regional", 
    "⭐ Ingredientes premium em quantidade limitada",
    "💝 Promoção especial por tempo limitado"
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-gray-50 to-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="bg-primary-100 text-primary-600 px-6 py-3 rounded-full font-semibold text-lg mb-6 inline-block">
              🚀 Por Que Escolher Nossos Alfajores?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-6xl font-black gradient-text mb-8"
          >
            Benefícios que Vão Além
            <span className="block">do Sabor Irresistível!</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Ao escolher nossos alfajores, você não está apenas optando por um prazer delicioso, mas fazendo uma <strong className="text-primary-600">escolha por qualidade de vida</strong> e momentos especiais.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 card-hover group"
              >
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {benefit.highlight}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 rounded-3xl p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-pattern opacity-20"></div>
          
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-accent-300 mx-auto mb-4" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-5xl font-black text-white mb-8"
            >
              Recupere a Magia nas Pequenas Coisas
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Não deixe que a correria do dia-a-dia tire esses momentos de você. <strong className="text-accent-200">Experimente nossos alfajores</strong> e descubra o que significa saborear a vida. Sinta a leveza e o prazer a cada mordida!
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                  >
                    <IconComponent className="w-10 h-10 text-accent-300 mx-auto mb-4" />
                    <h4 className="text-white font-bold mb-2">{guarantee.title}</h4>
                    <p className="text-white/80 text-sm">{guarantee.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openPurchaseLink}
              className="btn-accent flex items-center justify-center space-x-3 mx-auto shadow-2xl"
            >
              <Heart className="w-6 h-6" />
              <span>Sim! Quero Transformar Meus Momentos</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-red-50 border-2 border-red-200 rounded-3xl p-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Timer className="w-16 h-16 text-red-600 mx-auto mb-4" />
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-5xl font-black text-red-600 mb-6"
          >
            ⚠️ Atenção: Disponibilidade Limitada!
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Nossa produção é <strong className="text-red-600">limitada e artesanal</strong>. Não perca a chance de experimentar a felicidade em cada mordida!
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {urgencyReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-xl border border-red-100 text-center"
              >
                <span className="text-gray-700 font-medium">{reason}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Porque você merece um doce tão especial quanto você! ❤️
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openPurchaseLink}
              className="btn-primary flex items-center justify-center space-x-3 mx-auto shadow-2xl text-2xl px-12 py-6"
            >
              <Timer className="w-8 h-8" />
              <span>Garantir Meu Alfajor AGORA!</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            
            <p className="text-sm text-gray-600 mt-4">
              ✅ Entrega rápida • ✅ Satisfação garantida • ✅ Produção limitada
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}