 import { useState, type FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faArrowRight, faLaptopCode, faChalkboardUser, faUserTie, faLandmark, faBriefcase, faChartLine, faRobot} from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo.png'
import cidade from '../img/cidade.jpg'
import doutor from '../img/doutor.jpg'
import mundo from '../img/mundo.jpg'
import taxi from '../img/taxi.jpg'
import tecnologia from '../img/tecnologia.jpg' 

const categorias = ['Home', 'Brasil', 'Internacional', 'Saúde', 'Ciência']
 

const noticias = [
  {
    titulo: 'O futuro urbano já começou',
    texto: 'As grandes cidades crescem com arquitetura moderna, inovação e novas soluções que transformam a vida de quem mora nelas.',
    img: cidade,
    categoria: 'Brasil',
  },
  {
    titulo: 'Telemedicina acelera diagnósticos',
    texto: 'Consultas remotas reduzem filas e levam atendimento a quem mora longe dos grandes hospitais.',
    img: doutor,
    categoria: 'Saúde',
  },
  {
    titulo: 'Economia global em recuperação',
    texto: 'O setor corporativo mostra sinais de retomada em vários mercados ao redor do mundo.',
    img: mundo,
    categoria: 'Internacional',
  },
  {
    titulo: 'Táxis elétricos ganham as ruas',
    texto: 'A frota elétrica se expande e promete uma mobilidade mais silenciosa e menos poluente.',
    img: taxi,
    categoria: 'Brasil',
  },
  {
    titulo: 'Tecnologia muda o dia a dia',
    texto: 'Novas ferramentas digitais chegam às cidades e mudam a forma como trabalhamos e nos locomovemos.',
    img: tecnologia,
    categoria: 'Ciência',
  },
]

const entrevistas = [
  { nome: 'João Rubens', cargo: 'TI', icone: faLaptopCode },
  { nome: 'Alessandro', cargo: 'Instrutor', icone: faChalkboardUser},
  { nome: 'Valdecir', cargo: 'Gerente', icone:faUserTie },
  { nome: 'José', cargo: 'Prefeito', icone: faLandmark},
  { nome: 'Marta', cargo: 'Diretora', icone: faBriefcase},
  { nome: 'Carlos', cargo: 'Dados', icone: faChartLine},
  { nome: 'Ana', cargo: 'IA', icone: faRobot },
]

export default function News() {
  const [categoria, setCategoria] = useState('Todas')
  const [aberto, setAberto] = useState(false)
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const data = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  const filtradas = noticias.filter(
    (n) => categoria === 'Todas' || n.categoria === categoria,
  )
  const [destaque, ...outras] = filtradas

  function cadastrar(e: FormEvent) {
    e.preventDefault()
    setEnviado(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b-2 border-sky-500">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="flex items-center gap-2 font-semibold text-neutral-900">
              <img src={logo} alt="Logo Notícias Cidade" className="h-10 rounded" />
            </h1>

            <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setAberto(!aberto)}
            >
            <FontAwesomeIcon icon={aberto ? faXmark : faBars} />
            </button>

            <nav
            className={`${aberto ? 'flex' : 'hidden'} md:flex absolute md:static top-full inset-x-0 flex-col md:flex-row gap-4 md:gap-5 bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0 border-neutral-200 text-base`}
            >
            {categorias.map((c) => (
                <button
                key={c}
                onClick={() => {
                    setCategoria(c)
                    setAberto(false)
                }}
                className={`flex items-center gap-2 text-left transition ${
                    categoria === c
                    ? 'text-gray-700 font-medium'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                >
                {c}
                </button>
            ))}
            </nav>
        </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
            <p className="text-sm uppercase tracking-widest text-neutral-400">{data}</p>

            {!destaque && (
            <p className="py-20 text-neutral-400">Nenhuma notícia nesta categoria ainda.</p>
            )}

            {destaque && (
            <article className="mt-6">
                <img
                src={destaque.img}
                alt={destaque.titulo}
                className="w-full h-72 object-cover rounded-2xl"
                />
                <span className="mt-6 block text-sm uppercase tracking-widest text-sky-600">
                {destaque.categoria}
                </span>
                <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                {destaque.titulo}
                </h2>
                <p className="mt-4 text-lg text-neutral-500 leading-relaxed">{destaque.texto}</p>
                <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-base text-sky-600 hover:gap-3 transition-all"
                >
                Ler matéria <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </article>
            )}

            {outras.length > 0 && (
            <div className="mt-14 divide-y divide-neutral-200 border-t border-neutral-200">
                {outras.map((n) => (
                <article key={n.titulo} className="group flex items-center gap-6 py-8">
                    <img
                    src={n.img}
                    alt={n.titulo}
                    className="w-32 h-24 shrink-0 object-cover rounded-xl"
                    />
                    <div>
                    <span className="text-sm uppercase tracking-widest text-sky-600">
                        {n.categoria}
                    </span>
                    <h3 className="mt-1 text-xl font-medium text-neutral-900 group-hover:text-sky-600 transition">
                        {n.titulo}
                    </h3>
                    <p className="mt-1 text-base text-neutral-500">{n.texto}</p>
                    </div>
                </article>
                ))}
            </div>
            )}
        </div>

        <aside className="space-y-10 lg:sticky lg:top-24 h-fit">
            <section>
            <h3 className="text-base uppercase tracking-widest text-neutral-400">Entrevistas</h3>
            <ul className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                {entrevistas.map((e) => (
                <li key={e.nome}>
                    <a
                    href="#"
                    className="flex justify-between py-3 text-base hover:text-sky-600 transition"
                    >
                    <span className="flex items-center gap-3">
                        <FontAwesomeIcon icon={e.icone} className="w-5 text-neutral-400" /> 
                        {e.nome}
                    </span>
                    <span className="text-neutral-400">{e.cargo}</span>
                    </a>
                </li>
                ))}
            </ul>
            </section>

            <section>
            <h3 className="text-base uppercase tracking-widest text-neutral-400">Newsletter</h3>
            <p className="mt-2 text-base text-neutral-500">Receba o resumo do dia no seu e-mail.</p>
            <form onSubmit={cadastrar} className="mt-4 flex flex-col gap-3">
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="px-5 py-3 text-base rounded-full border border-neutral-200 focus:border-sky-600 outline-none"
                />
                <button
                type="submit"
                className="px-6 py-3 text-base rounded-full bg-neutral-900 text-white hover:bg-sky-600 transition"
                >
                Cadastrar
                </button>
            </form>
            {enviado && <p className="mt-3 text-base text-sky-600">Pronto, cadastro feito! ✔</p>}
            </section>
        </aside>
        </main>

      <footer className="py-8 text-center text-sm text-neutral-400 border-t border-neutral-200">
        © 2026 Notícias Cidade - Projeto G&amp;P
      </footer>
    </div>
  )
}