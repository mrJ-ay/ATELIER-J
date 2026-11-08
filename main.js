// J-LABS Projects Dataset (간결한 사이트 핵심 기능 중심)
export const projects = [
  {
    title: 'DODGE TOTO',
    category: 'game',
    kind: '피구 시뮬레이션 & 토토',
    url: 'https://dodge-toto.onrender.com',
    shot: 'dodgetoto.png',
    desc: '봇들이 실시간으로 피구 경기를 펼치고, 승패에 칩을 베팅하는 스포츠 토토 사이트.'
  },
  {
    title: 'ONE BANK',
    category: 'finance',
    kind: '인터넷 뱅킹',
    url: 'https://one-bank-lm2p.onrender.com',
    shot: 'onebank.png',
    desc: '가상 계좌(777) 발급, 유저 간 실시간 송금 및 매일 파킹이자를 받는 뱅킹 사이트.'
  },
  {
    title: 'NEXUS EXCHANGE',
    category: 'finance',
    kind: '가상 증권거래소',
    url: 'https://nexus-exchange-l9i8.onrender.com',
    shot: 'nexus.png',
    desc: '실시간 호가창과 캔들 차트를 보며 주식을 매매하고 직접 종목을 상장하는 거래소.'
  },
  {
    title: 'NEON STRIP',
    category: 'game',
    kind: '슬롯 카지노',
    url: 'https://vegas-slots-2izy.onrender.com',
    shot: 'vegas.png',
    desc: '슬롯머신을 돌려 칩을 따고, 유저들끼리 칩을 빌려주고 갚는 카지노 게임 사이트.'
  },
  {
    title: 'JARKET',
    category: 'finance',
    kind: 'C2C 쇼핑몰',
    url: 'https://jarket.onrender.com',
    shot: 'jarket.png',
    desc: '유저가 직접 물건을 올리고 판매해 카지노 칩을 벌 수 있는 가상 중고 마켓.'
  },
  {
    title: 'GRAND THEFT BICYCLE',
    category: 'game',
    kind: '2D 자전거 절도 액션',
    url: 'https://grand-theft-bicycle.onrender.com',
    shot: 'gtb.png',
    desc: '경찰 추격을 따돌리며 자전거를 훔쳐 장물아비에게 팔아넘기는 레트로 액션 게임.'
  },
  {
    title: 'CHAOS OMOK',
    category: 'game',
    kind: '온라인 대전 오목',
    url: 'https://chaos-omok.onrender.com',
    shot: 'omok.png',
    desc: '방을 만들어 친구와 함께 실시간으로 대전하고 관전할 수 있는 오목 사이트.'
  },
  {
    title: 'SONORA',
    category: 'media',
    kind: '웹 작곡 스튜디오 (DAW)',
    url: 'https://sonora-daw.onrender.com',
    shot: 'sonora.png',
    desc: '비트 시퀀서와 신디사이저로 직접 음악을 만들고 WAV로 추출하는 작곡 사이트.'
  },
  {
    title: 'PIGSTY',
    category: 'media',
    kind: '자유 커뮤니티',
    url: 'https://pigsty.onrender.com',
    shot: 'pigsty.png',
    desc: '글과 사진, 영상을 자유롭게 올리고 검열봇이 클린하게 관리하는 커뮤니티.'
  },
  {
    title: 'NOVA',
    category: 'media',
    kind: '영상 스트리밍',
    url: 'https://nova-hmqj.onrender.com',
    shot: 'nova.png',
    desc: '누구나 영상을 업로드하고 플레이리스트를 만들어 감상하는 동영상 플랫폼.'
  },
  {
    title: 'INKVOID',
    category: 'media',
    kind: '웹소설 서재',
    url: 'https://inkvoid-eoqx.onrender.com',
    shot: 'inkvoid.png',
    desc: '작품을 서재에 모아 편하게 읽고, 직접 챕터를 집필해 등록하는 소설 사이트.'
  },
  {
    title: 'WORDLENS',
    category: 'tool',
    kind: 'AI 단어 암기장',
    url: 'https://wordlens-app.onrender.com',
    shot: 'wordlens.png',
    desc: '단어장 사진을 찍으면 텍스트를 읽어 암기 퀴즈 덱으로 만들어 주는 학습 도구.'
  },
  {
    title: 'FAKEPRESS',
    category: 'tool',
    kind: '신문 기사 제작기',
    url: 'https://fakepress-1.onrender.com',
    shot: 'fakepress.png',
    desc: '글을 쓰면 진짜 종이 신문 기사 모양으로 즉시 조판해 이미지로 뽑아주는 도구.'
  },
  {
    title: 'HELPDESK',
    category: 'tool',
    kind: '통합 고객센터',
    url: 'https://oneid-helpdesk.onrender.com',
    shot: 'helpdesk.png',
    desc: '전체 서비스들의 1:1 문의, 기능 건의 및 계정 소명을 접수하는 고객센터.'
  }
];

const gridEl = document.getElementById('projectGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

let currentFilter = 'all';
let currentSearch = '';

function renderProjects() {
  const filtered = projects.filter((p) => {
    const matchFilter = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch =
      !currentSearch ||
      p.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.kind.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.desc.toLowerCase().includes(currentSearch.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div class="empty-state">
        <p>검색 결과가 없습니다.</p>
      </div>`;
    return;
  }

  gridEl.innerHTML = filtered
    .map(
      (p) => `
    <a class="card-link" href="${p.url}" target="_blank" rel="noopener">
      <article class="project-card">
        <div class="card-media">
          <img src="shots/${p.shot}" alt="${p.title}" loading="lazy" />
          <span class="launch-pill">바로가기 ↗</span>
        </div>
        <div class="card-body">
          <div class="card-kind">${p.kind}</div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.desc}</p>
        </div>
      </article>
    </a>`
    )
    .join('');
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

renderProjects();
