// 전시 작품 목록. 새 사이트는 여기에 한 줄 추가하면 됩니다. (shot: public/shots 안의 스크린샷 파일명)
const rooms = [
  {
    id: 'I',
    title: '제1전시실',
    period: '2026.08 — 09',
    note: '만들고 싶은 것을 먼저 만들던 시기.',
    works: [
      { title: 'PIGSTY', year: '2026.08', kind: '커뮤니티', url: 'https://pigsty.onrender.com', shot: 'pigsty.png',
        text: '자유롭게 이야기를 나누는 커뮤니티. 최신·인기 피드와 태그, 글쓰기를 갖췄습니다.' },
      { title: 'FAKEPRESS', year: '2026.09', kind: '도구', url: 'https://fakepress-1.onrender.com', shot: 'fakepress.png',
        text: '제목과 본문을 쓰면 신문 기사 모양으로 바로 미리 보여 주는 기사 제작 도구.' },
      { title: 'CHAOS OMOK', year: '2026.09', kind: '게임', url: 'https://chaos-omok.onrender.com', shot: 'omok.png',
        text: '방을 만들고 친구를 불러 함께 두는 멀티플레이 실시간 오목 로비.' },
    ],
  },
  {
    id: 'II',
    title: '제2전시실',
    period: '2026.10',
    note: '하나의 로그인으로 여러 작품이 이어지기 시작한 달.',
    works: [
      { title: 'NOVA', year: '2026.10', kind: '영상', url: 'https://nova-hmqj.onrender.com', shot: 'nova.png',
        text: '누구나 영상을 올리고 검색해 바로 감상할 수 있는 스트리밍 플랫폼.' },
      { title: 'INKVOID', year: '2026.10', kind: '문학', url: 'https://inkvoid-eoqx.onrender.com', shot: 'inkvoid.png',
        text: '작가들이 쓴 이야기를 서재에 모아 읽고, 직접 집필도 할 수 있는 소설 라이브러리.' },
      { title: 'NEON STRIP', year: '2026.10', kind: '게임', url: 'https://vegas-slots-2izy.onrender.com', shot: 'vegas.png',
        text: '라스베이거스와 LA의 밤. 유저끼리 돈을 빌려주고, 빌리고, 터뜨리는 슬롯 카지노. 예제로 만든 겁니다. 절대 불순한 의도로 만든 게 아닙니다.' },
      { title: 'WORDLENS', year: '2026.10', kind: '학습', url: 'https://wordlens-app.onrender.com', shot: 'wordlens.png',
        text: '단어책을 찍으면 AI가 읽어 암기 덱으로 바꿔 주는 단어 암기 앱.' },
      { title: 'HELPDESK', year: '2026.10', kind: '고객센터', url: 'https://oneid-helpdesk.onrender.com', shot: 'helpdesk.png',
        text: '전체 연결 사이트의 1:1 문의와 정지 계정 소명·이의신청, 아이디어 및 기능 추천을 접수하고 관리자 답변을 확인하는 통합 고객센터.' },
    ],
  },
  {
    id: 'III',
    title: '제3전시실',
    period: '2026.10 —',
    note: '완성한 스튜디오와 가상 경제 마켓, 그리고 밤의 아케이드.',
    works: [
      { title: 'SONORA', year: '2026.10', kind: '음악 · DAW', url: 'https://sonora-daw.onrender.com', shot: 'sonora.png',
        text: '브라우저 안에서 비트 시퀀서, 피아노롤, 신스, 편곡 타임라인, 콘솔 믹서로 곡을 만들고 WAV로 추출하는 웹 DAW 스튜디오.' },
      { title: 'JARKET', year: '2026.10', kind: '가상 마켓 · 쇼핑', url: 'https://jarket.onrender.com', shot: 'jarket.png',
        text: '이마트 감성의 초가성비 버추얼 쇼핑몰. 네온스트립 슬롯머신 카지노 칩과 1:1 연동되며, 유저들이 직접 물품을 등록해 판매하고 카지노 칩을 벌 수 있는 가상 마켓.' },
      { title: 'GRAND THEFT BICYCLE', year: '2026.10', kind: '레트로 액션 · 게임', url: 'https://grand-theft-bicycle.onrender.com', shot: 'gtb.png',
        text: '레트로 GTA 1풍 탑다운 2D 자전거 절도 & 장물 시뮬레이터. 자전거를 훔쳐 5분간 버티면 슬롯 카지노 자금 100만원 획득, 경찰차와 도보 경찰관의 맹추격을 따돌려 장물아비 찹샵에 매각하는 액션 아케이드.' },
      { title: 'ONE BANK', year: '2026.10', kind: '핀테크 · 인터넷 뱅킹', url: 'https://one-bank-lm2p.onrender.com', shot: 'onebank.png',
        text: '카지노, 자켓 마켓, 엄복동 자전거, 넥서스 증권 자금을 하나로 모으는 스마트 인터넷 뱅킹. 실시간 유저 계좌 송금, 777 가상 계좌번호 자동 발급, 연 3.5% 매일 받는 파킹이자.' },
    ],
  },
]

const roomsEl = document.getElementById('rooms')
const navEl = document.getElementById('roomNav')
let number = 0

for (const room of rooms) {
  const section = document.createElement('section')
  section.className = 'room'
  section.id = `room-${room.id}`
  section.innerHTML = `
    <div class="room-head reveal">
      <span class="room-no">${room.id}</span>
      <h2>${room.title}</h2>
      <p class="room-period">${room.period}</p>
      <p class="room-note">${room.note}</p>
    </div>`

  for (const work of room.works) {
    number += 1
    const side = number % 2 ? 'left' : 'right'
    const piece = document.createElement('article')
    piece.className = `piece ${side} reveal`
    piece.innerHTML = `
      <a class="frame-link" href="${work.url}" target="_blank" rel="noopener" aria-label="${work.title} 열기">
        <div class="spot"></div>
        <figure class="frame">
          <div class="mat">
            <div class="canvas${work.restoring ? ' restoring' : ''}">
              <img src="shots/${work.shot}" alt="${work.title} 화면" loading="lazy" />
              ${work.restoring ? '<span class="tag">복원 중</span>' : ''}
            </div>
          </div>
        </figure>
        <span class="enter">입장하기 ↗</span>
      </a>
      <div class="placard">
        <p class="plate-no">No. ${String(number).padStart(2, '0')}</p>
        <h3>${work.title}</h3>
        <p class="plate-meta">${work.kind} · ${work.year}</p>
        <p class="plate-text">${work.text}</p>
        <p class="plate-url">${work.url.replace('https://', '')}</p>
      </div>`
    section.appendChild(piece)
  }
  roomsEl.appendChild(section)

  const link = document.createElement('a')
  link.href = `#room-${room.id}`
  link.textContent = room.title
  navEl.appendChild(link)
}

// 스크롤하면 작품이 천천히 나타남
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target) }
}, { threshold: 0.18 })
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
