import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars, faXmark, faArrowRight,
  faGamepad, faMobileScreenButton, faLaptop, faMicrochip,
} from '@fortawesome/free-solid-svg-icons'
import imagem01 from '../img/imagem01.jpg'
import imagem02 from '../img/imagem02.jpg'

const menu = ['Início', 'Jogos', 'Celulares', 'Informática', 'Eletrônicos']

const noticias = [
  {
    titulo: 'Tecnologia e Produtividade: o setup ideal para um ambiente de trabalho eficiente',
    img: imagem01,
    categoria: 'Informática',
    texto: 'Comece o dia com uma boa xícara de café e as ferramentas certas ao seu lado. A tecnologia faz parte da nossa rotina, tornando o trabalho mais produtivo, organizado e eficiente em qualquer ambiente.',
  },
  {
    titulo: 'Tecnologia e Produtividade: dicas para otimizar seu espaço de trabalho',
    img: imagem02,
    categoria: 'Eletrônicos',
    texto: 'A tecnologia está presente em todos os aspectos da nossa vida, desde o trabalho até o lazer. Com as ferramentas certas, podemos otimizar nosso tempo e aumentar a produtividade.',
  },
]

const recentes = [
  '5 dicas para transformar seu espaço de trabalho em um ambiente mais produtivo.',
  'Como a tecnologia e pequenos hábitos podem melhorar sua rotina diária.',
]

const categorias = [
  { nome: 'Jogos', icone: faGamepad },
  { nome: 'Celulares', icone: faMobileScreenButton },
  { nome: 'Informática', icone: faLaptop },
  { nome: 'Eletrônicos', icone: faMicrochip },
]

export default function TecBlog() {
  const [categoria, setCategoria] = useState('Início')
  const [aberto, setAberto] = useState(false)

  const filtradas = noticias.filter(
    (n) => categoria === 'Início' || n.categoria === categoria,
  )

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
        <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex flex-col items-center">
            <div className="w-full flex items-center justify-between md:justify-center">
            <a
                href="#"
                className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
            >
                Tec<span className="text-blue-600">Blog.</span>
            </a>

            <button
                type="button"
                className="md:hidden text-xl text-slate-700"
                onClick={() => setAberto(!aberto)}
                aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={aberto}
            >
                <FontAwesomeIcon icon={aberto ? faXmark : faBars} />
            </button>
            </div>

            <nav className="hidden md:flex items-center justify-center gap-8 mt-5">
            {menu.map((m) => (
                <button
                key={m}
                onClick={() => setAberto(false)}
                className={`transition ${
                    categoria === m
                    ? 'text-blue-600 font-medium'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                >
                {m}
                </button>
            ))}
            </nav>
        </div>

        {aberto && (
            <nav className="md:hidden flex flex-col gap-5 px-6 py-5 border-t border-slate-200 bg-white">
            {menu.map((m) => (
                <button
                key={m}
                onClick={() => setAberto(false)}
                className={`text-left transition ${
                    categoria === m
                    ? 'text-blue-600 font-medium'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                >
                {m}
                </button>
            ))}
            </nav>
        )}
        </header>

      <main className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          {filtradas.map((n) => (
            <article key={n.titulo} className="mb-14">
              <p className="text-sm uppercase tracking-widest text-neutral-400">
                29 de maio de 2026
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                {n.titulo}
              </h2>
              <img
                src={n.img}
                alt={n.titulo}
                className="mt-6 w-full rounded-2xl"
              />

              <p className="mt-4 text-lg text-neutral-500 leading-relaxed">{n.texto}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-base text-blue-600 hover:gap-3 transition-all"
              >
                Leia mais <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
          ))}
        </div>

        <aside className="space-y-10 h-fit">
          <section className='border-1 border-neutral-200 p-4 rounded-2xl'>
            <h3 className="text-base uppercase tracking-widest font-semibold text-neutral-900">
              Postagens recentes
            </h3>
            <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
              {recentes.map((r) => (
                <div key={r} className="py-4">
                  <p>{r}</p>
                  <a
                    href="#"
                    className="mt-2 inline-flex items-center gap-2 text-base text-blue-600 hover:gap-3 transition-all"
                  >
                    Leia mais <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className='border-1 border-neutral-200 p-4 rounded-2xl'>
            <h3 className="text-base uppercase tracking-widest font-semibold text-neutral-900">Categorias</h3>
            <ul className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
              {categorias.map((c) => (
                <li key={c.nome}>
                  <button
                    onClick={() => setCategoria(c.nome)}
                    className="w-full flex items-center gap-3 py-3 text-base text-left hover:text-blue-600 transition"
                  >
                    <FontAwesomeIcon icon={c.icone} className="w-5 text-blue-600" />
                    {c.nome}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </main>

      <footer className="py-8 text-center text-sm text-neutral-400 border-t border-neutral-200">
        © 2026 TecBlog - Projeto G&amp;P | Todos os direitos reservados
      </footer>
    </div>
  )
}