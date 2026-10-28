import { useState, type FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo-museu-nacional.png'
import background from '../img/museu-entrada-principal.png'
import acervo from '../img/acervo.jpg'
import imagem1 from '../img/imagem1.jpg'
import imagem2 from '../img/imagem2.jpg'
import imagem3 from '../img/imagem3.jpg'
import imagem4 from '../img/imagem4.jpg'
import imagem5 from '../img/imagem5.jpg'
import imagem6 from '../img/imagem6.jpg'
import resumo from '../img/resumo01.png'
import fundodesktop from '../img/fundo-desktop.png'

const menu = [
  { nome: 'Início', href: '#home'},
  { nome: 'Acervo', href: '#acervo' },
  { nome: 'Exposições', href: '#exposicoes' },
  { nome: 'Contato', href: '#contato'},
]

const exposicoes = [
  {
    titulo: 'O Crânio de Luzia',
    texto: 'O fóssil humano mais antigo das Américas, modelado em 3D com alta precisão.',
  },
  {
    titulo: 'Megafauna Extinta',
    texto: 'Reconstruções da preguiça-gigante e do tigre-dentes-de-sabre.',
  },
  {
    titulo: 'Plantas do Brasil',
    texto: 'Banco de dados com a flora nativa da região central do país.',
  },
]

const fotos = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

export default function Museum() {
  const [aberto, setAberto] = useState(false)
  const [foto, setFoto] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [dia, setDia] = useState('')
  const [enviado, setEnviado] = useState(false)

  function agendar(e: FormEvent) {
    e.preventDefault()
    setEnviado(true)
    setEmail('')
    setDia('')
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-700 font-sans">
      <header className="fixed top-0 inset-x-0 z-40 bg-stone-950/85 backdrop-blur border-b border-amber-700/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-serif text-xl text-white">
            <img src={logo} alt="Logo do museu" className="h-5" />
          </a>

          <button
            className="md:hidden text-2xl text-amber-500"
            onClick={() => setAberto(!aberto)}
          >
            <FontAwesomeIcon icon={aberto ? faXmark : faBars} />
          </button>

          <nav
            className={`${aberto ? 'flex' : 'hidden'} md:flex absolute md:static top-16 inset-x-0 flex-col md:flex-row gap-4 md:gap-8 bg-stone-950 md:bg-transparent p-6 md:p-0`}
          >
            {menu.map((m) => (
              <a
                key={m.nome}
                href={m.href}
                onClick={() => setAberto(false)}
                className="flex items-center gap-2 text-stone-300 hover:text-amber-500 transition"
              >
                {m.nome}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative flex items-center justify-center p-15 text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-stone-950/70" />
        <div className="relative max-w-3xl pt-10">
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight">
            Memória histórica,{' '}
            <span className="italic text-amber-500">futuro digital</span>
          </h1>
          <p className="mt-6 text-lg text-stone-300">
            O maior acervo de história natural do Brasil, agora em uma interface aberta a todos.
          </p>
          <a
            href="#acervo"
            className="mt-8 inline-block px-8 py-3 bg-amber-600 text-white hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition duration-500"
          >
            Explorar acervo
          </a>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6">
        <section id="acervo" className="scroll-mt-20 py-20 grid md:grid-cols-2 gap-12 items-center">
          <img src={acervo} alt="Acervo digital" className="w-full h-80 object-cover shadow-xl" />
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">
              Nossos acervos e pesquisa
            </h2>
            <p className="mt-5 leading-relaxed">
              Memória Histórica e Futuro Digital — Desde 1603 Com uma trajetória institucional pioneira
              que remonta a 1603, o nosso museu consolidou-se como um dos pilares fundamentais da salvaguarda
              patrimonial e da investigação científica no Brasil. Unindo séculos de história à vanguarda tecnológica,
              orgulhamo-nos de disponibilizar uma plataforma robusta que hoje reúne mais de 250.000 itens totalmente digitalizados.
            </p>
            <p className="mt-4 leading-relaxed">
              TPara viabilizar este ecossistema de conhecimento, todo o nosso acervo físico passou por
              um rigoroso processo de catalogação técnico-científica, higienização e captura digital em
              altíssima resolução. Essa transição para o ambiente digital não apenas garante a preservação
              definitiva das matrizes históricas contra a ação do tempo, mas também democratiza o acesso global às nossas coleções.
            </p>
          </div>
        </section>

        <section id="exposicoes" className="scroll-mt-20 pb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center">
            Exposições em cartaz
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {exposicoes.map((e) => (
              <article
                key={e.titulo}
                className="px-8 pb-8 bg-white border border-stone-200 hover:-translate-y-2 hover:border-amber-600 hover:shadow-lg transition duration-300"
              >
                <h3 className="mt-4 font-serif text-xl text-amber-500">{e.titulo}</h3>
                <p className="mt-2 text-sm">{e.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center">
            Acervo visual
          </h2>
          <div className="mt-10 columns-3 md:columns-6 gap-4">
            {fotos.map((f, i) => (
              <img
                key={f}
                src={f}
                alt={`Foto ${i + 1}`}
                className="mb-4 w-full hover:opacity-80 transition"
              />
            ))}
          </div>
        </section>
      </main>

      <section id="contato" className="scroll-mt-16 bg-stone-900 text-stone-300 py-20 px-6"
        style={{ backgroundImage: `url(${fundodesktop})` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-white">Agendar visita</h2>
          <p className="mt-2">Escolha um dia e deixe seu e-mail para confirmarmos a disponibilidade.</p>
        
          <form onSubmit={agendar} className="mt-8 flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="px-5 py-3 bg-stone-800 border border-stone-700 text-white focus:border-amber-500 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-600 text-white hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition duration-500 transition"
            >
              Verificar disponibilidade
            </button>
          </form>
          </div>
          {enviado && (
            <p className="mt-4 text-amber-500">Recebemos seu pedido! Em breve enviamos a confirmação. ✔</p>
          )}
           <img src={resumo} alt="Resumo do museu" className="w-full max-h-96 object-cover shadow-xl" />
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-stone-500 bg-stone-950">
        © 2026 Museu Nacional - Projeto G&amp;P
      </footer>

      {foto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setFoto(null)}
        >
          <button className="absolute top-6 right-6 text-3xl text-white">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <img src={foto} alt="Foto ampliada" className="max-h-full max-w-full" />
        </div>
      )}
    </div>
  )
}