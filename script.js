/* ==========================================================================
   Portfólio — Lívia Soares Lopes
   script.js
   - Troca de idioma (PT / EN) com traduções manuais e persistência em localStorage
   - Menu mobile acessível
   - Rolagem suave, seção ativa na navegação e animações de entrada
   - Ano do rodapé e fallback da fotografia
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Traduções
     Para adicionar um novo idioma, crie um novo bloco com as mesmas
     chaves do bloco "pt" (ou "en") e chame setLanguage(novoCodigo).
     ------------------------------------------------------------------ */
  var TRANSLATIONS = {
    pt: {
      "meta.title": "Lívia Soares Lopes | Desenvolvimento Web, Software e IA",
      "meta.description":
        "Portfólio de Lívia Soares Lopes, estudante de Ciência da Computação e estagiária em Engenharia de IA na Ohmyweb, em Dubai. Desenvolvimento web, aplicativos e soluções digitais.",
      "a11y.skip": "Pular para o conteúdo principal",

      "brand.role": "Desenvolvimento Web · IA",
      "nav.label": "Navegação principal",
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.skills": "Competências",
      "nav.experience": "Experiência",
      "nav.contact": "Contato",
      "nav.toggle": "Abrir menu de navegação",
      "nav.close": "Fechar menu de navegação",
      "lang.label": "Selecionar idioma",
      "lang.pt": "Português",
      "lang.en": "Inglês",

      "hero.eyebrow": "Brasil · Atuação nacional e internacional",
      "hero.role":
        "Estudante de Ciência da Computação | Estagiária em Engenharia de IA | Desenvolvedora Web e de Aplicativos",
      "hero.text":
        "Transformo ideias em soluções digitais funcionais, combinando desenvolvimento de software, criatividade e interesse por inteligência artificial. Sou estudante de Ciência da Computação e estagiária na área de Engenharia de IA na Ohmyweb, conectando minha formação tecnológica a desafios reais e oportunidades de inovação.",
      "hero.cta1": "Conheça minhas competências",
      "hero.cta2": "Entre em contato",
      "hero.caption": "Lívia Soares Lopes · Brasil",
      "hero.photoAlt": "Foto de Lívia Soares Lopes",
      "hero.meta.company": "Ohmyweb · Dubai, Emirados Árabes Unidos",
      "hero.meta.availability": "Disponível para novos projetos e colaborações",

      "about.eyebrow": "Sobre",
      "about.title": "Sobre mim",
      "about.lead":
        "Uma trajetória guiada por tecnologia, curiosidade e vontade de transformar problemas reais em soluções digitais.",
      "about.p1":
        "Meu nome é Lívia Soares Lopes, tenho 24 anos e sou estudante de Ciência da Computação. Minha trajetória é orientada pelo interesse em tecnologia, desenvolvimento de software e criação de soluções digitais que possam resolver problemas reais.",
      "about.p2":
        "Atualmente, sou estagiária na área de Engenharia de Inteligência Artificial na Ohmyweb, empresa localizada em Dubai, nos Emirados Árabes Unidos, atuando também como representante da empresa no Brasil.",
      "about.p3":
        "Tenho conhecimentos em Python, Java, HTML e CSS, além de desenvolvimento de sites e aplicativos. Busco constantemente ampliar minhas habilidades técnicas, explorar novas tecnologias e desenvolver soluções que unam funcionalidade, organização e uma boa experiência para o usuário.",
      "about.p4":
        "Meu objetivo é conectar tecnologia e necessidades reais, colaborando com projetos e pessoas no Brasil e no mercado internacional.",
      "about.factsLabel": "Resumo do perfil",
      "about.factsTitle": "Resumo do perfil",
      "about.fact1.label": "Idade",
      "about.fact1.value": "24 anos",
      "about.fact2.label": "Formação",
      "about.fact2.value": "Ciência da Computação",
      "about.fact3.label": "Atuação atual",
      "about.fact3.value": "Estagiária em Engenharia de IA · Ohmyweb",
      "about.fact4.label": "Sede da empresa",
      "about.fact4.value": "Dubai, Emirados Árabes Unidos",
      "about.fact5.label": "Atuação",
      "about.fact5.value": "Brasil · Representação da Ohmyweb",

      "skills.eyebrow": "Competências",
      "skills.title": "Tecnologias e competências",
      "skills.lead":
        "Separo o que já pratiquei em código do que estou aprofundando agora — com clareza sobre o que já domino e o que sigo aprendendo.",
      "skills.badge.current": "Conhecimento atual",
      "skills.badge.interest": "Área de interesse",
      "skills.c1.title": "Linguagens de programação",
      "skills.c2.title": "Desenvolvimento web",
      "skills.c2.item3": "Estruturação de páginas web",
      "skills.c2.item4": "Criação e desenvolvimento de sites",
      "skills.c3.title": "Desenvolvimento de aplicativos",
      "skills.c3.item1": "Desenvolvimento de aplicativos",
      "skills.c3.item2":
        "Construção de interfaces e funcionalidades digitais, de acordo com as habilidades efetivamente demonstradas nos projetos",
      "skills.c4.title": "Áreas de interesse profissional",
      "skills.c4.item1": "Inteligência Artificial",
      "skills.c4.item2": "Engenharia de Software",
      "skills.c4.item3": "Desenvolvimento de soluções digitais",
      "skills.c4.item4": "Tecnologia e inovação",


      "exp.eyebrow": "Trajetória",
      "exp.title": "Experiência profissional",
      "exp.lead":
        "Uma experiência em ambiente internacional, conectando a Ohmyweb ao mercado brasileiro.",
      "exp.role": "Estagiária na área de Engenharia de Inteligência Artificial",
      "exp.period": "Atual",
      "exp.desc":
        "Atuação em um ambiente profissional internacional, com foco na área de Engenharia de Inteligência Artificial e conexão entre a empresa e o mercado brasileiro.",
      "exp.location": "Dubai, Emirados Árabes Unidos",
      "exp.base": "Base da profissional: Brasil",
      "exp.scope": "Atuação: representação da empresa no Brasil",
      "exp.h1": "Ambiente profissional internacional",
      "exp.h2": "Foco em Engenharia de Inteligência Artificial",
      "exp.h3": "Ponte entre a Ohmyweb e o mercado brasileiro",

      "contact.eyebrow": "Contato",
      "contact.title": "Vamos conversar sobre seu próximo projeto?",
      "contact.text":
        "Estou aberta a conexões profissionais, oportunidades de colaboração e conversas sobre desenvolvimento web, aplicativos, software e inovação tecnológica. Entre em contato para conversarmos sobre suas ideias e necessidades.",
      "contact.ctaWhats": "Chamar no WhatsApp",
      "contact.ctaMail": "Enviar e-mail",
      "contact.email": "E-mail",
      "contact.whatsapp": "WhatsApp",

      "footer.email": "E-mail",
      "footer.tagline":
        "Desenvolvimento de software, sites e aplicativos com interesse em inteligência artificial.",
      "footer.navLabel": "Navegação do rodapé",
      "footer.navTitle": "Navegação",
      "footer.contactTitle": "Contato",
      "footer.rights": "Lívia Soares Lopes. Todos os direitos reservados."
    },

    en: {
      "meta.title": "Lívia Soares Lopes | Web Development, Software & AI",
      "meta.description":
        "Portfolio of Lívia Soares Lopes, Computer Science student and AI Engineering Intern at Ohmyweb in Dubai. Web development, apps and digital solutions.",
      "a11y.skip": "Skip to main content",

      "brand.role": "Web Development · AI",
      "nav.label": "Main navigation",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "nav.toggle": "Open navigation menu",
      "nav.close": "Close navigation menu",
      "lang.label": "Select language",
      "lang.pt": "Portuguese",
      "lang.en": "English",

      "hero.eyebrow": "Brazil · Working nationally and internationally",
      "hero.role":
        "Computer Science Student | AI Engineering Intern | Web & App Developer",
      "hero.text":
        "I turn ideas into functional digital solutions by combining software development, creativity, and an interest in artificial intelligence. I am a Computer Science student and an AI Engineering Intern at Ohmyweb, connecting my technical education with real-world challenges and opportunities for innovation.",
      "hero.cta1": "Explore my skills",
      "hero.cta2": "Get in touch",
      "hero.caption": "Lívia Soares Lopes · Brazil",
      "hero.photoAlt": "Photo of Lívia Soares Lopes",
      "hero.meta.company": "Ohmyweb · Dubai, United Arab Emirates",
      "hero.meta.availability": "Open to new projects and collaborations",

      "about.eyebrow": "About",
      "about.title": "About me",
      "about.lead":
        "A path shaped by technology, curiosity and the desire to turn real problems into digital solutions.",
      "about.p1":
        "My name is Lívia Soares Lopes, I am 24 years old and I am a Computer Science student. My path is driven by an interest in technology, software development and building digital solutions that solve real problems.",
      "about.p2":
        "I am currently an AI Engineering Intern at Ohmyweb, a company based in Dubai, United Arab Emirates, where I also act as the company's representative in Brazil.",
      "about.p3":
        "I work with Python, Java, HTML and CSS, as well as website and application development. I am constantly looking to strengthen my technical skills, explore new technologies and build solutions that combine functionality, organisation and a clear user experience.",
      "about.p4":
        "My goal is to connect technology with real needs, collaborating with teams and people in Brazil and across the international market.",
      "about.factsLabel": "Profile summary",
      "about.factsTitle": "Profile summary",
      "about.fact1.label": "Age",
      "about.fact1.value": "24 years old",
      "about.fact2.label": "Education",
      "about.fact2.value": "Computer Science",
      "about.fact3.label": "Current role",
      "about.fact3.value": "AI Engineering Intern · Ohmyweb",
      "about.fact4.label": "Company headquarters",
      "about.fact4.value": "Dubai, United Arab Emirates",
      "about.fact5.label": "Coverage",
      "about.fact5.value": "Brazil · Representing Ohmyweb",

      "skills.eyebrow": "Skills",
      "skills.title": "Technologies and skills",
      "skills.lead":
        "I keep my hands-on knowledge separate from the areas I am currently deepening — being clear about what I already work with and what I am still learning.",
      "skills.badge.current": "Current knowledge",
      "skills.badge.interest": "Area of interest",
      "skills.c1.title": "Programming languages",
      "skills.c2.title": "Web development",
      "skills.c2.item3": "Web page structure and semantics",
      "skills.c2.item4": "Building and developing websites",
      "skills.c3.title": "Application development",
      "skills.c3.item1": "Application development",
      "skills.c3.item2":
        "Designing interfaces and digital features, in line with the skills actually demonstrated in the projects",
      "skills.c4.title": "Professional areas of interest",
      "skills.c4.item1": "Artificial Intelligence",
      "skills.c4.item2": "Software Engineering",
      "skills.c4.item3": "Digital solution development",
      "skills.c4.item4": "Technology and innovation",


      "exp.eyebrow": "Background",
      "exp.title": "Professional experience",
      "exp.lead":
        "An experience within an international environment, connecting Ohmyweb with the Brazilian market.",
      "exp.role": "Intern in Artificial Intelligence Engineering",
      "exp.period": "Present",
      "exp.desc":
        "Working within an international professional environment, focused on Artificial Intelligence Engineering and on connecting the company with the Brazilian market.",
      "exp.location": "Dubai, United Arab Emirates",
      "exp.base": "Based in: Brazil",
      "exp.scope": "Scope: representing the company in Brazil",
      "exp.h1": "International professional environment",
      "exp.h2": "Focus on Artificial Intelligence Engineering",
      "exp.h3": "A bridge between Ohmyweb and the Brazilian market",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about your next project?",
      "contact.text":
        "I am open to professional connections, collaboration opportunities and conversations about web development, applications, software and technological innovation. Get in touch and let us discuss your ideas and what you need.",
      "contact.ctaWhats": "Chat on WhatsApp",
      "contact.ctaMail": "Send an email",
      "contact.email": "Email",
      "contact.whatsapp": "WhatsApp",

      "footer.email": "Email",
      "footer.tagline":
        "Software, website and application development with a growing interest in artificial intelligence.",
      "footer.navLabel": "Footer navigation",
      "footer.navTitle": "Navigation",
      "footer.contactTitle": "Contact",
      "footer.rights": "Lívia Soares Lopes. All rights reserved."
    }
  };

  var STORAGE_KEY = "ls-portfolio-lang";
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

  /* ------------------------------------------------------------------
     3. Troca de idioma
     ------------------------------------------------------------------ */
  function applyTranslations(lang) {
    var dict = TRANSLATIONS[lang];
    if (!dict) return;

    // Textos (e conteúdo de metadados)
    $$("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (value === undefined) return;
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    // Atributos (alt, aria-label, ...)
    $$("[data-i18n-attr]").forEach(function (el) {
      el
        .getAttribute("data-i18n-attr")
        .split(";")
        .forEach(function (pair) {
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

    // Atributo lang do documento e locale social
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    var ogLocale = $('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", lang === "pt" ? "pt_BR" : "en_US");
    }

    // Estado dos botões de idioma (cabeçalho e rodapé)
    $$(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (persist !== false) {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (err) {
        /* modo privado / storage bloqueado: segue sem persistir */
      }
    }
  }

  function initLanguage() {
    var stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      stored = null;
    }
    var lang = stored && TRANSLATIONS[stored] ? stored : DEFAULT_LANG;
    setLanguage(lang, false);

    $$(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"), true);
      });
    });
  }

  /* ------------------------------------------------------------------
     4. Menu mobile
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
      toggle.setAttribute(
        "aria-label",
        open ? dict["nav.close"] : dict["nav.toggle"]
      );
    }

    // Exposto para que a rolagem suave possa fechar o menu antes de rolar
    closeMenu = function () {
      setOpen(false);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Fecha ao clicar em um link, ao redimensionar ou ao pressionar Esc
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
      if (window.innerWidth >= 900) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------
     5. Rolagem suave e foco acessível
     ------------------------------------------------------------------ */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("href");
        if (!id || id === "#") return;
        var target = document.getElementById(id.slice(1));
        if (!target) return;

        event.preventDefault();

        // Fecha o menu mobile antes de rolar (o body fica sem overflow:hidden)
        closeMenu();

        var offset = 80;
        var header = $(".site-header");
        if (header && header.offsetHeight) {
          offset = header.offsetHeight + 12;
        }
        var top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        var scroll = function () {
          window.scrollTo({
            top: top,
            behavior: prefersReducedMotion() ? "auto" : "smooth"
          });
        };
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(scroll);
        } else {
          scroll();
        }

        // Move o foco para a seção (acessibilidade de teclado)
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
        }
        window.setTimeout(
          function () {
            target.focus({ preventScroll: true });
          },
          prefersReducedMotion() ? 0 : 520
        );

        if (history.replaceState) {
          try {
            history.replaceState(null, "", id);
          } catch (err) {
            /* alguns navegadores bloqueiam replaceState em file:// */
          }
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     6. Cabeçalho, seção ativa e animações de entrada
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
    if (!sections.length || !links.length || !("IntersectionObserver" in window)) {
      return;
    }

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

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initReveal() {
    var items = $$(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
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

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  /* ------------------------------------------------------------------
     7. Fotografia: fallback caso o arquivo não esteja disponível
     ------------------------------------------------------------------ */
  function initPhotoFallback() {
    var img = $(".photo-frame img");
    if (!img) return;
    img.addEventListener("error", function () {
      var frame = img.closest(".photo-frame");
      if (frame) frame.classList.add("is-missing");
    });
    // Se o navegador já detectou a falha antes do listener:
    if (img.complete && img.naturalWidth === 0) {
      var frame = img.closest(".photo-frame");
      if (frame) frame.classList.add("is-missing");
    }
  }

  /* ------------------------------------------------------------------
     8. Ano do rodapé
     ------------------------------------------------------------------ */
  function initYear() {
    var year = $("#ano-atual");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------
     9. Inicialização
     ------------------------------------------------------------------ */
  function init() {
    initLanguage();
    initMenu();
    initSmoothScroll();
    initHeaderState();
    initActiveSection();
    initReveal();
    initPhotoFallback();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
