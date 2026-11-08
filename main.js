// J-LABS Research Projects Dataset
export const projects = [
  {
    code: 'EXP-01',
    id: 1,
    title: 'PIGSTY',
    category: 'media',
    kind: '커뮤니티 · 콘텐츠 피드',
    period: '2026.08',
    url: 'https://pigsty.onrender.com',
    shot: 'pigsty.png',
    summary: '자유로운 주제의 사진·영상 피드 및 한글 자모분해 실시간 자동 검열봇을 탑재한 소셜 커뮤니티.',
    tech: ['FastAPI', 'Python 3.14', 'SQLAlchemy', 'PostgreSQL', '자모분해 검열봇', 'ONEID SSO'],
    highlights: [
      '한글 자음/모음 분해(NFKD) 및 특수문자 침투 우회 실시간 자동 탐지',
      '부적절한 욕설·음란물·정치 드립 감지 시 즉시 피드 격리(censored)',
      '과거 등록된 게시글까지 서버 기동/피드 로드 시 자동 소급 격리(Backfill)',
      'ONEID OAuth2 기반 자동 계정 연동 및 JWT 인가'
    ]
  },
  {
    code: 'EXP-02',
    id: 2,
    title: 'FAKEPRESS',
    category: 'tools',
    kind: '미디어 툴 · 조판 엔진',
    period: '2026.09',
    url: 'https://fakepress-1.onrender.com',
    shot: 'fakepress.png',
    summary: '실제 전통 신문 스타일의 다단 컬럼 레이아웃으로 기사를 조판하고 발행하는 가상 미디어 제작 도구.',
    tech: ['Node.js', 'Vanilla JS', 'CSS Grid Multi-Column', 'Canvas Export', 'ONEID SSO'],
    highlights: [
      '클래식 인쇄 신문 질감과 세리프 타이포그래피 정밀 조판 엔진',
      '실시간 기사 입력 및 인터랙티브 프리뷰 동기화',
      '기사 이미지 캡처 및 영구 보관용 공유 링크 생성'
    ]
  },
  {
    code: 'EXP-03',
    id: 3,
    title: 'CHAOS OMOK',
    category: 'games',
    kind: '멀티플레이어 · 실시간 오목',
    period: '2026.09',
    url: 'https://chaos-omok.onrender.com',
    shot: 'omok.png',
    summary: '실시간 방 생성과 관전, 친구 초대 기능을 제공하는 WebSocket 기반 대전 오목 로비 시스템.',
    tech: ['Node.js', 'WebSocket', 'Canvas 2D', 'Turn-based Engine', 'ONEID SSO'],
    highlights: [
      '저지연 WebSocket 턴제 돌 착수 및 오목 판정 알고리즘 (삼삼 금수 포함)',
      '실시간 대전방 생성, 비밀번호 방, 관전자 모드 지원',
      '승패 전적 자동 기록 및 랭킹 시스템'
    ]
  },
  {
    code: 'EXP-04',
    id: 4,
    title: 'NOVA',
    category: 'media',
    kind: '스트리밍 · 영상 플랫폼',
    period: '2026.10',
    url: 'https://nova-hmqj.onrender.com',
    shot: 'nova.png',
    summary: '누구나 자유롭게 고화질 영상을 업로드하고 재생목록과 검색을 통해 감상하는 반응형 스트리밍 플랫폼.',
    tech: ['FastAPI', 'HTML5 Video', 'PostgreSQL', 'CDN Stream', 'ONEID SSO'],
    highlights: [
      '반응형 시네마틱 비디오 플레이어 및 재생 바 컨트롤러',
      '키워드 실시간 영상 검색 및 카테고리별 알고리즘 피드',
      '좋아요, 재생수 집계 및 ONEID 프로필 연동'
    ]
  },
  {
    code: 'EXP-05',
    id: 5,
    title: 'INKVOID',
    category: 'media',
    kind: '문학 · 웹소설 라이브러리',
    period: '2026.10',
    url: 'https://inkvoid-eoqx.onrender.com',
    shot: 'inkvoid.png',
    summary: '작가들이 쓴 이야기를 서재에 모아 몰입감 있게 읽고 직접 챕터를 집필하는 소설 라이브러리 플랫폼.',
    tech: ['Node.js', 'Express', 'Markdown Parser', 'Typography Engine', 'ONEID SSO'],
    highlights: [
      '독서 몰입감을 극대화한 다크 모드 뷰어 및 폰트 커스텀',
      '회차별 집필 에디터와 자동 임시저장 기능',
      '작품 북마크 및 완독률 추적 시스템'
    ]
  },
  {
    code: 'EXP-06',
    id: 6,
    title: 'WORDLENS',
    category: 'tools',
    kind: 'AI 학습 · OCR 단어장',
    period: '2026.10',
    url: 'https://wordlens-app.onrender.com',
    shot: 'wordlens.png',
    summary: '단어장이나 원서를 촬영하면 텍스트를 광학 인식하여 즉시 암기 덱으로 변환해 주는 AI 에듀테크 앱.',
    tech: ['FastAPI', 'Tesseract OCR', 'NLP Engine', 'Spaced Repetition', 'ONEID SSO'],
    highlights: [
      '이미지 내 텍스트 영역 분할 및 단어 추출 OCR 파이프라인',
      '에빙하우스 망각 곡선 기반 간격 반복 암기 알고리즘',
      '플래시카드 퀴즈 및 암기 완료 통계 대시보드'
    ]
  },
  {
    code: 'EXP-07',
    id: 7,
    title: 'HELPDESK',
    category: 'tools',
    kind: '고객지원 · 통합 CS 센터',
    period: '2026.10',
    url: 'https://oneid-helpdesk.onrender.com',
    shot: 'helpdesk.png',
    summary: '전체 연결 서비스의 1:1 기술 문의, 정지 계정 소명, 기능 건의를 일괄 처리하는 중앙 고객센터.',
    tech: ['Node.js', 'PostgreSQL', 'Ticket Pipeline', 'Admin Dashboard', 'ONEID SSO'],
    highlights: [
      '서비스 파라미터 자동 인식(?service=...) 및 맞춤형 티켓 생성',
      '계정 제재 이의신청 및 관리자 실시간 처리 파이프라인',
      'ONEID 어드민 토큰 기반 관리자 권한 제어'
    ]
  },
  {
    code: 'EXP-08',
    id: 8,
    title: 'SONORA',
    category: 'media',
    kind: '오디오 워크스테이션 · Web DAW',
    period: '2026.10',
    url: 'https://sonora-daw.onrender.com',
    shot: 'sonora.png',
    summary: '브라우저 안에서 비트 시퀀서, 피아노롤, 신스, 믹서로 음악을 작곡하고 고음질 WAV로 익스포트하는 전문 웹 DAW.',
    tech: ['Web Audio API', 'Canvas UI', 'Polyphonic Synth', 'AudioWorklet', 'WAV Encoder'],
    highlights: [
      '초정밀 하드웨어 타이머 기반 16단계 드럼 머신 & 스텝 시퀀서',
      '오실레이터, 필터, ADSR 엔벨로프가 장착된 서브트랙티브 신디사이저',
      '다채널 콘솔 믹서 및 무손실 WAV 파일 렌더링 엔진'
    ]
  },
  {
    code: 'EXP-09',
    id: 9,
    title: 'NEON STRIP',
    category: 'economy',
    kind: '가상 카지노 · 슬롯 경제',
    period: '2026.10',
    url: 'https://vegas-slots-2izy.onrender.com',
    shot: 'vegas.png',
    summary: '라스베이거스 스타일의 3릴 슬롯머신과 유저 간 자금 대출·상환 시스템이 융합된 가상 카지노 플랫폼.',
    tech: ['Node.js', 'Neon Postgres', 'Canvas Animation', 'Peer Loan Engine', 'ONEID SSO'],
    highlights: [
      '슬롯 릴 회전 물리 감속 애니메이션 및 페이라인 확률 엔진',
      '유저 간 금전 대출/차용 및 상환 이자 계산 P2P 대출망',
      'ONE BANK 및 JARKET과 1:1 연동되는 공용 칩 경제'
    ]
  },
  {
    code: 'EXP-10',
    id: 10,
    title: 'JARKET',
    category: 'economy',
    kind: '가상 쇼핑몰 · C2C 마켓',
    period: '2026.10',
    url: 'https://jarket.onrender.com',
    shot: 'jarket.png',
    summary: '카지노 칩과 1:1 연동되며 유저가 직접 가상 상품을 등록하고 판매하여 수익을 창출하는 C2C 마켓플레이스.',
    tech: ['Node.js', 'PostgreSQL', 'E-Commerce Engine', 'Chip Sync', 'ONEID SSO'],
    highlights: [
      '이마트 감성의 초가성비 버추얼 UI 및 장바구니/주문 시스템',
      '유저 간 상품 등록, 가격 설정, 실시간 재고 차감 트랜잭션',
      '판매 대금의 카지노 칩/뱅킹 계좌 실시간 즉시 입금'
    ]
  },
  {
    code: 'EXP-11',
    id: 11,
    title: 'NEXUS EXCHANGE',
    category: 'economy',
    kind: '가상 증권소 · 고빈도 거래',
    period: '2026.10',
    url: 'https://nexus-exchange-l9i8.onrender.com',
    shot: 'nexus.png',
    summary: '2.5초 캔들스틱 차트, 10단계 실시간 호가창, 유저 기업공개(IPO)를 지원하는 하이엔드 가상 증권거래소.',
    tech: ['Node.js', 'Neon Postgres', 'Canvas Candle Engine', 'OrderBook Engine', 'ONEID SSO'],
    highlights: [
      '2.5초 주기의 고속 봉 차트 렌더링 및 이동평균선(MA) 계산 엔진',
      '매수·매도 10단계 실시간 호가 잔량 정합 및 체결 매칭 알고리즘',
      '유저가 50만 칩을 지불하여 직접 신규 종목을 발행하는 기업공개(IPO)'
    ]
  },
  {
    code: 'EXP-12',
    id: 12,
    title: 'GRAND THEFT BICYCLE',
    category: 'games',
    kind: '2D 액션 · 추격 아케이드',
    period: '2026.10',
    url: 'https://grand-theft-bicycle.onrender.com',
    shot: 'gtb.png',
    summary: '레트로 GTA 1풍 탑다운 2D 자전거 절도 & 장물 시뮬레이터. 경찰을 따돌리고 장물아비 찹샵에 매각하는 게임.',
    tech: ['HTML5 Canvas', '2D Vector Physics', 'Pursuit AI', 'Audio FX', 'ONEID SSO'],
    highlights: [
      '장애물 충돌, 가속 및 드리프트 관성이 적용된 2D 탑다운 물리',
      '플레이어를 포위하는 순찰 경찰관 및 경찰차 추적 AI',
      '5분 생존 시 100만원 칩 보상 및 원뱅크 계좌 자동 입금 연동'
    ]
  },
  {
    code: 'EXP-13',
    id: 13,
    title: 'ONE BANK',
    category: 'economy',
    kind: '핀테크 · 인터넷 뱅킹',
    period: '2026.10',
    url: 'https://one-bank-lm2p.onrender.com',
    shot: 'onebank.png',
    summary: '카지노, 마켓, 증권, 게임에서 번 자금을 통합 관리하고 실시간 계좌 이체 및 일일 파킹이자를 지급하는 뱅킹.',
    tech: ['Node.js', 'Neon Postgres', 'ACID Transactions', 'Ledger Pipeline', 'ONEID SSO'],
    highlights: [
      '가입 즉시 777로 시작하는 고유 가상 계좌번호 자동 발급',
      '연 3.5% 일일 파킹이자 계산 및 매일 자정 자동 복리 지급',
      '동시성 제어가 보장되는 유저 간 실시간 계좌 송금 및 거래명세서'
    ]
  },
  {
    code: 'EXP-14',
    id: 14,
    title: 'DODGE TOTO',
    category: 'games',
    kind: '스포츠 시뮬레이션 · 토토 엔진',
    period: '2026.11',
    url: 'https://dodge-toto.onrender.com',
    shot: 'dodgetoto.png',
    summary: '내야 4 + 외야 1 정통 피구 룰을 장착한 알고리즘 봇들의 60 FPS 2D 경기 및 실시간 스포츠 배당 토토.',
    tech: ['Node.js', 'HTML5 Canvas 60FPS', 'Vector Kinematics', 'Web Audio Synth', 'Neon Postgres'],
    highlights: [
      '투구자의 전진 돌파, 아군 삼각 지원, 수비수의 산개 회피 등 동적 선수 AI',
      '공의 포물선 비행 및 외야 킬 복귀 패스 등 무텔레포트 연속 물리 엔진',
      'Elo 승률 기반 실시간 배당률 계산 및 경기 종료 즉시 배당금 자동 정산'
    ]
  }
];

// DOM Elements
const gridEl = document.getElementById('projectGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const modalEl = document.getElementById('projectModal');
const modalContentEl = document.getElementById('modalContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');

let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'num-desc';

// Render Project Cards
export function renderProjects() {
  let filtered = projects.filter((p) => {
    const matchFilter = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch =
      !currentSearch ||
      p.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.kind.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.summary.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(currentSearch.toLowerCase()));
    return matchFilter && matchSearch;
  });

  // Sort
  if (currentSort === 'num-desc') {
    filtered.sort((a, b) => b.id - a.id);
  } else if (currentSort === 'num-asc') {
    filtered.sort((a, b) => a.id - b.id);
  } else if (currentSort === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🔍</span>
        <h3>일치하는 연구 프로젝트가 없습니다.</h3>
        <p>검색어를 확인하거나 필터를 전체(ALL)로 변경해 보세요.</p>
      </div>`;
    return;
  }

  gridEl.innerHTML = filtered
    .map(
      (p) => `
    <article class="project-card" data-code="${p.code}">
      <div class="card-media">
        <img src="shots/${p.shot}" alt="${p.title} 캡처" loading="lazy" />
        <div class="card-overlay">
          <a href="${p.url}" target="_blank" rel="noopener" class="btn-launch">
            Launch App ↗
          </a>
          <button type="button" class="btn-spec" data-open-modal="${p.code}">
            System Spec
          </button>
        </div>
        <span class="card-badge">${p.code}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-kind">${p.kind}</span>
          <span class="card-period">${p.period}</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-summary">${p.summary}</p>
        <div class="card-tags">
          ${p.tech
            .slice(0, 4)
            .map((t) => `<span class="tech-tag">${t}</span>`)
            .join('')}
          ${p.tech.length > 4 ? `<span class="tech-tag-more">+${p.tech.length - 4}</span>` : ''}
        </div>
      </div>
    </article>`
    )
    .join('');

  // Attach modal trigger
  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const code = btn.getAttribute('data-open-modal');
      openModal(code);
    });
  });
}

// Open Detail Modal
function openModal(code) {
  const p = projects.find((x) => x.code === code);
  if (!p) return;

  modalContentEl.innerHTML = `
    <div class="modal-header">
      <div class="modal-code">${p.code} · ${p.kind}</div>
      <h2 class="modal-title">${p.title}</h2>
      <div class="modal-period">DEPLOYED: ${p.period}</div>
    </div>
    
    <div class="modal-img-wrap">
      <img src="shots/${p.shot}" alt="${p.title}" />
    </div>

    <div class="modal-section">
      <h4>// RESEARCH OVERVIEW</h4>
      <p class="modal-desc">${p.summary}</p>
    </div>

    <div class="modal-section">
      <h4>// CORE ARCHITECTURE & HIGHLIGHTS</h4>
      <ul class="modal-highlights">
        ${p.highlights.map((h) => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4>// TECH STACK</h4>
      <div class="modal-tags">
        ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-footer">
      <a href="${p.url}" target="_blank" rel="noopener" class="btn-primary-launch">
        🚀 실서버 애플리케이션 실행하기 (${p.url.replace('https://', '')}) ↗
      </a>
    </div>
  `;

  modalEl.classList.add('active');
  modalEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalEl.classList.remove('active');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Event Listeners
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

searchInput?.addEventListener('input', (e) => {
  currentSearch = e.target.value.trim();
  renderProjects();
});

sortSelect?.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderProjects();
});

modalCloseBtn?.addEventListener('click', closeModal);

modalEl?.addEventListener('click', (e) => {
  if (e.target === modalEl) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalEl?.classList.contains('active')) {
    closeModal();
  }
});

// Initial Render
renderProjects();
