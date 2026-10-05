import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const icon = (name, size = 18) => {
  const paths = {
    arrow: `<path d="M4 12h15M13 5l7 7-7 7"/>`,
    leaf: `<path d="M20.4 3.6C13.1 3.3 5.4 6.5 4.2 13c-.7 4 2 6.7 6 6 6.5-1.2 9.7-8.9 9.4-16.2Z"/><path d="M4.6 19.4C8.2 15.8 12 12.1 17 8"/>`,
    play: `<path d="m9 6 9 6-9 6V6Z"/>`,
    check: `<path d="m5 12 4 4L19 6"/>`,
    plus: `<path d="M12 5v14M5 12h14"/>`,
    external: `<path d="M14 5h5v5M19 5l-9 9"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>`,
  };
  return `<svg class="icon icon-${name}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="site-shell">
    <div class="noise" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"><span></span></div>

    <header class="site-header" data-header>
      <a class="brand" href="#top" data-scroll-link aria-label="VitalForge home">
        <span class="brand-mark" aria-hidden="true"><span></span></span>
        <span class="brand-name"><b>Vital</b><em>Forge</em></span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#story" data-scroll-link>Story</a>
        <a href="#capabilities" data-scroll-link>Capabilities</a>
        <a href="#architecture" data-scroll-link>Architecture</a>
        <a href="#timeline" data-scroll-link>Résumé</a>
      </nav>
      <a class="header-cta" href="#outcomes" data-scroll-link>Explore the build ${icon("arrow", 15)}</a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
      <div class="mobile-menu" data-mobile-menu>
        <a href="#story" data-scroll-link>01 / Story</a>
        <a href="#capabilities" data-scroll-link>02 / Capabilities</a>
        <a href="#architecture" data-scroll-link>03 / Architecture</a>
        <a href="#timeline" data-scroll-link>04 / Résumé</a>
        <a href="#outcomes" data-scroll-link>05 / Outcomes</a>
      </div>
    </header>

    <main id="top">
      <section class="hero section-dark" aria-labelledby="hero-title">
        <div class="hero-gridline" aria-hidden="true"></div>
        <div class="hero-contour contour-one" aria-hidden="true"></div>
        <div class="hero-contour contour-two" aria-hidden="true"></div>
        <div class="hero-copy page-width">
          <p class="eyebrow light"><span class="eyebrow-dot"></span> Independent project / 2024—25</p>
          <h1 id="hero-title" class="hero-title"><span>Build a</span><span class="hero-title-accent">healthier</span><span>baseline.</span></h1>
          <div class="hero-bottom">
            <p class="hero-intro">VitalForge turns the quiet work of a healthy day into something you can see, shape, and keep moving.</p>
            <div class="hero-actions">
              <a class="button button-lime" href="#story" data-scroll-link>Read the case study ${icon("arrow", 17)}</a>
              <a class="text-link light-link" href="#architecture" data-scroll-link>${icon("play", 17)} See how it works</a>
            </div>
          </div>
        </div>
        <div class="hero-visual page-width" aria-label="VitalForge dashboard preview">
          <div class="hero-orbit" aria-hidden="true"><span class="orbit-dot dot-a"></span><span class="orbit-dot dot-b"></span><span class="orbit-ring ring-a"></span><span class="orbit-ring ring-b"></span></div>
          <div class="dashboard-preview" data-hero-card>
            <div class="dashboard-topbar"><span class="window-dots"><i></i><i></i><i></i></span><span class="dashboard-title">Today / overview</span><span class="dashboard-date">Tue, 08 Oct</span></div>
            <div class="dashboard-body">
              <div class="dashboard-greeting"><span class="mini-kicker">GOOD MORNING, ALEX</span><strong>Keep the rhythm.</strong><span>Small inputs. Stronger days.</span></div>
              <div class="dashboard-ring-wrap"><div class="dashboard-ring"><span>72<small>%</small></span></div><span>daily balance</span></div>
            </div>
            <div class="metric-row">
              <div class="metric-block"><span>Water</span><strong>1.8 <small>/ 2.5 L</small></strong><i class="metric-bar"><b style="width:72%"></b></i></div>
              <div class="metric-block"><span>Steps</span><strong>6,420 <small>/ 8,000</small></strong><i class="metric-bar"><b style="width:80%"></b></i></div>
              <div class="metric-block"><span>Sleep</span><strong>7.4 <small>/ 8 hrs</small></strong><i class="metric-bar"><b style="width:92%"></b></i></div>
            </div>
            <div class="dashboard-footer"><span class="status-pill">${icon("check", 13)} 3-day streak</span><span class="dashboard-note">Consistency compounds.</span></div>
          </div>
          <div class="hero-caption"><span>01</span><span>Dashboard language / calm, measurable, human</span></div>
        </div>
      </section>

      <section class="signal-band" aria-label="Project summary">
        <div class="page-width signal-row">
          <span class="signal-label">A project résumé for</span>
          <span class="signal-divider"></span>
          <span>Health tracking</span><span class="signal-dot">✳</span><span>Nutrition</span><span class="signal-dot">✳</span><span>Movement</span><span class="signal-dot">✳</span><span>Habits</span>
        </div>
      </section>

      <section class="story section-paper" id="story" aria-labelledby="story-title">
        <div class="page-width section-split story-grid">
          <div class="section-label-wrap reveal"><p class="section-number">01</p><p class="section-label">The starting point</p><span class="section-line"></span></div>
          <div class="story-content">
            <p class="eyebrow reveal">A whole-day view</p>
            <h2 id="story-title" class="display-title reveal">Health is not a single <em>number.</em></h2>
            <div class="story-copy-grid">
              <p class="lead reveal">Most fitness tools ask users to become data analysts. VitalForge starts somewhere softer: give the day a shape, then make progress visible.</p>
              <div class="body-stack reveal"><p>The original brief was intentionally practical — a desktop app that could bring profiles, daily tracking, workouts, nutrition, and progress into one dependable place.</p><p>The design challenge was to make a system with a lot of data feel calm enough to return to every morning.</p></div>
            </div>
            <div class="quote-card reveal"><span class="quote-mark">“</span><p>Make the invisible work measurable — without making it feel like work.</p><span class="quote-byline">Project north star / VitalForge</span></div>
          </div>
        </div>
      </section>

      <section class="capabilities section-paper" id="capabilities" aria-labelledby="capabilities-title">
        <div class="page-width">
          <div class="section-heading-row reveal"><div><p class="eyebrow">The product surface</p><h2 id="capabilities-title" class="section-title">One day.<br><em>Six signals.</em></h2></div><p class="section-aside">A clear view of the inputs that shape energy, consistency, and long-term progress.</p></div>
          <div class="capability-grid">
            <article class="capability-card capability-feature reveal"><div class="capability-top"><span class="capability-index">01</span><span class="capability-icon icon-profile">${icon("leaf", 21)}</span></div><h3>Personal baseline</h3><p>Profile setup captures the context behind the numbers — age, goals, activity level, water, sleep, and steps.</p><div class="micro-ui profile-ui"><span></span><span></span><span></span><b></b></div></article>
            <article class="capability-card reveal"><div class="capability-top"><span class="capability-index">02</span><span class="capability-icon">◎</span></div><h3>Daily rhythm</h3><p>Water, steps, sleep, weight, and notes become a simple, repeatable check-in.</p><div class="tiny-bars"><i style="height:42%"></i><i style="height:68%"></i><i style="height:50%"></i><i style="height:84%"></i><i style="height:71%"></i><i style="height:92%"></i></div></article>
            <article class="capability-card reveal"><div class="capability-top"><span class="capability-index">03</span><span class="capability-icon">↗</span></div><h3>Training plans</h3><p>Goal-aware workout assignments and exercise checklists turn intention into a next action.</p><div class="check-list"><span>${icon("check", 12)} Warm-up</span><span>${icon("check", 12)} Strength set</span><span class="muted">○ Recovery</span></div></article>
            <article class="capability-card reveal"><div class="capability-top"><span class="capability-index">04</span><span class="capability-icon">◒</span></div><h3>Food intelligence</h3><p>A structured library makes nutrition logging practical, from serving size to macros.</p><div class="nutrition-line"><span>Protein</span><b>31g</b><i><em></em></i></div><div class="nutrition-line"><span>Fiber</span><b>12g</b><i><em style="width:58%"></em></i></div></article>
            <article class="capability-card reveal"><div class="capability-top"><span class="capability-index">05</span><span class="capability-icon">◔</span></div><h3>Goal progress</h3><p>Progress logs give long-term goals a visible pulse instead of a distant finish line.</p><div class="goal-meter"><span><b>General fitness</b><b>68%</b></span><i><em style="width:68%"></em></i></div></article>
            <article class="capability-card capability-accent reveal"><div class="capability-top"><span class="capability-index">06</span><span class="capability-icon">⌁</span></div><h3>Progress charts</h3><p>Matplotlib visualisations turn repeated entries into patterns you can respond to.</p><div class="chart-spark"><svg viewBox="0 0 220 65" preserveAspectRatio="none"><path d="M0 55 C24 53 22 36 48 39 S72 51 94 31 S115 22 132 28 S154 47 173 18 S203 20 220 7" fill="none" stroke="currentColor" stroke-width="3"/><path d="M0 55 C24 53 22 36 48 39 S72 51 94 31 S115 22 132 28 S154 47 173 18 S203 20 220 7 V65 H0Z" fill="currentColor" opacity=".12"/></svg><span>trend / upward</span></div></article>
          </div>
        </div>
      </section>

      <section class="architecture section-dark" id="architecture" aria-labelledby="architecture-title">
        <div class="architecture-gridline" aria-hidden="true"></div>
        <div class="page-width">
          <div class="section-heading-row dark-row reveal"><div><p class="eyebrow light">Under the surface</p><h2 id="architecture-title" class="section-title light-title">A calm interface<br>on a <em>clear system.</em></h2></div><p class="section-aside light-aside">The visual language stays light because the underlying structure is intentional: separate responsibilities, explicit data, dependable feedback.</p></div>
          <div class="flow-diagram reveal" aria-label="VitalForge architecture flow">
            <div class="flow-node flow-user"><span class="node-index">01</span><strong>Person</strong><small>profile + goals</small></div><span class="flow-arrow">→</span><div class="flow-node flow-ui"><span class="node-index">02</span><strong>Tkinter UI</strong><small>screens + components</small></div><span class="flow-arrow">→</span><div class="flow-node flow-logic"><span class="node-index">03</span><strong>Queries + logic</strong><small>validation + state</small></div><span class="flow-arrow">→</span><div class="flow-node flow-db"><span class="node-index">04</span><strong>MySQL</strong><small>durable progress</small></div>
          </div>
          <div class="architecture-notes">
            <div class="arch-note reveal"><span class="note-mark">↘</span><div><b>Composable by design</b><p>Reusable cards, labels, inputs, progress bars, and scrollable frames keep the desktop UI consistent.</p></div></div>
            <div class="arch-note reveal"><span class="note-mark">↘</span><div><b>Data has a home</b><p>Users, profiles, daily tracking, assignments, food logs, and goal progress each have a clear relational boundary.</p></div></div>
            <div class="arch-note reveal"><span class="note-mark">↘</span><div><b>Feedback is part of the feature</b><p>Validation, demo mode, chart states, and readable error paths make the app easier to trust.</p></div></div>
          </div>
        </div>
      </section>

      <section class="stack section-paper" aria-labelledby="stack-title">
        <div class="page-width stack-layout">
          <div class="stack-copy"><p class="eyebrow reveal">The toolkit</p><h2 id="stack-title" class="section-title reveal">Made with<br><em>useful parts.</em></h2><p class="stack-intro reveal">No black boxes. Just a focused stack selected to make a desktop product feel clear, testable, and complete.</p><a class="text-link green-link reveal" href="#timeline" data-scroll-link>Follow the build ${icon("arrow", 16)}</a></div>
          <div class="stack-list reveal">
            <div class="stack-row"><span>Language</span><strong>Python</strong><small>application logic</small></div>
            <div class="stack-row"><span>Interface</span><strong>Tkinter</strong><small>desktop UI</small></div>
            <div class="stack-row"><span>Data layer</span><strong>MySQL</strong><small>relational storage</small></div>
            <div class="stack-row"><span>Visuals</span><strong>Matplotlib</strong><small>progress charts</small></div>
            <div class="stack-row"><span>Quality</span><strong>pytest</strong><small>database config tests</small></div>
          </div>
        </div>
      </section>

      <section class="signals section-lime" aria-labelledby="signals-title">
        <div class="page-width signals-layout"><div><p class="eyebrow dark-eyebrow">Project signals</p><h2 id="signals-title" class="signals-title">The work, in<br><em>plain numbers.</em></h2></div><div class="signal-metrics"><div class="big-metric reveal"><strong data-count="6">0</strong><span>core health signals<br>tracked per day</span></div><div class="big-metric reveal"><strong data-count="300" data-suffix="+">0</strong><span>nutrition entries<br>in the data library</span></div><div class="big-metric reveal"><strong data-count="8">0</strong><span>relational tables<br>behind the experience</span></div><div class="big-metric reveal"><strong data-count="100" data-suffix="%">0</strong><span>focused on<br>the daily loop</span></div></div></div>
      </section>

      <section class="timeline section-paper" id="timeline" aria-labelledby="timeline-title">
        <div class="page-width">
          <div class="section-heading-row reveal"><div><p class="eyebrow">Project résumé</p><h2 id="timeline-title" class="section-title">From brief<br>to <em>baseline.</em></h2></div><p class="section-aside">A delivery trail that keeps the product story close to the decisions that shaped it.</p></div>
          <div class="timeline-list">
            <article class="timeline-item reveal"><div class="timeline-marker"><span>01</span><i></i></div><div class="timeline-meta"><span>Frame</span><small>01 / 04</small></div><div class="timeline-content"><h3>Define the day</h3><p>Turn a broad “fitness tracker” brief into a manageable loop: profile, log, move, reflect.</p><div class="timeline-tags"><span>scope</span><span>audience</span><span>habits</span></div></div></article>
            <article class="timeline-item reveal"><div class="timeline-marker"><span>02</span><i></i></div><div class="timeline-meta"><span>Shape</span><small>02 / 04</small></div><div class="timeline-content"><h3>Design the language</h3><p>Create a reusable visual system that makes forms, cards, charts, and feedback feel like one product.</p><div class="timeline-tags"><span>components</span><span>tokens</span><span>states</span></div></div></article>
            <article class="timeline-item reveal"><div class="timeline-marker"><span>03</span><i></i></div><div class="timeline-meta"><span>Build</span><small>03 / 04</small></div><div class="timeline-content"><h3>Connect the signals</h3><p>Wire the Tkinter screens to validation, MySQL queries, seeded food and workout data, and progress charts.</p><div class="timeline-tags"><span>python</span><span>mysql</span><span>matplotlib</span></div></div></article>
            <article class="timeline-item reveal"><div class="timeline-marker"><span>04</span><i></i></div><div class="timeline-meta"><span>Reflect</span><small>04 / 04</small></div><div class="timeline-content"><h3>Make it dependable</h3><p>Keep the edges readable: demo mode, error paths, setup guidance, and tests that protect the data connection.</p><div class="timeline-tags"><span>quality</span><span>documentation</span><span>handoff</span></div></div></article>
          </div>
        </div>
      </section>

      <section class="outcomes section-dark" id="outcomes" aria-labelledby="outcomes-title">
        <div class="page-width outcomes-grid">
          <div class="outcomes-intro reveal"><p class="eyebrow light">What remains</p><h2 id="outcomes-title" class="section-title light-title">A stronger<br><em>starting line.</em></h2><p>VitalForge is less about chasing a perfect day and more about giving the next day somewhere to begin.</p><a class="button button-lime" href="#top" data-scroll-link>Back to the beginning ${icon("arrow", 17)}</a></div>
          <div class="outcome-cards"><article class="outcome-card reveal"><span>01 / Achievement</span><h3>A complete loop</h3><p>From account and profile setup to daily logs, workouts, food, and charts — the experience has a beginning, middle, and return path.</p></article><article class="outcome-card reveal"><span>02 / Lesson</span><h3>Clarity is a feature</h3><p>When the system is explicit, the interface can be quiet. Strong architecture gives the product room to feel human.</p></article><article class="outcome-card reveal"><span>03 / Next</span><h3>Bring the baseline closer</h3><p>The next horizon is portability: make the same measured, encouraging loop available wherever the day happens.</p></article></div>
        </div>
      </section>

      <footer class="site-footer section-paper"><div class="page-width footer-row"><div class="footer-brand"><span class="brand-mark" aria-hidden="true"><span></span></span><span><b>Vital</b><em>Forge</em></span></div><p>Project portfolio / a healthier baseline, built deliberately.</p><a href="#top" class="footer-top" data-scroll-link>↑ Top</a></div><div class="page-width footer-bottom"><span>Python · Tkinter · MySQL · Matplotlib</span><span>Independent build / 2024—25</span></div></footer>
    </main>
  </div>
`;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none)").matches;
const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
let lenis;

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileMenu?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelectorAll("[data-scroll-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId?.startsWith("#")) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    closeMenu();
    if (lenis && !prefersReducedMotion) lenis.scrollTo(target, { offset: -80, duration: 1.1 });
    else target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
});

const setProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  header?.classList.toggle("is-scrolled", window.scrollY > 28);
};
window.addEventListener("scroll", setProgress, { passive: true });
setProgress();

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-38% 0px -52% 0px", threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

const revealAll = () => document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));

if (prefersReducedMotion) {
  revealAll();
} else {
  lenis = new Lenis({ autoRaf: false, smoothWheel: true, syncTouch: false, lerp: 0.08 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.fromTo(".hero-title span", { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.12, ease: "power4.out", delay: 0.15 });
  gsap.fromTo(".hero-intro, .hero-actions", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.68 });
  gsap.fromTo("[data-hero-card]", { y: 48, rotate: 2.4, opacity: 0 }, { y: 0, rotate: -2.5, opacity: 1, duration: 1.25, ease: "power3.out", delay: 0.35 });
  gsap.fromTo(".hero-caption", { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.25 });

  document.querySelectorAll(".reveal").forEach((element) => {
    gsap.fromTo(element, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } });
  });

  gsap.to(".contour-one", { yPercent: 18, rotate: 4, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".contour-two", { yPercent: -20, rotate: -3, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".hero-orbit", { rotate: 22, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.1 } });
  gsap.to(".timeline-marker i", { scaleY: 1, stagger: 0.18, ease: "none", scrollTrigger: { trigger: ".timeline-list", start: "top 70%", end: "bottom 75%", scrub: 0.7 } });
}

const countElements = document.querySelectorAll("[data-count]");
countElements.forEach((element) => {
  const target = Number(element.dataset.count);
  const suffix = element.dataset.suffix || "";
  if (prefersReducedMotion) {
    element.textContent = `${target}${suffix}`;
    return;
  }
  ScrollTrigger.create({
    trigger: element,
    start: "top 88%",
    once: true,
    onEnter: () => {
      const state = { value: 0 };
      gsap.to(state, { value: target, duration: 1.5, ease: "power2.out", onUpdate: () => { element.textContent = `${Math.round(state.value)}${suffix}`; } });
    },
  });
});

if (!isTouch && !prefersReducedMotion) {
  document.querySelectorAll(".capability-card, .outcome-card, .flow-node").forEach((card) => {
    card.addEventListener("mouseenter", () => gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out" }));
    card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, duration: 0.45, ease: "power2.out" }));
  });
}

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
  revealAll();
});
