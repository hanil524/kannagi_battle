// ===================================================================
// カードデータ（妖怪デッキ：墓暴き 26種）
// ===================================================================
const CARD_DB = [
  { number: 1901, name: '先祖代々之墓', cost: 0, power: 1, type: '場所札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (7).jpg' },
  { number: 1902, name: '妖蟲の墓', cost: 0, power: 1, type: '場所札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (9).jpg' },
  { number: 1903, name: 'まよい火', cost: 3, power: 3, type: '場所札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (10).jpg' },
  { number: 1904, name: '赤えい', cost: 5, power: 5, type: '場所札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (11).jpg' },
  { number: 1905, name: 'のづち', cost: 7, power: 7, type: '場所札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (12).jpg', keyword: '速攻' },
  { number: 1906, name: 'ねこ娘', cost: 0, power: 0, type: '怪異札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (4).jpg' },
  { number: 1907, name: 'かに坊主', cost: 5, power: 0, type: '怪異札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (13).jpg' },
  { number: 1908, name: '蟲憑', cost: 8, power: 0, type: '怪異札', season: '夏', tribe: '妖怪', img: 'images/card_12_p (14).jpg' },
  { number: 1909, name: '私の墓', cost: 1, power: 0, type: '道具札', season: '夏', tribe: '', img: 'images/card_12_p (22).jpg' },
  { number: 1910, name: '沈めてあげる', cost: 9, power: 0, type: '道具札', season: '夏', tribe: '', img: 'images/card_12_p (20).jpg', effect: 'damage_8' },
  { number: 1911, name: '霊道', cost: 0, power: 1, type: '場所札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (8).jpg' },
  { number: 1912, name: '木霊の森', cost: 1, power: 1, type: '場所札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (27).jpg' },
  { number: 1913, name: '砂の竹林', cost: 4, power: 3, type: '場所札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (25).jpg' },
  { number: 1914, name: 'べとべと', cost: 2, power: 2, type: '場所札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (15).jpg' },
  { number: 1915, name: 'うぶめ', cost: 8, power: 1, type: '場所札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (23).jpg' },
  { number: 1916, name: 'あずき洗い', cost: 0, power: 0, type: '怪異札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (2).jpg' },
  { number: 1917, name: 'さとり', cost: 0, power: 0, type: '怪異札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (3).jpg' },
  { number: 1918, name: '山姥', cost: 4, power: 0, type: '怪異札', season: '秋', tribe: '妖怪', img: 'images/card_12_p (17).jpg' },
  { number: 1919, name: '唐笠おばけ', cost: 0, power: 0, type: '道具札', season: '秋', tribe: '', img: 'images/card_12_p (19).jpg' },
  { number: 1920, name: 'こなきじじい', cost: 8, power: 0, type: '道具札', season: '秋', tribe: '', img: 'images/card_12_p (18).jpg', effect: 'draw_3' },
  { number: 1921, name: '夜刀神', cost: 4, power: 1, type: '場所札', season: '春', tribe: '妖怪', img: 'images/card_12_p (16).jpg' },
  { number: 1922, name: '沼御前', cost: 0, power: 0, type: '怪異札', season: '春', tribe: '妖怪', img: 'images/card_12_p (26).jpg', keyword: '鮮明', effect: 'global_youkai_plus2' },
  { number: 1923, name: 'ヨモツモノ', cost: 6, power: 6, type: '怪異札', season: '冬', tribe: '妖怪', img: 'images/card_12_p (21).jpg' },
  { number: 1924, name: 'いったん木綿', cost: 0, power: 0, type: '季節札', season: '冬', tribe: '', effect: 'youkai_power_plus2', img: 'images/card_12_p (24).jpg' },
  { number: 1925, name: '屈服の刻印', cost: 0, power: 0, type: '道具札', season: '無', tribe: '', img: 'images/card_12_p (1).jpg' },
  { number: 1926, name: '鈴鳴り', cost: 8, power: 0, type: '道具札', season: '無', tribe: '', img: 'images/card_12_p (28).jpg' },
];

const DECK_BACK_IMG = 'images/deck.jpg';
const TYPE_ORDER = { '場所札': 0, '怪異札': 1, '道具札': 2, '季節札': 3 };

// ===================================================================
// ユーティリティ
// ===================================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sortCards(cards) {
  cards.sort((a, b) => {
    const ta = TYPE_ORDER[a.type] ?? 9, tb = TYPE_ORDER[b.type] ?? 9;
    if (ta !== tb) return ta - tb;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return (a.cost || 0) - (b.cost || 0);
  });
  const groups = [];
  let cur = null;
  cards.forEach(c => {
    if (!cur || cur.type !== c.type || cur.name !== c.name) {
      cur = { type: c.type, name: c.name, cards: [c], minCost: c.cost || 0 };
      groups.push(cur);
    } else {
      cur.cards.push(c);
    }
  });
  groups.sort((a, b) => {
    const ta = TYPE_ORDER[a.type] ?? 9, tb = TYPE_ORDER[b.type] ?? 9;
    if (ta !== tb) return ta - tb;
    if (a.minCost !== b.minCost) return a.minCost - b.minCost;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  cards.length = 0;
  groups.forEach(g => g.cards.forEach(c => cards.push(c)));
}

let uidCounter = 1;
function buildSampleDeck() {
  const pool = [];
  CARD_DB.forEach(c => pool.push({ ...c }));
  for (let i = 0; i < 3; i++) {
    const base = CARD_DB.find(c => c.number === 1924);
    if (base) pool.push({ ...base });
  }
  const extras = [1901, 1902, 1906, 1909, 1911, 1912, 1917, 1919, 1925, 1914, 1903];
  extras.forEach(num => {
    const base = CARD_DB.find(c => c.number === num);
    if (base) pool.push({ ...base });
  });
  pool.forEach(c => { c.uid = uidCounter++; });
  return shuffle(pool);
}

// ===================================================================
// ゲーム状態
// ===================================================================
const player = { deck: [], hand: [], field: [], soul: [], exile: [], open: [], life: 30 };
const opponent = { deck: [], hand: [], field: [], soul: [], exile: [], open: [], life: 30 };
let selectedGroupIdx = null;
let suppressPreview = false;
let isAttacking = false;
let attackUsedThisTurn = false;
let handOverflowPhase = false;
let turnNumber = 0;          // ターン数（先行1=1, 後攻1=2, 先行2=3, …）
let turnLocked = false;       // ターン遷移中の操作ロック
let gameEnded = false;        // 勝敗決定後フラグ

const usedFlags = {
  player: { basho: false, kaii: false, dougu: false, season: false },
  opponent: { basho: false, kaii: false, dougu: false, season: false },
};

// ===================================================================
// DOM
// ===================================================================
const $ = id => document.getElementById(id);
const dom = {
  playerHandCards: $('player-hand-cards'),
  playerSoulCards: $('player-soul-cards'),
  playerOpenCards: $('player-open-cards'),
  playerFieldCards: $('player-field-cards'),
  playerField: $('player-field'),
  playerDeck: $('player-deck'),
  playerLife: $('player-life-value'),
  oppHandCards: $('opp-hand-cards'),
  oppSoulCards: $('opp-soul-cards'),
  oppOpenCards: $('opp-open-cards'),
  oppFieldCards: $('opp-field-cards'),
  oppField: $('opp-field'),
  oppDeck: $('opp-deck'),
  oppLife: $('opp-life-value'),
  preview: $('card-preview'),
  previewImg: $('preview-img'),
  kaiiPreviewOverlay: $('kaii-preview-overlay'),
  kaiiPreviewImg: $('kaii-preview-img'),
  kaiiPopup: $('kaii-popup'),
  kaiiPopupCards: $('kaii-popup-cards'),
  kaiiBlockMsg: $('kaii-block-msg'),
  playEffect: $('play-effect'),
  playEffectImg: $('play-effect-img'),
  damageOverlay: $('damage-overlay'),
  damageText: $('damage-text'),
  seasonWarning: $('season-warning'),
  soulShortageMsg: $('soul-shortage-msg'),
  seasonShortageMsg: $('season-shortage-msg'),
  typeUsedMsg: $('type-used-msg'),
  attackBtn: $('attack-btn'),
  endTurnCenter: $('end-turn-center'),
  gateOverlay: $('gate-overlay'),
  gateText: $('gate-text'),
  coinText: $('coin-text'),
  turnAnnounce: $('turn-announce'),
  turnAnnounceText: $('turn-announce-text'),
  resultOverlay: $('result-overlay'),
  resultText: $('result-text'),
  retryBtn: $('retry-btn'),
  effectOverlay: $('effect-overlay'),
  effectLabel: $('effect-label'),
  effectCardImg: $('effect-card-img'),
  startOverlay: $('start-overlay'),
  startBtn: $('start-btn'),
  handOverflowOverlay: $('hand-overflow-overlay'),
  finishZoomOverlay: $('finish-zoom-overlay'),
  finishZoomImg: $('finish-zoom-img'),
  btnReset: $('btn-reset'),
  btnEndTurn: $('btn-end-turn'),
  pBashoBtn: $('p-basho-btn'), pKaiiBtn: $('p-kaii-btn'),
  pDouguBtn: $('p-dougu-btn'), pSeasonBtn: $('p-season-btn'),
  oBashoBtn: $('o-basho-btn'), oKaiiBtn: $('o-kaii-btn'),
  oDouguBtn: $('o-dougu-btn'), oSeasonBtn: $('o-season-btn'),
};

// ===================================================================
// 魂にある季節を取得
// ===================================================================
function getSoulSeasons(who) {
  const st = (who === 'player') ? player : opponent;
  const seasons = new Set();
  st.soul.forEach(c => { if (c.season && c.season !== '無') seasons.add(c.season); });
  return seasons;
}

// ===================================================================
// 季節アイコン更新（魂の季節に応じて点灯）
// ===================================================================
function updateSeasonIcons(who) {
  const seasons = getSoulSeasons(who);
  const prefix = (who === 'player') ? 'player' : 'opp';
  const map = { '春': 'spring', '夏': 'summer', '秋': 'autumn', '冬': 'winter' };
  Object.entries(map).forEach(([jp, en]) => {
    const el = $(prefix + '-season-' + en);
    if (!el) return;
    el.classList.remove('lit-spring', 'lit-summer', 'lit-autumn', 'lit-winter');
    if (seasons.has(jp)) el.classList.add('lit-' + en);
  });
}

// ===================================================================
// 1ターン1回制限チェック
// ===================================================================
function isTypeUsedThisTurn(card, who) {
  const f = usedFlags[who];
  if (card.type === '場所札') return f.basho;
  if (card.type === '怪異札') return f.kaii;
  if (card.type === '道具札') return f.dougu;
  if (card.type === '季節札') return f.season;
  return false;
}

// ===================================================================
// コスト制限：カードが出せるかどうか判定
// 怪異札はコスト関係なく出せる。0コストは自由。
// それ以外は魂数≧コスト、かつ季節が魂にある必要がある。
// さらに1ターンに同じ種類は1度まで。
// 戻り値: { ok, reason } reason: 'soul'|'season'|'type_used'|null
// ===================================================================
function canPlayCard(card, who) {
  // 1ターン1回制限
  if (isTypeUsedThisTurn(card, who)) return { ok: false, reason: 'type_used' };
  // 怪異札はコスト・季節関係なく出せるが、場に場所札が必要
  if (card.type === '怪異札') {
    const st2 = (who === 'player') ? player : opponent;
    const hasBas = st2.field.some(g => g.basho !== null);
    if (!hasBas) return { ok: false, reason: 'no_basho' };
    return { ok: true, reason: null };
  }
  const st = (who === 'player') ? player : opponent;
  const cost = card.cost || 0;
  // 魂数チェック
  if (st.soul.length < cost) return { ok: false, reason: 'soul' };
  // 季節チェック（0コストは自由、季節「無」も自由）
  if (cost >= 1 && card.season && card.season !== '無') {
    const seasons = getSoulSeasons(who);
    if (!seasons.has(card.season)) return { ok: false, reason: 'season' };
  }
  return { ok: true, reason: null };
}

// canPlayCardのboolean版（playableオーラ用）
function canPlayCardBool(card, who) {
  return canPlayCard(card, who).ok;
}

// ===================================================================
// 手札のplayableクラス更新（緑オーラ）
// ===================================================================
function clearPlayableAura() {
  dom.playerHandCards.querySelectorAll('.battle-card.playable').forEach(el => el.classList.remove('playable'));
  dom.playerOpenCards.querySelectorAll('.battle-card.playable').forEach(el => el.classList.remove('playable'));
}
function updatePlayableAura() {
  // 自分のターン中かつ手札超過フェイズでない場合のみ緑オーラ表示
  if (turnLocked || handOverflowPhase || gameEnded) {
    clearPlayableAura();
    return;
  }
  // 手札
  dom.playerHandCards.querySelectorAll('.battle-card').forEach(el => {
    const uid = el.dataset.uid;
    const card = player.hand.find(c => String(c.uid) === uid);
    if (!card) return;
    if (canPlayCardBool(card, 'player')) {
      el.classList.add('playable');
    } else {
      el.classList.remove('playable');
    }
  });
  // 手札公開場（同じルール）
  dom.playerOpenCards.querySelectorAll('.battle-card').forEach(el => {
    const uid = el.dataset.uid;
    const card = player.open.find(c => String(c.uid) === uid);
    if (!card) return;
    if (canPlayCardBool(card, 'player')) {
      el.classList.add('playable');
    } else {
      el.classList.remove('playable');
    }
  });
}

// ===================================================================
// 魂不足ポップアップ
// ===================================================================
function showSoulShortage() { showPopup('soul-shortage-msg'); }

// ===================================================================
// 季節不足ポップアップ
// ===================================================================
function showSeasonShortage() { showPopup('season-shortage-msg'); }

// ===================================================================
// 1ターン1回制限ポップアップ
// ===================================================================
function showTypeUsedMsg(typeName) {
  const txt = $('type-used-text');
  txt.textContent = typeName + 'は、このターン既に使用しました。';
  showPopup('type-used-msg');
}

// ===================================================================
// 汎用ポップアップ表示（ポップアップごとにタイマー管理）
// ===================================================================
const popupTimers = {};
const POPUP_IDS = [
  'summon-sick-msg', 'attack-used-msg', 'no-basho-msg',
  'opp-hand-msg', 'opp-deck-msg', 'kaii-block-msg',
  'soul-shortage-msg', 'season-shortage-msg', 'type-used-msg'
];
function showPopup(id) {
  // 既存の同IDタイマーをクリア
  if (popupTimers[id]) clearTimeout(popupTimers[id]);
  const el = $(id);
  if (!el) return;
  el.style.display = 'flex';
  el.classList.add('active');
  popupTimers[id] = setTimeout(() => {
    el.style.display = 'none';
    el.classList.remove('active');
    delete popupTimers[id];
  }, 1500);
}
function hideAllPopups() {
  POPUP_IDS.forEach(id => {
    if (popupTimers[id]) { clearTimeout(popupTimers[id]); delete popupTimers[id]; }
    const el = $(id);
    if (el) { el.style.display = 'none'; el.classList.remove('active'); }
  });
}

// ===================================================================
// カード効果：場所札の実効パワー計算
// 季節札が下にある場合、その効果に応じてパワーが変わる
// ===================================================================
function getEffectivePower(group, who) {
  if (!group || !group.basho) return 0;
  let power = group.basho.power || 0;
  // 季節札の効果チェック
  if (group.season && group.season.effect === 'youkai_power_plus2') {
    // いったん木綿：妖怪属性の場所札なら+2
    if (group.basho.tribe === '妖怪') {
      power += 2;
    }
  }
  // 沼御前のグローバルバフ：場全体の怪異札をチェック
  // global_youkai_plus2を持つ怪異札が場のどこかに装備されていれば、妖怪属性の場所札全てに+2
  if (group.basho.tribe === '妖怪') {
    const st = (who === 'player') ? player : (who === 'opponent') ? opponent : null;
    if (st) {
      st.field.forEach(g => {
        g.kaii.forEach(k => {
          if (k.effect === 'global_youkai_plus2') power += 2;
        });
      });
    }
  }
  return power;
}

// ===================================================================
// カードDOM生成
// ===================================================================
function createCardEl(card, faceDown) {
  const el = document.createElement('div');
  el.className = 'battle-card';
  el.dataset.uid = card.uid;
  const img = document.createElement('img');
  img.src = faceDown ? DECK_BACK_IMG : card.img;
  img.alt = card.name;
  img.draggable = false;
  el.appendChild(img);
  return el;
}
function createBashoEl(card, who, group) {
  const el = createCardEl(card, false);
  el.classList.add('on-field');
  if (card.power !== undefined) {
    const effectivePower = group ? getEffectivePower(group, who) : (card.power || 0);
    const badge = document.createElement('div');
    badge.className = 'power-badge';
    const span = document.createElement('span');
    span.textContent = effectivePower;
    // パワーがブーストされていれば色を変える
    if (effectivePower > (card.power || 0)) {
      span.style.color = '#4caf50';
    }
    badge.appendChild(span);
    el.appendChild(badge);
  }
  setupCardInteraction(el, card, who);
  return el;
}

// ===================================================================
// カウント・ライフ
// ===================================================================
function updateAllCounts() {
  setText('player-deck-count', player.deck.length);
  setText('player-open-count', player.open.length);
  setText('player-exile-count', player.exile.length);
  setText('player-soul-count', player.soul.length);
  setText('player-hand-count', player.hand.length);
  setText('opp-deck-count', opponent.deck.length);
  setText('opp-open-count', opponent.open.length);
  setText('opp-exile-count', opponent.exile.length);
  setText('opp-soul-count', opponent.soul.length);
  setText('opp-hand-count', opponent.hand.length);
  dom.playerLife.textContent = player.life;
  dom.oppLife.textContent = opponent.life;
  // 季節アイコン更新
  updateSeasonIcons('player');
  updateSeasonIcons('opponent');
}
function setText(id, v) { const e = $(id); if (e) e.textContent = v; }

// ===================================================================
// タイプボタン使用済み管理
// ===================================================================
function updateTypeButtons() {
  const pf = usedFlags.player;
  dom.pBashoBtn.classList.toggle('used', pf.basho);
  dom.pKaiiBtn.classList.toggle('used', pf.kaii);
  dom.pDouguBtn.classList.toggle('used', pf.dougu);
  dom.pSeasonBtn.classList.toggle('used', pf.season);
  const of = usedFlags.opponent;
  dom.oBashoBtn.classList.toggle('used', of.basho);
  dom.oKaiiBtn.classList.toggle('used', of.kaii);
  dom.oDouguBtn.classList.toggle('used', of.dougu);
  dom.oSeasonBtn.classList.toggle('used', of.season);
}
function markUsed(who, type) {
  const f = usedFlags[who];
  if (type === '場所札') f.basho = true;
  else if (type === '怪異札') f.kaii = true;
  else if (type === '道具札') f.dougu = true;
  else if (type === '季節札') f.season = true;
  updateTypeButtons();
}
function resetTurnFlags() {
  ['player', 'opponent'].forEach(who => {
    usedFlags[who] = { basho: false, kaii: false, dougu: false, season: false };
  });
  updateTypeButtons();
}

// ===================================================================
// 山札裏面
// ===================================================================
function updateDeckImg(zone, who) {
  const st = (who === 'player') ? player : opponent;
  let img = zone.querySelector('.deck-card-back');
  if (st.deck.length > 0) {
    if (!img) {
      img = document.createElement('img');
      img.src = DECK_BACK_IMG;
      img.className = 'deck-card-back';
      img.draggable = false;
      zone.appendChild(img);
    }
  } else { if (img) img.remove(); }
}

// ===================================================================
// 描画：手札
// ===================================================================
function renderPlayerHand() {
  sortCards(player.hand);
  syncCardRow(dom.playerHandCards, player.hand, false, 'player', 'in-hand', true);
  updateOverflow(dom.playerHandCards);
  updatePlayableAura();
}
function renderPlayerOpen() {
  sortCards(player.open);
  syncCardRow(dom.playerOpenCards, player.open, false, 'player', 'in-hand', true);
  updateOverflow(dom.playerOpenCards);
  updatePlayableAura();
}
function renderOppHand() {
  syncCardRow(dom.oppHandCards, opponent.hand, true, 'opponent', 'in-hand', false);
  updateOverflow(dom.oppHandCards);
}
function syncCardRow(container, cards, faceDown, who, cls, draggable) {
  const existing = new Map();
  container.querySelectorAll('.battle-card').forEach(el => existing.set(el.dataset.uid, el));
  const newUids = new Set(cards.map(c => String(c.uid)));
  existing.forEach((el, uid) => { if (!newUids.has(uid)) el.remove(); });
  cards.forEach(card => {
    let el = existing.get(String(card.uid));
    if (!el) {
      el = createCardEl(card, faceDown);
      el.classList.add(cls);
      if (!faceDown) setupCardInteraction(el, card, who);
      if (draggable && !faceDown) setupDrag(el, card);
    }
    container.appendChild(el);
  });
}

// ===================================================================
// 描画：場
// ===================================================================
function renderField(who) {
  const st = (who === 'player') ? player : opponent;
  const container = (who === 'player') ? dom.playerFieldCards : dom.oppFieldCards;
  container.innerHTML = '';
  st.field.forEach((group, groupIdx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'field-group';
    wrapper.dataset.groupIdx = groupIdx;
    wrapper.dataset.who = who;
    if (group.season && group.basho) {
      wrapper.classList.add('has-season');
    }
    if (group.season) {
      const sEl = createCardEl(group.season, false);
      sEl.classList.add('on-field', 'season-slot');
      setupCardInteraction(sEl, group.season, who);
      wrapper.appendChild(sEl);
    }
    if (group.basho) {
      const bEl = createBashoEl(group.basho, who, group);
      bEl.classList.add('basho-slot');
      // 召喚酔い：このターンに召喚された場所札は横向き
      if (group._summonedThisTurn) bEl.classList.add('summon-sick');
      if (who === 'player') setupBashoSelect(bEl, groupIdx);
      wrapper.appendChild(bEl);
    }
    if (group.kaii.length > 0) {
      const row = document.createElement('div');
      row.className = 'kaii-row';
      const vis = Math.min(group.kaii.length, 3);
      for (let i = 0; i < vis; i++) {
        // 鮮明キーワード持ちは表向きで装備
        const isFaceDown = group.kaii[i].keyword !== '鮮明';
        const kEl = createCardEl(group.kaii[i], isFaceDown);
        kEl.classList.add('kaii-attached');
        setupKaiiInteraction(kEl, group, who, group.kaii[i]);
        row.appendChild(kEl);
      }
      if (group.kaii.length > 3) {
        const badge = document.createElement('div');
        badge.className = 'kaii-count-badge';
        const span = document.createElement('span');
        span.textContent = group.kaii.length;
        badge.appendChild(span);
        row.appendChild(badge);
      }
      wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
  });
  updateOverflow(container);
}

// ===================================================================
// 描画：魂（全カード共通：上下反転のみ、道具札の特別処理なし）
// ===================================================================
function renderSoul(who) {
  const st = (who === 'player') ? player : opponent;
  const container = (who === 'player') ? dom.playerSoulCards : dom.oppSoulCards;
  sortCards(st.soul);
  container.innerHTML = '';
  st.soul.forEach(card => {
    const el = createCardEl(card, false);
    el.classList.add('in-soul');
    setupCardInteraction(el, card, who);
    container.appendChild(el);
  });
  updateOverflow(container);
}

// ===================================================================
// 溢れ防止
// ===================================================================
function updateOverflow(container) {
  container.style.justifyContent = '';
  const items = Array.from(container.children);
  if (items.length === 0) return;
  items.forEach(el => { el.style.marginRight = ''; });
  const cW = container.clientWidth;
  if (cW <= 0) return;

  // 場のcard-rowか判定（field-card-rowクラスを持つ場合はgap値が大きい）
  const isFieldRow = container.classList.contains('field-card-row');
  const defaultGap = isFieldRow ? parseInt(getComputedStyle(container).gap) || 14 : 2;

  let totalW = 0;
  items.forEach(el => { totalW += (el.offsetWidth || 40); });
  const totalG = totalW + (items.length - 1) * defaultGap;
  if (totalG <= cW) { container.style.justifyContent = 'center'; return; }
  container.style.justifyContent = 'flex-start';

  if (items.length <= 1) return;
  // 利用可能なスペースから必要なオーバーラップを計算
  const ov = totalG - cW;
  const olap = Math.ceil(ov / (items.length - 1)) + defaultGap;
  items.forEach((el, i) => { if (i < items.length - 1) el.style.marginRight = (-olap) + 'px'; });
}

// ===================================================================
// プレビュー
// ===================================================================
let currentPreviewCard = null;
let insideKaiiPopup = false;

function showPreview(card, side, fromKaiiPopup) {
  if (suppressPreview) return;
  // 怪異札モーダルが表示中：モーダル内カード以外のプレビューをブロック
  if (kaiiPopupActive && !fromKaiiPopup) return;
  currentPreviewCard = card;
  if (insideKaiiPopup) {
    dom.kaiiPreviewImg.src = card.img;
    dom.kaiiPreviewOverlay.classList.add('active');
    dom.kaiiPreviewOverlay.style.display = 'flex';
    return;
  }
  dom.previewImg.src = card.img;
  let showSide = (side === 'player') ? 'show-top' : 'show-bottom';
  dom.preview.className = 'active ' + showSide;
  dom.preview.style.display = 'flex';
}
function hidePreview() {
  currentPreviewCard = null;
  dom.preview.style.display = 'none';
  dom.preview.className = '';
  dom.kaiiPreviewOverlay.classList.remove('active');
  dom.kaiiPreviewOverlay.style.display = 'none';
}

function setupCardInteraction(el, card, owner) {
  el.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    el.classList.add('glow');
  }, { passive: true });
  el.addEventListener('touchend', (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (suppressPreview) return;
    if (currentPreviewCard && currentPreviewCard.uid === card.uid) {
      hidePreview(); el.classList.remove('glow');
    } else {
      clearAllGlow(); el.classList.add('glow');
      showPreview(card, owner);
    }
  });
  el.addEventListener('mouseenter', () => { el.classList.add('glow'); showPreview(card, owner); });
  el.addEventListener('mouseleave', () => { el.classList.remove('glow'); if (!insideKaiiPopup) hidePreview(); });
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    if (suppressPreview) return;
    if (currentPreviewCard && currentPreviewCard.uid === card.uid) hidePreview();
    else showPreview(card, owner);
  });
}
function clearAllGlow() {
  document.querySelectorAll('.battle-card.glow').forEach(c => c.classList.remove('glow'));
}

// ===================================================================
// プレビュー：どこタップでも即消し（攻撃ボタン・ターン終了ボタンは除外）
// ===================================================================
function isCenterBtnTarget(e) {
  return e.target === dom.attackBtn || dom.attackBtn.contains(e.target)
    || e.target === dom.endTurnCenter || dom.endTurnCenter.contains(e.target);
}

document.addEventListener('touchend', (e) => {
  if (isCenterBtnTarget(e)) return;
  // 攻撃ボタン解除：場所札以外をタップしたら攻撃ボタンを非表示
  if (selectedGroupIdx !== null) {
    const tappedBasho = e.target.closest('.basho-slot');
    if (!tappedBasho) {
      hideAttackBtn();
    }
  }
  if (currentPreviewCard) {
    if (dom.kaiiPreviewOverlay.style.display === 'flex') {
      dom.kaiiPreviewOverlay.classList.remove('active');
      dom.kaiiPreviewOverlay.style.display = 'none';
      currentPreviewCard = null;
      clearAllGlow();
      e.preventDefault();
      return;
    }
    if (dom.preview.style.display === 'flex') {
      hidePreview();
      clearAllGlow();
      e.preventDefault();
      return;
    }
  }
}, { passive: false });
document.addEventListener('click', (e) => {
  if (isCenterBtnTarget(e)) return;
  // 攻撃ボタン解除：場所札以外をクリックしたら攻撃ボタンを非表示
  if (selectedGroupIdx !== null) {
    const clickedBasho = e.target.closest('.basho-slot');
    if (!clickedBasho) {
      hideAttackBtn();
    }
  }
  if (currentPreviewCard) {
    if (dom.kaiiPreviewOverlay.style.display === 'flex') {
      dom.kaiiPreviewOverlay.classList.remove('active');
      dom.kaiiPreviewOverlay.style.display = 'none';
      currentPreviewCard = null;
      clearAllGlow();
      return;
    }
    if (dom.preview.style.display === 'flex') {
      hidePreview();
      clearAllGlow();
      return;
    }
  }
});

// ===================================================================
// 場所札選択 → 攻撃ボタン表示／非表示
// ===================================================================
function setupBashoSelect(el, groupIdx) {
  el.addEventListener('touchend', () => showAttackBtn(groupIdx));
  el.addEventListener('click', () => showAttackBtn(groupIdx));
}
function showAttackBtn(gIdx) {
  if (isAttacking || turnLocked || gameEnded) return;
  // 攻撃済みチェック：1ターン1回
  if (attackUsedThisTurn) {
    showPopup('attack-used-msg');
    return;
  }
  selectedGroupIdx = gIdx;
  dom.attackBtn.style.display = '';
  dom.endTurnCenter.style.display = 'none';
}
function hideAttackBtn() {
  selectedGroupIdx = null;
  dom.attackBtn.style.display = 'none';
  // 攻撃が非表示になったら中央ターン終了を表示
  dom.endTurnCenter.style.display = '';
}

// ===================================================================
// 効果発動演出（共通）
// ===================================================================
function showEffectActivation(card, label) {
  return new Promise(resolve => {
    dom.effectCardImg.src = card.img;
    dom.effectLabel.textContent = label || '効果発動';
    // アニメーションリセット（連続呼び出し対応）
    dom.effectOverlay.classList.remove('active');
    dom.effectCardImg.style.animation = 'none';
    void dom.effectOverlay.offsetHeight;
    dom.effectCardImg.style.animation = '';
    dom.effectOverlay.style.display = 'flex';
    dom.effectOverlay.classList.add('active');
    // キラキラパーティクル生成
    for (let i = 0; i < 8; i++) {
      const p = document.createElement('div');
      p.className = 'sparkle-particle';
      p.style.left = (30 + Math.random() * 40) + '%';
      p.style.top = (25 + Math.random() * 35) + '%';
      p.style.animationDelay = (Math.random() * 0.4) + 's';
      p.style.width = (4 + Math.random() * 4) + 'px';
      p.style.height = p.style.width;
      dom.effectOverlay.appendChild(p);
    }
    let resolved = false;
    const finish = () => {
      if (resolved) return;
      resolved = true;
      dom.effectOverlay.style.display = 'none';
      dom.effectOverlay.classList.remove('active');
      // パーティクル削除
      dom.effectOverlay.querySelectorAll('.sparkle-particle').forEach(e => e.remove());
      resolve();
    };
    // クリック/タップでスキップ
    const skipHandler = (e) => {
      e.stopPropagation();
      dom.effectOverlay.removeEventListener('click', skipHandler);
      dom.effectOverlay.removeEventListener('touchend', skipHandler);
      finish();
    };
    dom.effectOverlay.addEventListener('click', skipHandler);
    dom.effectOverlay.addEventListener('touchend', skipHandler);
    // 0.8秒後に自動で次へ
    setTimeout(finish, 800);
  });
}

// ===================================================================
// 怪異札フリップアニメ（裏→表）
// ===================================================================
function flipKaiiCards(groupEl) {
  return new Promise(resolve => {
    const kaiiEls = groupEl.querySelectorAll('.kaii-attached');
    if (kaiiEls.length === 0) { resolve(); return; }
    let completed = 0;
    kaiiEls.forEach(el => {
      el.classList.add('kaii-flipping');
      // 半分の時点で画像を表に切り替え
      setTimeout(() => {
        const uid = el.dataset.uid;
        // カードデータからimgを取得
        let card = null;
        player.field.forEach(g => {
          g.kaii.forEach(k => { if (String(k.uid) === uid) card = k; });
        });
        if (card) {
          const img = el.querySelector('img');
          if (img) img.src = card.img;
        }
      }, 200);
      setTimeout(() => {
        el.classList.remove('kaii-flipping');
        completed++;
        if (completed >= kaiiEls.length) resolve();
      }, 400);
    });
  });
}

// ===================================================================
// 攻撃処理（攻撃フェイズシステム）
// ===================================================================
async function performAttack() {
  if (selectedGroupIdx === null || isAttacking || turnLocked || gameEnded) return;
  const atkIdx = selectedGroupIdx;
  const group = player.field[atkIdx];
  if (!group || !group.basho) return;

  // 召喚酔いチェック
  if (group._summonedThisTurn) {
    showPopup('summon-sick-msg');
    hideAttackBtn();
    return;
  }

  const power = getEffectivePower(group, 'player');
  isAttacking = true;
  attackUsedThisTurn = true;
  hidePreview(); hideAttackBtn(); clearAllGlow();

  const groupEls = dom.playerFieldCards.querySelectorAll('.field-group');
  const targetEl = groupEls[atkIdx];
  if (!targetEl) { isAttacking = false; return; }

  const hasKaii = group.kaii.length > 0;
  const bashoHasAttackTag = group.basho && group.basho.attackTag;

  // 怪異札も攻撃時タグもない→即座にアタック
  if (!hasKaii && !bashoHasAttackTag) {
    executeAttackAnimation(targetEl, atkIdx, power, group);
    return;
  }

  // === 攻撃フェイズ開始 ===

  // 1. 怪異札フリップ
  if (hasKaii) {
    await flipKaiiCards(targetEl);
    // 怪異札の効果を順番に発動
    for (let i = 0; i < group.kaii.length; i++) {
      const kCard = group.kaii[i];
      await showEffectActivation(kCard, '効果発動');
      // ここで将来的に実際の効果処理を追加可能
    }
  }

  // 2. 攻撃時タグがある場所札の効果
  if (bashoHasAttackTag) {
    await showEffectActivation(group.basho, '効果発動');
    // ここで将来的に実際の効果処理を追加可能
  }

  // 3. 通常のアタック演出
  executeAttackAnimation(targetEl, atkIdx, power, group);
}

function executeAttackAnimation(targetEl, atkIdx, power, group) {
  const isFinishBlow = (opponent.life - power) <= 0;
  const animDuration = isFinishBlow ? 1500 : 500;
  const dmgDelay = isFinishBlow ? 600 : 200;

  if (isFinishBlow) {
    // フィニッシュブロー：3倍スロー + ズーム + 操作不可
    turnLocked = true;
    targetEl.classList.add('attacking-slow');
    // 場全体をズームイン
    const fieldRow = $('player-field-row');
    fieldRow.classList.add('finish-zoom-scene');
  } else {
    targetEl.classList.add('attacking');
  }

  setTimeout(() => {
    opponent.life -= power;
    if (opponent.life < 0) opponent.life = 0;
    showDamage(power, 'top', isFinishBlow);
    dom.oppLife.textContent = opponent.life;
  }, dmgDelay);

  setTimeout(() => {
    if (isFinishBlow) {
      const fieldRow = $('player-field-row');
      fieldRow.classList.remove('finish-zoom-scene');
    }
    if (atkIdx < player.field.length) {
      const g = player.field[atkIdx];
      if (g.basho) player.soul.push(g.basho);
      g.kaii.forEach(k => player.soul.push(k));
      if (g.season) {
        g.basho = null;
        g.kaii = [];
        g._summonedThisTurn = false;
      } else {
        player.field.splice(atkIdx, 1);
      }
    }
    renderField('player');
    renderSoul('player');
    updateAllCounts();
    updatePlayableAura();
    isAttacking = false;
    selectedGroupIdx = null;

    if (isFinishBlow) {
      showWinLoseResult(true);
    }
  }, animDuration);
}

// showFinishZoom は削除済み（攻撃シーンズームに移行）

function showWinLoseResult(isWin) {
  gameEnded = true;
  dom.resultText.textContent = isWin ? 'あなたの勝ち' : 'あなたの負け';
  dom.resultOverlay.className = isWin ? 'active win' : 'active lose';
  dom.resultOverlay.style.display = 'flex';
}

function showDamage(amount, side, isFinish) {
  dom.damageText.textContent = '−' + amount;
  const cls = (side === 'top') ? 'show-top' : 'show-bottom';
  dom.damageOverlay.className = cls + (isFinish ? ' finish-damage' : '');
  dom.damageOverlay.style.display = '';
  dom.damageText.style.animation = 'none';
  void dom.damageText.offsetHeight;
  dom.damageText.style.animation = '';
  const duration = isFinish ? 1600 : 850;
  setTimeout(() => {
    dom.damageOverlay.style.display = 'none';
    dom.damageOverlay.className = '';
  }, duration);
}

dom.attackBtn.addEventListener('click', (e) => { e.stopPropagation(); performAttack().catch(()=>{}); });
dom.attackBtn.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); performAttack().catch(()=>{}); });

// ===================================================================
// 怪異札ポップアップ
// ===================================================================
let kaiiPopupActive = false;

function showKaiiPopup(group, owner) {
  hidePreview();
  dom.kaiiPopupCards.innerHTML = '';
  insideKaiiPopup = true;
  group.kaii.forEach(kCard => {
    const el = createCardEl(kCard, false);
    // ポップアップ内のカード：クリック/タップのみで拡大表示（マウスオーバー無効）
    el.addEventListener('touchstart', (e) => { e.stopPropagation(); el.classList.add('glow'); }, { passive: true });
    el.addEventListener('touchend', (e) => {
      e.stopPropagation(); e.preventDefault();
      if (suppressPreview) return;
      if (currentPreviewCard && currentPreviewCard.uid === kCard.uid) {
        hidePreview(); el.classList.remove('glow');
      } else {
        clearAllGlow(); el.classList.add('glow');
        showPreview(kCard, owner, true);
      }
    });
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (suppressPreview) return;
      if (currentPreviewCard && currentPreviewCard.uid === kCard.uid) { hidePreview(); el.classList.remove('glow'); }
      else { clearAllGlow(); el.classList.add('glow'); showPreview(kCard, owner, true); }
    });
    dom.kaiiPopupCards.appendChild(el);
  });
  dom.kaiiPopup.classList.add('active');
  dom.kaiiPopup.style.display = 'flex';
  kaiiPopupActive = true;
}
function hideKaiiPopup() {
  dom.kaiiPopup.classList.remove('active');
  dom.kaiiPopup.style.display = 'none';
  kaiiPopupActive = false; insideKaiiPopup = false;
  hidePreview();
}
function showKaiiBlockMsg() {
  showPopup('kaii-block-msg');
}

function setupKaiiInteraction(el, group, owner, kCard) {
  el.addEventListener('touchstart', () => el.classList.add('glow'), { passive: true });
  el.addEventListener('touchend', (e) => {
    el.classList.remove('glow'); e.stopPropagation(); e.preventDefault();
    if (owner === 'opponent') {
      // 鮮明カードがあるかチェック
      const senmeCards = group.kaii.filter(k => k.keyword === '鮮明');
      if (senmeCards.length > 0) {
        if (kaiiPopupActive) hideKaiiPopup(); else showKaiiPopup({ kaii: senmeCards }, owner);
      } else {
        showKaiiBlockMsg();
      }
      return;
    }
    if (kaiiPopupActive) hideKaiiPopup(); else showKaiiPopup(group, owner);
  });
  // 自分の怪異札＆相手の鮮明怪異札：マウスオーバーで拡大表示
  if (kCard && (owner === 'player' || kCard.keyword === '鮮明')) {
    el.addEventListener('mouseenter', () => {
      el.classList.add('glow');
      showPreview(kCard, owner);
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('glow');
      hidePreview();
    });
  } else {
    el.addEventListener('mouseenter', () => el.classList.add('glow'));
    el.addEventListener('mouseleave', () => el.classList.remove('glow'));
  }
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    if (owner === 'opponent') {
      const senmeCards = group.kaii.filter(k => k.keyword === '鮮明');
      if (senmeCards.length > 0) {
        if (kaiiPopupActive) hideKaiiPopup(); else showKaiiPopup({ kaii: senmeCards }, owner);
      } else {
        showKaiiBlockMsg();
      }
      return;
    }
    if (kaiiPopupActive) hideKaiiPopup(); else showKaiiPopup(group, owner);
  });
}
dom.kaiiPopup.addEventListener('click', (e) => {
  if (e.target === dom.kaiiPopup || e.target.id === 'kaii-popup-title') hideKaiiPopup();
});
dom.kaiiPopup.addEventListener('touchend', (e) => {
  if (e.target === dom.kaiiPopup || e.target.id === 'kaii-popup-title') { e.preventDefault(); hideKaiiPopup(); }
});

// ===================================================================
// カード使用エフェクト
// ===================================================================
let playEffectTimer = null;
function showPlayEffect(card) {
  clearTimeout(playEffectTimer);
  dom.playEffectImg.src = card.img;
  dom.playEffect.style.display = 'flex';
  dom.playEffect.classList.add('active');
  dom.playEffectImg.style.animation = 'none';
  void dom.playEffectImg.offsetHeight;
  dom.playEffectImg.style.animation = '';
  playEffectTimer = setTimeout(() => {
    dom.playEffect.style.display = 'none';
    dom.playEffect.classList.remove('active');
  }, 600);
}

// ===================================================================
// 季節札警告
// ===================================================================
function showSeasonWarning() { dom.seasonWarning.classList.add('active'); dom.seasonWarning.style.display = 'flex'; }
function hideSeasonWarning() { dom.seasonWarning.classList.remove('active'); dom.seasonWarning.style.display = 'none'; }

// ===================================================================
// D&D
// ===================================================================
let dragCard = null, dragGhost = null, dragSourceEl = null, isDragging = false;
let currentKaiiGhost = null, currentDropTarget = null;

function setupDrag(el, card) {
  let startX, startY, touchId = null;
  const onStart = (x, y) => { startX = x; startY = y; isDragging = false; };
  const onMove = (x, y) => {
    if (isDragging) {
      dragGhost.style.left = (x - 25) + 'px';
      dragGhost.style.top = (y - 35) + 'px';
      if (card.type === '怪異札') updateKaiiDropTarget(x, y);
      else if (card.type === '場所札') updateBashoDropTarget(x, y);
      if (card.type === '季節札') {
        const hasSeason = player.field.some(g => g.season !== null);
        const fieldRect = dom.playerField.getBoundingClientRect();
        const inField = (x >= fieldRect.left && x <= fieldRect.right && y >= fieldRect.top && y <= fieldRect.bottom);
        if (hasSeason && inField) showSeasonWarning(); else hideSeasonWarning();
      }
      return;
    }
    if (Math.abs(x - startX) > 8 || Math.abs(y - startY) > 8) {
      if ((turnLocked && !handOverflowPhase) || gameEnded) return;
      isDragging = true; dragCard = card; dragSourceEl = el;
      hidePreview(); hideKaiiPopup(); hideAttackBtn(); clearAllGlow();
      suppressPreview = true;
      dragGhost = document.createElement('div');
      dragGhost.className = 'drag-ghost';
      const img = document.createElement('img');
      img.src = card.img; img.draggable = false;
      dragGhost.appendChild(img);
      document.body.appendChild(dragGhost);
      dragGhost.style.left = (x - 25) + 'px';
      dragGhost.style.top = (y - 35) + 'px';
      el.style.opacity = '0.25';
      if (handOverflowPhase) {
        $('player-soul-zone').classList.add('drag-over-soul');
      } else {
        dom.playerField.classList.add('drag-over');
      }
    }
  };
  const onEnd = (x, y) => {
    if (!isDragging) return;
    // 手札超過フェイズ：魂ゾーンにドロップで捨てる
    const soulRect = $('player-soul-zone').getBoundingClientRect();
    const inSoul = (x >= soulRect.left && x <= soulRect.right && y >= soulRect.top && y <= soulRect.bottom);
    if (handOverflowPhase && inSoul) {
      let idx = player.hand.findIndex(c => c.uid === card.uid);
      if (idx !== -1) {
        player.hand.splice(idx, 1);
        player.soul.push(card);
        renderPlayerHand(); renderSoul('player'); updateAllCounts();
        checkHandOverflowDone();
      } else {
        // 手札公開場からも捨てられる
        idx = player.open.findIndex(c => c.uid === card.uid);
        if (idx !== -1) {
          player.open.splice(idx, 1);
          player.soul.push(card);
          renderPlayerOpen(); renderSoul('player'); updateAllCounts();
          checkHandOverflowDone();
        }
      }
      cleanup();
      return;
    }
    // 手札超過フェイズ中は場への配置を禁止
    if (handOverflowPhase) { cleanup(); return; }

    const rect = dom.playerField.getBoundingClientRect();
    const dropped = (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom);
    if (dropped) {
      // コスト・季節・1ターン制限チェック
      const check = canPlayCard(card, 'player');
      if (!check.ok) {
        if (check.reason === 'soul') showSoulShortage();
        else if (check.reason === 'season') showSeasonShortage();
        else if (check.reason === 'type_used') showTypeUsedMsg(card.type);
        else if (check.reason === 'no_basho') showPopup('no-basho-msg');
        cleanup();
        return;
      }
      // 手札から探す
      let idx = player.hand.findIndex(c => c.uid === card.uid);
      if (idx !== -1) { player.hand.splice(idx, 1); placeCard(card); }
      else {
        // 手札公開場から探す
        idx = player.open.findIndex(c => c.uid === card.uid);
        if (idx !== -1) { player.open.splice(idx, 1); placeCard(card); renderPlayerOpen(); }
      }
    }
    cleanup();
  };
  function cleanup() {
    if (dragGhost) { dragGhost.remove(); dragGhost = null; }
    if (dragSourceEl) { dragSourceEl.style.opacity = ''; dragSourceEl = null; }
    removeKaiiGhost(); clearDropTargets(); hideSeasonWarning();
    dragCard = null;
    dom.playerField.classList.remove('drag-over');
    $('player-soul-zone').classList.remove('drag-over-soul');
    isDragging = false; currentDropTarget = null;
    setTimeout(() => { suppressPreview = false; }, 150);
  }
  el.addEventListener('touchstart', e => { const t = e.touches[0]; touchId = t.identifier; onStart(t.clientX, t.clientY); }, { passive: true });
  el.addEventListener('touchmove', e => {
    for (let i = 0; i < e.touches.length; i++) {
      if (e.touches[i].identifier === touchId) { onMove(e.touches[i].clientX, e.touches[i].clientY); break; }
    }
  }, { passive: true });
  el.addEventListener('touchend', e => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === touchId) { onEnd(e.changedTouches[i].clientX, e.changedTouches[i].clientY); break; }
    }
  });
  el.addEventListener('mousedown', e => {
    onStart(e.clientX, e.clientY);
    const mm = ev => onMove(ev.clientX, ev.clientY);
    const mu = ev => { onEnd(ev.clientX, ev.clientY); document.removeEventListener('mousemove', mm); document.removeEventListener('mouseup', mu); };
    document.addEventListener('mousemove', mm); document.addEventListener('mouseup', mu);
  });
}

// ===================================================================
// ドロップターゲット
// ===================================================================
function updateKaiiDropTarget(x, y) {
  const groups = dom.playerFieldCards.querySelectorAll('.field-group');
  let ci = -1, cd = Infinity;
  groups.forEach((g, i) => {
    const gr = player.field[i];
    if (!gr || !gr.basho) return;
    const r = g.getBoundingClientRect();
    const d = Math.abs(x - r.left - r.width / 2) + Math.abs(y - r.top - r.height / 2);
    if (d < cd) { cd = d; ci = i; }
  });
  const fr = dom.playerField.getBoundingClientRect();
  const inF = (x >= fr.left && x <= fr.right && y >= fr.top && y <= fr.bottom);
  if (inF && ci >= 0) {
    if (currentDropTarget !== ci) {
      removeKaiiGhost(); clearDropTargets(); currentDropTarget = ci;
      const te = groups[ci]; te.classList.add('drop-target');
      let kr = te.querySelector('.kaii-row');
      if (!kr) { kr = document.createElement('div'); kr.className = 'kaii-row'; te.appendChild(kr); }
      currentKaiiGhost = document.createElement('div'); currentKaiiGhost.className = 'kaii-ghost-preview';
      const im = document.createElement('img'); im.src = DECK_BACK_IMG; im.draggable = false;
      currentKaiiGhost.appendChild(im); kr.appendChild(currentKaiiGhost);
    }
  } else { removeKaiiGhost(); clearDropTargets(); currentDropTarget = null; }
}
function updateBashoDropTarget(x, y) {
  const groups = dom.playerFieldCards.querySelectorAll('.field-group');
  let ci = -1, cd = Infinity;
  groups.forEach((g, i) => {
    const gr = player.field[i];
    if (!gr || !gr.season || gr.basho) return;
    const r = g.getBoundingClientRect();
    const d = Math.abs(x - r.left - r.width / 2) + Math.abs(y - r.top - r.height / 2);
    if (d < cd) { cd = d; ci = i; }
  });
  const fr = dom.playerField.getBoundingClientRect();
  const inF = (x >= fr.left && x <= fr.right && y >= fr.top && y <= fr.bottom);
  clearDropTargets(); currentDropTarget = null;
  if (inF && ci >= 0) {
    const g = groups[ci]; const r = g.getBoundingClientRect();
    if (Math.abs(x - r.left - r.width / 2) < r.width / 2 + 30) {
      currentDropTarget = ci; g.classList.add('drop-target');
    }
  }
}
function removeKaiiGhost() {
  if (currentKaiiGhost) {
    const p = currentKaiiGhost.parentElement;
    currentKaiiGhost.remove(); currentKaiiGhost = null;
    if (p && p.classList.contains('kaii-row') && p.children.length === 0) p.remove();
  }
}
function clearDropTargets() {
  dom.playerFieldCards.querySelectorAll('.field-group.drop-target').forEach(e => e.classList.remove('drop-target'));
}

// ===================================================================
// カード配置
// ===================================================================
function placeCard(card) {
  if (card.type === '場所札') {
    const hasSokkou = card.keyword === '速攻';
    if (currentDropTarget !== null && player.field[currentDropTarget] && player.field[currentDropTarget].season && !player.field[currentDropTarget].basho) {
      player.field[currentDropTarget].basho = card;
      player.field[currentDropTarget]._summonedThisTurn = !hasSokkou;
    } else {
      player.field.unshift({ season: null, basho: card, kaii: [], _summonedThisTurn: !hasSokkou });
    }
    showPlayEffect(card);
    markUsed('player', '場所札');
    renderField('player'); renderPlayerHand(); updateAllCounts();
  } else if (card.type === '季節札') {
    const ei = player.field.findIndex(g => g.season !== null);
    if (ei !== -1) {
      const old = player.field.splice(ei, 1)[0];
      if (old.season) player.soul.push(old.season);
      if (old.basho) player.soul.push(old.basho);
      old.kaii.forEach(k => player.soul.push(k));
      renderSoul('player');
    }
    player.field.unshift({ season: card, basho: null, kaii: [], _summonedThisTurn: false });
    showPlayEffect(card);
    markUsed('player', '季節札');
    renderField('player'); renderPlayerHand(); updateAllCounts();
    updatePlayableAura();
  } else if (card.type === '怪異札') {
    let tg = null;
    if (currentDropTarget !== null && player.field[currentDropTarget] && player.field[currentDropTarget].basho) {
      tg = player.field[currentDropTarget];
    } else {
      tg = player.field.find(g => g.basho !== null);
    }
    if (!tg) { player.hand.push(card); renderPlayerHand(); return; }
    tg.kaii.push(card);
    markUsed('player', '怪異札');
    renderField('player'); renderPlayerHand(); updateAllCounts();
  } else if (card.type === '道具札') {
    // 道具札：効果発動演出のみ（全道具札共通）→効果処理→魂へ
    markUsed('player', '道具札');
    renderPlayerHand();
    (async () => {
      await showEffectActivation(card, '効果発動');
      // 効果処理
      if (card.effect === 'damage_8') {
        opponent.life -= 8;
        if (opponent.life < 0) opponent.life = 0;
        showDamage(8, 'top');
        dom.oppLife.textContent = opponent.life;
        checkWinLose();
      } else if (card.effect === 'draw_3') {
        drawCards('player', 3);
      }
      player.soul.push(card);
      renderSoul('player');
      updateAllCounts();
      updatePlayableAura();
    })();
  } else {
    player.field.unshift({ season: null, basho: card, kaii: [] });
    showPlayEffect(card);
    renderField('player'); renderPlayerHand(); updateAllCounts();
  }
}

// ===================================================================
// ドロー
// ===================================================================
function drawCards(who, count) {
  const st = (who === 'player') ? player : opponent;
  for (let i = 0; i < count && st.deck.length > 0; i++) st.hand.push(st.deck.shift());
  if (who === 'player') { renderPlayerHand(); updateDeckImg(dom.playerDeck, 'player'); }
  else { renderOppHand(); updateDeckImg(dom.oppDeck, 'opponent'); }
  updateAllCounts();
}

// ===================================================================
// ゲーム開始
// ===================================================================
let isFirstTurn = true; // 先行フラグ（50%ランダム）
let cpuFirstAction = true; // CPUの最初のターンかどうか

function startGame() {
  uidCounter = 1;
  player.deck = buildSampleDeck();
  player.hand = []; player.field = []; player.soul = []; player.exile = []; player.open = []; player.life = 30;
  opponent.deck = buildSampleDeck();
  opponent.hand = []; opponent.field = []; opponent.soul = []; opponent.exile = []; opponent.open = []; opponent.life = 30;
  selectedGroupIdx = null; suppressPreview = false; isAttacking = false; attackUsedThisTurn = false;
  turnNumber = 0; turnLocked = true; gameEnded = false; handOverflowPhase = false; cpuFirstAction = true;
  dom.handOverflowOverlay.style.display = 'none';
  dom.handOverflowOverlay.classList.remove('active');

  dom.playerHandCards.innerHTML = ''; dom.oppHandCards.innerHTML = '';
  dom.playerFieldCards.innerHTML = ''; dom.oppFieldCards.innerHTML = '';
  dom.playerSoulCards.innerHTML = ''; dom.oppSoulCards.innerHTML = '';
  dom.playerOpenCards.innerHTML = ''; dom.oppOpenCards.innerHTML = '';

  // 結果オーバーレイ非表示
  dom.resultOverlay.style.display = 'none';
  dom.resultOverlay.className = '';
  // フィニッシュズーム非表示
  dom.finishZoomOverlay.style.display = 'none';
  dom.finishZoomOverlay.classList.remove('active');

  // 全ポップアップクリア
  hideAllPopups();
  // 効果発動オーバーレイクリア
  dom.effectOverlay.style.display = 'none';
  dom.effectOverlay.classList.remove('active');
  dom.effectOverlay.querySelectorAll('.sparkle-particle').forEach(e => e.remove());

  updateDeckImg(dom.playerDeck, 'player'); updateDeckImg(dom.oppDeck, 'opponent');
  resetTurnFlags();
  updateAllCounts();
  dom.startOverlay.style.display = 'none';
  hideAttackBtn(); hidePreview(); hideKaiiPopup(); hideSeasonWarning();
  dom.endTurnCenter.style.display = '';

  // 先行/後攻ランダム決定（事前に決める）
  isFirstTurn = Math.random() < 0.5;

  // === 開門演出 ===
  dom.gateOverlay.classList.add('active');
  dom.gateOverlay.style.display = 'flex';
  dom.gateText.style.animation = 'gateAppear 1.2s ease-out forwards';
  dom.coinText.textContent = '';

  setTimeout(() => {
    // 先行/後攻コインフリップアニメーション（1秒間素早く切替）
    let flipCount = 0;
    const flipInterval = setInterval(() => {
      dom.coinText.textContent = (flipCount % 2 === 0) ? '先 行' : '後 攻';
      flipCount++;
    }, 80);

    setTimeout(() => {
      clearInterval(flipInterval);
      dom.coinText.textContent = isFirstTurn ? '先 行' : '後 攻';
      dom.coinText.style.textShadow = '0 0 30px rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.7)';
    }, 1000);

    // 結果表示後、少し待ってからフェードアウト
    setTimeout(() => {
      dom.gateText.style.animation = 'gateFadeOut 0.5s ease-out forwards';
      dom.coinText.style.animation = 'gateFadeOut 0.5s ease-out forwards';
      setTimeout(() => {
        dom.gateOverlay.classList.remove('active');
        dom.gateOverlay.style.display = 'none';
        dom.gateText.style.animation = '';
        dom.coinText.style.animation = '';
        dom.coinText.style.textShadow = '';
        // ゲーム初期化続行
        initGameAfterGate();
      }, 500);
    }, 2000);
  }, 1200);
}

function initGameAfterGate() {
  drawCards('player', 8); drawCards('opponent', 8);
  renderField('player'); renderField('opponent'); renderOppHand(); updateAllCounts();
  updatePlayableAura();

  if (isFirstTurn) {
    startPlayerTurn();
  } else {
    turnLocked = true;
    showTurnAnnounce('相手のターン', () => {
      setTimeout(() => {
        cpuTurn();
      }, 500);
    });
  }
}

// ===================================================================
// ターン告知演出
// ===================================================================
function showTurnAnnounce(text, cb) {
  dom.turnAnnounceText.textContent = text;
  dom.turnAnnounceText.style.animation = 'none';
  void dom.turnAnnounceText.offsetHeight;
  dom.turnAnnounceText.style.animation = '';
  dom.turnAnnounce.classList.add('active');
  dom.turnAnnounce.style.display = 'flex';
  setTimeout(() => {
    dom.turnAnnounce.classList.remove('active');
    dom.turnAnnounce.style.display = 'none';
    if (cb) cb();
  }, 900);
}

// ===================================================================
// 勝敗チェック
// ===================================================================
function checkWinLose() {
  if (gameEnded) return;
  // 攻撃によるフィニッシュブローはexecuteAttackAnimation/executeCpuAttackが処理する
  // ここでは道具札ダメージなど非攻撃のライフ0のみ処理（ズーム＋スロー演出付き）
  if (opponent.life <= 0) {
    gameEnded = true;
    turnLocked = true;
    // ダメージ演出にスロー＋ズーム（damageOverlayをズームで表示）
    dom.damageOverlay.classList.add('finish-damage-zoom');
    setTimeout(() => {
      dom.damageOverlay.classList.remove('finish-damage-zoom');
      showWinLoseResult(true);
    }, 1500);
  } else if (player.life <= 0) {
    gameEnded = true;
    turnLocked = true;
    dom.damageOverlay.classList.add('finish-damage-zoom');
    setTimeout(() => {
      dom.damageOverlay.classList.remove('finish-damage-zoom');
      showWinLoseResult(false);
    }, 1500);
  }
}

// ===================================================================
// ターン開始処理（ドロー含む）
// ===================================================================
function startPlayerTurn() {
  turnLocked = true;
  turnNumber++;
  // 召喚酔い解除：自分のターン開始時に縦に戻す
  player.field.forEach(g => { g._summonedThisTurn = false; });
  renderField('player');
  showTurnAnnounce('あなたのターン', () => {
    // 先行1ターン目のみドローなし。後攻なら1ターン目からドロー。
    const isPlayerSenkou = isFirstTurn; // isFirstTurn=true → プレイヤーが先行
    const skipDraw = (isPlayerSenkou && turnNumber === 1);
    if (!skipDraw) {
      drawCards('player', 1);
    }
    turnLocked = false;
    updatePlayableAura();
  });
}

// ===================================================================
// ターン終了
// ===================================================================
function endTurn() {
  if (turnLocked || gameEnded) return;
  // 手札超過チェック（手札＋手札公開場の合計）
  if (player.hand.length + player.open.length >= 9) {
    startHandOverflowPhase();
    return;
  }
  proceedEndTurn();
}

function startHandOverflowPhase() {
  handOverflowPhase = true;
  turnLocked = true; // ターン終了ボタン等を無効化（ドラッグはhandOverflowPhaseで許可）
  dom.handOverflowOverlay.style.display = 'flex';
  dom.handOverflowOverlay.classList.add('active');
  hidePreview(); hideAttackBtn(); clearAllGlow();
  clearPlayableAura(); // 手札超過中は緑オーラ非表示
}

function checkHandOverflowDone() {
  if (!handOverflowPhase) return;
  // 手札＋手札公開場の合計が8枚以下になったらOK
  if (player.hand.length + player.open.length <= 8) {
    handOverflowPhase = false;
    dom.handOverflowOverlay.style.display = 'none';
    dom.handOverflowOverlay.classList.remove('active');
    proceedEndTurn();
  }
}

function proceedEndTurn() {
  turnLocked = true;
  resetTurnFlags();
  attackUsedThisTurn = false;
  hidePreview(); hideAttackBtn(); clearAllGlow();
  renderField('player');
  updatePlayableAura();

  showTurnAnnounce('相手のターン', () => {
    setTimeout(() => {
      cpuTurn();
    }, 500);
  });
}

// ===================================================================
// CPU対戦相手（疑似AI）
// ===================================================================
const cpuUsedFlags = { basho: false, kaii: false, dougu: false, season: false };

function cpuTurn() {
  turnLocked = true;
  // 召喚酔い解除：相手ターン開始時に縦に戻す
  opponent.field.forEach(g => { g._summonedThisTurn = false; });
  renderField('opponent');
  // 先行1ターン目のみドローなし。CPUが先行 = isFirstTurn===false
  const isCpuSenkou = !isFirstTurn;
  const skipDraw = (isCpuSenkou && cpuFirstAction);
  if (!skipDraw) {
    drawCards('opponent', 1);
  }
  cpuFirstAction = false;
  // CPUフラグリセット
  cpuUsedFlags.basho = false;
  cpuUsedFlags.kaii = false;
  cpuUsedFlags.dougu = false;
  cpuUsedFlags.season = false;

  // カード使用キューを構築（高コスト優先）
  const actions = buildCpuActions();
  executeCpuActions(actions, 0, () => {
    // 攻撃フェイズ：怪異札が付いている最も強い場所札で攻撃
    const atkGroup = pickCpuAttackTarget();
    if (atkGroup !== null) {
      executeCpuAttack(atkGroup, () => {
        finishCpuTurn();
      });
    } else {
      finishCpuTurn();
    }
  });
}

function canCpuPlay(card) {
  // 1ターン1回制限チェック
  if (card.type === '場所札' && cpuUsedFlags.basho) return false;
  if (card.type === '怪異札' && cpuUsedFlags.kaii) return false;
  if (card.type === '道具札' && cpuUsedFlags.dougu) return false;
  if (card.type === '季節札' && cpuUsedFlags.season) return false;
  // 怪異札：場に場所札が必要
  if (card.type === '怪異札') {
    return opponent.field.some(g => g.basho !== null);
  }
  const cost = card.cost || 0;
  if (opponent.soul.length < cost) return false;
  if (cost >= 1 && card.season && card.season !== '無') {
    const seasons = getSoulSeasons('opponent');
    if (!seasons.has(card.season)) return false;
  }
  return true;
}

function buildCpuActions() {
  const actions = [];
  // ソート：高コスト優先
  const hand = [...opponent.hand].sort((a, b) => (b.cost || 0) - (a.cost || 0));

  // 季節札を先に
  for (const c of hand) {
    if (c.type === '季節札' && canCpuPlay(c)) { actions.push(c); break; }
  }
  // 場所札（高コスト優先）
  for (const c of hand) {
    if (c.type === '場所札' && !cpuUsedFlags.basho && canCpuPlay(c)) { actions.push(c); break; }
  }
  // 怪異札（高コスト優先）
  for (const c of hand) {
    if (c.type === '怪異札' && !cpuUsedFlags.kaii && canCpuPlay(c)) { actions.push(c); break; }
  }
  // 道具札（高コスト優先）
  for (const c of hand) {
    if (c.type === '道具札' && !cpuUsedFlags.dougu && canCpuPlay(c)) { actions.push(c); break; }
  }
  return actions;
}

async function executeCpuActions(actions, idx, done) {
  if (idx >= actions.length) { done(); return; }
  const card = actions[idx];
  // 再チェック（前のアクションで状態が変わった可能性）
  if (!canCpuPlay(card) || !opponent.hand.find(c => c.uid === card.uid)) {
    executeCpuActions(actions, idx + 1, done);
    return;
  }
  // 手札から除去
  const hi = opponent.hand.findIndex(c => c.uid === card.uid);
  if (hi === -1) { executeCpuActions(actions, idx + 1, done); return; }
  opponent.hand.splice(hi, 1);

  // カード配置
  await cpuPlaceCard(card);

  setTimeout(() => {
    executeCpuActions(actions, idx + 1, done);
  }, 1000);
}

async function cpuPlaceCard(card) {
  if (card.type === '場所札') {
    const hasSokkou = card.keyword === '速攻';
    const emptyGroup = opponent.field.find(g => g.season && !g.basho);
    if (emptyGroup) {
      emptyGroup.basho = card;
      emptyGroup._summonedThisTurn = !hasSokkou;
    } else {
      opponent.field.push({ season: null, basho: card, kaii: [], _summonedThisTurn: !hasSokkou });
    }
    cpuUsedFlags.basho = true;
    showPlayEffect(card);
  } else if (card.type === '季節札') {
    const ei = opponent.field.findIndex(g => g.season !== null);
    if (ei !== -1) {
      const old = opponent.field.splice(ei, 1)[0];
      if (old.season) opponent.soul.push(old.season);
      if (old.basho) opponent.soul.push(old.basho);
      old.kaii.forEach(k => opponent.soul.push(k));
    }
    opponent.field.push({ season: card, basho: null, kaii: [], _summonedThisTurn: false });
    cpuUsedFlags.season = true;
    showPlayEffect(card);
  } else if (card.type === '怪異札') {
    let best = null, bestPower = -1;
    opponent.field.forEach(g => {
      if (g.basho) {
        const p = getEffectivePower(g, 'opponent');
        if (p > bestPower) { bestPower = p; best = g; }
      }
    });
    if (best) { best.kaii.push(card); cpuUsedFlags.kaii = true; }
    else { opponent.hand.push(card); return; }
  } else if (card.type === '道具札') {
    cpuUsedFlags.dougu = true;
    renderField('opponent'); renderOppHand(); updateAllCounts();
    markUsed('opponent', card.type);
    // 道具札：効果発動演出を表示
    await showEffectActivation(card, '効果発動');
    if (card.effect === 'damage_8') {
      player.life -= 8;
      if (player.life < 0) player.life = 0;
      showDamage(8, 'bottom');
      dom.playerLife.textContent = player.life;
      checkWinLose();
    } else if (card.effect === 'draw_3') {
      drawCards('opponent', 3);
    }
    opponent.soul.push(card);
    renderSoul('opponent');
    updateAllCounts();
    return; // 既にmarkUsedしたのでreturn
  }
  renderField('opponent'); renderOppHand(); updateAllCounts();
  markUsed('opponent', card.type);
}

function pickCpuAttackTarget() {
  let bestIdx = -1, bestScore = -1;
  opponent.field.forEach((g, i) => {
    if (!g.basho) return;
    if (g._summonedThisTurn) return; // 召喚酔い
    const p = getEffectivePower(g, 'opponent');
    // 怪異札が付いているものを優先（スコア加算）
    const score = p + (g.kaii.length > 0 ? 100 : 0);
    if (score > bestScore) { bestScore = score; bestIdx = i; }
  });
  return bestIdx >= 0 ? bestIdx : null;
}

function executeCpuAttack(groupIdx, done) {
  const group = opponent.field[groupIdx];
  if (!group || !group.basho) { done(); return; }
  const power = getEffectivePower(group, 'opponent');
  const isFinishBlow = (player.life - power) <= 0;
  const animDuration = isFinishBlow ? 1500 : 500;
  const dmgDelay = isFinishBlow ? 600 : 200;

  const groupEls = dom.oppFieldCards.querySelectorAll('.field-group');
  const targetEl = groupEls[groupIdx];
  if (!targetEl) { done(); return; }

  if (isFinishBlow) {
    targetEl.classList.add('attacking');
    targetEl.style.animation = 'cpuAttackSlideDownSlow 1.5s ease-in forwards';
    // 場全体をズームイン
    const fieldRow = $('opp-field-row');
    fieldRow.classList.add('finish-zoom-scene');
  } else {
    targetEl.classList.add('attacking');
    targetEl.style.animation = 'cpuAttackSlideDown 0.5s ease-in forwards';
  }

  setTimeout(() => {
    player.life -= power;
    if (player.life < 0) player.life = 0;
    showDamage(power, 'bottom', isFinishBlow);
    dom.playerLife.textContent = player.life;
  }, dmgDelay);

  setTimeout(() => {
    if (isFinishBlow) {
      const fieldRow = $('opp-field-row');
      fieldRow.classList.remove('finish-zoom-scene');
    }
    if (group.basho) opponent.soul.push(group.basho);
    group.kaii.forEach(k => opponent.soul.push(k));
    if (group.season) {
      group.basho = null;
      group.kaii = [];
      group._summonedThisTurn = false;
    } else {
      opponent.field.splice(groupIdx, 1);
    }
    renderField('opponent');
    renderSoul('opponent');
    updateAllCounts();

    if (isFinishBlow) {
      showWinLoseResult(false);
    } else {
      done();
    }
  }, animDuration);
}

function finishCpuTurn() {
  // CPU手札超過：9枚以上なら最も低コストのカードを魂へ
  while (opponent.hand.length >= 9) {
    const sorted = [...opponent.hand].sort((a, b) => (a.cost || 0) - (b.cost || 0));
    const discard = sorted[0];
    const idx = opponent.hand.findIndex(c => c.uid === discard.uid);
    if (idx !== -1) {
      opponent.hand.splice(idx, 1);
      opponent.soul.push(discard);
    } else break;
  }
  renderOppHand(); renderSoul('opponent'); updateAllCounts();
  startPlayerTurn();
}

// CPU攻撃アニメーション（下方向）
// CSSに追加が必要

// ===================================================================
// 札種類ボタン：連動カードハイライト
// ===================================================================
function highlightCardsByType(typeName) {
  const typeMap = { '場所': '場所札', '怪異': '怪異札', '道具': '道具札', '季節': '季節札' };
  const target = typeMap[typeName];
  if (!target) return;

  // 場・手札・手札公開場のカードを検索して光らせる
  const allCards = [];
  // 場のカード
  dom.playerFieldCards.querySelectorAll('.battle-card').forEach(el => {
    const uid = el.dataset.uid;
    // 場グループ内のカードを全チェック
    player.field.forEach(g => {
      if (g.season && String(g.season.uid) === uid && g.season.type === target) allCards.push(el);
      if (g.basho && String(g.basho.uid) === uid && g.basho.type === target) allCards.push(el);
      g.kaii.forEach(k => { if (String(k.uid) === uid && k.type === target) allCards.push(el); });
    });
  });
  // 手札
  dom.playerHandCards.querySelectorAll('.battle-card').forEach(el => {
    const uid = el.dataset.uid;
    const card = player.hand.find(c => String(c.uid) === uid);
    if (card && card.type === target) allCards.push(el);
  });
  // 手札公開場
  dom.playerOpenCards.querySelectorAll('.battle-card').forEach(el => {
    const uid = el.dataset.uid;
    const card = player.open.find(c => String(c.uid) === uid);
    if (card && card.type === target) allCards.push(el);
  });

  allCards.forEach(el => {
    el.classList.add('type-highlight');
    setTimeout(() => { el.classList.remove('type-highlight'); }, 1000);
  });
}

// 自分側タイプボタンのクリックイベント
dom.pBashoBtn.addEventListener('click', () => highlightCardsByType('場所'));
dom.pKaiiBtn.addEventListener('click', () => highlightCardsByType('怪異'));
dom.pDouguBtn.addEventListener('click', () => highlightCardsByType('道具'));
dom.pSeasonBtn.addEventListener('click', () => highlightCardsByType('季節'));

// ===================================================================
// リセット・ターン終了
// ===================================================================
dom.btnReset.addEventListener('click', startGame);
dom.btnEndTurn.addEventListener('click', endTurn);
// 中央ターン終了ボタン
dom.endTurnCenter.addEventListener('click', (e) => { e.stopPropagation(); endTurn(); });
dom.endTurnCenter.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); endTurn(); });

// ===================================================================
// 空白タップ
// ===================================================================
['player-field', 'opp-field'].forEach(id => {
  $(id).addEventListener('click', (e) => {
    if (e.target === $(id) || e.target.classList.contains('zone-label') || e.target.classList.contains('card-row')) {
      hidePreview(); clearAllGlow(); hideAttackBtn();
      if (kaiiPopupActive) hideKaiiPopup();
    }
  });
  $(id).addEventListener('touchend', (e) => {
    if (e.target === $(id) || e.target.classList.contains('zone-label') || e.target.classList.contains('card-row')) {
      if (kaiiPopupActive) { e.preventDefault(); hideKaiiPopup(); }
    }
  });
});

// ===================================================================
// イベント
// ===================================================================
dom.startBtn.addEventListener('click', startGame);
dom.retryBtn.addEventListener('click', startGame);
dom.playerDeck.addEventListener('click', () => { if (!turnLocked && !gameEnded && player.deck.length > 0) drawCards('player', 1); });
// 相手の手札クリック
$('opp-hand-zone').addEventListener('click', (e) => {
  // カードをクリックした場合のみ（手札公開場には影響しない）
  if (e.target.closest('.battle-card') || e.target.closest('.card-row')?.id === 'opp-hand-cards') {
    showPopup('opp-hand-msg');
  }
});
// 相手の山札クリック
dom.oppDeck.addEventListener('click', () => { showPopup('opp-deck-msg'); });
window.addEventListener('resize', () => {
  [dom.playerHandCards, dom.oppHandCards, dom.playerFieldCards, dom.oppFieldCards, dom.playerSoulCards, dom.oppSoulCards].forEach(updateOverflow);
});
