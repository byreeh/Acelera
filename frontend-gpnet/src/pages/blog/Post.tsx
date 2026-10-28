import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBook, faLightbulb, faWrench, faRocket } from '@fortawesome/free-solid-svg-icons' 
import arduino from '../img/arduino.jpg'
import componentes from '../img/componentes.jpg'

export default function Post() {
  const motivos = [
    { icone: faBook, texto: 'Material sempre atualizado' },
    { icone: faLightbulb, texto: 'Tecnologia de ponta' },
    { icone: faWrench, texto: 'Aprender na prática' },
    { icone: faRocket, texto: 'Inovação e renovação' },
  ]

  return (
    <>
      <header
        className="relative pt-40 pb-24 px-6 text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${arduino})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Arduino: o que é e{' '}
            <span className="text-rose-400">
              para que serve?
            </span>
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/" className="text-rose-400 hover:text-violet-400 transition">
          ← Voltar
        </Link>

        <p className="mt-8 text-lg leading-relaxed">
          O Arduino é uma plataforma de prototipagem usada por estudantes, hobbistas e profissionais para criar robôs, alarmes, automação residencial e projetos de IoT. Dá até pra fazer uma planta que avisa quando precisa de água.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Neste post você vai ver o display LCD 16×2, muito usado em projetos com Arduino e Raspberry Pi por causa do controlador HD44780.
        </p>

        <h2 className="mt-14 mb-6 text-2xl font-semibold text-white">
          Por que estudar?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {motivos.map((m) => (
            <div
              key={m.texto}
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-400/50 transition"
            >
              <FontAwesomeIcon icon={m.icone} className="text-2xl text-rose-400" />
              <span>{m.texto}</span>
            </div>
          ))}
        </div>

        <section className="mt-14 flex flex-col sm:flex-row gap-6 items-center">
          <img
            src={componentes}
            alt="Componentes eletrônicos"
            className="w-full sm:w-56 h-40 rounded-2xl object-cover"
          />
          <p>
            <strong className="text-white">Componentes eletrônicos</strong> são dispositivos que conduzem corrente elétrica e formam qualquer circuito, do mais simples ao mais complexo.
          </p>
        </section>
      </main>
    </>
  )
}