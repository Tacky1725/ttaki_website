const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

$('#year').textContent = new Date().getFullYear();

const translations = {
  ja: {
    skip: 'コンテンツへ移動',
    nav_research: '研究テーマ',
    nav_featured: '代表研究',
    nav_publications: '研究業績',
    nav_about: 'プロフィール',
    nav_contact: '連絡先',
    hero_name: '<span class="hero-name-ja">多喜 匠</span><span class="hero-name-en">Takumi Taki</span>',
    hero_theme_label: '研究テーマ',
    hero_theme: 'Mixed Reality × Human–Robot Interaction × Mobile Robot Navigation',
    hero_title: '人・ロボット・空間を<br>自然につなぐ。',
    hero_lead: 'ヒューマンロボットインタラクションと自律移動ロボットナビゲーションを軸に、複合現実を活用したインタフェースを研究・開発しています。',
    hero_cta: '代表研究を見る',
    hero_link: '研究業績へ <span class="icon-inline material-symbols-rounded" aria-hidden="true">arrow_forward</span>',
    research_title: '研究テーマ',
    research_intro: '現実空間に重ねた情報を使い、人がロボットの行動や環境を自然に理解・操作できる方法を探究しています。',
    theme1_title: 'Mobile Robot Navigation',
    theme1_text: '人の意図を反映しながら、自律移動ロボットが安全かつ効率的に移動できる経路計画と地図更新を目指します。',
    theme2_title: 'Human–Robot Interaction',
    theme2_text: '専門知識を前提にしない、ロボットとの分かりやすい対話を設計します。',
    theme3_title: 'XR Interface',
    theme3_text: '複合現実を活用し、現実空間の中でロボットを理解・操作できる体験を設計します。',
    featured_title: '代表研究',
    featured_intro: '人の空間的な意図を、ロボットのナビゲーションへ自然に反映するインタフェースを提案しています。',
    mrhad_intro: 'MR空間で手描き入力を用い、自律移動ロボットのナビゲーション地図を編集するインタフェースです。実環境を見ながら地図の意味領域を指定することで、意図を伝えやすい編集を目指します。',
    mrrep_intro: 'MR空間で床面に参照経路を手描きし、その人の意図をロボットの経路計画へ反映するインタフェースです。人と共有する空間における、より正確で使いやすい経路指定を目指します。',
    paper: '論文を読む',
    project_site: 'プロジェクトサイト <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    publications_title: '研究業績',
    publications_intro: '論文・学会発表を掲載しています。',
    domestic_conference: 'DOMESTIC CONFERENCE',
    pub2_title: '自律移動ロボットのための複合現実技術を用いた地図更新システム',
    pub2_authors: '多喜 匠, 小林 聖人, Iglesius Eduardo, 千葉 直也, 白井 詩沙香, 浦西 友樹',
    pub2_venue: 'ロボティクス・メカトロニクス 講演会 2025',
    works_title: '自主制作',
    works_intro: '代表的な自主制作物を掲載しています。',
    nsc_lead: '旅先の写真で日本地図を完成させる、コレクション型の思い出記録アプリです。',
    nsc_intro: '都道府県ごとに写真を1枚登録すると、地図のピースが埋まります。写真に撮影日・場所・コメントを残しながら、「新しい思い出の残し方」を提案します。',
    nsc_point1_title: 'テーマ別に集める',
    nsc_point1_text: 'ご当地グルメ、絶景、御朱印集めなど、目的ごとに複数の地図コレクションをつくれます。',
    nsc_point2_title: '地図を完成させる',
    nsc_point2_text: '都道府県のピースを写真で埋める地図パズル形式で、収集する楽しさを引き出します。',
    nsc_point3_title: '記録を振り返る',
    nsc_point3_text: '無機質で見やすいUI、バッジ、アルバム、タイムラインで旅の記録を振り返れます。',
    nsc_caption1: 'テーマ例：ご当地グルメ',
    nsc_caption1_detail: '美味しかった記憶を一枚に',
    nsc_caption2: 'テーマ例：観光スポット',
    nsc_caption2_detail: '旅先の絶景で埋め尽くす',
    nsc_caption3: '都道府県別アルバム',
    nsc_caption3_detail: '集めた写真を一覧で振り返る',
    nsc_caption4: '年ごとのタイムライン',
    nsc_caption4_detail: '思い出を時系列で振り返る',
    nsc_caption5: 'バッジ収集',
    nsc_caption5_detail: '目指せコンプリート！',
    nsc_caption6: '写真の記録',
    nsc_caption6_detail: '撮影場所やコメントを残す',
    about_title: 'プロフィール',
    about_intro: 'ヒューマンロボットインタラクションと自律移動ロボットナビゲーションを軸に、複合現実を活用したインタフェースの研究開発を行っています。',
    profile_name: '氏名',
    profile_affiliation: '所属',
    affiliation: '大阪大学 大学院情報科学研究科 情報システム工学専攻 浦西研究室',
    profile_focus: '研究分野',
    profile_focus_text: 'Human–Robot Interaction, Autonomous Mobile Robots, Mixed Reality',
    lab_link: '浦西研究室 WEBサイト <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    contact_title: '連絡先',
    contact_text: '研究に関するご連絡は、こちらからお願いいたします。',
    back_to_top: 'ページ上部へ <span class="icon-inline material-symbols-rounded" aria-hidden="true">arrow_upward</span>',
  },
  en: {
    skip: 'Skip to content',
    nav_research: 'Research',
    nav_featured: 'Featured work',
    nav_publications: 'Publications',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_name: '<span class="hero-name-ja">多喜 匠</span><span class="hero-name-en">Takumi Taki</span>',
    hero_theme_label: 'Research themes',
    hero_theme: 'Mixed Reality × Human–Robot Interaction × Mobile Robot Navigation',
    hero_title: 'Connecting people, robots,<br>and spaces naturally.',
    hero_lead: 'I research and develop mixed-reality interfaces for human–robot interaction and autonomous mobile robot navigation.',
    hero_cta: 'View featured work',
    hero_link: 'View publications <span class="icon-inline material-symbols-rounded" aria-hidden="true">arrow_forward</span>',
    research_title: 'Research',
    research_intro: 'I explore ways for people to understand and manipulate robot behavior and environments naturally through information overlaid on the physical world.',
    theme1_title: 'Human–Robot Interaction',
    theme1_text: 'I design understandable interactions with robots without assuming specialist knowledge.',
    theme2_title: 'Mobile Robot Navigation',
    theme2_text: 'I aim to update paths and maps so mobile robots can move safely while reflecting human intent.',
    theme3_title: 'XR Interface',
    theme3_text: 'I design experiences that let people understand and operate robots in physical spaces using mixed reality.',
    featured_title: 'Featured research',
    featured_intro: 'I propose interfaces that naturally reflect human spatial intent in robot navigation.',
    mrhad_intro: 'MRHaD is an interface for editing autonomous mobile robot navigation maps with hand-drawn input in mixed reality. It lets people specify semantic regions while looking at the physical environment, making map editing easier to communicate.',
    mrrep_intro: 'MRReP is an interface for hand-drawing reference paths on the physical floor in mixed reality and applying those spatial intentions to robot path planning. It aims to make route specification more accurate and usable in shared human–robot spaces.',
    paper: 'Read paper',
    project_site: 'Project website <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    publications_title: 'Publications',
    publications_intro: 'Selected papers and conference presentations.',
    domestic_conference: 'DOMESTIC CONFERENCE',
    pub2_title: 'Map Updating System Using Mixed Reality Technology for Autonomous Mobile Robots',
    pub2_authors: 'T.Taki, M.Kobayashi, E.Iglesius, N.Chiba, S.Shirai, Y.Uranishi',
    pub2_venue: 'Robotics and Mechatronics Conference 2025 (ROBOMECH 2025)',
    works_title: 'Personal projects',
    works_intro: 'I also apply my design and implementation skills to independent mobile application development.',
    nsc_lead: 'A memory-keeping app that completes a map of Japan with travel photos.',
    nsc_intro: 'Add one photo per prefecture to fill a map piece, and keep the date, location, and note with each photo. It proposes a new way to preserve memories.',
    nsc_point1_title: 'Collect by theme',
    nsc_point1_text: 'Create multiple map collections around themes such as local food, scenic views, and temple stamps.',
    nsc_point2_title: 'Complete the map',
    nsc_point2_text: 'A map-puzzle format that fills prefectural pieces with photos encourages the joy of collecting.',
    nsc_point3_title: 'Look back on memories',
    nsc_point3_text: 'A minimal, readable UI with badges, albums, and a timeline makes travel records easy to revisit.',
    nsc_caption1: 'Theme-based maps',
    nsc_caption1_detail: 'Collect local food',
    nsc_caption2: 'Theme-based maps',
    nsc_caption2_detail: 'Collect scenic views',
    nsc_caption3: 'Prefecture-based album',
    nsc_caption3_detail: 'Browse collected photos',
    nsc_caption4: 'Yearly timeline',
    nsc_caption4_detail: 'Revisit memories chronologically',
    nsc_caption5: 'Badges',
    nsc_caption5_detail: 'Visualize achievements',
    nsc_caption6: 'Photo details',
    nsc_caption6_detail: 'Keep locations and comments',
    about_title: 'About',
    about_intro: 'I research and develop mixed-reality interfaces for human–robot interaction and autonomous mobile robot navigation.',
    profile_name: 'Name',
    profile_affiliation: 'Affiliation',
    affiliation: 'Uranishi Laboratory, Department of Information Systems Engineering, Graduate School of Information and Technology, The University of Osaka',
    profile_focus: 'Research areas',
    profile_focus_text: 'Human–Robot Interaction, Autonomous Mobile Robots, Mixed Reality',
    lab_link: 'Uranishi Laboratory website <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    contact_title: 'Contact',
    contact_text: 'For research inquiries, please contact me via LinkedIn.',
    back_to_top: 'Back to top <span class="icon-inline material-symbols-rounded" aria-hidden="true">arrow_upward</span>',
  },
};

const langButton = $('#langToggle');
const backToTopButton = $('.back-to-top');

function applyLanguage(language) {
  document.documentElement.lang = language;
  document.documentElement.dataset.lang = language;
  document.title = language === 'ja' ? 'Takumi Taki | 研究紹介' : 'Takumi Taki | Research';
  $$('[data-i18n]').forEach((element) => {
    const text = translations[language][element.dataset.i18n];
    if (text) element.innerHTML = text;
  });
  langButton.classList.toggle('is-english', language === 'en');
  langButton.setAttribute('aria-pressed', String(language === 'en'));
  langButton.setAttribute(
    'aria-label',
    language === 'ja' ? 'Switch to English' : '日本語に切り替える',
  );
  backToTopButton.setAttribute(
    'aria-label',
    language === 'ja' ? 'ページ上部へ' : 'Back to top',
  );

  try {
    localStorage.setItem('preferredLanguage', language);
  } catch (_) {
    // Storage is optional.
  }
}

const preferredLanguage = (() => {
  try {
    return localStorage.getItem('preferredLanguage');
  } catch (_) {
    return null;
  }
})();

applyLanguage(preferredLanguage === 'en' ? 'en' : 'ja');
langButton.addEventListener('click', () => {
  applyLanguage(document.documentElement.lang === 'ja' ? 'en' : 'ja');
});

const menuButton = $('#menuToggle');
const menuIcon = $('#menuIcon');
const mobileNav = $('#mobileNav');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuIcon.textContent = open ? 'close' : 'menu';
  mobileNav.hidden = !open;
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

$$('.nav-mobile a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

const navLinks = $$('.nav-desktop a');
const sections = navLinks
  .map((link) => $(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`,
          );
        });
      }
    });
  },
  {
    rootMargin: '-42% 0px -52%',
    threshold: 0,
  },
);

sections.forEach((section) => observer.observe(section));

function updateBackToTopVisibility() {
  backToTopButton.classList.toggle('is-visible', window.scrollY > 120);
}

window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
updateBackToTopVisibility();
