# Acelera - G&P

## Descrição

O **Acelera** é um projeto de desenvolvimento web que reúne cinco plataformas digitais com diferentes propostas e identidades visuais: Blog, Jornal, Museu, Space e TecBlog.

Desenvolvido utilizando React, TypeScript e Tailwind CSS, o projeto tem como objetivo aplicar conhecimentos de desenvolvimento frontend, criação de interfaces, organização de componentes e navegação entre páginas.

## Projetos Desenvolvidos

### Blog
Plataforma voltada à publicação e apresentação de conteúdos, com postagens e navegação entre publicações.

### Jornal
Página dedicada à apresentação de notícias e conteúdos informativos.

### Museu
Ambiente digital destinado à apresentação de conteúdos culturais e históricos.

### Space
Página com temática espacial, apresentando uma experiência visual voltada ao universo do espaço.

### TecBlog
Blog voltado à tecnologia, com publicações, imagens, categorias e conteúdos relacionados ao mundo tecnológico.

## Tecnologias Utilizadas

- React 19
- TypeScript (TSX)
- Vite
- Tailwind CSS 4
- React Router DOM 7
- Font Awesome

## Estrutura do Projeto

```text
Desafio-Acelera/
│
├── README.md
│
└── frontend-gpnet/
    │
    ├── public/
    │
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   └── Layout.tsx
    │   │
    │   ├── pages/
    │   │   ├── blog/
    │   │   ├── news/
    │   │   ├── museum/
    │   │   ├── space/
    │   │   └── tecblog/
    │   │
    │   ├── App.tsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.tsx
    │
    ├── package.json
    ├── package-lock.json
    ├── index.html
    └── vite.config.ts
```

## Como Usar

1. Baixe ou clone o repositório.
2. Abra a pasta `frontend-gpnet` no VS Code.
3. Abra o terminal e execute:

```bash
npm install
npm run dev
```

4. Acesse o endereço `http://localhost:5173` no navegador.
5. Utilize o menu do site para navegar entre as páginas.

## Como Acessar as Páginas

Com o servidor em execução, utilize as seguintes rotas:

| Página | Endereço |
|---|---|
| Blog | `/` |
| Jornal | `/jornal` |
| Museu | `/museu` |
| Space | `/space` |
| TecBlog | `/tecblog` |
| Publicação do Blog | `/post` |

Todas as páginas fazem parte da mesma aplicação, sendo acessadas por meio da navegação configurada com React Router DOM.

## Objetivo do Projeto

O projeto Acelera tem como objetivo desenvolver e integrar diferentes experiências digitais, colocando em prática conhecimentos de programação, desenvolvimento frontend, organização de código e criação de interfaces responsivas.

## Considerações Finais

O desenvolvimento deste projeto proporcionou a aplicação prática de tecnologias modernas de desenvolvimento web, contribuindo para o aprendizado, a criatividade e o aprimoramento das habilidades técnicas.

---

**Desenvolvido como parte do projeto Acelera.**

**Todos os direitos reservados.**
