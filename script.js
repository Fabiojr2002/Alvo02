/**
 * ALVO02FIT — Scripts Interativos & Modernos
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar ano automaticamente no rodapé
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Elementos do menu mobile
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');

  // 2. Fechar menu mobile ao clicar em links âncora internos
  document.querySelectorAll('.nav-links a, .cta-row a, .hero-cta a').forEach((link) => {
    if (link.getAttribute('href')?.startsWith('#')) {
      link.addEventListener('click', () => {
        if (burger) {
          burger.setAttribute('aria-expanded', 'false');
        }
        if (navLinks && window.innerWidth <= 900) {
          navLinks.style.display = 'none';
        }
      });
    }
  });

  // 3. Efeito de entrada suave dos elementos (Scroll Reveal)
  try {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  } catch (error) {
    // Fallback caso IntersectionObserver não seja suportado
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }

  // 4. Menu Hamburguer (Mobile Toggle)
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';

      if (isOpen) {
        navLinks.style.display = 'none';
        burger.setAttribute('aria-expanded', 'false');
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'var(--bg-surface-2)';
        navLinks.style.padding = '20px clamp(20px, 5vw, 64px)';
        navLinks.style.borderBottom = '1px solid var(--border-subtle)';
        burger.setAttribute('aria-expanded', 'true');
      }
    });

    // Restaurar layout caso a tela seja redimensionada para desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        navLinks.style.display = '';
        navLinks.style.flexDirection = '';
        navLinks.style.position = '';
        navLinks.style.top = '';
        navLinks.style.left = '';
        navLinks.style.right = '';
        navLinks.style.background = '';
        navLinks.style.padding = '';
        navLinks.style.borderBottom = '';
      }
    });
  }

  // 5. Abas interativas da Grade de Aulas Coletivas
  initAulasTabs();

  // 6. Status em tempo real do Horário de Funcionamento
  initLiveGymStatus();

  // 7. Mini Galeria Circular Automática na Hero (Esfera Laranja)
  initSphereGallery();
});

/**
 * Controle de Abas e Seleção Automática do Dia da Semana
 */
function initAulasTabs() {
  const tabBtns = document.querySelectorAll('.day-tab-btn');
  const panels = document.querySelectorAll('.day-panel');

  if (!tabBtns.length || !panels.length) return;

  // Mapa dos dias da semana (0 = Domingo, 1 = Segunda, ..., 5 = Sexta, 6 = Sábado)
  const dayIndexMap = {
    1: 'segunda',
    2: 'terca',
    3: 'quarta',
    4: 'quinta',
    5: 'sexta'
  };

  const todayIndex = new Date().getDay();
  const currentDayKey = dayIndexMap[todayIndex];

  // Adicionar badge "Hoje" e selecionar o dia atual (ou segunda-feira se for final de semana)
  tabBtns.forEach((btn) => {
    const targetDay = btn.getAttribute('data-day');

    if (targetDay === currentDayKey) {
      const todayBadge = document.createElement('span');
      todayBadge.className = 'today-badge';
      todayBadge.textContent = 'Hoje';
      btn.appendChild(todayBadge);
    }
  });

  // Determinar qual aba iniciar aberta
  const initialDay = currentDayKey || 'segunda';

  function activateTab(dayKey) {
    tabBtns.forEach((b) => {
      const match = b.getAttribute('data-day') === dayKey;
      b.classList.toggle('active', match);
      b.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    panels.forEach((p) => {
      const match = p.id === `panel-${dayKey}`;
      p.classList.toggle('active', match);
    });
  }

  // Ativa a aba inicial
  activateTab(initialDay);

  // Evento de clique nas abas
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedDay = btn.getAttribute('data-day');
      if (selectedDay) {
        activateTab(selectedDay);
      }
    });
  });
}

/**
 * Cálculo e Exibição do Status em Tempo Real (Aberto / Fechado)
 */
function initLiveGymStatus() {
  const statusContainer = document.getElementById('liveStatusContainer');
  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1-4 = Seg-Qui, 5 = Sex, 6 = Sáb
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let isOpen = false;
  let closeTimeStr = '';
  let nextOpenStr = '';

  // Definição das regras de horários em minutos
  // Seg-Qui: 05:00 (300m) às 23:00 (1380m)
  // Sex: 05:00 (300m) às 22:00 (1320m)
  // Sáb: 09:00 (540m) às 15:00 (900m)
  // Dom: 09:00 (540m) às 13:30 (810m)
  if (day >= 1 && day <= 4) {
    // Segunda a Quinta
    if (currentMinutes >= 300 && currentMinutes < 1380) {
      isOpen = true;
      closeTimeStr = '23:00';
    } else {
      nextOpenStr = currentMinutes < 300 ? 'hoje às 05:00' : 'amanhã às 05:00';
    }
  } else if (day === 5) {
    // Sexta-feira
    if (currentMinutes >= 300 && currentMinutes < 1320) {
      isOpen = true;
      closeTimeStr = '22:00';
    } else {
      nextOpenStr = currentMinutes < 300 ? 'hoje às 05:00' : 'sábado às 09:00';
    }
  } else if (day === 6) {
    // Sábado
    if (currentMinutes >= 540 && currentMinutes < 900) {
      isOpen = true;
      closeTimeStr = '15:00';
    } else {
      nextOpenStr = currentMinutes < 540 ? 'hoje às 09:00' : 'domingo às 09:00';
    }
  } else if (day === 0) {
    // Domingo
    if (currentMinutes >= 540 && currentMinutes < 810) {
      isOpen = true;
      closeTimeStr = '13:30';
    } else {
      nextOpenStr = currentMinutes < 540 ? 'hoje às 09:00' : 'segunda às 05:00';
    }
  }

  // Renderizar o badge dinâmico se o container existir
  if (statusContainer) {
    if (isOpen) {
      statusContainer.innerHTML = `
        <span class="live-status-dot pulse"></span>
        <span>Aberto agora · Fecha às <strong>${closeTimeStr}</strong></span>
      `;
    } else {
      statusContainer.innerHTML = `
        <span class="live-status-dot closed"></span>
        <span>Fechado no momento · Abre <strong>${nextOpenStr}</strong></span>
      `;
    }
  }

  // Destacar automaticamente o card do dia de hoje no grid
  let highlightCardId = 'card-seg-qui';
  if (day === 5) highlightCardId = 'card-sex';
  else if (day === 6) highlightCardId = 'card-sab';
  else if (day === 0) highlightCardId = 'card-dom';

  const activeCard = document.getElementById(highlightCardId);
  if (activeCard) {
    activeCard.classList.add('highlight');
    const badgeSpan = document.createElement('span');
    badgeSpan.className = 'class-tag';
    badgeSpan.style.marginTop = '8px';
    badgeSpan.style.display = 'inline-block';
    badgeSpan.textContent = 'Dia de hoje';
    activeCard.appendChild(badgeSpan);
  }
}

/**
 * Mini Galeria Circular Automática na Hero (Esfera Laranja)
 */
function initSphereGallery() {
  const container = document.getElementById('heroSphereGallery');
  if (!container) return;

  const slides = container.querySelectorAll('.sphere-slide');
  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const slideInterval = 2000; // 2.0 segundos por foto

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, slideInterval);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Pausar autoplay ao passar o cursor do mouse e retomar ao sair
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  // Iniciar autoplay da galeria
  startAutoplay();
}

