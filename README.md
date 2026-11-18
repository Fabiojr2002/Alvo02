# Academia Alvo02Fit — Website Oficial & Painel da Equipe

Site institucional, página de agendamento de aula experimental gratuita e painel administrativo de gestão de alunos da **Academia Alvo02Fit** (São Mateus, SP).

## Páginas do Projeto

- **`index.html`** — Landing page oficial (Hero com vídeo responsivo, Modalidades, Estrutura, Planos, Convênios Wellhub/TotalPass, Avaliações, Parceiros, Localização e FAQ).
- **`agendamento.html`** — Fluxo de agendamento online de Aula Experimental Gratuita, integrado em tempo real com o painel da recepção.
- **`painel.html`** — Painel administrativo restrito por login e senha (KPIs com seletor Dia/Semana/Mês, busca e filtros, status de comparecimento, check-in rápido, contato via WhatsApp, exportação CSV, folha de impressão e aba de gestão de usuários/senhas para o administrador).

## Estrutura de Pastas

```text
.
├── index.html
├── agendamento.html
├── painel.html
├── favicon.ico
├── css/
│   └── style.css
├── fonts/
│   ├── anton.woff2
│   ├── inter-tight.woff2
│   └── onest.woff2
├── js/
│   ├── gsap.min.js
│   ├── jquery.min.js
│   ├── ScrollTrigger.min.js
│   ├── SplitText.min.js
│   ├── webflow.js
│   ├── webflow.schunk.*.js
│   └── webfont.js
├── videos/
│   ├── hero-desktop.mp4
│   └── hero-mobile.mp4
└── images/
    ├── brand/          # Logos, badges, favicons e convênios
    ├── hero/           # Posters, instrutor e elementos do hero
    ├── estrutura/      # Fotos da estrutura da academia
    ├── modalidades/    # Fotos das modalidades
    ├── parceiros/      # Logos dos parceiros locais
    └── icons/          # Ícones locais otimizados
```

## Deploy

Projeto 100% estático (HTML, CSS e JavaScript puro), pronto para deploy imediato em:

- **Vercel** (`Import Project` → sem comando de build, Output Directory: `.`)
- **Netlify** (`Deploy from Git` → Publish directory: `.`)
- **GitHub Pages** (`Settings → Pages → Branch: main / root`)
- **Cloudflare Pages** (Framework preset: `None`, Build output: `.`)

## Acesso ao Painel da Equipe

Acesse `/painel.html` diretamente pela URL (não há link público exposto no site).

- **Login inicial**: `adm`
- **Senha inicial**: `adm12`

> Dentro do painel, o administrador pode criar novos usuários (Funcionário ou Administrador), visualizar senhas e alterar a senha do próprio `adm` na aba **Usuários & Senhas**.
