import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Star } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const openPurchaseLink = () => {
    if (true) {
      window.open('', '_blank')
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    { label: 'Início', section: 'hero' },
    { label: 'Produto', section: 'about' },
    { label: 'Benefícios', section: 'services' },
    { label: 'Contato', section: 'contact' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: "(55) 44991-0407",
      href: "tel:+5544991-0407"
    },
    {
      icon: Mail,
      text: "ffbrunoff@yahoo.com.br",
      href: "mailto:ffbrunoff@yahoo.com.br"
    },
    {
      icon: MapPin,
      text: "Padre Lebret 801 G05 Bloco 03",
      href: "#"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Alfajrr</h3>
                  <p className="text-gray-300">Chocolates Artesanais</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Transformando momentos comuns em experiências especiais com nossos alfajores artesanais. <strong className="text-accent-300">Qualidade premium</strong> que você pode sentir em cada mordida.
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300 font-medium">Mais de 1000 clientes satisfeitos</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openPurchaseLink}
                className="btn-accent"
              >
                Experimentar Agora! 🍫
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-accent-300">Navegação</h4>
              <ul className="space-y-4">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={link.section}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-gray-300 hover:text-accent-300 transition-colors duration-300 font-medium hover:translate-x-2 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-accent-300">Contato</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={contact.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-accent-300 transition-colors duration-300 group"
                      >
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{contact.text}</span>
                      </a>
                    </motion.li>
                  )
                })}
              </ul>

              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <h5 className="font-bold text-accent-300 mb-3">Horário de Atendimento</h5>
                <p className="text-gray-300">
                  Segunda a Sexta<br />
                  <span className="text-white font-semibold">8h às 18h</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-center md:text-left">
                © {currentYear} Alfajrr. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Criado com</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors font-medium italic hover:underline"
                >
                  Papum
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="text-gray-400 text-sm">e muito sabor!</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}