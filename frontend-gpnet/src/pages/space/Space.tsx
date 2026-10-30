import { useState, type FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faBullseye, faFlask, faHandshake, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import equipe from '../img/equipe.png'
import fundo from '../img/fundo-list.png'

const destaques = [
  { titulo: 'Projetos atuais', texto: 'Integrando tecnologia e criatividade.', icone: faDiagramProject },
  { titulo: 'Planejamento futuro', texto: 'Metas e estratégias para o amanhã.', icone: faBullseye },
  { titulo: 'Pesquisa contínua', texto: 'Sempre atrás de novas oportunidades.', icone: faFlask },
  { titulo: 'Engajamento', texto: 'Conexões com a nossa comunidade.', icone: faHandshake },
]

const noticias = [
  { titulo: 'Expansão', texto: 'Estamos ampliando nossa infraestrutura para novos projetos.' },
  { titulo: 'Um novo começo', texto: 'Novas parcerias para missões internacionais.' },
  { titulo: 'G&P no Espaço!', texto: 'Primeiro teste de propulsor em órbita.' },
  { titulo: 'Missão de Fogo', texto: 'Testes de alta performance concluídos com sucesso.' },
  { titulo: 'O Futuro', texto: 'Planos para novas tecnologias de propulsão.' },
]

const redes = [faXTwitter, faInstagram, faYoutube, faLinkedin]

export default function Space() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function cadastrar(e: FormEvent) {
    e.preventDefault()
    setEnviado(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-600 font-sans">

      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <div className="absolute inset-0 bg-indigo-950/60" />
        <div className="relative max-w-6xl mx-auto w-full pt-24 pb-12 grid gap-10 items-center">
          <div>
            <h1 className="mt-4 text-6xl sm:text-8xl font-bold text-white leading-tight">
              Bem-vindo ao{' '}
              <span className="bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent">
                futuro
              </span>
            </h1>
            <p className="mt-6 test-base text-lg text-indigo-100">
              Agência Espacial G&amp;P - Inovação, tecnologia e propulsão espacial
            </p>
          </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <a href="#sobre" className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition">
                Explorar <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950">Sobre nós</h2>
          <div className="mt-3 h-1 w-16 bg-sky-500 rounded" />
          <p className="mt-6 leading-relaxed">
            A G&amp;P Agência Espacial desenvolve propulsores de alta performance para missões espaciais. Nossa missão é impulsionar a exploração do espaço com tecnologia de ponta e inovação contínua.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {destaques.map((d) => (
            <div
              key={d.titulo}
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:-translate-y-1 hover:border-sky-500 hover:shadow-lg transition duration-300"
            >
              <FontAwesomeIcon icon={d.icone} className="text-2xl text-sky-500" />
              <h3 className="mt-3 font-semibold text-indigo-950">{d.titulo}</h3>
              <p className="mt-1 text-sm">{d.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="equipe"
        className="relative scroll-mt-16 py-24 px-6 bg-cover bg-center md:bg-fixed" 
        style={{ backgroundImage: `url(${equipe})` }}
      >
        <div className="absolute inset-0 bg-neutral-950/65" /> 

        <div className="relative max-w-3xl mx-auto text-center"> 
          <h2 className="text-3xl md:text-5xl font-bold text-white">Nossa equipe</h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-sky-500 rounded" />
          <p className="mt-6 text-lg leading-relaxed text-indigo-100">
            Nosso time é formado por engenheiros, técnicos e especialistas comprometidos com a excelência. Trabalhamos juntos para criar soluções que atendam aos mais altos padrões de qualidade e eficiência.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-3 px-8 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition"
          >
            Saiba mais <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>

      <section id="noticias" className="scroll-mt-16 max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 text-center">Notícias</h2>
        <div className="mt-3 mx-auto h-1 w-16 bg-sky-500 rounded" />
        <div className="mt-10 divide-y divide-slate-300 border-y border-slate-300">
          {noticias.map((n, i) => (
            <a
              key={n.titulo}
              href="#"
              className="group flex items-center gap-6 py-6 hover:bg-white px-4 transition"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-indigo-950">{n.titulo}</h3>
                <p className="text-sm text-neutral-700">{n.texto}</p>
              </div>
              <a className='text-slate-400 gap-3 font-semibold group-hover:text-sky-500 group-hover:translate-x-1 transition'>
              Leia mais
              </a>
              
            </a>
          ))}
        </div>
      </section>

      <section id="contato" className="scroll-mt-16 bg-indigo-950 py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="mt-4 text-3xl font-bold text-white">
            Receba as novidades da{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              G&amp;P Agência Espacial
            </span>
          </h2>
          <form onSubmit={cadastrar} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="flex-1 px-5 py-3 rounded-full bg-indigo-900 border border-indigo-700 text-white focus:border-sky-500 outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition"
            >
              Enviar
            </button>
          </form>
          {enviado && <p className="mt-4 text-orange-400">Pronto! Você vai receber as novidades. ✔</p>}
        </div>
      </section>

      <footer className="bg-slate-950 py-8 px-6 text-center text-sm text-slate-400">
        <p className="mb-1">© 2026 G&amp;P Agência Espacial - Projeto G&amp;P | Todos os direitos reservados</p>
        <div className="flex justify-center gap-6 text-xl">
          {redes.map((r, i) => (
            <a key={i} href="#" className="hover:text-sky-500 transition">
              <FontAwesomeIcon icon={r} />
            </a>
          ))}
        </div>
        <p className="mt-1">#ExplorandoOFuturo</p>
      </footer>
    </div>
  )
}