// Category and Works Database
export const categoryData = {
  game: {
    ko: '게임',
    en: 'GAME & SIMULATION',
    works: [
      {
        title: 'DODGE TOTO',
        ko: '피구 토토',
        url: 'https://dodge-toto.onrender.com',
        shot: 'dodgetoto.png',
        desc: '정통 피구 룰을 장착한 알고리즘 봇들의 60 FPS 경기와 실시간 배당률 토토 시뮬레이션.'
      },
      {
        title: 'NEON STRIP',
        ko: '네온 스트립 슬롯 카지노',
        url: 'https://vegas-slots-2izy.onrender.com',
        shot: 'vegas.png',
        desc: '라스베이거스 스타일 슬롯머신과 유저 간 칩 대출 및 상환 시스템이 융합된 카지노.'
      },
      {
        title: 'GRAND THEFT BICYCLE',
        ko: '엄복동 자전거 절도 액션',
        url: 'https://grand-theft-bicycle.onrender.com',
        shot: 'gtb.png',
        desc: '경찰 추격을 따돌리며 자전거를 훔쳐 장물아비 찹샵에 매각하는 2D 탑다운 액션 게임.'
      },
      {
        title: 'CHAOS OMOK',
        ko: '카오스 오목',
        url: 'https://chaos-omok.onrender.com',
        shot: 'omok.png',
        desc: '실시간 방 생성과 관전, 친구 초대 기능을 제공하는 WebSocket 멀티플레이 오목.'
      }
    ]
  },
  finance: {
    ko: '금융 · 마켓',
    en: 'FINANCE & COMMERCE',
    works: [
      {
        title: 'NEXUS EXCHANGE',
        ko: '넥서스 가상 증권거래소',
        url: 'https://nexus-exchange-l9i8.onrender.com',
        shot: 'nexus.png',
        desc: '2.5초 주기 캔들 차트와 실시간 호가창을 보며 주식을 거래하고 직접 IPO 상장하는 거래소.'
      },
      {
        title: 'ONE BANK',
        ko: '원 뱅크',
        url: 'https://one-bank-lm2p.onrender.com',
        shot: 'onebank.png',
        desc: '가상 계좌(777) 발급, 유저 간 실시간 송금 및 매일 복리 파킹이자를 지급하는 뱅킹.'
      },
      {
        title: 'JARKET',
        ko: '자켓 마켓',
        url: 'https://jarket.onrender.com',
        shot: 'jarket.png',
        desc: '유저가 직접 물건을 올려 판매하고 카지노 칩을 벌 수 있는 가상 C2C 중고 마켓.'
      }
    ]
  },
  media: {
    ko: '미디어 · 창작',
    en: 'MEDIA & CREATION',
    works: [
      {
        title: 'PIGSTY',
        ko: '피그스티 자유 커뮤니티',
        url: 'https://pigsty.onrender.com',
        shot: 'pigsty.png',
        desc: '자유로운 주제의 사진·영상 피드 및 한글 자모분해 실시간 자동 검열봇이 가동되는 커뮤니티.'
      },
      {
        title: 'SONORA',
        ko: '소노라 작곡 스튜디오 (DAW)',
        url: 'https://sonora-daw.onrender.com',
        shot: 'sonora.png',
        desc: '비트 시퀀서와 신디사이저, 믹서로 브라우저에서 작곡하고 WAV로 추출하는 웹 DAW.'
      },
      {
        title: 'NOVA',
        ko: '노바 비디오 스트리밍',
        url: 'https://nova-hmqj.onrender.com',
        shot: 'nova.png',
        desc: '누구나 자유롭게 영상을 업로드하고 검색과 재생목록으로 시청하는 동영상 플랫폼.'
      },
      {
        title: 'INKVOID',
        ko: '잉크보이드 웹소설 서재',
        url: 'https://inkvoid-eoqx.onrender.com',
        shot: 'inkvoid.png',
        desc: '서재에서 소설을 읽고 직접 작가로서 회차를 집필해 게시할 수 있는 웹소설 플랫폼.'
      }
    ]
  },
  tool: {
    ko: '도구 · AI',
    en: 'TOOLS & UTILITIES',
    works: [
      {
        title: 'WORDLENS',
        ko: '워드렌즈 OCR 단어장',
        url: 'https://wordlens-app.onrender.com',
        shot: 'wordlens.png',
        desc: '단어장 사진을 촬영하면 글자를 인식해 퀴즈 플래시카드 덱으로 생성해 주는 AI 도구.'
      },
      {
        title: 'FAKEPRESS',
        ko: '페이크프레스 신문 조판기',
        url: 'https://fakepress-1.onrender.com',
        shot: 'fakepress.png',
        desc: '글을 쓰면 실제 종이 신문 기사 형식으로 실시간 조판해 이미지로 출력해 주는 도구.'
      },
      {
        title: 'HELPDESK',
        ko: '통합 고객센터',
        url: 'https://oneid-helpdesk.onrender.com/?service=ATELIER%20J',
        shot: 'helpdesk.png',
        desc: '전체 서비스들의 1:1 고객 문의 접수, 기능 제안, 계정 제재 소명 처리를 수행하는 고객센터.'
      }
    ]
  }
};

const catTabs = document.querySelectorAll('.cat_tab');
const modalEl = document.getElementById('categoryModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalSub = document.getElementById('modalSub');
const modalList = document.getElementById('modalList');

function openCategoryModal(catKey) {
  const data = categoryData[catKey];
  if (!data) return;

  modalTitle.textContent = `${data.ko} (${data.en})`;
  modalSub.textContent = `CATEGORY ARCHIVE`;

  modalList.innerHTML = data.works
    .map(
      (w) => `
    <div class="modal_item">
      <div class="item_thumb">
        <img src="shots/${w.shot}" alt="${w.title}" loading="lazy" />
      </div>
      <div class="item_info">
        <h4 class="item_title">${w.title}</h4>
        <span class="item_ko">${w.ko}</span>
        <p class="item_desc">${w.desc}</p>
        <div class="item_links">
          <a href="${w.url}" target="_blank" rel="noopener" class="btn_view">웹사이트 열기 ↗</a>
        </div>
      </div>
    </div>`
    )
    .join('');

  modalEl.classList.add('active');
  modalEl.setAttribute('aria-hidden', 'false');
}

function closeCategoryModal() {
  modalEl.classList.remove('active');
  modalEl.setAttribute('aria-hidden', 'true');
  catTabs.forEach((t) => t.classList.remove('active_tab'));
}

catTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    catTabs.forEach((t) => t.classList.remove('active_tab'));
    tab.classList.add('active_tab');
    const cat = tab.dataset.cat;
    openCategoryModal(cat);
  });
});

modalClose?.addEventListener('click', closeCategoryModal);
modalOverlay?.addEventListener('click', closeCategoryModal);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCategoryModal();
});
