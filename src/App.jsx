import { useState } from 'react';
import {
  Code2 as Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code2,
  Network,
  Megaphone,
  ChevronDown,
  ChevronUp,
  Send,
  Globe,
} from 'lucide-react';

const translations = {
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      title: 'Développeur Web',
      subtitle: '& Passionné de Réseaux',
      desc: "Jeune diplômé en Réseaux et Génie Logiciel, je conçois des applications web fullstack et j'explore l'infrastructure réseau et l'IoT. Basé à Cotonou, Bénin.",
      cta1: 'Voir mes projets',
      cta2: 'Télécharger mon CV',
    },
    about: {
      title: 'À propos de moi',
      text: "Jeune dynamique passionné par le digital et l'engagement communautaire, je débute mon parcours professionnel dans le développement web tout en cultivant une double expertise en réseaux informatiques. J'aime transformer des idées en produits concrets, qu'il s'agisse d'une application de gestion agro-pastorale ou d'un système d'arrosage intelligent. Curieux et autonome, je m'investis pleinement dans chaque projet, du code à la mise en production.",
      stats: [
        { label: 'Projets réalisés', value: '5+' },
        { label: 'Technologies maîtrisées', value: '15+' },
        { label: 'Langues parlées', value: '4' },
      ],
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Trois domaines, une même exigence',
      dev: {
        title: 'Développement Web',
        items: [
          'Next.js',
          'React',
          'Django 5',
          'Node.js',
          'Express.js',
          'PostgreSQL',
          'HTMX',
          'PHP',
          'Prisma',
          'Symfony',
        ],
      },
      network: {
        title: 'Réseaux & Infrastructure',
        items: [
          'Cisco Packet Tracer',
          'VLAN',
          'Routing & Switching',
          'Architecture Hub & Spoke',
          'Linux',
          'Git/GitHub',
        ],
      },
      digital: {
        title: 'Digital & Communication',
        items: [
          'Community Management',
          'Réseaux Sociaux',
          'Rédaction Web',
          'Veille Technologique',
          'Gestion de Contenu',
        ],
      },
    },
    projects: {
      title: 'Projets',
      subtitle: 'Études de cas détaillées',
      featured: 'Projet phare',
      viewCase: "Voir l'étude de cas",
      hideCase: 'Réduire',
      liveLink: 'Voir en ligne',
      sourceCode: 'Code source',
      techUsed: 'Technologies utilisées',
      challenge: 'Le défi',
      solution: 'La solution',
      result: 'Le résultat',
      items: [
        {
          key: 'fermeapp',
          title: 'FermeApp',
          featured: true,
          tagline: 'Plateforme de gestion agro-pastorale',
          tech: ['Django 5', 'PostgreSQL', 'HTMX', 'CSS', 'Python'],
          link: 'https://fermeapp.vercel.app',
          repo: 'https://github.com/Walid-Yanni/Projet_memoire_git_depot',
          challenge:
            "Les fermes agro-pastorales du Sahel manquent d'outils numériques adaptés pour suivre leurs lots, traitements et comptages, freinant leur productivité et leur professionnalisation.",
          solution:
            "Développement d'une plateforme web complète avec un backend Django 5 robuste, une base de données PostgreSQL structurée, et une interface HTMX offrant des rechargements partiels sans complexité d'une SPA. Gestion des lots, traitements et comptages avec validations métier alignées sur les besoins réels du terrain.",
          result:
            'Une solution fonctionnelle et déployée en production, directement utilisable par les exploitants pour digitaliser leur suivi quotidien et améliorer leur prise de décision.',
        },
        {
          key: 'smartirrigation',
          title: 'Smart Irrigation',
          featured: true,
          tagline: "Système d'arrosage automatique intelligent (IoT)",
          tech: ['Python', 'ESP32', 'Arduino IDE', 'Capteurs IoT'],
          link: '',
          challenge:
            "L'arrosage manuel des cultures est chronophage et peu précis, entraînant un gaspillage d'eau et une gestion inefficace des ressources agricoles, un enjeu majeur pour les zones sahéliennes.",
          solution:
            "Conception d'un système d'arrosage automatique basé sur un microcontrôleur ESP32, programmé en Python via l'IDE Arduino. Le système collecte des données d'humidité et déclenche l'irrigation de manière autonome selon des seuils définis, réalisé dans le cadre du Hub d'Innovation d'Epitech.",
          result:
            "Un prototype IoT fonctionnel démontrant la faisabilité d'une irrigation intelligente et économe en eau, avec un fort potentiel d'application dans le secteur agricole local.",
        },
        {
          key: 'flowos',
          title: 'FlowOS',
          featured: false,
          tagline: 'Application de productivité fullstack',
          tech: ['Next.js', 'React'],
          link: '',
          challenge:
            "Les équipes ont besoin d'un outil unifié combinant gestion de tâches, projets et notes, sans jongler entre plusieurs applications comme Notion ou Trello.",
          solution:
            "Conception et développement full-stack d'une application de productivité sous Next.js après exploration de plusieurs stacks technologiques, réalisée lors du stage à Epitech Hub d'Innovations.",
          result:
            'Une application fonctionnelle mêlant gestion de tâches, projets et notes dans une interface fluide, développée en environnement multiculturel et collaboratif.',
        },
        {
          key: 'hubspoke',
          title: 'Architecture Hub and Spoke',
          featured: false,
          tagline: 'Simulation réseau WAN sur Cisco Packet Tracer',
          tech: ['Cisco Packet Tracer', 'VLAN', 'Routing'],
          link: '',
          challenge:
            "Une entreprise fictive répartie sur plusieurs zones géographiques a besoin d'une architecture réseau centralisée, sécurisée et facile à administrer.",
          solution:
            "Configuration complète d'un réseau WAN selon une architecture Hub and Spoke sur Cisco Packet Tracer : configuration des routeurs, VLAN, routage inter-sites et sécurisation des flux.",
          result:
            "Une simulation fonctionnelle démontrant une maîtrise concrète des concepts d'architecture réseau d'entreprise.",
        },
      ],
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Une opportunité, une question ? Écrivez-moi.',
      name: 'Nom complet',
      email: 'Email',
      message: 'Votre message',
      send: 'Envoyer le message',
      sent: 'Message prêt à être envoyé via votre messagerie !',
      info: 'Informations',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Web Developer',
      subtitle: '& Networking Enthusiast',
      desc: 'Recent graduate in Networks and Software Engineering, I build fullstack web applications and explore network infrastructure and IoT. Based in Cotonou, Benin.',
      cta1: 'View my projects',
      cta2: 'Download my CV',
    },
    about: {
      title: 'About Me',
      text: "A dynamic young professional passionate about digital technology and community engagement, I'm starting my career in web development while cultivating dual expertise in computer networking. I love turning ideas into real products, whether it's a farm management app or a smart irrigation system. Curious and self-driven, I fully invest myself in every project, from code to production.",
      stats: [
        { label: 'Projects completed', value: '5+' },
        { label: 'Technologies mastered', value: '15+' },
        { label: 'Languages spoken', value: '4' },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Three domains, one standard of excellence',
      dev: {
        title: 'Web Development',
        items: [
          'Next.js',
          'React',
          'Django 5',
          'Node.js',
          'Express.js',
          'PostgreSQL',
          'HTMX',
          'PHP',
          'Prisma',
          'Symfony',
        ],
      },
      network: {
        title: 'Networks & Infrastructure',
        items: [
          'Cisco Packet Tracer',
          'VLAN',
          'Routing & Switching',
          'Hub & Spoke Architecture',
          'Linux',
          'Git/GitHub',
        ],
      },
      digital: {
        title: 'Digital & Communication',
        items: [
          'Community Management',
          'Social Media',
          'Web Writing',
          'Tech Watch',
          'Content Management',
        ],
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'Detailed case studies',
      featured: 'Featured project',
      viewCase: 'View case study',
      hideCase: 'Collapse',
      liveLink: 'View live',
      sourceCode: 'Source code',
      techUsed: 'Technologies used',
      challenge: 'The Challenge',
      solution: 'The Solution',
      result: 'The Result',
      items: [
        {
          key: 'fermeapp',
          title: 'FermeApp',
          featured: true,
          tagline: 'Agro-pastoral farm management platform',
          tech: ['Django 5', 'PostgreSQL', 'HTMX', 'CSS', 'Python'],
          link: 'https://fermeapp.vercel.app',
          repo: 'https://github.com/Walid-Yanni/Projet_memoire_git_depot',
          challenge:
            'Agro-pastoral farms in the Sahel lack suitable digital tools to track their lots, treatments and headcounts, hindering productivity and professionalization.',
          solution:
            'Built a complete web platform with a robust Django 5 backend, a structured PostgreSQL database, and an HTMX interface offering partial page reloads without the complexity of a SPA. Lot, treatment and headcount management with business validations aligned with real field needs.',
          result:
            'A functional, production-deployed solution directly usable by farmers to digitize their daily tracking and improve decision-making.',
        },
        {
          key: 'smartirrigation',
          title: 'Smart Irrigation',
          featured: true,
          tagline: 'Smart automatic watering system (IoT)',
          tech: ['Python', 'ESP32', 'Arduino IDE', 'IoT Sensors'],
          link: '',
          challenge:
            'Manual crop watering is time-consuming and imprecise, leading to water waste and inefficient resource management, a major issue in Sahelian regions.',
          solution:
            'Designed an automatic watering system based on an ESP32 microcontroller, programmed in Python via the Arduino IDE. The system collects moisture data and triggers irrigation autonomously based on defined thresholds, built during the Epitech Innovation Hub program.',
          result:
            'A functional IoT prototype demonstrating the feasibility of smart, water-efficient irrigation, with strong potential for local agricultural application.',
        },
        {
          key: 'flowos',
          title: 'FlowOS',
          featured: false,
          tagline: 'Fullstack productivity application',
          tech: ['Next.js', 'React'],
          link: '',
          challenge:
            'Teams need a unified tool combining task management, projects and notes, without juggling multiple apps like Notion or Trello.',
          solution:
            'Designed and developed a fullstack productivity application on Next.js after exploring several tech stacks, built during the internship at Epitech Innovation Hub.',
          result:
            'A functional application combining task, project and note management in a smooth interface, developed in a multicultural, collaborative environment.',
        },
        {
          key: 'hubspoke',
          title: 'Hub and Spoke Architecture',
          featured: false,
          tagline: 'WAN network simulation on Cisco Packet Tracer',
          tech: ['Cisco Packet Tracer', 'VLAN', 'Routing'],
          link: '',
          challenge:
            'A fictional company spread across multiple geographic zones needs a centralized, secure and easy-to-administer network architecture.',
          solution:
            'Full configuration of a WAN network following a Hub and Spoke architecture on Cisco Packet Tracer: router configuration, VLANs, inter-site routing and traffic security.',
          result:
            'A functional simulation demonstrating solid, hands-on mastery of enterprise network architecture concepts.',
        },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'An opportunity, a question? Write to me.',
      name: 'Full name',
      email: 'Email',
      message: 'Your message',
      send: 'Send message',
      sent: 'Message ready to send via your mail client!',
      info: 'Info',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const [expandedProject, setExpandedProject] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const t = translations[lang];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Contact portfolio - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.email}`);
    window.location.href = `mailto:walidhamadouyanni@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background decorative blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            W. Hamadou Yanni
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-cyan-400 transition"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="hover:text-cyan-400 transition"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="hover:text-cyan-400 transition"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-cyan-400 transition"
            >
              {t.nav.contact}
            </button>
          </div>
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition text-sm font-semibold"
          >
            <Globe size={14} />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 border border-white/10 text-sm text-cyan-300 font-medium">
            Cotonou, Bénin
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
            <br />
            <span className="text-white">{t.hero.subtitle}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-bold hover:scale-105 transition shadow-lg shadow-fuchsia-500/25"
            >
              {t.hero.cta1}
            </button>
            <a
              href="/CV_Walid_Yanni.pdf"
              download="CV_Walid_Yanni.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 font-bold transition"
            >
              <Download size={18} />
              {t.hero.cta2}
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com/Walid-Yanni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/walid-hamadou-yanni-073129286"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:walidhamadouyanni@gmail.com"
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed text-center mb-12">
            {t.about.text}
          </p>
          <div className="grid grid-cols-3 gap-4">
            {t.about.stats.map((s, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {t.skills.title}
              </span>
            </h2>
            <p className="text-slate-400">{t.skills.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                data: t.skills.dev,
                color: 'from-fuchsia-500 to-purple-500',
              },
              {
                icon: Network,
                data: t.skills.network,
                color: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Megaphone,
                data: t.skills.digital,
                color: 'from-orange-500 to-amber-500',
              },
            ].map((block, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center mb-4`}
                >
                  <block.icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-4">{block.data.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {block.data.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-slate-300 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {t.projects.title}
              </span>
            </h2>
            <p className="text-slate-400">{t.projects.subtitle}</p>
          </div>

          <div className="space-y-6">
            {t.projects.items.map((p) => {
              const isOpen = expandedProject === p.key;
              return (
                <div
                  key={p.key}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    p.featured
                      ? 'border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        {p.featured && (
                          <span className="inline-block mb-2 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white">
                            {t.projects.featured}
                          </span>
                        )}
                        <h3 className="text-2xl font-bold">{p.title}</h3>
                        <p className="text-slate-400 mt-1">{p.tagline}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition whitespace-nowrap"
                        >
                          {t.projects.liveLink} <ExternalLink size={14} />
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition whitespace-nowrap"
                        >
                          {t.projects.sourceCode} <Github size={14} />
                        </a>
                      )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpandedProject(isOpen ? null : p.key)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition"
                    >
                      {isOpen ? t.projects.hideCase : t.projects.viewCase}
                      {isOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {isOpen && (
                      <div className="mt-6 pt-6 border-t border-white/10 space-y-5">
                        <div>
                          <h4 className="text-sm font-bold text-fuchsia-400 uppercase tracking-wide mb-1.5">
                            {t.projects.challenge}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {p.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wide mb-1.5">
                            {t.projects.solution}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {p.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wide mb-1.5">
                            {t.projects.result}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {p.result}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-slate-400">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-500">
                  <Phone size={18} />
                </div>
                <span className="text-slate-300">+229 46 75 55 74</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                  <Mail size={18} />
                </div>
                <span className="text-slate-300">
                  walidhamadouyanni@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-300">Cotonou, Bénin</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Walid-Yanni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition text-sm font-semibold"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/walid-hamadou-yanni-073129286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition text-sm font-semibold"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder={t.contact.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-400 outline-none text-white placeholder:text-slate-500 transition"
              />
              <input
                type="email"
                placeholder={t.contact.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-400 outline-none text-white placeholder:text-slate-500 transition"
              />
              <textarea
                placeholder={t.contact.message}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-400 outline-none text-white placeholder:text-slate-500 transition resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-bold hover:scale-[1.02] transition shadow-lg shadow-fuchsia-500/25"
              >
                <Send size={16} />
                {t.contact.send}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/5 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Walid Hamadou Yanni — {t.footer.rights}
      </footer>
    </div>
  );
}
