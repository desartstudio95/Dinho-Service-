import { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Shield, 
  Star, 
  Crown, 
  CheckCircle, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin,
  UserCheck,
  Building2,
  Mic2,
  Car,
  ScrollText
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-white/10' : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://i.ibb.co/tTCN3wjD/IMG-20260223-111825-953.jpg" 
            alt="Dinho Service Logo" 
            className="h-9 w-9 object-cover rounded-full border border-gold-metallic/30" 
          />
          <span className="text-lg font-display font-bold text-white tracking-wider group-hover:text-gold-light transition-colors">
            DINHO <span className="text-gold-metallic">SERVICE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-light transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-metallic transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://wa.me/55849537052" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-transparent border border-gold-metallic text-gold-metallic hover:bg-gold-metallic hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-widest rounded-sm"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg uppercase tracking-widest text-white hover:text-gold-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/55849537052"
                target="_blank"
                rel="noopener noreferrer" 
                className="mt-4 px-8 py-3 bg-gold-metallic text-black font-bold uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://i.ibb.co/kV2G0Zkt/e35dac00-a8d1-46d1-8220-b9895504caee.png" 
          alt="Equipe de Segurança" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-3">
            <Crown size={40} className="text-gold-metallic animate-pulse" />
          </div>
          <h2 className="text-gold-light text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 font-bold">
            Excelência em Segurança Privada
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 leading-tight">
            Proteção com <span className="text-gold-gradient">Excelência</span>,<br />
            Segurança com <span className="text-gold-gradient">Autoridade</span>.
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6 font-light">
            Especialistas em segurança privada, eventos e protocolo executivo. 
            Sua tranquilidade é a nossa missão absoluta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-gold-metallic text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-xs"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="https://wa.me/55849537052" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-transparent border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-xs"
            >
              <Phone size={14} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const features = [
    { icon: <UserCheck size={24} />, text: "Profissionais Altamente Treinados" },
    { icon: <Shield size={24} />, text: "Atendimento Personalizado" },
    { icon: <Star size={24} />, text: "Discrição e Postura Impecável" },
    { icon: <Crown size={24} />, text: "Compromisso com a Excelência" },
  ];

  return (
    <section id="about" className="py-12 bg-neutral-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold-metallic/50"></div>
              <img 
                src="https://i.ibb.co/GQ4cv0zX/Screenshot-20260223-132124.jpg" 
                alt="Security Team" 
                className="w-full h-auto rounded-sm shadow-2xl transition-all duration-700"
              />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold-metallic/50"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold-metallic uppercase tracking-widest font-bold mb-1 text-xs">Quem Somos</h3>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Sobre a <span className="text-gold-gradient">Dinho Service</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              A Dinho Service é uma empresa especializada em segurança e protocolo, oferecendo soluções personalizadas com profissionalismo, discrição e alto padrão de atuação. 
              <br /><br />
              Nossa equipe é treinada para atuar com excelência em eventos, segurança patrimonial, escolta e proteção pessoal, garantindo que cada detalhe seja executado com a máxima precisão.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-full bg-neutral-900 border border-gold-metallic/30 flex items-center justify-center text-gold-metallic group-hover:bg-gold-metallic group-hover:text-black transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-xs">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: "Segurança Patrimonial",
      description: "Proteção de empresas, condomínios e instituições com monitoramento e controle de acesso rigoroso."
    },
    {
      icon: <UserCheck size={40} />,
      title: "Segurança Pessoal (VIP)",
      description: "Proteção executiva com discrição e eficiência para autoridades, empresários e personalidades."
    },
    {
      icon: <Mic2 size={40} />,
      title: "Segurança para Eventos",
      description: "Shows, formaturas, eventos corporativos e privados. Gestão de multidões e controle de perímetro."
    },
    {
      icon: <Car size={40} />,
      title: "Escolta e Acompanhamento",
      description: "Segurança em deslocamentos estratégicos, garantindo a integridade do cliente ponto a ponto."
    },
    {
      icon: <ScrollText size={40} />,
      title: "Protocolo e Cerimonial",
      description: "Organização, postura e acompanhamento em eventos oficiais, recepções e solenidades."
    }
  ];

  return (
    <section id="services" className="py-12 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-gold-metallic uppercase tracking-widest font-bold mb-1 text-xs">O Que Oferecemos</h3>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            Nossos <span className="text-gold-gradient">Serviços</span>
          </h2>
          <div className="w-12 h-1 bg-gold-metallic mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-5 bg-neutral-900/50 border border-white/5 hover:border-gold-metallic/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-metallic to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-3 text-gold-metallic group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-gold-light transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300">
                {service.description}
              </p>

              <div className="mt-3 flex items-center text-gold-metallic text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Saiba Mais <ChevronRight size={12} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    "Alto padrão de apresentação",
    "Equipe capacitada e treinada",
    "Atendimento 24h",
    "Planejamento estratégico",
    "Confidencialidade absoluta"
  ];

  return (
    <section id="differentials" className="py-12 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-gold-metallic uppercase tracking-widest font-bold mb-1 text-xs">Por que nos escolher</h3>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-5">
              Diferenciais que <br />
              <span className="text-gold-gradient">Inspiram Confiança</span>
            </h2>
            
            <div className="space-y-3">
              {items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-2.5 bg-black/40 border-l-4 border-gold-metallic rounded-r-lg hover:bg-black/60 transition-colors"
                >
                  <Star className="text-gold-metallic shrink-0" size={16} fill="#D4AF37" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gold-metallic/20 blur-3xl rounded-full"></div>
            <img 
              src="https://i.ibb.co/vvBP2zB8/Screenshot-20260223-132206.jpg" 
              alt="Security Professional" 
              className="relative w-full rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVisionValues = () => {
  return (
    <section className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          <div className="p-5 bg-neutral-900/30 rounded-lg border border-white/5 hover:border-gold-metallic/30 transition-colors">
            <div className="w-10 h-10 mx-auto bg-black border border-gold-metallic rounded-full flex items-center justify-center mb-3 text-gold-metallic">
              <Shield size={20} />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">Missão</h3>
            <p className="text-gray-400 text-xs">Garantir segurança com excelência e profissionalismo, protegendo o que é mais valioso para nossos clientes.</p>
          </div>
          
          <div className="p-5 bg-neutral-900/30 rounded-lg border border-white/5 hover:border-gold-metallic/30 transition-colors">
            <div className="w-10 h-10 mx-auto bg-black border border-gold-metallic rounded-full flex items-center justify-center mb-3 text-gold-metallic">
              <Star size={20} />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">Visão</h3>
            <p className="text-gray-400 text-xs">Ser referência absoluta em segurança e protocolo na região, reconhecida pela qualidade e integridade.</p>
          </div>
          
          <div className="p-5 bg-neutral-900/30 rounded-lg border border-white/5 hover:border-gold-metallic/30 transition-colors">
            <div className="w-10 h-10 mx-auto bg-black border border-gold-metallic rounded-full flex items-center justify-center mb-3 text-gold-metallic">
              <CheckCircle size={20} />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">Valores</h3>
            <p className="text-gray-400 text-xs">Ética inegociável, disciplina rigorosa, respeito mútuo, comprometimento total e discrição absoluta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Segurança Patrimonial',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const text = `*Novo Contato via Site*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Email:* ${formData.email}\n*Serviço:* ${formData.service}\n*Mensagem:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/55849537052?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-gold-metallic uppercase tracking-widest font-bold mb-1 text-xs">Fale Conosco</h3>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Solicite um <span className="text-gold-gradient">Orçamento</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Estamos prontos para atender sua demanda com a máxima agilidade e eficiência. Entre em contato e descubra como podemos proteger o que é importante para você.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-gold-metallic shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Telefone / WhatsApp</h4>
                  <p className="text-gray-400 text-xs">(84) 953 7052</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-gold-metallic shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Email</h4>
                  <p className="text-gray-400 text-xs">contato@dinhoservice.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-gold-metallic shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Área de Atuação</h4>
                  <p className="text-gray-400 text-xs">Atendemos em toda a região e estados vizinhos sob consulta.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-5 rounded-lg border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-[10px] font-medium text-gray-400 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-white focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic outline-none transition-colors text-xs"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-medium text-gray-400 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-white focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic outline-none transition-colors text-xs"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-medium text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-white focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic outline-none transition-colors text-xs"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-[10px] font-medium text-gray-400 mb-1">Tipo de Serviço</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-white focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic outline-none transition-colors text-xs"
                >
                  <option>Segurança Patrimonial</option>
                  <option>Segurança Pessoal (VIP)</option>
                  <option>Segurança para Eventos</option>
                  <option>Escolta e Acompanhamento</option>
                  <option>Protocolo e Cerimonial</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-medium text-gray-400 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-white focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic outline-none transition-colors text-xs"
                  placeholder="Descreva sua necessidade..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gold-metallic text-black font-bold uppercase tracking-widest py-2.5 hover:bg-white transition-all duration-300 text-xs"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <a href="#" className="flex items-center gap-2 mb-3">
              <img 
                src="https://i.ibb.co/tTCN3wjD/IMG-20260223-111825-953.jpg" 
                alt="Dinho Service Logo" 
                className="h-8 w-8 object-cover rounded-full border border-gold-metallic/30" 
              />
              <span className="text-base font-display font-bold text-white tracking-wider">
                DINHO <span className="text-gold-metallic">SERVICE</span>
              </span>
            </a>
            <p className="text-gray-500 text-[10px] leading-relaxed">
              Referência em segurança privada e serviços de protocolo. Proteção com excelência e autoridade para quem exige o melhor.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-3 text-[10px]">Links Rápidos</h4>
            <ul className="space-y-1.5 text-gray-500 text-[10px]">
              <li><a href="#hero" className="hover:text-gold-metallic transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-gold-metallic transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-gold-metallic transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-gold-metallic transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-3 text-[10px]">Serviços</h4>
            <ul className="space-y-1.5 text-gray-500 text-[10px]">
              <li>Segurança Patrimonial</li>
              <li>Segurança VIP</li>
              <li>Eventos e Shows</li>
              <li>Escolta Armada</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-3 text-[10px]">Redes Sociais</h4>
            <div className="flex gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:bg-gold-metallic hover:text-black transition-all duration-300">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:bg-gold-metallic hover:text-black transition-all duration-300">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:bg-gold-metallic hover:text-black transition-all duration-300">
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-[10px]">
            &copy; {new Date().getFullYear()} Dinho Service. Todos os direitos reservados.
          </p>
          <p className="text-gold-metallic/50 text-[10px] font-display tracking-widest">
            PROTEÇÃO COM EXCELÊNCIA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-metallic selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <MissionVisionValues />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/55849537052" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-500 transition-all duration-300 hover:scale-110 animate-bounce"
        title="Fale no WhatsApp"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
