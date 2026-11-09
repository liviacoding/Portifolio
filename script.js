/* ==========================================================================
   Portfólio — Lívia Soares Lopes
   script.js
   - Troca de idioma (PT / EN) com traduções manuais e persistência
   - Tema claro / escuro com persistência e respeito ao esquema do sistema
   - Música ambiente gerada em tempo real (Web Audio), sem arquivos externos
   - Menu mobile acessível, rolagem suave, seção ativa e animações
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Traduções
     Para adicionar um novo idioma, crie um bloco com as mesmas chaves
     dos blocos existentes e chame setLanguage(codigo).
     ------------------------------------------------------------------ */
  var TRANSLATIONS = {
    pt: {
      "meta.title": "Lívia Soares Lopes | Desenvolvimento web, software e IA",
      "meta.description":
        "Portfólio de Lívia Soares Lopes, estudante de Ciência da Computação e estagiária em Engenharia de IA na Ohmyweb, em Dubai. Sites, aplicativos e soluções digitais.",
      "a11y.skip": "Pular para o conteúdo principal",
      "a11y.linkedin": "LinkedIn",
      "a11y.github": "GitHub",

      "brand.role": "Sites, aplicativos e IA",
      "nav.label": "Navegação principal",
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.skills": "O que eu faço",
      "nav.experience": "Experiência",
      "nav.contact": "Contato",
      "nav.toggle": "Abrir menu de navegação",
      "nav.close": "Fechar menu de navegação",
      "lang.label": "Selecionar idioma",
      "lang.pt": "Português",
      "lang.en": "Inglês",

      "theme.label": "Alternar tema claro e escuro",
      "sound.enable": "Ativar música ambiente",
      "sound.disable": "Desativar música ambiente",

      "hero.hello": "Olá, eu sou a Lívia",
      "hero.t1": "Escuto, desenho e",
      "hero.fancy": "construo",
      "hero.t2": "soluções digitais.",
      "hero.text":
        "Sou estudante de Ciência da Computação e estagiária em Engenharia de IA na Ohmyweb, em Dubai. No dia a dia, desenvolvo sites e aplicativos, transformando problemas reais em tecnologia que funciona de verdade.",
      "hero.cta1": "Falar no WhatsApp",
      "hero.cta2": "Enviar e-mail",
      "hero.photoAlt": "Foto de Lívia Soares Lopes",
      "hero.caption": "Lívia Soares Lopes, no Brasil",
      "hero.meta.company": "Estagiária em Engenharia de IA · Ohmyweb, Dubai",
      "hero.meta.location": "Base no Brasil",
      "hero.meta.availability": "Aberta a novos projetos",

      "about.title": "Sobre mim",
      "about.lead":
        "Uma trajetória guiada por tecnologia, curiosidade e vontade de transformar problemas reais em soluções digitais.",
      "about.p1":
        "Meu nome é Lívia Soares Lopes, tenho 24 anos e sou estudante de Ciência da Computação. Minha trajetória é orientada pelo interesse em desenvolvimento de software e pela criação de soluções digitais que resolvem problemas reais.",
      "about.p2":
        "Hoje, sou estagiária na área de Engenharia de Inteligência Artificial na Ohmyweb, empresa sediada em Dubai, nos Emirados Árabes Unidos, onde também atuo como representante da empresa no Brasil.",
      "about.p3":
        "Trabalho com Python, Java, HTML e CSS, além do desenvolvimento de sites e aplicativos. Gosto de aprender fazendo: busco ampliar minhas habilidades técnicas em projetos reais, sempre com atenção à funcionalidade, à organização e à experiência de quem usa. Meu objetivo é conectar tecnologia e necessidades verdadeiras, no Brasil e no mercado internacional.",
      "about.factsLabel": "Resumo do perfil",
      "about.factsTitle": "Resumo",
      "about.fact1.label": "Idade",
      "about.fact1.value": "24 anos",
      "about.fact2.label": "Formação",
      "about.fact2.value": "Ciência da Computação",
      "about.fact3.label": "Agenda atual",
      "about.fact3.value": "Estagiária em Engenharia de IA, Ohmyweb",
      "about.fact4.label": "Empresa",
      "about.fact4.value": "Sede em Dubai, EAU",
      "about.fact5.label": "Atuação",
      "about.fact5.value": "Brasil e mercado internacional",

      "skills.title": "O que eu faço",
      "skills.lead": "Um resumo honesto: o que já está na prática e o que estou construindo agora.",
      "skills.marker.practice": "Na prática",
      "skills.marker.study": "Em estudo",
      "skills.row1.title": "Sites e aplicativos",
      "skills.row1.tag1": "HTML5 e CSS3",
      "skills.row1.tag2": "Páginas completas e acessíveis",
      "skills.row1.tag3": "Interfaces de aplicativos",
      "skills.row1.tag4": "Do rascunho ao site publicado",
      "skills.row2.title": "Linguagens de programação",
      "skills.row2.tag3": "Fundamentos de lógica",
      "skills.row3.title": "Onde estou chegando",
      "skills.row3.tag1": "Inteligência Artificial",
      "skills.row3.tag2": "Engenharia de software",
      "skills.row3.tag3": "Produtos digitais",

      "exp.title": "Experiência",
      "exp.lead": "Aprendizado em ambiente internacional, com pé no Brasil.",
      "exp.role": "Estagiária em Engenharia de Inteligência Artificial",
      "exp.period": "Atual",
      "exp.desc":
        "Trabalho em um ambiente profissional internacional, com foco em Engenharia de Inteligência Artificial e na conexão entre a empresa e o mercado brasileiro.",
      "exp.location": "Sede em Dubai, Emirados Árabes Unidos",
      "exp.scope": "Atuação: representação da empresa no Brasil",
      "exp.h1": "Ambiente profissional internacional",
      "exp.h2": "Foco em Engenharia de Inteligência Artificial",
      "exp.h3": "Ponte entre a Ohmyweb e o mercado brasileiro",

      "contact.title": "Vamos construir algo juntos?",
      "contact.text":
        "Estou aberta a conexões profissionais, colaborações e conversas sobre desenvolvimento web, aplicativos, software e inovação. Me chame para falarmos sobre a sua ideia: prometo escutar com atenção, como sempre faço.",
      "contact.ctaWhats": "Chamar no WhatsApp",
      "contact.ctaMail": "Enviar e-mail",

      "footer.tagline":
        "Desenvolvimento de software, sites e aplicativos, com crescente interesse em inteligência artificial.",
      "footer.navLabel": "Navegação do rodapé",
      "footer.navTitle": "Navegação",
      "footer.contactTitle": "Contato",
      "footer.email": "E-mail",
      "footer.whatsapp": "WhatsApp",
      "footer.linkedin": "LinkedIn",
      "footer.rights": "Lívia Soares Lopes. Todos os direitos reservados."
    },

    en: {
      "meta.title": "Lívia Soares Lopes | Web development, software & AI",
      "meta.description":
        "Portfolio of Lívia Soares Lopes, Computer Science student and AI Engineering intern at Ohmyweb in Dubai. Websites, apps and digital solutions.",
      "a11y.skip": "Skip to main content",
      "a11y.linkedin": "LinkedIn",
      "a11y.github": "GitHub",

      "brand.role": "Websites, apps & AI",
      "nav.label": "Main navigation",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "What I do",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "nav.toggle": "Open navigation menu",
      "nav.close": "Close navigation menu",
      "lang.label": "Select language",
      "lang.pt": "Portuguese",
      "lang.en": "English",

      "theme.label": "Switch between light and dark theme",
      "sound.enable": "Turn ambient music on",
      "sound.disable": "Turn ambient music off",

      "hero.hello": "Hi, I'm Lívia",
      "hero.t1": "I listen, I design and",
      "hero.fancy": "build",
      "hero.t2": "digital solutions.",
      "hero.text":
        "I'm a Computer Science student and an AI Engineering intern at Ohmyweb, in Dubai. Day to day, I build websites and apps, turning real problems into technology that actually works.",
      "hero.cta1": "Chat on WhatsApp",
      "hero.cta2": "Send an email",
      "hero.photoAlt": "Photo of Lívia Soares Lopes",
      "hero.caption": "Lívia Soares Lopes, in Brazil",
      "hero.meta.company": "AI Engineering intern · Ohmyweb, Dubai",
      "hero.meta.location": "Based in Brazil",
      "hero.meta.availability": "Open to new projects",

      "about.title": "About me",
      "about.lead":
        "A path guided by technology, curiosity and the wish to turn real problems into digital solutions.",
      "about.p1":
        "My name is Lívia Soares Lopes, I'm 24 years old and I study Computer Science. My path is driven by an interest in software development and in building digital solutions that solve real problems.",
      "about.p2":
        "Today I'm an intern in Artificial Intelligence Engineering at Ohmyweb, a company based in Dubai, in the United Arab Emirates, where I also represent the company in Brazil.",
      "about.p3":
        "I work with Python, Java, HTML and CSS, plus website and app development. I like learning by doing: I keep growing my technical skills through real projects, always mindful of functionality, organisation and the experience of the people using it. My goal is to connect technology with real needs, in Brazil and in the international market.",
      "about.factsLabel": "Profile summary",
      "about.factsTitle": "Summary",
      "about.fact1.label": "Age",
      "about.fact1.value": "24 years old",
      "about.fact2.label": "Education",
      "about.fact2.value": "Computer Science",
      "about.fact3.label": "Current role",
      "about.fact3.value": "AI Engineering intern, Ohmyweb",
      "about.fact4.label": "Company",
      "about.fact4.value": "Headquartered in Dubai, UAE",
      "about.fact5.label": "Coverage",
      "about.fact5.value": "Brazil and the international market",

      "skills.title": "What I do",
      "skills.lead": "An honest summary: what is already hands-on, and what I'm building towards.",
      "skills.marker.practice": "Hands-on",
      "skills.marker.study": "In progress",
      "skills.row1.title": "Websites and apps",
      "skills.row1.tag1": "HTML5 & CSS3",
      "skills.row1.tag2": "Complete, accessible pages",
      "skills.row1.tag3": "App interfaces",
      "skills.row1.tag4": "From sketch to published site",
      "skills.row2.title": "Programming languages",
      "skills.row2.tag3": "Fundamentals of logic",
      "skills.row3.title": "Where I'm heading",
      "skills.row3.tag1": "Artificial Intelligence",
      "skills.row3.tag2": "Software engineering",
      "skills.row3.tag3": "Digital products",

      "exp.title": "Experience",
      "exp.lead": "Learning in an international environment, with my feet in Brazil.",
      "exp.role": "Intern in Artificial Intelligence Engineering",
      "exp.period": "Present",
      "exp.desc":
        "I work in an international professional environment, focused on Artificial Intelligence Engineering and on connecting the company with the Brazilian market.",
      "exp.location": "Headquartered in Dubai, United Arab Emirates",
      "exp.scope": "Scope: representing the company in Brazil",
      "exp.h1": "International professional environment",
      "exp.h2": "Focus on Artificial Intelligence Engineering",
      "exp.h3": "A bridge between Ohmyweb and the Brazilian market",

      "contact.title": "Shall we build something together?",
      "contact.text":
        "I'm open to professional connections, collaborations and conversations about web development, apps, software and innovation. Reach out and let's talk about your idea: I promise to listen carefully, as always.",
      "contact.ctaWhats": "Chat on WhatsApp",
      "contact.ctaMail": "Send an email",

      "footer.tagline":
        "Software, website and app development, with a growing interest in artificial intelligence.",
      "footer.navLabel": "Footer navigation",
      "footer.navTitle": "Navigation",
      "footer.contactTitle": "Contact",
      "footer.email": "Email",
      "footer.whatsapp": "WhatsApp",
      "footer.linkedin": "LinkedIn",
      "footer.rights": "Lívia Soares Lopes. All rights reserved."
    }
  };

  var LANG_KEY = "ls-portfolio-lang";
  var THEME_KEY = "ls-portfolio-theme";
  var DEFAULT_LANG = "pt";
  var currentLang = DEFAULT_LANG;

  /* ------------------------------------------------------------------
     2. Utilidades
     ------------------------------------------------------------------ */
  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function $(selector, scope) {
    return (scope || document).querySelector(selector);
  }
  function $$(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }
  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (err) { return null; }
  }
  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (err) { /* storage bloqueado */ }
  }

  /* ------------------------------------------------------------------
     3. Troca de idioma
     ------------------------------------------------------------------ */
  function applyTranslations(lang) {
    var dict = TRANSLATIONS[lang];
    if (!dict) return;

    $$("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (value === undefined) return;
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var value = dict[parts[1].trim()];
        if (attr && value !== undefined) el.setAttribute(attr, value);
      });
    });
  }

  function setLanguage(lang, persist) {
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;
    currentLang = lang;

    applyTranslations(lang);

    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    var ogLocale = $('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", lang === "pt" ? "pt_BR" : "en_US");
    }

    $$(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // Botões com rótulo dependente de estado (música) acompanham o idioma
    updateSoundLabel();

    if (persist !== false) storageSet(LANG_KEY, lang);
  }

  function initLanguage() {
    var stored = storageGet(LANG_KEY);
    var lang = stored && TRANSLATIONS[stored] ? stored : DEFAULT_LANG;
    setLanguage(lang, false);

    $$(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"), true);
      });
    });
  }

  /* ------------------------------------------------------------------
     4. Tema claro / escuro
     ------------------------------------------------------------------ */
  function applyTheme(theme) {
    var t = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);

    $$(".theme-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
    });

    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "dark" ? "#121814" : "#f4f5f0");
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function initTheme() {
    var stored = storageGet(THEME_KEY);
    var prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(stored === "dark" || stored === "light" ? stored : (prefersDark ? "dark" : "light"));

    // Sem preferência salva, acompanha o sistema
    if (!stored && window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (event) { applyTheme(event.matches ? "dark" : "light"); };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }

    $$(".theme-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        storageSet(THEME_KEY, next);
      });
    });
  }

  /* ------------------------------------------------------------------
     5. Música ambiente (Web Audio, gerada em tempo real)
     Um pad lento em Lá menor (Am - F - C - G) com filtro respirando,
     eco espacial e notinhas pentatônicas esparsas. Tudo offline, leve.
     ------------------------------------------------------------------ */
  var audio = {
    ctx: null, master: null, padBus: null, pluckBus: null,
    echoSend: null, lfo: null, on: false,
    chordIndex: 0, chordTimer: null, pluckTimer: null
  };

  // Am - Fmaj7 - Cmaj - G: acordes graves, vozes em Hz
  var CHORDS = [
    [110.00, 164.81, 220.00, 261.63, 329.63],
    [87.31, 130.81, 174.61, 220.00, 329.63],
    [130.81, 196.00, 261.63, 329.63],
    [98.00, 146.83, 196.00, 293.66]
  ];
  var CHORD_DUR = 9;      // segundos por acorde
  var PENTATONIC = [440.0, 523.25, 587.33, 659.25, 783.99];

  function buildAudio() {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;

    var ctx = new Ctx();

    var comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -24;
    comp.knee.value = 18;
    comp.ratio.value = 6;
    comp.attack.value = 0.01;
    comp.release.value = 0.3;
    comp.connect(ctx.destination);

    var master = ctx.createGain();
    master.gain.value = 0;
    master.connect(comp);

    // Filtro compartilhado "respirando" dá vida ao pad
    var filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 460;
    filter.Q.value = 0.6;
    filter.connect(master);

    var lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.06;
    var lfoGain = ctx.createGain();
    lfoGain.gain.value = 190;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    // Pad seco + eco espaçado
    var padBus = ctx.createGain();
    padBus.gain.value = 1;
    padBus.connect(filter);

    var echoSend = ctx.createGain();
    echoSend.gain.value = 0.5;
    filter.connect(echoSend);

    var delay = ctx.createDelay(1.2);
    delay.delayTime.value = 0.44;
    var feedback = ctx.createGain();
    feedback.gain.value = 0.38;
    delay.connect(feedback);
    feedback.connect(delay);
    echoSend.connect(delay);

    var wet = ctx.createGain();
    wet.gain.value = 0.42;
    delay.connect(wet);
    wet.connect(master);

    // Plucks passam direto, com um pouco do eco
    var pluckBus = ctx.createGain();
    pluckBus.gain.value = 1;
    pluckBus.connect(master);
    pluckBus.connect(delay);

    audio.ctx = ctx;
    audio.master = master;
    audio.padBus = padBus;
    audio.pluckBus = pluckBus;
    audio.echoSend = echoSend;
    audio.lfo = lfo;
    return true;
  }

  function playNote(freq, when) {
    var ctx = audio.ctx;

    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    // Um sopro de harmônico acima, para o timbre não ficar oco
    var osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.value = freq * 2.003;
    var partialGain = ctx.createGain();
    partialGain.gain.value = 0.28;
    osc2.connect(partialGain);

    var gain = ctx.createGain();
    gain.gain.value = 0;
    osc.connect(gain);
    partialGain.connect(gain);
    gain.connect(audio.padBus);

    var peak = 0.05;
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(peak, when + 3.2);
    gain.gain.setValueAtTime(peak, when + CHORD_DUR - 1.2);
    gain.gain.linearRampToValueAtTime(0, when + CHORD_DUR + 1.4);

    var stopAt = when + CHORD_DUR + 1.6;
    osc.start(when);
    osc2.start(when);
    osc.stop(stopAt);
    osc2.stop(stopAt);
    osc.onended = function () {
      try { gain.disconnect(); partialGain.disconnect(); } catch (err) { /* já solto */ }
    };
  }

  function scheduleChord() {
    if (!audio.on) return;
    var chord = CHORDS[audio.chordIndex % CHORDS.length];
    audio.chordIndex += 1;
    var when = audio.ctx.currentTime + 0.05;
    chord.forEach(function (freq) { playNote(freq, when); });
    audio.chordTimer = window.setTimeout(scheduleChord, CHORD_DUR * 1000 - 400);
  }

  function schedulePluck() {
    if (!audio.on) return;

    var ctx = audio.ctx;
    var now = ctx.currentTime;
    var freq = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)] *
      (Math.random() < 0.35 ? 0.5 : 1);

    var osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = freq;

    var gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 2.4);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 2.5);
    osc.onended = function () {
      try { gain.disconnect(); } catch (err) { /* já solto */ }
    };

    // Alguma estéreo, se o navegador suportar
    if (ctx.createStereoPanner) {
      var pan = ctx.createStereoPanner();
      pan.pan.value = Math.random() * 0.8 - 0.4;
      gain.disconnect();
      gain.connect(pan);
      pan.connect(audio.pluckBus);
    }

    audio.pluckTimer = window.setTimeout(schedulePluck, 3500 + Math.random() * 5500);
  }

  function setSound(on) {
    audio.on = on;
    var btn = $("#sound-toggle");
    if (!btn) return;

    btn.classList.toggle("is-playing", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    updateSoundLabel();

    if (on) {
      if (!audio.ctx && !buildAudio()) {
        // Sem Web Audio: volta ao estado de repouso
        audio.on = false;
        btn.classList.remove("is-playing");
        btn.setAttribute("aria-pressed", "false");
        updateSoundLabel();
        return;
      }
      if (audio.ctx.state === "suspended") audio.ctx.resume();
      var master = audio.master.gain;
      master.cancelScheduledValues(audio.ctx.currentTime);
      master.setTargetAtTime(0.8, audio.ctx.currentTime, 0.9);
      scheduleChord();
      schedulePluck();
    } else {
      if (audio.ctx) {
        var fade = audio.master.gain;
        fade.cancelScheduledValues(audio.ctx.currentTime);
        fade.setTargetAtTime(0, audio.ctx.currentTime, 0.35);
        window.setTimeout(function () {
          if (!audio.on && audio.ctx && audio.ctx.state === "running") {
            audio.ctx.suspend();
          }
        }, 1500);
      }
      window.clearTimeout(audio.chordTimer);
      window.clearTimeout(audio.pluckTimer);
    }
  }

  function updateSoundLabel() {
    var btn = $("#sound-toggle");
    if (!btn) return;
    var dict = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
    btn.setAttribute("aria-label", audio.on ? dict["sound.disable"] : dict["sound.enable"]);
  }

  function initSound() {
    var btn = $("#sound-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () { setSound(!audio.on); });
    updateSoundLabel();
  }

  /* ------------------------------------------------------------------
     6. Menu mobile
     ------------------------------------------------------------------ */
  var closeMenu = function () {};

  function initMenu() {
    var toggle = $("#nav-toggle");
    var nav = $("#nav-principal");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
      var dict = TRANSLATIONS[currentLang];
      toggle.setAttribute("aria-label", open ? dict["nav.close"] : dict["nav.toggle"]);
    }

    closeMenu = function () { setOpen(false); };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 860) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------
     7. Rolagem suave e foco acessível
     ------------------------------------------------------------------ */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("href");
        if (!id || id === "#") return;
        var target = document.getElementById(id.slice(1));
        if (!target) return;

        event.preventDefault();
        closeMenu();

        var offset = 80;
        var header = $(".site-header");
        if (header && header.offsetHeight) offset = header.offsetHeight + 12;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: top,
          behavior: prefersReducedMotion() ? "auto" : "smooth"
        });

        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        window.setTimeout(function () {
          target.focus({ preventScroll: true });
        }, prefersReducedMotion() ? 0 : 520);

        if (history.replaceState) {
          try { history.replaceState(null, "", id); } catch (err) { /* file:// */ }
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     8. Cabeçalho, seção ativa e animações de entrada
     ------------------------------------------------------------------ */
  function initHeaderState() {
    var header = $(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.pageYOffset > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initActiveSection() {
    var sections = $$("main section[id]");
    var links = $$(".nav-link");
    if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      map[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = map[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach(function (l) {
              l.classList.remove("is-active");
              l.removeAttribute("aria-current");
            });
            link.classList.add("is-active");
            link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  function initReveal() {
    var items = $$(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    items.forEach(function (item) { observer.observe(item); });
  }

  /* ------------------------------------------------------------------
     9. Detalhes: rabisco do hero, foto e ano do rodapé
     ------------------------------------------------------------------ */
  function initHeroReady() {
    var hero = $(".hero");
    if (!hero) return;
    // Ligar a classe depois de um quadro, para o desenho do rabisco partir
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        hero.classList.add("is-ready");
      });
    });
  }

  function initPhotoFallback() {
    var img = $(".photo-frame img");
    if (!img) return;
    img.addEventListener("error", function () {
      var frame = img.closest(".photo-frame");
      if (frame) frame.classList.add("is-missing");
    });
    if (img.complete && img.naturalWidth === 0) {
      var frame = img.closest(".photo-frame");
      if (frame) frame.classList.add("is-missing");
    }
  }

  function initYear() {
    var year = $("#ano-atual");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------
     10. Inicialização
     ------------------------------------------------------------------ */
  function init() {
    initLanguage();
    initTheme();
    initSound();
    initMenu();
    initSmoothScroll();
    initHeaderState();
    initActiveSection();
    initReveal();
    initHeroReady();
    initPhotoFallback();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
