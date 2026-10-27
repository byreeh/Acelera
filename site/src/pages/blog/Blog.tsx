import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import arduino from '../img/arduino.jpg'
import componentes from '../img/componentes.jpg'
import lcd from '../img/lcd.webp'

const artigos = [
    {
        titulo: 'O que é o  Arbuino? Pra que serve',
        texto: 'Plataforma de prototipagem eletrônica de hardware livre, ideial para criar objetos interativos.',
        img: arduino,
        to: '/post',
        interno: true,
        tag: 'Arduino',
    },
    {
        titulo:'O que são componentes eletrônicos ',
        texto:'Dispositivos que transmitem corrente e fazem parte de qualquer circuito.',
        img:componentes,
        to:'https://embarcados.com.br/arduino-uno/',
        interno: false,
        tag: 'Básico'
    },
    {
        titulo:'Projeto com display LCD 16x2',
        texto:'Aprenda a usar o controlador HD44780 em projetos com Arduino e Raspberry Pi.',
        img: lcd,
        to:'https://www.usinainfo.com.br/arduino-74',
        interno: false,
        tag: 'Projeto'
    }
]

const destaques = [
    {img: arduino, texto: 'O que é Arduino', href: 'https://pt.wikipedia.org/wiki/Arduino'},
    {img: componentes, texto: 'Componentes e usos', href: 'https://www.usinainfo.com.br/arduino-74'},
    {img: lcd, texto: 'Crie seus projetos', href: 'https://www.people.com.br/noticias/robotica/5-projetos-que-voce-pode-fazer-com-arduino'},
]

export default function Blog() {
    const [busca, setBusca] = useState('')
    const [visivel, setVisivel] = useState(false)

    useEffect(() =>{
        const t = setTimeout(() => setVisivel(true), 200)
        return () => clearTimeout(t)
    }, [])

    const filtrados = artigos.filter(
        (a) =>
            a.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            a.texto.toLowerCase().includes(busca.toLowerCase()),
    )

    const botao = 'text-rose-400 font-medium hover:text-violet-400 transition'

    return (
        <>
        <header className="pt-32 pb-12 px-6 text-center max-w-3xl mx-auto">
        <p className="text-violet-400 font-medium tracking-widest uppercase text-sm">
          Blog de eletrônica
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-tight">
          Aprenda eletrônica{' '}
          <span className="text-rose-400">
            na prática
          </span>
        </h1>
        <p className="mt-6 text-lg">
          Projetos, tutoriais e os componentes que movem a tecnologia moderna.
        </p>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="O que você quer aprender hoje?"
          className="mt-8 w-full px-6 py-4 rounded-full bg-slate-900 border border-slate-700 focus:border-rose-400 outline-none text-center"
        />
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <div
          className={`grid gap-8 md:grid-cols-3 transition-opacity duration-1000 ${visivel ? 'opacity-100' : 'opacity-0'}`}
        >
          {filtrados.map((a) => (
            <article
              key={a.titulo}
              className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:-translate-y-2 hover:border-rose-400/50 transition duration-300"
            >
              <img src={a.img} alt={a.titulo} className="h-44 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-6">
                <span className="text-xs px-3 py-1 rounded-full bg-violet-400/10">
                  {a.tag}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-white">{a.titulo}</h2>
                <p className="mt-2 mb-4 text-sm">{a.texto}</p>
                {a.interno ? (
                  <Link to={a.to} className={botao}>Ler mais →</Link>
                ) : (
                  <a href={a.to} target="_blank" className={botao}>Ler mais →</a>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <h3 className="text-xl font-semibold text-rose-400 mb-6">Em destaque</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {destaques.map((d) => (
              <a
                key={d.texto}
                href={d.href}
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-400/50 transition"
              >
                <img src={d.img} alt="" className="w-16 h-16 rounded-xl object-cover" />
                <span className="text-sm">{d.texto}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
        </>
    )
}
