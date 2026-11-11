// Category and Works Database
export const categoryData = {
  game: {
    ko: '게임',
    en: 'GAME & SIMULATION',
    desc: '실시간 물리 엔진과 시뮬레이션 알고리즘, WebSocket 기반으로 구현된 인터랙티브 게임 서비스 모음입니다.',
    works: [
      {
        title: 'DODGE TOTO',
        ko: '피구 토토',
        badge: '시뮬레이션',
        url: 'https://dodge-toto.onrender.com',
        shot: 'dodgetoto.png',
        desc: '정통 피구 룰을 장착한 알고리즘 봇들의 60 FPS 경기와 실시간 배당률 토토 시뮬레이션.'
      },
      {
        title: 'NEON STRIP',
        ko: '네온 스트립 슬롯 카지노',
        badge: '카지노 · 금융',
        url: 'https://vegas-slots-2izy.onrender.com',
        shot: 'vegas.png',
        desc: '라스베이거스 스타일 슬롯머신과 유저 간 칩 대출 및 상환 시스템이 융합된 가상 카지노.'
      },
      {
        title: 'GRAND THEFT BICYCLE',
        ko: '엄복동 자전거 절도 액션',
        badge: '2D 액션',
        url: 'https://grand-theft-bicycle.onrender.com',
        shot: 'gtb.png',
        desc: '경찰 추격을 따돌리며 자전거를 훔쳐 장물아비 찹샵에 매각하는 2D 탑다운 액션 게임.'
      },
      {
        title: 'CHAOS OMOK',
        ko: '카오스 오목',
        badge: '실시간 멀티',
        url: 'https://chaos-omok.onrender.com',
        shot: 'omok.png',
        desc: '실시간 방 생성과 관전, 친구 초대 기능을 제공하는 WebSocket 멀티플레이 오목.'
      }
    ]
  },
  finance: {
    ko: '금융 · 마켓',
    en: 'FINANCE & COMMERCE',
    desc: '실시간 호가창 주식 거래, 가상 계좌 뱅킹, C2C 중고 마켓이 유기적으로 연동된 가상 경제 생태계입니다.',
    works: [
      {
        title: 'NEXUS EXCHANGE',
        ko: '넥서스 가상 증권거래소',
        badge: '주식 거래소',
        url: 'https://nexus-exchange-l9i8.onrender.com',
        shot: 'nexus.png',
        desc: '2.5초 주기 캔들 차트와 실시간 호가창을 보며 주식을 거래하고 직접 기업을 IPO 상장하는 거래소.'
      },
      {
        title: 'ONE BANK',
        ko: '원 뱅크 스마트 인터넷 뱅킹',
        badge: '가상 뱅킹',
        url: 'https://one-bank-lm2p.onrender.com',
        shot: 'onebank.png',
        desc: '가상 계좌(777) 발급, 유저 간 실시간 송금 및 매일 복리 파킹이자를 지급하는 인터넷 뱅킹.'
      },
      {
        title: 'JARKET',
        ko: '자켓 마켓',
        badge: 'C2C 마켓',
        url: 'https://jarket.onrender.com',
        shot: 'jarket.png',
        desc: '유저가 직접 물건을 올려 판매하고 카지노 칩을 벌 수 있는 가상 C2C 중고 마켓.'
      }
    ]
  },
  media: {
    ko: '미디어 · 창작',
    en: 'MEDIA & CREATION',
    desc: '자유로운 소통 커뮤니티부터 브라우저 DAW 작곡기, 비디오 스트리밍, 웹소설 집필 서재까지의 창작 플랫폼입니다.',
    works: [
      {
        title: 'PIGSTY',
        ko: '피그스티 자유 커뮤니티',
        badge: '대표작품 · 커뮤니티',
        url: 'https://pigsty.onrender.com',
        shot: 'pigsty.png',
        desc: '자유로운 주제의 사진·영상 피드 및 한글 자모분해 실시간 자동 검열봇이 가동되는 커뮤니티.'
      },
      {
        title: 'SONORA',
        ko: '소노라 작곡 스튜디오 (DAW)',
        badge: '웹 DAW',
        url: 'https://sonora-daw.onrender.com',
        shot: 'sonora.png',
        desc: '비트 시퀀서와 신디사이저, 믹서로 브라우저에서 작곡하고 고음질 WAV로 추출하는 웹 DAW.'
      },
      {
        title: 'NOVA',
        ko: '노바 비디오 스트리밍',
        badge: '비디오 플랫폼',
        url: 'https://nova-hmqj.onrender.com',
        shot: 'nova.png',
        desc: '누구나 자유롭게 영상을 업로드하고 검색과 재생목록으로 시청하는 동영상 플랫폼.'
      },
      {
        title: 'INKVOID',
        ko: '잉크보이드 웹소설 서재',
        badge: '대표작품 · 웹소설',
        url: 'https://inkvoid-eoqx.onrender.com',
        shot: 'inkvoid.png',
        desc: '서재에서 소설을 읽고 직접 작가로서 회차를 집필해 게시할 수 있는 웹소설 플랫폼.'
      },
      {
        title: 'MY BAND',
        ko: '가상 합주 스튜디오',
        badge: '가상 합주 · 악보연주',
        url: 'https://my-band-frbe.onrender.com',
        shot: 'myband.png',
        desc: 'MusicXML 악보를 업로드하고 오케스트라·밴드·마칭밴드 등 원하는 악단으로 합주를 감상하는 스튜디오.'
      }
    ]
  },
  tool: {
    ko: '도구 · AI',
    en: 'TOOLS & UTILITIES',
    desc: 'OCR 비전 AI, 인쇄물 조판 엔진, 통합 고객지원 센터 등 일상과 업무를 돕는 실용 도구 모음입니다.',
    works: [
      {
        title: 'WORDLENS',
        ko: '워드렌즈 OCR 단어장',
        badge: '비전 AI',
        url: 'https://wordlens-app.onrender.com',
        shot: 'wordlens.png',
        desc: '단어장 사진을 촬영하면 글자를 인식해 퀴즈 플래시카드 덱으로 생성해 주는 AI 도구.'
      },
      {
        title: 'FAKEPRESS',
        ko: '페이크프레스 신문 조판기',
        badge: '대표작품 · 조판기',
        url: 'https://fakepress-1.onrender.com',
        shot: 'fakepress.png',
        desc: '글을 쓰면 실제 종이 신문 기사 형식으로 실시간 조판해 이미지로 출력해 주는 도구.'
      },
      {
        title: 'HELPDESK',
        ko: '통합 고객센터',
        badge: '고객지원',
        url: 'https://oneid-helpdesk.onrender.com/?service=ATELIER%20J',
        shot: 'helpdesk.png',
        desc: '전체 서비스들의 1:1 고객 문의 접수, 기능 제안, 계정 제재 소명 처리를 수행하는 고객센터.'
      }
    ]
  }
};

// DOM References
const viewHome = document.getElementById('view_home');
const viewCategory = document.getElementById('view_category');
const brandHomeLink = document.getElementById('brandHomeLink');
const btnBackHome = document.getElementById('btnBackHome');
const navButtons = document.querySelectorAll('.header_nav .nav_btn');
const catTabs = document.querySelectorAll('.cat_tab');
const pillTabs = document.querySelectorAll('.pill_tab');

const catBadge = document.getElementById('catBadge');
const catHeroTitle = document.getElementById('catHeroTitle');
const catHeroDesc = document.getElementById('catHeroDesc');
const categoryCardsGrid = document.getElementById('categoryCardsGrid');

let currentView = 'home'; // 'home' | 'game' | 'finance' | 'media' | 'tool'

// Render Category Page
function renderCategoryPage(catKey) {
  const data = categoryData[catKey];
  if (!data) return;

  catBadge.textContent = `${data.ko} · ${data.en}`;
  catHeroTitle.textContent = `${data.ko}`;
  catHeroDesc.textContent = data.desc;

  // Render project cards
  categoryCardsGrid.innerHTML = data.works
    .map(
      (work) => `
    <article class="cat_project_card">
      <div class="card_img_wrap">
        <img src="shots/${work.shot}" alt="${work.title}" loading="lazy" />
        <span class="card_badge">${work.badge}</span>
      </div>
      <div class="card_text_wrap">
        <div class="card_names">
          <span class="card_ko">${work.ko}</span>
          <h3 class="card_en">${work.title}</h3>
        </div>
        <p class="card_desc">${work.desc}</p>
        <div class="card_actions">
          <a href="${work.url}" target="_blank" rel="noopener" class="btn_launch">웹사이트 바로가기 ↗</a>
        </div>
      </div>
    </article>
  `
    )
    .join('');

  // Update active pill in category page
  pillTabs.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.target === catKey);
  });
}

// Switch View Router
function navigateTo(targetView) {
  if (targetView === 'home') {
    currentView = 'home';
    viewCategory.classList.remove('active');
    viewHome.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#home');
  } else if (categoryData[targetView]) {
    currentView = targetView;
    renderCategoryPage(targetView);
    viewHome.classList.remove('active');
    viewCategory.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', `#${targetView}`);
  }

  // Update header nav active styles
  navButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === currentView);
  });
}

// Event Listeners
// 1. Landing 4 Category side tabs
catTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const cat = tab.dataset.cat;
    navigateTo(cat);
  });
});

// 2. Header nav buttons
navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    navigateTo(view);
  });
});

// 3. Brand Logo (Home link)
if (brandHomeLink) {
  brandHomeLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('home');
  });
}

// 4. Subpage back button
if (btnBackHome) {
  btnBackHome.addEventListener('click', () => {
    navigateTo('home');
  });
}

// 5. Category page pill switcher
pillTabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    navigateTo(target);
  });
});

// 6. Handle URL Hash on load
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (categoryData[hash]) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
});

// 7. Popstate (browser back/forward)
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');
  if (categoryData[hash]) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
});
