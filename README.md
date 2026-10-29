# 🎯 ALVO02FIT — Site Institucional

Landing page oficial e institucional da **Academia ALVO02FIT**, localizada na Av. Sapopemba, Cidade São Mateus — São Paulo, SP.

Desenvolvida com foco em alta performance, identidade visual esportiva (Black & Electric Orange), tipografia de impacto (Anton, Onest, Inter Tight) e experiência fluida e moderna.

---

## ⚡ Recursos e Funcionalidades

- **Hero Cinemática com Vídeo de Fundo:** Vídeo em loop contínuo de névoa e iluminação de academia, com suporte nativo a cross-browser (`playsinline`, `autoplay`, `muted`).
- **Seção Sobre a Alvo02Fit:** Atleta oficial emoldurado por uma mancha laranja orgânica fluida com profundidade e satélite dinâmico.
- **Grade Interativa de Modalidades e Aulas:** Musculação, Treino Funcional, Pilates Solo, FitDance, Lutas e Alongamento.
- **Página de Agendamento Online:** Fluxo dedicado para escolha de horários e modalidades (`agendamento.html`).
- **Canais e Localização Integrada:** Trajeto direto via **Google Maps** e **Waze**, status de funcionamento em tempo real e links para Instagram e WhatsApp.
- **Parcerias Oficiais:** Integração e badges de **Wellhub** (antigo Gympass), **TotalPass**, PrimeStar, Studio Lumiér e outros parceiros locais.
- **Design 100% Responsivo:** Otimizado para telas ultra-wide, desktop, tablets e smartphones.

---

## 📁 Estrutura do Projeto

```text
Alvo02/
├── index.html                                        # Página principal da academia
├── agendamento.html                                  # Página de agendamento de treinos e aulas
├── css/
│   └── style.css                                     # Folha de estilos consolidada
├── js/                                               # Scripts de interação e navegação
├── images/                                           # Identidade visual, logos, ícones e mídias
│   ├── instrutor-alvo02fit.png                       # Atleta com recorte e mancha orgânica
│   ├── mancha-laranja.svg                            # Vetor da mancha laranja
│   ├── hero-video.mp4                                # Vídeo de background do Hero
│   └── ...                                           # Logos oficiais e parceiros
├── Animate_background_fog_without_m…_dc2f279a_1080p.mp4 # Vídeo original do Hero
├── start-server.ps1                                  # Servidor de desenvolvimento local
└── README.md                                         # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Você pode executar o servidor local através do PowerShell:

```powershell
.\start-server.ps1
```

Ou usando o servidor HTTP embutido do Python:

```bash
python -m http.server 8080
```

Acesse no navegador: `http://localhost:8080`

---

## 📍 Localização & Contato

- **Endereço:** Av. Sapopemba, 12.847 — Jardim Adutora / São Mateus, São Paulo - SP
- **Instagram:** [@alvo02fit](https://www.instagram.com/alvo02fit/)
- **WhatsApp Recepção:** (11) 93002-5829
- **Slogan:** *#VEMPRAALVO02FIT — Seu objetivo começa aqui!*
