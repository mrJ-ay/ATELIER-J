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
