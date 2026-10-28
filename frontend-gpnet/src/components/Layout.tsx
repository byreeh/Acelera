import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Layout() {
  const [aberto, setAberto] = useState(false)

  const itens = [
    { nome: 'Início', to: '/' },
    { nome: 'Arduino', to: '/post' },
  ]
  const externos = [
    { nome: 'Componentes', href: 'https://embarcados.com.br/arduino-uno/' },
    { nome: 'Projetos', href: 'https://www.usinainfo.com.br/arduino-74' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans">
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-900/90 backdrop-blur border-b border-rose-400/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">
          <FontAwesomeIcon icon={faBolt} className="mr-3 text-rose-400" />
            <span className="text-rose-400">Blog</span>Eletrônica
          </Link>

          <button
            className="md:hidden text-3xl text-rose-400"
            onClick={() => setAberto(!aberto)}
          >
            ☰
          </button>

          <ul
            className={`${aberto ? 'flex' : 'hidden'} md:flex absolute md:static top-16 inset-x-0 flex-col md:flex-row gap-4 md:gap-8 bg-slate-900 md:bg-transparent p-6 md:p-0`}
          >
            {itens.map((i) => (
              <li key={i.nome}>
                <Link to={i.to} className="hover:text-rose-400 transition">
                  {i.nome}
                </Link>
              </li>
            ))}
            {externos.map((e) => (
              <li key={e.nome}>
                <a href={e.href} target="_blank" className="hover:text-violet-400 transition">
                  {e.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Outlet />

      <footer className="mt-20 bg-slate-900 border-t border-rose-400/20">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-rose-400 font-semibold mb-3">Navegação</h4>
            <p>Mapa do site</p>
            <p>Contato</p>
          </div>
          <div>
            <h4 className="text-rose-400 font-semibold mb-3">Institucional</h4>
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
          </div>
          <div>
            <h4 className="text-rose-400 font-semibold mb-3">Sobre</h4>
            <p>Meu blog pessoal de tecnologia e eletrônica.</p>
            <p className="text-sm text-slate-500 mt-2">© 2026 Blog da Eletrônica - Projeto G&amp;P</p>
          </div>
        </div>
      </footer>
    </div>
  )
}