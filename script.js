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
    hero_theme: 'Mixed Reality × Mobile Robot Navigation',
    hero_title: '人・ロボット・空間を<br>自然につなぐ。',
    hero_lead: 'ヒューマンロボットインタラクションと自律移動ロボットナビゲーションを軸に、複合現実を活用したインタフェースを研究・開発しています。',
    hero_cta: '代表研究を見る',
    hero_link: '研究業績へ <span class="icon-inline material-symbols-rounded" aria-hidden="true">arrow_forward</span>',
    research_title: '研究テーマ',
    research_intro: 'Mixed Reality（MR、複合現実）を活用し、人がロボットの行動や環境を自然に理解・操作できる方法を探究しています。',
    theme1_title: 'Mobile Robot Navigation',
    theme1_text: '人の意図を反映しながら、自律移動ロボットが安全かつ効率的に移動できる経路計画と地図更新を目指します。',
    theme2_title: 'Human–Robot Interaction',
    theme2_text: '専門知識を前提にしない、ロボットとの分かりやすい対話を設計します。',
    theme3_title: 'XR Interface',
    theme3_text: '複合現実を活用し、現実空間の中でロボットを理解・操作できる体験を設計します。',
    featured_title: '代表研究',
    featured_intro: '人の意図をロボットのナビゲーションへ自然に反映するインタフェースを提案しています。',
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
    kachaka_lead: '実物の自律移動ロボットを操作し、地面に埋められたアイテムを発掘',
    kachaka_intro: 'ゲーム画面には、現実世界のステージ地図、ロボットの現在位置、レーダセンサが捉えた埋蔵地点が表示されます。地図を頼りにフィールドを探索し、たくさんのアイテム獲得を目指します。',
    kachaka_point1_title: '実物のロボットがゲームキャラクター',
    kachaka_point1_text: 'ゲーム用コントローラで自律移動ロボットを動かし、現実のステージそのものを探索フィールドにしました。',
    kachaka_point2_title: '地図とカメラ、2つの視点',
    kachaka_point2_text: '地図にはアイテムの埋蔵地点、カメラには目の前の障害物が映ります。片方だけでは攻略できない情報設計が、ゲームの面白さと難しさを生みます。レーダを頼りにアイテムを探しながら、カメラ映像で障害物を避ける、探索と操縦を同時に楽しむゲームです。',
    kachaka_caption1: 'ゲーム概要',
    kachaka_caption1_detail: 'カチャカで埋蔵アイテムを探す発掘ゲーム',
    kachaka_caption2: '遊び方',
    kachaka_caption2_detail: 'フィールドを探索してアイテムを集める',
    kachaka_caption3: '操作方法',
    kachaka_caption3_detail: '専用画面からカチャカをコントロール',
    nsc_lead: '旅先の写真で日本地図を完成させる、コレクション型の思い出記録アプリ',
    nsc_intro: '都道府県ごとに写真を1枚登録すると、地図のピースが埋まります。写真に撮影日・場所・コメントを残しながら、「新しい思い出の残し方」を提案します。',
    nsc_point1_title: 'テーマ別に集める',
    nsc_point1_text: 'ご当地グルメ、絶景、御朱印集めなど、目的ごとに複数の地図コレクションをつくれます。',
    nsc_point2_title: '地図を完成させる',
    nsc_point2_text: '都道府県のピースを写真で埋める地図パズル形式。無機質な画面を写真で彩り、収集する楽しさを引き出します。',
    nsc_point3_title: '思い出を振り返る',
    nsc_point3_text: 'バッジ、アルバム、タイムラインなど、様々なかたちで旅の記録を振り返れます。',
    nsc_caption1: 'テーマ例：ご当地グルメ',
    nsc_caption1_detail: '美味しかった記憶を一枚の地図に',
    nsc_caption2: 'テーマ例：観光スポット',
    nsc_caption2_detail: '旅先の絶景で埋め尽くす',
    nsc_caption3: '都道府県別アルバム',
    nsc_caption3_detail: '集めた写真を一覧で振り返る',
    nsc_caption4: '年ごとのタイムライン',
    nsc_caption4_detail: '思い出を時系列で振り返る',
    nsc_caption5: 'バッジ収集',
    nsc_caption5_detail: '目指せコンプリート！',
    nsc_caption6: '写真の記録',
    nsc_caption6_detail: '感じたことを思いのままに書き残す',
    train_lead: 'ストレスいっぱいの満員電車から、力を解放してすべてを吹き飛ばすVR体験',
    train_intro: 'VR映像に振動・風圧・圧迫感などの感覚演出を加え、満員電車の過酷な環境を再現。体験者は力を込めてエネルギーを蓄積・解放し、周囲のものを吹き飛ばすことで、ストレス解消の爽快感を味わいます。',
    train_reflection: '本作品はVR作品コンテスト「Interverse Virtual Reality Challenge」に出展したものです。多くの競合作品を体験する中で、様々な感覚を統合した体験が生み出す没入感の大きさを実感しました。特に、触覚が加わることで、仮想世界は単に「眺めるもの」から「身体を通して関われるもの」へと変化すると考えます。',
    train_engineering_title: '実装上の工夫',
    train_point1_title: 'リアルな電車の揺れの提示',
    train_point1_text: '2本のアクチュエータと回転軸の配置やジョインの工夫により、台座の揺れをより大きくよりスムーズに。さらに、ポテンショメータの非線形特性を実測データから近似して補正し、電車特有の揺れを高精度に提示しました。',
    train_point2_title: '振動・送風のリアルタイム同時制御',
    train_point2_text: 'マルチコア処理で通信・振動・送風制御を分離し、単一のマイコン上で遅延なく同時実行。複数の家庭用サーキュレータをリレー制御し、稼働台数と組み合わせによってゲーム画面に合わせた走行風や衝撃波を安全かつ低コストに表現しました。',
    watch_pv: 'PV <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    watch_explanation: '説明動画 <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    vocab_coming_soon: '詳細は今後追加予定です。',
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
    nav_research: 'Research themes',
    nav_featured: 'Featured research',
    nav_publications: 'Publications',
    nav_about: 'Profile',
    nav_contact: 'Contact',
    hero_name: '<span class="hero-name-ja">多喜 匠</span><span class="hero-name-en">Takumi Taki</span>',
    hero_theme: 'Mixed Reality × Human–Robot Interaction × Mobile Robot Navigation',
    hero_title: 'Connecting people, robots,<br>and spaces naturally.',
    hero_lead: 'I research and develop mixed-reality interfaces for human–robot interaction and autonomous mobile robot navigation.',
    hero_cta: 'View featured research',
    hero_link: 'View publications <span class="icon-inline material-symbols-rounded" aria-hidden="true">arrow_forward</span>',
    research_title: 'Research themes',
    research_intro: 'I explore ways for people to understand and manipulate robot behavior and environments naturally through information overlaid on the physical world.',
    theme1_title: 'Mobile Robot Navigation',
    theme1_text: 'I aim to develop route planning and map updating that enable autonomous mobile robots to move safely and efficiently while reflecting human intent.',
    theme2_title: 'Human–Robot Interaction',
    theme2_text: 'I design clear, intuitive interactions with robots that do not require specialized knowledge.',
    theme3_title: 'XR Interface',
    theme3_text: 'I design experiences that let people understand and operate robots in physical spaces using mixed reality.',
    featured_title: 'Featured research',
    featured_intro: 'I propose interfaces that naturally reflect human intent in robot navigation.',
    mrhad_intro: 'MRHaD is an interface for editing autonomous mobile robot navigation maps with hand-drawn input in mixed reality. It lets people specify semantic regions while looking at the physical environment, making map editing easier to communicate.',
    mrrep_intro: 'MRReP is an interface for hand-drawing reference paths on the physical floor in mixed reality and applying those spatial intentions to robot path planning. It aims to make route specification more accurate and usable in shared human–robot spaces.',
    paper: 'Read paper',
    project_site: 'Project website <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    publications_title: 'Publications',
    publications_intro: 'Papers and conference presentations.',
    domestic_conference: 'DOMESTIC CONFERENCE',
    pub2_title: 'Map Updating System Using Mixed Reality Technology for Autonomous Mobile Robots',
    pub2_authors: 'T.Taki, M.Kobayashi, E.Iglesius, N.Chiba, S.Shirai, Y.Uranishi',
    pub2_venue: 'Robotics and Mechatronics Conference 2025 (ROBOMECH 2025)',
    works_title: 'Personal projects',
    works_intro: 'Representative personal projects.',
    kachaka_lead: 'Operate a real autonomous mobile robot and excavate items buried in the ground',
    kachaka_intro: 'The game screen displays a map of the physical stage, the robot’s current position, and buried-item locations detected by its radar sensor. Players use the map to explore the field and collect as many items as possible.',
    kachaka_point1_title: 'A real robot as the game character',
    kachaka_point1_text: 'Players drive an autonomous mobile robot with a game controller, turning the physical stage itself into an exploration field.',
    kachaka_point2_title: 'Two views: map and camera',
    kachaka_point2_text: 'The map reveals buried items, while the camera shows obstacles ahead. Neither view is enough on its own, creating the game’s distinctive appeal and challenge. Players search for items using the radar while watching the camera to avoid obstacles, combining exploration and driving at the same time.',
    kachaka_caption1: 'Game overview',
    kachaka_caption1_detail: 'Excavate buried items with Kachaka',
    kachaka_caption2: 'How to play',
    kachaka_caption2_detail: 'Explore the field and collect items',
    kachaka_caption3: 'Controls',
    kachaka_caption3_detail: 'Control Kachaka from a dedicated screen',
    nsc_lead: 'A collection-style memory-keeping app that completes a map of Japan with travel photos',
    nsc_intro: 'Add one photo per prefecture to fill a map piece, and keep the date, location, and note with each photo. It proposes a new way to preserve memories.',
    nsc_point1_title: 'Collect by theme',
    nsc_point1_text: 'Create multiple map collections around themes such as local food, scenic views, and temple stamps.',
    nsc_point2_title: 'Complete the map',
    nsc_point2_text: 'A map-puzzle format fills each prefectural piece with a photo. The photos bring color to an otherwise plain screen and make collecting more enjoyable.',
    nsc_point3_title: 'Look back on memories',
    nsc_point3_text: 'Revisit travel memories in a variety of ways, including badges, albums, and timelines.',
    nsc_caption1: 'Theme example: Local cuisine',
    nsc_caption1_detail: 'Bring delicious memories together on a single map',
    nsc_caption2: 'Theme example: Sightseeing spots',
    nsc_caption2_detail: 'Fill the map with breathtaking views from your travels',
    nsc_caption3: 'Prefecture-based album',
    nsc_caption3_detail: 'Browse and revisit collected photos',
    nsc_caption4: 'Yearly timeline',
    nsc_caption4_detail: 'Revisit memories chronologically',
    nsc_caption5: 'Badge collection',
    nsc_caption5_detail: 'Complete the collection!',
    nsc_caption6: 'Photo records',
    nsc_caption6_detail: 'Write down what you felt in your own words',
    train_lead: 'A VR experience where you unleash your power and blast everything away in a stress-filled crowded train',
    train_intro: 'VR visuals are combined with vibration, airflow, pressure, and other sensory effects to recreate the harsh environment of a crowded train. Players build and release energy with their bodies, blasting away everything around them for an exhilarating release from stress.',
    train_reflection: 'This project was exhibited at the Interverse Virtual Reality Challenge, a competition for VR works. Experiencing many competing entries showed me how strongly the integration of multiple senses can deepen immersion. In particular, I believe that adding haptics transforms a virtual world from something merely observed into something experienced through the body.',
    train_engineering_title: 'Engineering highlights',
    train_point1_title: 'Reproducing realistic train motion',
    train_point1_text: 'Careful placement and joint design of two actuators and a rotating shaft make the platform’s motion larger and smoother. In addition, correcting the potentiometer’s nonlinear response using an approximation derived from measured data enables highly accurate reproduction of train-specific motion.',
    train_point2_title: 'Real-time vibration and airflow control',
    train_point2_text: 'Multicore processing separates communication, vibration, and airflow control for simultaneous, low-latency execution on a single microcontroller. Multiple household fans are relay-controlled in different combinations to reproduce running wind and shock waves in sync with the game screen, safely and affordably.',
    watch_pv: 'PV <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    watch_explanation: 'Explanation video <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    vocab_coming_soon: 'Details will be added in the future.',
    about_title: 'Profile',
    about_intro: 'I research and develop mixed-reality interfaces for human–robot interaction and autonomous mobile robot navigation.',
    profile_name: 'Name',
    profile_affiliation: 'Affiliation',
    affiliation: 'Uranishi Laboratory, Department of Information Systems Engineering, Graduate School of Information Science and Technology, The University of Osaka',
    profile_focus: 'Research areas',
    profile_focus_text: 'Human–Robot Interaction, Autonomous Mobile Robots, Mixed Reality',
    lab_link: 'Uranishi Laboratory website <span class="icon-inline material-symbols-rounded" aria-hidden="true">open_in_new</span>',
    contact_title: 'Contact',
    contact_text: 'For research inquiries, please contact me here.',
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
