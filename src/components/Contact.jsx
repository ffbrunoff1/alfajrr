import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, HelpCircle, ArrowRight } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        "recipientEmail": "ffbrunoff@yahoo.com.br",
        "token": token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }

    recaptchaRef.current.reset()
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 44991-0407",
      action: "tel:+5544991-0407"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ffbrunoff@yahoo.com.br",
      action: "mailto:ffbrunoff@yahoo.com.br"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Padre Lebret 801 G05 Bloco 03",
      action: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      action: "#"
    }
  ]

  const faqItems = [
    {
      question: "Qual é o prazo de validade dos alfajores?",
      answer: "Nossos alfajores são produzidos diariamente e têm validade de 15 dias quando armazenados adequadamente em local seco e arejado."
    },
    {
      question: "Vocês fazem entregas? Qual é o prazo?",
      answer: "Sim! Fazemos entregas em toda a região. O prazo varia de 1 a 3 dias úteis dependendo da sua localização. Entre em contato para mais detalhes."
    },
    {
      question: "Os alfajores contêm glúten ou lactose?",
      answer: "Nossos alfajores tradicionais contêm glúten e lactose. Consulte-nos sobre versões especiais para pessoas com restrições alimentares."
    },
    {
      question: "Qual é a quantidade mínima para pedidos?",
      answer: "Não há quantidade mínima! Você pode pedir desde 1 unidade até grandes quantidades para eventos e comemorações."
    },
    {
      question: "Vocês fazem alfajores personalizados para eventos?",
      answer: "Sim! Fazemos alfajores personalizados para casamentos, aniversários, eventos corporativos e outras celebrações especiais."
    },
    {
      question: "Como posso ter certeza da qualidade?",
      answer: "Garantimos 100% de satisfação! Se não ficar completamente satisfeito com seu pedido, devolvemos seu dinheiro sem questionamentos."
    }
  ]

  const openPurchaseLink = () => {
    if (true) {
      window.open('', '_blank')
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
              💬 Vamos Conversar!
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-6xl font-black gradient-text mb-8"
          >
            Entre em Contato
            <span className="block">e Tire Suas Dúvidas!</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Estamos aqui para ajudar você a ter a melhor experiência com nossos alfajores. <strong className="text-primary-600">Fale conosco</strong> e esclareça todas as suas dúvidas!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <MessageSquare className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie sua Mensagem</h3>
                <p className="text-gray-600">Responderemos em até 24 horas</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Assunto
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="pedido">Fazer Pedido</option>
                      <option value="duvida">Dúvida sobre Produtos</option>
                      <option value="entrega">Informações de Entrega</option>
                      <option value="evento">Pedido para Evento</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Send className="w-4 h-4 inline mr-2" />
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  size="invisible"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center font-medium ${
                      status.isError
                        ? 'bg-red-100 text-red-700 border border-red-200'
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Pronto para Pedir?</h3>
              <p className="text-white/90 text-lg mb-8">
                Não perca tempo! Garante já seus alfajores e transforme seu dia em algo especial.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openPurchaseLink}
                className="btn-accent flex items-center justify-center space-x-3 mx-auto shadow-2xl"
              >
                <ArrowRight className="w-6 h-6" />
                <span>Fazer Pedido Agora!</span>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg card-hover"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <a
                          href={info.action}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-5xl font-black gradient-text mb-6">
              Perguntas Frequentes
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas principais dúvidas antes de fazer seu pedido
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    ?
                  </span>
                  {item.question}
                </h4>
                <p className="text-gray-600 leading-relaxed ml-9">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Fazer Pergunta Personalizada
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}