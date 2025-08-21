// ===== Utils =====
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// Year
$("#year").textContent = new Date().getFullYear();

// Sticky header offset for anchor scroll (works with native smooth scroll)
function adjustHashScroll() {
  const y = window.scrollY;
  const hash = window.location.hash;
  const header = document.querySelector('.site-header');
  if (hash && header) {
    const el = document.querySelector(hash);
    if (el) {
      const top = el.getBoundingClientRect().top + y - (header.offsetHeight + 10);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
window.addEventListener('hashchange', adjustHashScroll);

// ===== Mobile Menu =====
const menuBtn = $("#menuToggle");
const mobileNav = $("#mobileNav");
function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  if (open) { mobileNav.hidden = false; }
  else { mobileNav.hidden = true; }
}
menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  setMenu(!open);
});
// close on link click
$$('.nav-mobile .nav-link').forEach(a => a.addEventListener('click', () => setMenu(false)));

// ===== Language Toggle (JA/EN) =====
const langBtn = $("#langToggle");
const i18n = {
  ja: {
    site_title: "Takumi Taki | ポートフォリオ",
    skip_to_content: "コンテンツへスキップ",
    nav_about: "プロフィール",
    nav_publications: "研究業績",
    nav_projects: "製作物",
    nav_contact: "お問合せ",
    hero_title: "Takumi TAKI | 多喜 匠",
    hero_sub: "XR, HCI, Robotics",
    cta_view_profile: "プロフィールを見る",
    about_title: "ABOUT ME",
    about_intro: "複合現実（Mixed Reality） と自律移動ロボット（AMR）の交差領域で、人がロボットの持つ環境地図を直感的に編集できるインタフェースの研究開発を行っています。",
    affiliation: "所属：大阪大学 大学院情報科学研究科",
    profile_name: "氏名",
    profile_focus: "研究分野",
    profile_focus_text: "Mixed Reality, HCI（ヒューマン・コンピュータ・インタラクション）, 自律移動ロボット",
    profile_brief: "略歴",
    profile_brief_item1: "2025年4月 - 現在：大阪大学 大学院情報科学研究科 情報システム工学専攻 浦西研究室",
    profile_brief_item2: "2021年4月 - 2025年3月：大阪大学 基礎工学部 情報科学科 ソフトウェア科学コース",
    pub_title: "研究業績",
    pub1_title: "MRHaD: Mixed Reality-based Hand-Drawn Map Editing Interface for Mobile Robot Navigation",
    pub1_conf: "IEEE International Conference on Robot and Human Interactive Communication (RO-MAN) 2025",
    pub1_authors: "T. Taki*, M. Kobayashi*, E. Iglesius, N. Chiba, S. Shirai, Y. Uranishi",
    pub2_title: "自律移動ロボットのための複合現実技術を用いた地図更新システム",
    pub2_conf: "ロボティクス・メカトロニクス 講演会 2025",
    pub2_authors: "多喜 匠, 小林 聖人, Iglesius Eduardo, 千葉 直也, 白井 詩沙香, 浦西 友樹",
    pub_link_paper: "論文",
    pub_link_website: "WEBサイト",
    proj_title: "制作物（ページ作成中）",
    proj1_name: "Coming Soon",
    proj1_desc: "Coming Soon ...",
    proj2_name: "Coming Soon",
    proj2_desc: "Coming Soon ...",
    proj3_name: "Coming Soon",
    proj3_desc: "Coming Soon ...",
    chip_unity: "Unity",
    chip_csharp: "C#",
    chip_typescript: "TypeScript",
    chip_react: "React",
    chip_laravel: "Laravel(PHP)",
    chip_docker: "Docker",
    chip_ros2: "ROS2",
    contact_title: "お問合せ",
    contact_email: "メール",
    contact_instagram: "Instagram",
    contact_linkedin: "LinkedIn",
  },
  en: {
    site_title: "Takumi Taki | Portfolio",
    skip_to_content: "Skip to content",
    nav_about: "About",
    nav_publications: "Publications",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Takumi TAKI | 多喜 匠",
    hero_sub: "XR, HCI, Robotics",
    cta_view_profile: "View Profile",
    about_title: "ABOUT ME",
    about_intro: "Specializing in Mixed Reality and AMRs; building an interface for intuitive editing of robot navigation maps.",
    affiliation: "Affiliation: Graduate School of Information Science and Technology, The University of Osaka",
    profile_name: "Name",
    profile_focus: "Research Areas",
    profile_focus_text: "Mixed Reality, Human–Computer Interaction (HCI), Autonomous Mobile Robots",
    profile_brief: "Brief Bio",
    profile_brief_item1: "Apr 2025 – Present: Uranishi Laboratory, Department of Information Systems Engineering, Graduate School of Information Science and Technology, The University of Osaka",
    profile_brief_item2: "Apr 2021 – Mar 2025: Software Science Course, Department of Information and Computer sciences, School of Engineering Science, The University of Osaka",
    pub_title: "Publications",
    pub1_title: "MRHaD: Mixed Reality-based Hand-Drawn Map Editing Interface for Mobile Robot Navigation",
    pub1_conf: "IEEE International Conference on Robot and Human Interactive Communication (RO-MAN) 2025",
    pub1_authors: "T. Taki*, M. Kobayashi*, E. Iglesius, N. Chiba, S. Shirai, Y. Uranishi",
    pub2_title: "Map Updating System Using Mixed Reality Technology for Autonomous Mobile Robots",
    pub2_conf: "Robotics and Mechatronics Conference 2025 (ROBOMECH 2025)",
    pub2_authors: "T. Taki, M. Kobayashi, E. Iglesius, N. Chiba, S. Shirai, Y. Uranishi",
    pub_link_paper: "Paper",
    pub_link_website: "Website",
    proj_title: "Projects (Page Under Construction)",
    proj1_name: "Coming Soon",
    proj1_desc: "Coming Soon ...",
    proj2_name: "Coming Soon",
    proj2_desc: "Coming Soon ...",
    proj3_name: "Coming Soon",
    proj3_desc: "Coming Soon ...",
    chip_unity: "Unity",
    chip_csharp: "C#",
    chip_typescript: "TypeScript",
    chip_react: "React",
    chip_laravel: "Laravel (PHP)",
    chip_docker: "Docker",
    chgp_ros2: "ROS2",
    contact_title: "Contact",
    contact_email: "Email",
    contact_instagram: "Instagram",
    contact_linkedin: "LinkedIn",
  }
};

function applyLang(lang) {
  document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : 'en');
  document.documentElement.setAttribute('data-lang', lang);
  // update toggle label
  langBtn.textContent = lang === 'ja' ? 'English' : '日本語';

  // swap text
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = i18n[lang][key];
    if (typeof text === 'string') { el.textContent = text; }
  });

  // title element
  document.title = i18n[lang].site_title || document.title;

  // persist
  try { localStorage.setItem('prefLang', lang); } catch (e) { }
}

// init
const saved = (() => { try { return localStorage.getItem('prefLang'); } catch (e) { return null } })();
applyLang(saved || 'ja');

langBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-lang') || 'ja';
  applyLang(current === 'ja' ? 'en' : 'ja');
});

// ===== Active section highlight (optional) =====
const links = $$('.nav-desktop .nav-link');
const sections = ['about', 'publications', 'projects', 'contact'].map(id => $('#' + id));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  })
}, { rootMargin: '-50% 0px -40% 0px', threshold: 0 });
sections.forEach(sec => sec && observer.observe(sec));
