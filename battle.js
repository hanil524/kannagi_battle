// ===================================================================
// カードデータ（妖怪デッキ：墓暴き 26種）
// ===================================================================
const CARD_DB = [
  { number: 1901, name: '先祖代々之墓', cost: 0, power: 1, type: '場所札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (7).jpg', summonEffect: 'exile_graveyard_damage3' },
  { number: 1902, name: '妖蟲の墓', cost: 0, power: 1, type: '場所札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (9).jpg', attackEffect: 'exile_hand_graveyard_damage4' },
  { number: 1903, name: 'まよい火', cost: 3, power: 3, type: '場所札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (10).jpg', attackEffect: 'exile_hand_graveyard_damage3_field3' },
  { number: 1904, name: '赤えい', cost: 5, power: 5, type: '場所札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (11).jpg', summonEffect: 'retrieve_exile_graveyard_damage4' },
  { number: 1905, name: 'のづち', cost: 7, power: 7, type: '場所札', season: '夏', tribe: '妖怪', qty: 2, img: 'images/card_12_p (12).jpg', keyword: '速攻' },
  { number: 1906, name: 'ねこ娘', cost: 0, power: 0, type: '怪異札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (4).jpg', kaiiEffect: 'exile_hand_graveyard_damage3' },
  { number: 1907, name: 'かに坊主', cost: 5, power: 0, type: '怪異札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (13).jpg', kaiiEffect: 'retrieve_exile_graveyard_damage7' },
  { number: 1908, name: '蟲憑', cost: 8, power: 0, type: '怪異札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (14).jpg', kaiiEffect: 'exile_all_hand_soul_graveyard_damage' },
  { number: 1909, name: '私の墓', cost: 1, power: 0, type: '道具札', season: '夏', tribe: '墓地', qty: 2, img: 'images/card_12_p (22).jpg', effect: 'retrieve_exile_graveyard_damage4' },
  { number: 1910, name: '沈めてあげる', cost: 9, power: 0, type: '道具札', season: '夏', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (20).jpg', effect: 'damage_8' },
  { number: 1911, name: '霊道', cost: 0, power: 1, type: '場所札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (8).jpg', attackEffect: 'retrieve_graveyard_exile' },
  { number: 1912, name: '木霊の森', cost: 1, power: 1, type: '場所札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (27).jpg', summonEffect: 'exile_hand_graveyard_draw1' },
  { number: 1913, name: '砂の竹林', cost: 4, power: 3, type: '場所札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (25).jpg', summonEffect: 'retrieve_exile_graveyard_exile2_opponent_hand' },
  { number: 1914, name: 'べとべと', cost: 2, power: 2, type: '場所札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (15).jpg', attackEffect: 'return_opponent_exile_to_deck' },
  { number: 1915, name: 'うぶめ', cost: 8, power: 1, type: '場所札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (23).jpg', summonEffect: 'exile_graveyard_count_damage' },
  { number: 1916, name: 'あずき洗い', cost: 0, power: 0, type: '怪異札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (2).jpg', kaiiEffect: 'search_deck_graveyard_shuffle_exile_hand' },
  { number: 1917, name: 'さとり', cost: 0, power: 0, type: '怪異札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (3).jpg', kaiiEffect: 'retrieve_exile_graveyard_draw2' },
  { number: 1918, name: '山姥', cost: 4, power: 0, type: '怪異札', season: '秋', tribe: '妖怪 墓地', qty: 2, img: 'images/card_12_p (17).jpg', kaiiEffect: 'exile_hand_graveyard_opponent_exile2' },
  { number: 1919, name: '唐笠おばけ', cost: 0, power: 0, type: '道具札', season: '秋', tribe: '墓地', qty: 2, img: 'images/card_12_p (19).jpg', effect: 'retrieve_exile_graveyard_draw1' },
  { number: 1920, name: 'こなきじじい', cost: 8, power: 0, type: '道具札', season: '秋', tribe: '墓地', qty: 2, img: 'images/card_12_p (18).jpg', effect: 'draw_3' },
  { number: 1922, name: '沼御前', cost: 0, power: 0, type: '怪異札', season: '春', tribe: '妖怪', qty: 1, img: 'images/card_12_p (26).jpg', keyword: '鮮明 不屈', effect: 'global_youkai_plus2' },
  { number: 1924, name: 'いったん木綿', cost: 0, power: 0, type: '季節札', season: '冬', tribe: '妖怪 墓地', qty: 1, effect: 'youkai_power_plus2', img: 'images/card_12_p (24).jpg' },
];

const DECK_BACK_IMG = 'images/deck.jpg';
const TYPE_ORDER = { '場所札': 0, '怪異札': 1, '道具札': 2, '季節札': 3 };

// ===================================================================
// 属性チェック（tribe は半角スペース区切りで複数属性を持てる）
// ===================================================================
function hasTribe(card, name) {
  if (!card || !card.tribe) return false;
  return card.tribe.split(' ').includes(name);
}

function hasKeyword(card, kw) {
  if (!card || !card.keyword) return false;
  return card.keyword.split(' ').includes(kw);
}

// 除外処理（不屈キーワード対応）
// 不屈を持つカードは除外されず手札公開場に戻る
function exileCard(who, card) {
  const st = (who === 'player') ? player : opponent;
  if (hasKeyword(card, '不屈')) {
    st.open.push(card);
    if (who === 'player') {
      renderPlayerOpen();
    }
    updateAllCounts();
    const openEl = (who === 'player') ? dom.playerOpenCards : dom.oppOpenCards;
    requestAnimationFrame(() => {
      showFloatingText(openEl, '不屈', 'draw');
    });
    return false; // 除外されなかった
  }
  st.exile.push(card);
  return true; // 除外された
}

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
  // qtyフィールドで枚数管理（未設定は1枚）
  CARD_DB.forEach(c => {
    const count = c.qty || 1;
    for (let i = 0; i < count; i++) {
      pool.push({ ...c });
    }
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
  handOverflowConfirm: $('hand-overflow-confirm'),
  handOverflowRemaining: $('hand-overflow-remaining'),
  cardSelectOverlay: $('card-select-overlay'),
  cardSelectTitle: $('card-select-title'),
  cardSelectDesc: $('card-select-desc'),
  cardSelectConfirm: $('card-select-confirm'),
  cardSelectSkip: $('card-select-skip'),
  cardSelectPreviewImg: $('card-select-preview-img'),
  cardSelectPlaceholder: $('card-select-placeholder'),
  finishZoomOverlay: $('finish-zoom-overlay'),
  soulAbsorbAsk: $('soul-absorb-ask'),
  soulAbsorbAskTitle: $('soul-absorb-ask-title'),
  soulAbsorbYes: $('soul-absorb-yes'),
  soulAbsorbNo: $('soul-absorb-no'),
  soulAbsorbSelect: $('soul-absorb-select'),
  soulAbsorbSelectDesc: $('soul-absorb-select-desc'),
  soulAbsorbConfirm: $('soul-absorb-confirm'),
  finishZoomImg: $('finish-zoom-img'),
  btnReset: $('btn-reset'),
  btnEndTurn: $('btn-end-turn'),
  pBashoBtn: $('p-basho-btn'), pKaiiBtn: $('p-kaii-btn'),
  pDouguBtn: $('p-dougu-btn'), pSeasonBtn: $('p-season-btn'),
  oBashoBtn: $('o-basho-btn'), oKaiiBtn: $('o-kaii-btn'),
  oDouguBtn: $('o-dougu-btn'), oSeasonBtn: $('o-season-btn'),
  playerExile: $('player-exile'),
  oppExile: $('opp-exile'),
  exileModal: $('exile-modal'),
  exileModalTitle: $('exile-modal-title'),
  exileModalCards: $('exile-modal-cards'),
  exileModalEmpty: $('exile-modal-empty'),
  exileModalDesc: $('exile-modal-desc'),
  exileModalButtons: $('exile-modal-buttons'),
  exileModalConfirm: $('exile-modal-confirm'),
  exileModalSkip: $('exile-modal-skip'),
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
  dom.playerFieldCards.querySelectorAll('.basho-slot.playable').forEach(el => el.classList.remove('playable'));
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
  // 場の場所札：攻撃可能なら緑オーラ
  dom.playerFieldCards.querySelectorAll('.basho-slot').forEach(el => {
    if (attackUsedThisTurn) {
      el.classList.remove('playable');
      return;
    }
    // 召喚酔いでなければ攻撃可能
    if (!el.classList.contains('summon-sick')) {
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
    if (hasTribe(group.basho, '妖怪')) {
      power += 2;
    }
  }
  // 沼御前のグローバルバフ：場全体の怪異札をチェック
  // global_youkai_plus2を持つ怪異札が場のどこかに装備されていれば、妖怪属性の場所札全てに+2
  if (hasTribe(group.basho, '妖怪')) {
    const st = (who === 'player') ? player : (who === 'opponent') ? opponent : null;
    if (st) {
      st.field.forEach(g => {
        g.kaii.forEach(k => {
          if (k.effect === 'global_youkai_plus2') power += 2;
        });
      });
    }
  }
  // 場ダメージによる一時的なパワー低下
  if (group._fieldDamage) {
    power -= group._fieldDamage;
  }
  return Math.max(0, power);
}

// 場ダメージ適用：対象の場の場所札全てにダメージ
// who: ダメージを受ける側（'player' or 'opponent'）
// amount: ダメージ量
// 返り値: 破壊されたグループ数
function applyFieldDamage(who, amount) {
  const st = (who === 'player') ? player : opponent;
  let destroyed = 0;
  // 後ろから処理（spliceで削除しても前のインデックスに影響しない）
  for (let i = st.field.length - 1; i >= 0; i--) {
    const g = st.field[i];
    if (!g.basho) continue;
    const currentPower = getEffectivePower(g, who);
    if (currentPower <= amount) {
      // 破壊：場所札と怪異札を魂へ
      st.soul.push(g.basho);
      g.kaii.forEach(k => st.soul.push(k));
      if (g.season) {
        // 季節スロットは残す
        g.basho = null;
        g.kaii = [];
        g._summonedThisTurn = false;
        g._fieldDamage = 0;
      } else {
        st.field.splice(i, 1);
      }
      destroyed++;
    } else {
      // ダメージを受けるが破壊されない
      g._fieldDamage = (g._fieldDamage || 0) + amount;
    }
  }
  if (destroyed > 0 || amount > 0) {
    renderField(who);
    renderSoul(who);
    updateAllCounts();
  }
  return destroyed;
}

// ターン終了時の場ダメージ回復
function resetFieldDamage(who) {
  const st = (who === 'player') ? player : opponent;
  let changed = false;
  st.field.forEach(g => {
    if (g._fieldDamage && g._fieldDamage > 0) {
      g._fieldDamage = 0;
      changed = true;
    }
  });
  if (changed) {
    renderField(who);
  }
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
    const basePower = card.power || 0;
    const badge = document.createElement('div');
    badge.className = 'power-badge';
    const span = document.createElement('span');
    span.textContent = effectivePower;
    // パワーがブーストされていれば緑、ダメージで減っていれば赤
    if (group && group._fieldDamage > 0) {
      span.style.color = '#ff4444';
    } else if (effectivePower > basePower) {
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
function resetSideFlags(who) {
  usedFlags[who] = { basho: false, kaii: false, dougu: false, season: false };
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
// 除外ゾーン：最後に除外されたカードを表示
// ===================================================================
function updateExileDisplay(who) {
  const st = (who === 'player') ? player : opponent;
  const zone = (who === 'player') ? dom.playerExile : dom.oppExile;
  // 既存の除外カード画像を削除
  const oldImg = zone.querySelector('.exile-top-card');
  if (oldImg) oldImg.remove();
  // 除外カードがあれば最後のカードを表示
  if (st.exile.length > 0) {
    const lastCard = st.exile[st.exile.length - 1];
    const img = document.createElement('img');
    img.src = lastCard.img;
    img.className = 'exile-top-card';
    img.draggable = false;
    zone.appendChild(img);
  }
}

// 除外カード一覧モーダル
let exileModalActive = false;
function showExileModal(who) {
  const st = (who === 'player') ? player : opponent;
  const label = (who === 'player') ? '自分の' : '相手の';
  dom.exileModalTitle.textContent = label + '除外カード一覧';
  dom.exileModalCards.innerHTML = '';

  if (st.exile.length === 0) {
    dom.exileModalEmpty.style.display = '';
  } else {
    dom.exileModalEmpty.style.display = 'none';
    st.exile.forEach(card => {
      const el = createCardEl(card, false);
      setupCardInteraction(el, card, who);
      attachModalPreview(el, card);
      dom.exileModalCards.appendChild(el);
    });
  }

  dom.exileModal.style.display = 'flex';
  dom.exileModal.classList.add('active');
  exileModalActive = true;
}
function hideExileModal() {
  exileSelectMode = false;
  dom.exileModal.style.display = 'none';
  dom.exileModal.classList.remove('active');
  exileModalActive = false;
  dom.exileModalButtons.style.display = 'none';
  dom.exileModalDesc.textContent = '';
}
// モーダル外クリックで閉じる（選択モード中は閉じない）
let exileSelectMode = false;
dom.exileModal.addEventListener('click', (e) => {
  if (e.target === dom.exileModal && !exileSelectMode) hideExileModal();
});
dom.exileModal.addEventListener('touchend', (e) => {
  if (e.target === dom.exileModal && !exileSelectMode) { e.preventDefault(); hideExileModal(); }
});

// 除外ゾーンクリックでモーダル表示
dom.playerExile.addEventListener('click', (e) => {
  e.stopPropagation();
  if (exileModalActive) hideExileModal(); else showExileModal('player');
});
dom.playerExile.addEventListener('touchend', (e) => {
  e.stopPropagation(); e.preventDefault();
  if (exileModalActive) hideExileModal(); else showExileModal('player');
});
dom.oppExile.addEventListener('click', (e) => {
  e.stopPropagation();
  if (exileModalActive) hideExileModal(); else showExileModal('opponent');
});
dom.oppExile.addEventListener('touchend', (e) => {
  e.stopPropagation(); e.preventDefault();
  if (exileModalActive) hideExileModal(); else showExileModal('opponent');
});

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
        // 鮮明キーワード持ち、または手札公開場から装備は表向き
        const k = group.kaii[i];
        const isFaceDown = k.keyword !== '鮮明' && !k._fromOpen;
        const kEl = createCardEl(k, isFaceDown);
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

// モーダル/オーバーレイ内カードプレビュー（PC: hover, スマホ: 長押し）
function attachModalPreview(el, card) {
  const mp = $('modal-preview');
  const mpImg = $('modal-preview-img');
  let longPressTimer = null;

  // PC: hover
  el.addEventListener('mouseenter', () => {
    mpImg.src = card.img;
    mp.classList.add('active');
    mp.style.display = 'flex';
  });
  el.addEventListener('mouseleave', () => {
    mp.classList.remove('active');
    mp.style.display = 'none';
  });

  // スマホ: 長押し（500ms）
  el.addEventListener('touchstart', (e) => {
    longPressTimer = setTimeout(() => {
      longPressTimer = null;
      mpImg.src = card.img;
      mp.classList.add('active');
      mp.style.display = 'flex';
    }, 500);
  }, { passive: true });
  el.addEventListener('touchend', () => {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
    mp.classList.remove('active');
    mp.style.display = 'none';
  });
  el.addEventListener('touchmove', () => {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
  }, { passive: true });
}
// モーダルプレビューをタップで閉じる
document.addEventListener('DOMContentLoaded', () => {
  const mp = $('modal-preview');
  if (mp) {
    mp.addEventListener('click', () => { mp.classList.remove('active'); mp.style.display = 'none'; });
    mp.addEventListener('touchend', (e) => { e.preventDefault(); mp.classList.remove('active'); mp.style.display = 'none'; });
  }
});

// フェイズ中判定（プレビュー抑制に使用）
function isAnyPhaseActive() {
  return cardSelectPhase || handOverflowPhase || soulAbsorbPhase || turnLocked;
}

function setupCardInteraction(el, card, owner) {
  el.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    el.classList.add('glow');
  }, { passive: true });
  el.addEventListener('touchend', (e) => {
    e.stopPropagation();
    if (e.cancelable) e.preventDefault(); // FIX: スクロール中はcancelable=falseなためガード
    // 魂吸収フェイズ中：魂カードをタップで選択/解除
    if (soulAbsorbPhase && owner === 'player') {
      if (handleSoulAbsorbTap(card, el)) return;
    }
    // 手札超過フェイズ中：タップで選択/解除
    if (handOverflowPhase && owner === 'player') {
      if (handleOverflowTap(card, el)) return;
    }
    // カード選択フェイズ中：手札・公開場のカードをタップで選択
    if (cardSelectPhase && owner === 'player') {
      if (handleCardSelectTap(card, el)) return;
    }
    // フェイズ中はプレビュー無効
    if (isAnyPhaseActive()) { el.classList.remove('glow'); return; }
    if (suppressPreview) return;
    if (currentPreviewCard && currentPreviewCard.uid === card.uid) {
      hidePreview(); el.classList.remove('glow');
    } else {
      clearAllGlow(); el.classList.add('glow');
      showPreview(card, owner);
    }
  });
  el.addEventListener('mouseenter', () => {
    // フェイズ中はプレビュー無効
    if (isAnyPhaseActive()) return;
    el.classList.add('glow'); showPreview(card, owner);
  });
  el.addEventListener('mouseleave', () => { el.classList.remove('glow'); if (!insideKaiiPopup) hidePreview(); });
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    // 魂吸収フェイズ中：魂カードをクリックで選択/解除
    if (soulAbsorbPhase && owner === 'player') {
      if (handleSoulAbsorbTap(card, el)) return;
    }
    // 手札超過フェイズ中：クリックで選択/解除
    if (handOverflowPhase && owner === 'player') {
      if (handleOverflowTap(card, el)) return;
    }
    // カード選択フェイズ中：手札・公開場のカードをクリックで選択
    if (cardSelectPhase && owner === 'player') {
      if (handleCardSelectTap(card, el)) return;
    }
    // フェイズ中はプレビュー無効
    if (isAnyPhaseActive()) return;
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
      if (e.cancelable) e.preventDefault(); // FIX
      return;
    }
    if (dom.preview.style.display === 'flex') {
      hidePreview();
      clearAllGlow();
      if (e.cancelable) e.preventDefault(); // FIX
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

// 効果不発演出（コスト不足時）
function showEffectFailed(card) {
  return new Promise(resolve => {
    dom.effectCardImg.src = card.img;
    dom.effectLabel.textContent = '効果不発';
    dom.effectLabel.classList.add('effect-failed');
    dom.effectOverlay.classList.remove('active');
    dom.effectCardImg.style.animation = 'none';
    void dom.effectOverlay.offsetHeight;
    dom.effectCardImg.style.animation = '';
    dom.effectOverlay.style.display = 'flex';
    dom.effectOverlay.classList.add('active');
    // キラキラパーティクルなし
    let resolved = false;
    const finish = () => {
      if (resolved) return;
      resolved = true;
      dom.effectOverlay.style.display = 'none';
      dom.effectOverlay.classList.remove('active');
      dom.effectLabel.classList.remove('effect-failed');
      resolve();
    };
    const skipHandler = (e) => {
      e.stopPropagation();
      dom.effectOverlay.removeEventListener('click', skipHandler);
      dom.effectOverlay.removeEventListener('touchend', skipHandler);
      finish();
    };
    dom.effectOverlay.addEventListener('click', skipHandler);
    dom.effectOverlay.addEventListener('touchend', skipHandler);
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
  const hasAttackEffect = group.basho && group.basho.attackEffect;

  // 怪異札も攻撃時効果もない→即座にアタック
  if (!hasKaii && !hasAttackEffect) {
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
      // コスト以上の魂がないと効果不発
      if (kCard.kaiiEffect) {
        const kaiiCost = kCard.cost || 0;
        if (player.soul.length < kaiiCost) {
          await showEffectFailed(kCard);
          continue;
        }
        await showEffectActivation(kCard, '効果発動');
        await handleKaiiEffect(kCard, 'player');
        if (gameEnded) return;
      } else {
        await showEffectActivation(kCard, '効果発動');
      }
    }
  }

  // 2. 攻撃時効果がある場所札の効果
  if (hasAttackEffect) {
    await handleAttackEffect(group.basho, 'player');
    if (gameEnded) return;
  }

  // 3. 通常のアタック演出
  executeAttackAnimation(targetEl, atkIdx, power, group);
}

// ===================================================================
// 攻撃時効果処理
// ===================================================================
async function handleAttackEffect(basho, who) {
  if (!basho || !basho.attackEffect) return;

  if (basho.attackEffect === 'retrieve_graveyard_exile') {
    const st = (who === 'player') ? player : opponent;

    if (who === 'player') {
      await showEffectActivation(basho, '攻撃時効果');
      // 除外から墓地属性カードを選択して手札公開場へ
      const hasGraveyardInExile = st.exile.some(c => hasTribe(c, '墓地'));
      if (!hasGraveyardInExile) return; // 対象なし

      const selected = await startExileSelectPhase({
        who: 'player',
        title: '攻撃時効果：霊道',
        desc: '除外から「墓地」属性のカードを1枚選び、手札公開場に置く。<br>成功した場合、1枚ドローする。',
        filter: (c) => hasTribe(c, '墓地'),
      });

      if (selected) {
        // 除外から手札公開場へ移動
        const idx = st.exile.findIndex(c => c.uid === selected.uid);
        if (idx !== -1) {
          st.exile.splice(idx, 1);
          st.open.push(selected);
          renderPlayerOpen();
          updateExileDisplay('player');
          updateAllCounts();
          // 1枚ドロー
          drawCards('player', 1);
        }
      }
    } else {
      // CPU版
      await handleCpuAttackEffect(basho, st);
    }
  }

  if (basho.attackEffect === 'exile_hand_graveyard_damage4') {
    const st = (who === 'player') ? player : opponent;
    const dmg = 4;

    if (who === 'player') {
      await showEffectActivation(basho, '攻撃時効果');
      const hasGraveyard = [...st.hand, ...st.open].some(c => hasTribe(c, '墓地'));
      if (!hasGraveyard) return;

      await new Promise((resolve) => {
        startCardSelectPhase({
          title: '攻撃時効果：妖蟲の墓',
          desc: '手札から「墓地」属性のカードを1枚選択して除外しても良い。<br>除外した場合、相手に' + dmg + '点のダメージ。',
          filter: (c) => hasTribe(c, '墓地'),
          onConfirm: (selectedCard) => {
            let idx = st.hand.findIndex(c => c.uid === selectedCard.uid);
            if (idx !== -1) {
              st.hand.splice(idx, 1);
            } else {
              idx = st.open.findIndex(c => c.uid === selectedCard.uid);
              if (idx !== -1) st.open.splice(idx, 1);
            }
            exileCard(who, selectedCard);
            renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
            updateExileDisplay('player');
            requestAnimationFrame(() => {
              showFloatingText(dom.playerExile, '除外', 'exile');
            });
            applyDamageWithSoulAbsorb(dmg, 'top', basho).then(() => {
              checkWinLose();
              resolve();
            });
          },
          onSkip: () => { resolve(); }
        });
      });
    } else {
      await handleCpuAttackEffect(basho, st);
    }
  }

  if (basho.attackEffect === 'return_opponent_exile_to_deck') {
    if (who === 'player') {
      // プレイヤーが攻撃：相手の除外カードをランダム順で相手デッキの一番下へ
      await showEffectActivation(basho, '攻撃時効果');
      if (opponent.exile.length > 0) {
        const shuffled = shuffle([...opponent.exile]);
        opponent.exile = [];
        opponent.deck.push(...shuffled);
        updateExileDisplay('opponent');
        updateDeckImg(dom.oppDeck, 'opponent');
        updateAllCounts();
      }
    } else {
      // CPUが攻撃：プレイヤーの除外カードをプレイヤーが好きな順番でデッキの一番下へ
      await showEffectActivation(basho, '攻撃時効果');
      if (player.exile.length > 0) {
        const ordered = await startExileOrderPhase({
          who: 'player',
          title: '攻撃時効果：べとべと',
          desc: '除外カードをデッキの一番下に戻す順番を選んでください。<br>タップした順にデッキの底へ入ります。',
        });
        // ordered = 選択順の配列
        player.exile = [];
        player.deck.push(...ordered);
        updateExileDisplay('player');
        updateDeckImg(dom.playerDeck, 'player');
        updateAllCounts();
      }
    }
  }

  if (basho.attackEffect === 'exile_hand_graveyard_damage3_field3') {
    const st = (who === 'player') ? player : opponent;
    const oppWho = (who === 'player') ? 'opponent' : 'player';

    if (who === 'player') {
      await showEffectActivation(basho, '攻撃時効果');
      const hasGraveyard = [...st.hand, ...st.open].some(c => hasTribe(c, '墓地'));
      if (!hasGraveyard) return;

      await new Promise((resolve) => {
        startCardSelectPhase({
          title: '攻撃時効果：まよい火',
          desc: '手札から「墓地」属性のカードを1枚除外しても良い。<br>除外した場合、相手に3点ダメージ＋相手の場所札全てに3ダメージ。',
          filter: (c) => hasTribe(c, '墓地'),
          onConfirm: (selectedCard) => {
            let idx = st.hand.findIndex(c => c.uid === selectedCard.uid);
            if (idx !== -1) {
              st.hand.splice(idx, 1);
            } else {
              idx = st.open.findIndex(c => c.uid === selectedCard.uid);
              if (idx !== -1) st.open.splice(idx, 1);
            }
            exileCard(who, selectedCard);
            renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
            updateExileDisplay('player');
            requestAnimationFrame(() => {
              showFloatingText(dom.playerExile, '除外', 'exile');
            });
            // 相手に3点ライフダメージ
            applyDamageWithSoulAbsorb(3, 'top', basho).then(() => {
              checkWinLose();
              if (!gameEnded) {
                // 相手の場の場所札全てに3ダメージ
                applyFieldDamage(oppWho, 3);
              }
              resolve();
            });
          },
          onSkip: () => { resolve(); }
        });
      });
    } else {
      await handleCpuAttackEffect(basho, st);
    }
  }
}

// CPU攻撃時効果
async function handleCpuAttackEffect(basho, st) {
  if (basho.attackEffect === 'retrieve_graveyard_exile') {
    await showEffectActivation(basho, '攻撃時効果');
    // 除外から墓地属性カードを探す（最高コストを選択）
    const graveyardCards = st.exile.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      graveyardCards.sort((a, b) => (b.cost || 0) - (a.cost || 0));
      const target = graveyardCards[0];
      const idx = st.exile.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        st.exile.splice(idx, 1);
        st.open.push(target);
        updateExileDisplay('opponent');
        updateAllCounts();
        drawCards('opponent', 1);
      }
    }
  }

  if (basho.attackEffect === 'exile_hand_graveyard_damage4') {
    await showEffectActivation(basho, '攻撃時効果');
    const graveyardCards = st.hand.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      graveyardCards.sort((a, b) => (a.cost || 0) - (b.cost || 0));
      const target = graveyardCards[0];
      const idx = st.hand.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        st.hand.splice(idx, 1);
        exileCard('opponent', target); // FIX: 'who'は未定義 → 'opponent'に固定
        renderOppHand(); updateAllCounts();
        updateExileDisplay('opponent');
        requestAnimationFrame(() => {
          showFloatingText(dom.oppExile, '除外', 'exile');
        });
        await applyDamageWithSoulAbsorb(4, 'bottom', basho);
        checkWinLose();
      }
    }
  }

  if (basho.attackEffect === 'exile_hand_graveyard_damage3_field3') {
    await showEffectActivation(basho, '攻撃時効果');
    // CPUの手札から墓地属性カードを探す（最低コスト優先）
    const graveyardCards = st.hand.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      graveyardCards.sort((a, b) => (a.cost || 0) - (b.cost || 0));
      const target = graveyardCards[0];
      const idx = st.hand.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        st.hand.splice(idx, 1);
        exileCard('opponent', target); // FIX: 'who'は未定義 → 'opponent'に固定
        renderOppHand(); updateAllCounts();
        updateExileDisplay('opponent');
        requestAnimationFrame(() => {
          showFloatingText(dom.oppExile, '除外', 'exile');
        });
        // プレイヤーに3点ライフダメージ
        await applyDamageWithSoulAbsorb(3, 'bottom', basho);
        checkWinLose();
        if (!gameEnded) {
          // プレイヤーの場の場所札全てに3ダメージ
          applyFieldDamage('player', 3);
        }
      }
    }
  }
}

// ===================================================================
// 怪異札効果処理
// ===================================================================
async function handleKaiiEffect(kCard, who) {
  if (!kCard || !kCard.kaiiEffect) return;

  if (kCard.kaiiEffect === 'exile_hand_graveyard_damage3') {
    const st = (who === 'player') ? player : opponent;
    const dmg = 3;

    if (who === 'player') {
      // 手札＆公開場に墓地属性カードがあるかチェック
      const hasGraveyard = [...st.hand, ...st.open].some(c => hasTribe(c, '墓地'));
      if (!hasGraveyard) return;

      await new Promise((resolve) => {
        startCardSelectPhase({
          title: 'カード選択',
          desc: '手札から「墓地」属性のカードを1枚選択して除外しても良い。<br>除外した場合、相手に' + dmg + '点のダメージ。',
          filter: (c) => hasTribe(c, '墓地'),
          onConfirm: (selectedCard) => {
            let idx = st.hand.findIndex(c => c.uid === selectedCard.uid);
            if (idx !== -1) {
              st.hand.splice(idx, 1);
            } else {
              idx = st.open.findIndex(c => c.uid === selectedCard.uid);
              if (idx !== -1) st.open.splice(idx, 1);
            }
            exileCard(who, selectedCard);
            renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
            updateExileDisplay('player');
            requestAnimationFrame(() => {
              showFloatingText(dom.playerExile, '除外', 'exile');
            });
            applyDamageWithSoulAbsorb(dmg, 'top', kCard).then(() => {
              checkWinLose();
              resolve();
            });
          },
          onSkip: () => { resolve(); }
        });
      });
    } else {
      await handleCpuKaiiEffect(kCard, st, dmg);
    }
  }

  if (kCard.kaiiEffect === 'retrieve_exile_graveyard_draw2') {
    const st = (who === 'player') ? player : opponent;

    if (who === 'player') {
      const hasGraveyardInExile = st.exile.some(c => hasTribe(c, '墓地'));
      if (!hasGraveyardInExile) return;

      const selected = await startExileSelectPhase({
        who: 'player',
        title: '効果：さとり',
        desc: '除外から「墓地」属性のカードを1枚選び、手札公開場に置いても良い。<br>置いた場合、山札から2枚ドローする。',
        filter: (c) => hasTribe(c, '墓地'),
      });

      if (selected) {
        const idx = st.exile.findIndex(c => c.uid === selected.uid);
        if (idx !== -1) {
          st.exile.splice(idx, 1);
          st.open.push(selected);
          renderPlayerOpen();
          updateExileDisplay('player');
          updateAllCounts();
          drawCards('player', 2);
        }
      }
    } else {
      // CPU版
      const graveyardCards = st.exile.filter(c => hasTribe(c, '墓地'));
      if (graveyardCards.length > 0) {
        graveyardCards.sort((a, b) => (b.cost || 0) - (a.cost || 0));
        const target = graveyardCards[0];
        const idx = st.exile.findIndex(c => c.uid === target.uid);
        if (idx !== -1) {
          st.exile.splice(idx, 1);
          st.open.push(target);
          updateExileDisplay('opponent');
          updateAllCounts();
          drawCards('opponent', 2);
        }
      }
    }
  }

  if (kCard.kaiiEffect === 'retrieve_exile_graveyard_damage7') {
    const st = (who === 'player') ? player : opponent;
    const dmg = 7;

    if (who === 'player') {
      const hasGraveyardInExile = st.exile.some(c => hasTribe(c, '墓地'));
      if (!hasGraveyardInExile) return;

      const selected = await startExileSelectPhase({
        who: 'player',
        title: '効果：かに坊主',
        desc: '除外から「墓地」属性のカードを1枚選び、手札公開場に置いても良い。<br>置いた場合、相手に' + dmg + '点のダメージ。',
        filter: (c) => hasTribe(c, '墓地'),
      });

      if (selected) {
        const idx = st.exile.findIndex(c => c.uid === selected.uid);
        if (idx !== -1) {
          st.exile.splice(idx, 1);
          st.open.push(selected);
          renderPlayerOpen();
          updateExileDisplay('player');
          updateAllCounts();
          await applyDamageWithSoulAbsorb(dmg, 'top', kCard);
          checkWinLose();
        }
      }
    } else {
      // CPU版
      const graveyardCards = st.exile.filter(c => hasTribe(c, '墓地'));
      if (graveyardCards.length > 0) {
        graveyardCards.sort((a, b) => (b.cost || 0) - (a.cost || 0));
        const target = graveyardCards[0];
        const idx = st.exile.findIndex(c => c.uid === target.uid);
        if (idx !== -1) {
          st.exile.splice(idx, 1);
          st.open.push(target);
          updateExileDisplay('opponent');
          updateAllCounts();
          await applyDamageWithSoulAbsorb(dmg, 'bottom', kCard);
          checkWinLose();
        }
      }
    }
  }

  if (kCard.kaiiEffect === 'exile_all_hand_soul_graveyard_damage') {
    const st = (who === 'player') ? player : opponent;
    const oppSt = (who === 'player') ? opponent : player;
    const oppWho = (who === 'player') ? 'opponent' : 'player';

    // 手札＋公開場＋魂を全て除外
    const allCards = [...st.hand, ...st.open, ...st.soul];
    let graveyardCount = 0;
    st.hand = [];
    st.open = [];
    st.soul = [];
    allCards.forEach(c => {
      exileCard(who, c);
      if (hasTribe(c, '墓地')) graveyardCount++;
    });

    if (who === 'player') {
      renderPlayerHand(); renderPlayerOpen(); renderSoul('player');
      updateExileDisplay('player');
    } else {
      renderOppHand(); renderSoul('opponent');
      updateExileDisplay('opponent');
    }
    updateAllCounts();

    if (allCards.length > 0) {
      const exileEl = (who === 'player') ? dom.playerExile : dom.oppExile;
      requestAnimationFrame(() => {
        showFloatingText(exileEl, '全除外', 'exile');
      });
    }

    const dmg = graveyardCount * 2;
    if (dmg > 0) {
      if (who === 'player') {
        await applyDamageWithSoulAbsorb(dmg, 'top', kCard);
      } else {
        await applyDamageWithSoulAbsorb(dmg, 'bottom', kCard);
      }
      checkWinLose();
    }
  }

  // あずき洗い：山札から墓地属性カードを1枚探して公開場に置いても良い。
  // その後、山札をシャッフルし、手札を1枚除外する。
  if (kCard.kaiiEffect === 'search_deck_graveyard_shuffle_exile_hand') {
    const st = (who === 'player') ? player : opponent;

    if (who === 'player') {
      // デッキから墓地属性カードを検索
      const deckGraveyard = st.deck.filter(c => hasTribe(c, '墓地'));
      if (deckGraveyard.length > 0) {
        // デッキ検索モーダルを表示
        const selected = await startDeckSearchPhase({
          who: 'player',
          title: '効果：あずき洗い',
          desc: '山札から「墓地」属性の札を1枚選び、手札公開場に置いても良い。',
          filter: (c) => hasTribe(c, '墓地'),
        });
        if (selected) {
          const idx = st.deck.findIndex(c => c.uid === selected.uid);
          if (idx !== -1) {
            st.deck.splice(idx, 1);
            st.open.push(selected);
            renderPlayerOpen();
            updateDeckImg(dom.playerDeck, 'player');
            updateAllCounts();
          }
        }
      }
      // 山札をシャッフル
      st.deck = shuffle([...st.deck]);
      updateDeckImg(dom.playerDeck, 'player');
      requestAnimationFrame(() => {
        showFloatingText(dom.playerDeck, 'シャッフル', 'draw');
      });

      // 手札を1枚除外（強制）
      const hasHandCards = [...st.hand, ...st.open].length > 0;
      if (hasHandCards) {
        await new Promise((resolve) => {
          startCardSelectPhase({
            title: '効果：あずき洗い',
            desc: '手札から1枚選んで除外する。（強制）',
            filter: () => true, // 全カード対象
            onConfirm: (selectedCard) => {
              let idx = st.hand.findIndex(c => c.uid === selectedCard.uid);
              if (idx !== -1) {
                st.hand.splice(idx, 1);
              } else {
                idx = st.open.findIndex(c => c.uid === selectedCard.uid);
                if (idx !== -1) st.open.splice(idx, 1);
              }
              exileCard(who, selectedCard);
              renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
              updateExileDisplay('player');
              requestAnimationFrame(() => {
                showFloatingText(dom.playerExile, '除外', 'exile');
              });
              resolve();
            },
            onSkip: () => { resolve(); } // 手札0の場合のフォールバック
          });
          // スキップボタンを非表示にする（強制除外）
          $('card-select-skip').style.display = 'none';
        });
        $('card-select-skip').style.display = '';
      }
    } else {
      // CPU版
      // デッキから墓地属性カードを探す（最高コスト優先）
      const deckGraveyard = st.deck.filter(c => hasTribe(c, '墓地'));
      if (deckGraveyard.length > 0) {
        deckGraveyard.sort((a, b) => (b.cost || 0) - (a.cost || 0));
        const target = deckGraveyard[0];
        const idx = st.deck.findIndex(c => c.uid === target.uid);
        if (idx !== -1) {
          st.deck.splice(idx, 1);
          st.open.push(target);
          updateDeckImg(dom.oppDeck, 'opponent');
          updateAllCounts();
        }
      }
      // シャッフル
      st.deck = shuffle([...st.deck]);
      updateDeckImg(dom.oppDeck, 'opponent');
      requestAnimationFrame(() => {
        showFloatingText(dom.oppDeck, 'シャッフル', 'draw');
      });
      // 手札から最低コストカードを除外
      const allHand = [...st.hand, ...st.open];
      if (allHand.length > 0) {
        allHand.sort((a, b) => (a.cost || 0) - (b.cost || 0));
        const target = allHand[0];
        let idx = st.hand.findIndex(c => c.uid === target.uid);
        if (idx !== -1) {
          st.hand.splice(idx, 1);
        } else {
          idx = st.open.findIndex(c => c.uid === target.uid);
          if (idx !== -1) st.open.splice(idx, 1);
        }
        exileCard(who, target);
        renderOppHand(); updateAllCounts();
        updateExileDisplay('opponent');
        requestAnimationFrame(() => {
          showFloatingText(dom.oppExile, '除外', 'exile');
        });
      }
    }
  }

  // 山姥：手札の墓地属性カード1枚除外→相手が自身の手札を2枚除外
  if (kCard.kaiiEffect === 'exile_hand_graveyard_opponent_exile2') {
    const st = (who === 'player') ? player : opponent;
    const oppSt = (who === 'player') ? opponent : player;
    const oppWho = (who === 'player') ? 'opponent' : 'player';

    if (who === 'player') {
      const hasGraveyard = [...st.hand, ...st.open].some(c => hasTribe(c, '墓地'));
      if (!hasGraveyard) return;

      let exiled = false;
      await new Promise((resolve) => {
        startCardSelectPhase({
          title: '効果：山姥',
          desc: '手札から「墓地」属性のカードを1枚選択して除外しても良い。<br>除外した場合、相手は自身の手札を2枚除外する。',
          filter: (c) => hasTribe(c, '墓地'),
          onConfirm: (selectedCard) => {
            let idx = st.hand.findIndex(c => c.uid === selectedCard.uid);
            if (idx !== -1) {
              st.hand.splice(idx, 1);
            } else {
              idx = st.open.findIndex(c => c.uid === selectedCard.uid);
              if (idx !== -1) st.open.splice(idx, 1);
            }
            exileCard(who, selectedCard);
            renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
            updateExileDisplay('player');
            requestAnimationFrame(() => {
              showFloatingText(dom.playerExile, '除外', 'exile');
            });
            exiled = true;
            resolve();
          },
          onSkip: () => { resolve(); }
        });
      });

      if (exiled) {
        // 相手（CPU）が自身の手札を2枚ランダム除外
        const oppAllHand = [...oppSt.hand, ...oppSt.open];
        const exileCount = Math.min(2, oppAllHand.length);
        if (exileCount > 0) {
          const shuffled = shuffle([...oppAllHand]);
          for (let i = 0; i < exileCount; i++) {
            const target = shuffled[i];
            let idx = oppSt.hand.findIndex(c => c.uid === target.uid);
            if (idx !== -1) {
              oppSt.hand.splice(idx, 1);
              exileCard(oppWho, target);
            } else {
              idx = oppSt.open.findIndex(c => c.uid === target.uid);
              if (idx !== -1) {
                oppSt.open.splice(idx, 1);
                exileCard(oppWho, target);
              }
            }
          }
          renderOppHand(); updateAllCounts();
          updateExileDisplay('opponent');
          requestAnimationFrame(() => {
            showFloatingText(dom.oppHandCards, 'ハンデス', 'handdes');
          });
        }
      }
    } else {
      // CPU版：CPU手札の墓地属性を最低コスト優先で除外
      const graveyardCards = [...st.hand, ...st.open].filter(c => hasTribe(c, '墓地'));
      if (graveyardCards.length === 0) return;
      graveyardCards.sort((a, b) => (a.cost || 0) - (b.cost || 0));
      const target = graveyardCards[0];
      let idx = st.hand.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        st.hand.splice(idx, 1);
      } else {
        idx = st.open.findIndex(c => c.uid === target.uid);
        if (idx !== -1) st.open.splice(idx, 1);
      }
      exileCard(who, target);
      renderOppHand(); updateAllCounts();
      updateExileDisplay('opponent');
      requestAnimationFrame(() => {
        showFloatingText(dom.oppExile, '除外', 'exile');
      });

      // プレイヤーが自身の手札2枚を除外
      const playerAllHand = [...oppSt.hand, ...oppSt.open];
      if (playerAllHand.length > 0) {
        if (playerAllHand.length <= 2) {
          // 2枚以下なら全部除外
          playerAllHand.forEach(c => {
            let idx = oppSt.hand.findIndex(x => x.uid === c.uid);
            if (idx !== -1) {
              oppSt.hand.splice(idx, 1);
              exileCard(oppWho, c);
            } else {
              idx = oppSt.open.findIndex(x => x.uid === c.uid);
              if (idx !== -1) {
                oppSt.open.splice(idx, 1);
                exileCard(oppWho, c);
              }
            }
          });
          renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
          updateExileDisplay('player');
          requestAnimationFrame(() => {
            showFloatingText(dom.playerHandCards, 'ハンデス', 'handdes');
          });
        } else {
          await startSelfHandExilePhase(2);
        }
      }
    }
  }
}

async function handleCpuKaiiEffect(kCard, st, dmg) {
  if (kCard.kaiiEffect === 'exile_hand_graveyard_damage3') {
    // CPUの手札から墓地属性カードを探す（最低コスト優先）
    const graveyardCards = st.hand.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      graveyardCards.sort((a, b) => (a.cost || 0) - (b.cost || 0));
      const target = graveyardCards[0];
      const idx = st.hand.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        st.hand.splice(idx, 1);
        exileCard('opponent', target);
        renderOppHand(); updateAllCounts();
        updateExileDisplay('opponent');
        requestAnimationFrame(() => {
          showFloatingText(dom.oppExile, '除外', 'exile');
        });
        await applyDamageWithSoulAbsorb(dmg, 'bottom', kCard);
        checkWinLose();
      }
    }
  }
}

// 除外からカードを選択するフェイズ（Promise版）
function startExileSelectPhase(config) {
  // config: { who, title, desc, filter(card)->bool }
  return new Promise((resolve) => {
    const st = (config.who === 'player') ? player : opponent;
    const filteredCards = st.exile.filter(c => config.filter(c));

    if (filteredCards.length === 0) {
      resolve(null);
      return;
    }

    let selectedCard = null;

    // 除外モーダルを選択モードで表示
    dom.exileModalTitle.textContent = config.title || 'カード選択';
    dom.exileModalDesc.textContent = '';
    dom.exileModalDesc.innerHTML = config.desc || '';
    dom.exileModalCards.innerHTML = '';
    dom.exileModalEmpty.style.display = 'none';

    // ボタン表示
    dom.exileModalButtons.style.display = 'flex';
    dom.exileModalConfirm.disabled = true;
    dom.exileModalConfirm.classList.remove('ready');

    // カード表示
    st.exile.forEach(card => {
      const el = createCardEl(card, false);
      const isSelectable = config.filter(card);
      if (isSelectable) el.classList.add('exile-selectable');

      // クリック/タップで選択
      const onSelectClick = (e) => {
        e.stopPropagation();
        if (!isSelectable) return;
        if (selectedCard && selectedCard.uid === card.uid) {
          selectedCard = null;
          dom.exileModalCards.querySelectorAll('.exile-selected').forEach(x => x.classList.remove('exile-selected'));
          dom.exileModalConfirm.disabled = true;
          dom.exileModalConfirm.classList.remove('ready');
        } else {
          dom.exileModalCards.querySelectorAll('.exile-selected').forEach(x => x.classList.remove('exile-selected'));
          selectedCard = card;
          el.classList.add('exile-selected');
          dom.exileModalConfirm.disabled = false;
          dom.exileModalConfirm.classList.add('ready');
        }
      };
      const onSelectTouch = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        if (!isSelectable) return;
        if (selectedCard && selectedCard.uid === card.uid) {
          selectedCard = null;
          dom.exileModalCards.querySelectorAll('.exile-selected').forEach(x => x.classList.remove('exile-selected'));
          dom.exileModalConfirm.disabled = true;
          dom.exileModalConfirm.classList.remove('ready');
        } else {
          dom.exileModalCards.querySelectorAll('.exile-selected').forEach(x => x.classList.remove('exile-selected'));
          selectedCard = card;
          el.classList.add('exile-selected');
          dom.exileModalConfirm.disabled = false;
          dom.exileModalConfirm.classList.add('ready');
        }
      };
      el.addEventListener('click', onSelectClick);
      el.addEventListener('touchend', onSelectTouch, { passive: false });
      attachModalPreview(el, card);
      dom.exileModalCards.appendChild(el);
    });

    dom.exileModal.style.display = 'flex';
    dom.exileModal.classList.add('active');
    exileModalActive = true;
    exileSelectMode = true;

    // イベントリスナー（一度きり）
    const cleanup = () => {
      exileSelectMode = false;
      dom.exileModal.style.display = 'none';
      dom.exileModal.classList.remove('active');
      exileModalActive = false;
      dom.exileModalButtons.style.display = 'none';
      dom.exileModalDesc.textContent = '';
      dom.exileModalConfirm.removeEventListener('click', onConfirm);
      dom.exileModalConfirm.removeEventListener('touchend', onConfirmTouch);
      dom.exileModalSkip.removeEventListener('click', onSkip);
      dom.exileModalSkip.removeEventListener('touchend', onSkipTouch);
    };

    const onConfirm = (e) => {
      e.stopPropagation();
      if (!selectedCard) return;
      cleanup();
      resolve(selectedCard);
    };
    const onConfirmTouch = (e) => { e.preventDefault(); onConfirm(e); };
    const onSkip = (e) => {
      e.stopPropagation();
      cleanup();
      resolve(null);
    };
    const onSkipTouch = (e) => { e.preventDefault(); onSkip(e); };

    dom.exileModalConfirm.addEventListener('click', onConfirm);
    dom.exileModalConfirm.addEventListener('touchend', onConfirmTouch);
    dom.exileModalSkip.addEventListener('click', onSkip);
    dom.exileModalSkip.addEventListener('touchend', onSkipTouch);
  });
}

// 山札検索フェイズ（あずき洗い等：デッキからカードを選んで手札公開場に置く）
function startDeckSearchPhase(config) {
  // config: { who, title, desc, filter(card)->bool }
  // 返り値: Promise<card|null> 選択したカードまたはnull
  return new Promise((resolve) => {
    const st = (config.who === 'player') ? player : opponent;
    const matchCards = st.deck.filter(config.filter);

    if (matchCards.length === 0) {
      resolve(null);
      return;
    }

    dom.exileModalTitle.textContent = config.title || '山札検索';
    dom.exileModalDesc.innerHTML = config.desc || '';
    dom.exileModalCards.innerHTML = '';
    dom.exileModalEmpty.style.display = 'none';
    dom.exileModalButtons.style.display = 'flex';

    let selectedCard = null;

    // フィルタ対象カードを表示
    matchCards.forEach(card => {
      const el = createCardEl(card, false);
      el.classList.add('exile-selectable');

      let touchStartY = 0; // スクロール判定用

      const onSelect = (e) => {
        e.stopPropagation();
        // 既に選択済みの場合→選択解除
        if (selectedCard && selectedCard.uid === card.uid) {
          selectedCard = null;
          dom.exileModalCards.querySelectorAll('.battle-card').forEach(c => { c.classList.remove('selected-card'); c.classList.remove('exile-selected'); });
          dom.exileModalConfirm.disabled = true;
          dom.exileModalConfirm.classList.remove('ready');
          return;
        }
        // 新規選択
        dom.exileModalCards.querySelectorAll('.battle-card').forEach(c => { c.classList.remove('selected-card'); c.classList.remove('exile-selected'); });
        el.classList.add('selected-card');
        selectedCard = card;
        dom.exileModalConfirm.disabled = false;
        dom.exileModalConfirm.classList.add('ready'); // FIX: readyクラスで青くなる
      };
      el.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0] ? e.touches[0].clientY : 0;
      }, { passive: true });
      const onSelectTouch = (e) => {
        e.stopPropagation();
        // スクロール中の誤タップ防止：10px以上動いていたらスクロールとみなす
        const touchEndY = e.changedTouches[0] ? e.changedTouches[0].clientY : touchStartY;
        if (Math.abs(touchEndY - touchStartY) > 10) return;
        if (e.cancelable) e.preventDefault();
        onSelect(e);
      };
      el.addEventListener('click', onSelect);
      el.addEventListener('touchend', onSelectTouch, { passive: false });
      attachModalPreview(el, card);
      dom.exileModalCards.appendChild(el);
    });

    dom.exileModalConfirm.disabled = true;

    const cleanup = () => {
      dom.exileModalConfirm.removeEventListener('click', onConfirm);
      dom.exileModalConfirm.removeEventListener('touchend', onConfirmTouch);
      dom.exileModalSkip.removeEventListener('click', onSkip);
      dom.exileModalSkip.removeEventListener('touchend', onSkipTouch);
      exileSelectMode = false;
      dom.exileModal.style.display = 'none';
      dom.exileModal.classList.remove('active');
      exileModalActive = false;
      dom.exileModalDesc.textContent = '';
      dom.exileModalButtons.style.display = 'none';
    };
    const onConfirm = (e) => {
      e.stopPropagation();
      if (!selectedCard) return;
      cleanup();
      resolve(selectedCard);
    };
    const onConfirmTouch = (e) => { e.preventDefault(); e.stopPropagation(); onConfirm(e); };
    const onSkip = (e) => {
      e.stopPropagation();
      cleanup();
      resolve(null);
    };
    const onSkipTouch = (e) => { e.preventDefault(); e.stopPropagation(); onSkip(e); };

    dom.exileModalConfirm.addEventListener('click', onConfirm);
    dom.exileModalConfirm.addEventListener('touchend', onConfirmTouch, { passive: false });
    dom.exileModalSkip.addEventListener('click', onSkip);
    dom.exileModalSkip.addEventListener('touchend', onSkipTouch, { passive: false });

    dom.exileModal.style.display = 'flex';
    dom.exileModal.classList.add('active');
    exileModalActive = true;
    exileSelectMode = true;
  });
}

// 除外カードの順番選択フェイズ（べとべと等：全カードを順番にタップ→デッキ底へ）
function startExileOrderPhase(config) {
  // config: { who, title, desc }
  // 返り値: Promise<card[]> タップ順のカード配列
  return new Promise((resolve) => {
    const st = (config.who === 'player') ? player : opponent;
    const allCards = [...st.exile];

    if (allCards.length === 0) {
      resolve([]);
      return;
    }

    // 1枚なら自動で返す
    if (allCards.length === 1) {
      resolve(allCards);
      return;
    }

    const ordered = [];
    let remaining = allCards.length;

    dom.exileModalTitle.textContent = config.title || 'カード順番選択';
    dom.exileModalDesc.textContent = '';
    dom.exileModalDesc.innerHTML = (config.desc || '') + '<br><b>残り' + remaining + '枚</b>';
    dom.exileModalCards.innerHTML = '';
    dom.exileModalEmpty.style.display = 'none';

    // ボタン非表示（自動完了）
    dom.exileModalButtons.style.display = 'none';

    // カードエレメントマップ（再描画用）
    const cardElMap = new Map(); // card.uid -> el

    // バッジ番号を全て再計算
    function refreshBadges() {
      remaining = allCards.length - ordered.length;
      cardElMap.forEach((el, uid) => {
        const oIdx = ordered.findIndex(c => c.uid === uid);
        const badge = el.querySelector('.exile-order-badge');
        if (oIdx !== -1) {
          el.classList.remove('exile-selectable');
          el.classList.add('exile-order-done');
          if (badge) {
            badge.textContent = oIdx + 1;
          } else {
            const b = document.createElement('div');
            b.className = 'exile-order-badge';
            b.textContent = oIdx + 1;
            el.appendChild(b);
          }
        } else {
          el.classList.add('exile-selectable');
          el.classList.remove('exile-order-done');
          if (badge) badge.remove();
        }
      });
      if (remaining > 0) {
        dom.exileModalDesc.innerHTML = (config.desc || '') + '<br><b>残り' + remaining + '枚</b>';
      }
    }

    // カード表示
    allCards.forEach((card, i) => {
      const el = createCardEl(card, false);
      el.classList.add('exile-selectable');
      el.dataset.orderIdx = String(i);
      cardElMap.set(card.uid, el);

      const onPick = (e) => {
        e.stopPropagation();

        // 既に選択済みの場合→選択解除
        const existIdx = ordered.findIndex(c => c.uid === card.uid);
        if (existIdx !== -1) {
          ordered.splice(existIdx, 1);
          refreshBadges();
          return;
        }

        // 未選択→選択追加
        ordered.push(card);
        remaining--;
        refreshBadges();

        // 全て選択完了
        if (remaining <= 0) {
          setTimeout(() => {
            exileSelectMode = false;
            dom.exileModal.style.display = 'none';
            dom.exileModal.classList.remove('active');
            exileModalActive = false;
            dom.exileModalDesc.textContent = '';
            resolve(ordered);
          }, 300);
        }
      };
      const onPickTouch = (e) => {
        e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        onPick(e);
      };

      el.addEventListener('click', onPick);
      el.addEventListener('touchend', onPickTouch, { passive: false });
      attachModalPreview(el, card);
      dom.exileModalCards.appendChild(el);
    });

    dom.exileModal.style.display = 'flex';
    dom.exileModal.classList.add('active');
    exileModalActive = true;
    exileSelectMode = true;
  });
}

// 相手の手札除外選択フェイズ（砂の竹林用）
// count: 除外する枚数
// 手札公開場のカードは選択可能、裏の手札を選択するとランダム
// 自分の手札から強制除外フェイズ（砂の竹林等：プレイヤーが自分の手札からN枚除外）
function startSelfHandExilePhase(count) {
  return new Promise((resolve) => {
    const overlay = $('opp-hand-exile-overlay');
    const titleEl = $('opp-hand-exile-title');
    const cardsDiv = $('opp-hand-exile-cards');
    const confirmBtn = $('opp-hand-exile-confirm');
    const descEl = $('opp-hand-exile-desc');

    const totalAvailable = player.hand.length + player.open.length;
    if (totalAvailable === 0) { resolve(0); return; }
    const maxExile = Math.min(count, totalAvailable);

    titleEl.textContent = '手札除外';
    descEl.innerHTML = '自分の手札から' + maxExile + '枚選んで除外する。（強制）';
    cardsDiv.innerHTML = '';

    const selected = new Set(); // uid set

    // 全カードを表示（手札＋公開場）
    const allCards = [...player.hand, ...player.open];
    const cardElMap = new Map();

    allCards.forEach(card => {
      const el = createCardEl(card, false);
      el.style.width = '70px';
      el.style.height = '98px';
      cardElMap.set(card.uid, el);
      const onClick = () => {
        if (selected.has(card.uid)) {
          selected.delete(card.uid);
          el.classList.remove('opp-exile-selected');
        } else {
          if (selected.size >= maxExile) return;
          selected.add(card.uid);
          el.classList.add('opp-exile-selected');
        }
        updateUI();
      };
      el.addEventListener('click', onClick);
      el.addEventListener('touchend', (e) => { e.stopPropagation(); if (e.cancelable) e.preventDefault(); onClick(); }, { passive: false });
      attachModalPreview(el, card);
      cardsDiv.appendChild(el);
    });

    function updateUI() {
      if (selected.size >= maxExile) {
        confirmBtn.disabled = false;
        confirmBtn.classList.add('ready');
      } else {
        confirmBtn.disabled = true;
        confirmBtn.classList.remove('ready');
      }
    }

    const onConfirm = () => {
      if (selected.size < maxExile) return;
      confirmBtn.removeEventListener('click', onConfirm);
      confirmBtn.removeEventListener('touchend', onConfirmTouch);
      overlay.style.display = 'none';
      overlay.classList.remove('active');

      let exiled = 0;
      selected.forEach(uid => {
        let idx = player.hand.findIndex(c => c.uid === uid);
        if (idx !== -1) {
          const c = player.hand.splice(idx, 1)[0];
          exileCard('player', c);
          exiled++;
        } else {
          idx = player.open.findIndex(c => c.uid === uid);
          if (idx !== -1) {
            const c = player.open.splice(idx, 1)[0];
            exileCard('player', c);
            exiled++;
          }
        }
      });

      if (exiled > 0) {
        renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
        updateExileDisplay('player');
        requestAnimationFrame(() => {
          showFloatingText(dom.playerHandCards, 'ハンデス', 'handdes');
        });
      }
      resolve(exiled);
    };
    const onConfirmTouch = (e) => { e.preventDefault(); onConfirm(); };

    confirmBtn.disabled = true;
    confirmBtn.classList.remove('ready');
    confirmBtn.addEventListener('click', onConfirm);
    confirmBtn.addEventListener('touchend', onConfirmTouch, { passive: false });

    overlay.style.display = 'flex';
    overlay.classList.add('active');
  });
}

function executeAttackAnimation(targetEl, atkIdx, power, group) {
  // アニメーション開始（通常速度）
  turnLocked = true;
  targetEl.classList.add('attacking');

  // アニメーション完了後にダメージ→カード処理を一連で行う
  setTimeout(async () => {
    // applyDamageWithSoulAbsorb経由（CPU魂吸収AI含む）
    await applyDamageWithSoulAbsorb(power, 'top', group.basho);
    const isFinishBlow = (opponent.life <= 0);

    // カード処理：攻撃したカードを魂へ
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
    isAttacking = false;
    selectedGroupIdx = null;

    if (isFinishBlow) {
      gameEnded = true;
      showFinishBlowZoom('top');
      setTimeout(() => { showWinLoseResult(true); }, 1800);
    } else {
      turnLocked = false;
      updatePlayableAura();
    }
  }, 500);
}

function showFinishBlowZoom(targetSide) {
  // targetSide: 'top' = 相手陣地ズーム（プレイヤー勝利時）, 'bottom' = 自分陣地ズーム（CPU勝利時）
  const overlay = $('finish-blow-overlay');
  const fieldDiv = $('finish-blow-field');
  overlay.style.display = '';
  overlay.className = 'active' + (targetSide === 'bottom' ? ' target-bottom' : '');
  fieldDiv.innerHTML = '';

  // 画面フラッシュ
  const flash = document.createElement('div');
  flash.className = 'finish-screen-flash';
  fieldDiv.appendChild(flash);

  // 衝撃波リング
  const ring = document.createElement('div');
  ring.className = 'finish-shock-ring';
  fieldDiv.appendChild(ring);

  // 放射状バースト
  const burst = document.createElement('div');
  burst.className = 'finish-radial-burst';
  fieldDiv.appendChild(burst);

  // インパクトライン（複数）
  for (let i = 0; i < 5; i++) {
    const line = document.createElement('div');
    line.className = 'finish-impact-line';
    const yPos = 30 + Math.random() * 40;
    line.style.top = yPos + '%';
    line.style.animationDelay = (i * 0.08) + 's';
    fieldDiv.appendChild(line);
  }

  // 1.8秒後にクリーンアップ
  setTimeout(() => {
    overlay.className = '';
    overlay.style.display = 'none';
    fieldDiv.innerHTML = '';
  }, 1800);
}

function showWinLoseResult(isWin) {
  gameEnded = true;
  dom.resultText.textContent = isWin ? 'YOU WIN!' : 'YOU LOSE!';
  dom.resultOverlay.className = isWin ? 'active win' : 'active lose';
  dom.resultOverlay.style.display = 'flex';

  // 連勝カウンター
  const streakEl = $('win-streak');
  if (isWin) {
    let streak = parseInt(localStorage.getItem('kannagi_win_streak') || '0', 10);
    streak++;
    localStorage.setItem('kannagi_win_streak', String(streak));
    streakEl.textContent = streak + '連勝';
    streakEl.style.display = 'block'; // FIX: ''ではCSSのdisplay:noneが残る
  } else {
    localStorage.setItem('kannagi_win_streak', '0');
    streakEl.style.display = 'none';
  }
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

// 魂ダメージ表示（魂ゾーンに「−○」を表示）
function showSoulDamage(absorbCount, who, isFinish) {
  if (absorbCount <= 0) return;
  const soulZone = (who === 'player') ? $('player-soul-zone') : $('opp-soul-zone');
  const el = document.createElement('div');
  el.className = 'soul-damage-num' + (isFinish ? ' soul-damage-finish' : '');
  el.textContent = '−' + absorbCount;
  soulZone.style.position = 'relative';
  soulZone.appendChild(el);
  const duration = isFinish ? 1600 : 900;
  setTimeout(() => { el.remove(); }, duration);
}

dom.attackBtn.addEventListener('click', (e) => { e.stopPropagation(); performAttack().catch(() => { }); });
dom.attackBtn.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); performAttack().catch(() => { }); });

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
// FIX E: ポップアップ外クリック/タップで閉じる
document.addEventListener('click', (e) => {
  if (kaiiPopupActive && !dom.kaiiPopup.contains(e.target)) hideKaiiPopup();
});
document.addEventListener('touchend', (e) => {
  // NOTE: passive:true でpreventDefaultは呼ばない（スクロール中のIntervention回避）
  if (kaiiPopupActive && !dom.kaiiPopup.contains(e.target)) hideKaiiPopup();
}, { passive: true });
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
// フローティングテキスト（ドロー・憑依・除外）
// カードの上に小さい文字が現れて上に消えていく演出
// ===================================================================
function showFloatingText(targetEl, text, type) {
  // type: 'draw', 'hyoui', 'exile'
  if (!targetEl) return;
  const rect = targetEl.getBoundingClientRect();
  const app = $('app');
  const appRect = app.getBoundingClientRect();
  const ft = document.createElement('div');
  ft.className = 'floating-text ft-' + type;
  ft.textContent = text;
  // #app内に絶対配置（カードのoverflow:hiddenを回避）
  ft.style.left = (rect.left - appRect.left + rect.width / 2) + 'px';
  ft.style.top = (rect.top - appRect.top + rect.height * 0.3) + 'px';
  app.appendChild(ft);
  setTimeout(() => { ft.remove(); }, 950);
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
      // 残り8枚ならこれ以上ドロップ不可
      const totalBeforeDrop = player.hand.length + player.open.length - overflowSelectedUids.size;
      if (totalBeforeDrop <= 8 && !overflowSelectedUids.has(String(card.uid))) {
        cleanup(); return;
      }
      // D&Dで捨てたカードを選択セットから除去
      overflowSelectedUids.delete(String(card.uid));
      let idx = player.hand.findIndex(c => c.uid === card.uid);
      if (idx !== -1) {
        player.hand.splice(idx, 1);
        player.soul.push(card);
        renderPlayerHand(); renderSoul('player'); updateAllCounts();
        updateOverflowConfirmBtn();
        checkHandOverflowDone();
      } else {
        // 手札公開場からも捨てられる
        idx = player.open.findIndex(c => c.uid === card.uid);
        if (idx !== -1) {
          player.open.splice(idx, 1);
          player.soul.push(card);
          renderPlayerOpen(); renderSoul('player'); updateAllCounts();
          updateOverflowConfirmBtn();
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
        if (idx !== -1) { player.open.splice(idx, 1); card._fromOpen = true; placeCard(card); renderPlayerOpen(); }
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
    // 場所札フローティングテキスト
    requestAnimationFrame(() => {
      const bashoUid = String(card.uid);
      const allBasho = dom.playerFieldCards.querySelectorAll('.basho-slot');
      allBasho.forEach(bEl => {
        if (bEl.dataset.uid === bashoUid) showFloatingText(bEl, '召喚', 'summon');
      });
    });
    // 召喚時効果チェック
    if (card.summonEffect) {
      handleSummonEffect(card, 'player');
    }
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
    // 展開フローティングテキスト
    requestAnimationFrame(() => {
      const seasonUid = String(card.uid);
      const allSeason = dom.playerFieldCards.querySelectorAll('.season-slot');
      allSeason.forEach(sEl => {
        if (sEl.dataset.uid === seasonUid) showFloatingText(sEl, '展開', 'tenkai');
      });
    });
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
    // 憑依フローティングテキスト
    requestAnimationFrame(() => {
      const kaiiUid = String(card.uid);
      const allKaii = dom.playerFieldCards.querySelectorAll('.kaii-attached');
      allKaii.forEach(kEl => {
        if (kEl.dataset.uid === kaiiUid) showFloatingText(kEl, '憑依', 'hyoui');
      });
    });
  } else if (card.type === '道具札') {
    // 道具札：効果発動演出のみ（全道具札共通）→効果処理→魂へ
    markUsed('player', '道具札');
    renderPlayerHand();
    (async () => {
      await showEffectActivation(card, '効果発動');
      // 効果処理
      if (card.effect === 'damage_8') {
        await applyDamageWithSoulAbsorb(8, 'top', card);
        checkWinLose();
      } else if (card.effect === 'draw_3') {
        drawCards('player', 3);
      } else if (card.effect === 'retrieve_exile_graveyard_damage4') {
        const hasGraveyardInExile = player.exile.some(c => hasTribe(c, '墓地'));
        if (hasGraveyardInExile) {
          const selected = await startExileSelectPhase({
            who: 'player',
            title: '効果：私の墓',
            desc: '除外から「墓地」属性のカードを1枚選び、手札公開場に置く。<br>成功した場合、相手に4点のダメージ。',
            filter: (c) => hasTribe(c, '墓地'),
          });
          if (selected) {
            const idx = player.exile.findIndex(c => c.uid === selected.uid);
            if (idx !== -1) {
              player.exile.splice(idx, 1);
              player.open.push(selected);
              renderPlayerOpen();
              updateExileDisplay('player');
              updateAllCounts();
              await applyDamageWithSoulAbsorb(4, 'top', card);
              checkWinLose();
            }
          }
        }
      } else if (card.effect === 'retrieve_exile_graveyard_draw1') {
        const hasGraveyardInExile = player.exile.some(c => hasTribe(c, '墓地'));
        if (hasGraveyardInExile) {
          const selected = await startExileSelectPhase({
            who: 'player',
            title: '効果：唐笠おばけ',
            desc: '除外から「墓地」属性のカードを1枚選び、手札公開場に置いても良い。<br>置いた場合、山札から1枚ドローする。',
            filter: (c) => hasTribe(c, '墓地'),
          });
          if (selected) {
            const idx = player.exile.findIndex(c => c.uid === selected.uid);
            if (idx !== -1) {
              player.exile.splice(idx, 1);
              player.open.push(selected);
              renderPlayerOpen();
              updateExileDisplay('player');
              updateAllCounts();
              drawCards('player', 1);
            }
          }
        }
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
  const drawnUids = [];
  for (let i = 0; i < count && st.deck.length > 0; i++) {
    const drawn = st.deck.shift();
    st.hand.push(drawn);
    drawnUids.push(String(drawn.uid));
  }
  if (who === 'player') { renderPlayerHand(); updateDeckImg(dom.playerDeck, 'player'); }
  else { renderOppHand(); updateDeckImg(dom.oppDeck, 'opponent'); }
  updateAllCounts();
  // ドローフローティングテキスト（両プレイヤー対応）
  const container = (who === 'player') ? dom.playerHandCards : dom.oppHandCards;
  requestAnimationFrame(() => {
    drawnUids.forEach(uid => {
      const el = container.querySelector('.battle-card[data-uid="' + uid + '"]');
      if (el) showFloatingText(el, 'ドロー', 'draw');
    });
  });
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
  cardSelectPhase = false; cardSelectConfig = null; cardSelectSelectedCard = null;
  dom.handOverflowOverlay.style.display = 'none';
  dom.handOverflowOverlay.classList.remove('active');
  dom.handOverflowConfirm.disabled = true;
  dom.handOverflowConfirm.classList.remove('ready');
  if (dom.handOverflowRemaining) dom.handOverflowRemaining.textContent = '';
  overflowSelectedUids.clear();
  document.querySelectorAll('.battle-card.overflow-selected').forEach(e => e.classList.remove('overflow-selected'));
  dom.cardSelectOverlay.style.display = 'none';
  dom.cardSelectOverlay.classList.remove('active');
  $('player-hand-zone').classList.remove('card-select-zone-glow');
  $('player-open').classList.remove('card-select-zone-glow');
  document.querySelectorAll('.battle-card.selectable').forEach(e => e.classList.remove('selectable'));
  document.querySelectorAll('.battle-card.selected-card').forEach(e => e.classList.remove('selected-card'));
  // 魂吸収リセット
  soulAbsorbPhase = false;
  soulAbsorbSelectedUids.clear();
  dom.soulAbsorbAsk.style.display = 'none';
  dom.soulAbsorbAsk.classList.remove('active');
  dom.soulAbsorbSelect.style.display = 'none';
  dom.soulAbsorbSelect.classList.remove('active');
  document.querySelectorAll('.battle-card.soul-selectable').forEach(e => e.classList.remove('soul-selectable'));
  document.querySelectorAll('.battle-card.soul-absorb-selected').forEach(e => e.classList.remove('soul-absorb-selected'));

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
  // フィニッシュブロー演出非表示
  const fbo = $('finish-blow-overlay');
  if (fbo) { fbo.className = ''; fbo.style.display = 'none'; $('finish-blow-field').innerHTML = ''; }

  // 全ポップアップクリア
  hideAllPopups();
  // 効果発動オーバーレイクリア
  dom.effectOverlay.style.display = 'none';
  dom.effectOverlay.classList.remove('active');
  dom.effectOverlay.querySelectorAll('.sparkle-particle').forEach(e => e.remove());

  updateDeckImg(dom.playerDeck, 'player'); updateDeckImg(dom.oppDeck, 'opponent');
  updateExileDisplay('player'); updateExileDisplay('opponent');
  hideExileModal();
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

  // 零探し（両プレイヤー順に実行）
  showZeroSearch('player').then(() => {
    // CPU側はランダムで0〜3枚を底に戻してドロー
    const cpuCount = Math.floor(Math.random() * 4); // 0〜3枚
    if (cpuCount > 0) {
      const shuffled = [...opponent.hand].sort(() => Math.random() - 0.5);
      const toBottom = shuffled.slice(0, cpuCount);
      toBottom.forEach(c => {
        const idx = opponent.hand.findIndex(x => x.uid === c.uid);
        if (idx !== -1) opponent.hand.splice(idx, 1);
        opponent.deck.push(c); // デッキ底へ
      });
      drawCards('opponent', cpuCount);
    }
    renderOppHand(); updateAllCounts();

    // ターン開始
    if (isFirstTurn) {
      startPlayerTurn();
    } else {
      turnLocked = true;
      showTurnAnnounce('相手のターン', () => {
        setTimeout(() => { cpuTurn(); }, 500);
      });
    }
  });
}

// ===================================================================
// 零探し：ゲーム開始時のマリガン的フェイズ
// ===================================================================
function showZeroSearch(who) {
  return new Promise((resolve) => {
    const st = (who === 'player') ? player : opponent;
    const overlay = $('zero-search-overlay');
    const orderEl = $('zero-search-order');
    const cardsEl = $('zero-search-cards');
    const previewImg = $('zero-search-preview-img');
    const confirmBtn = $('zero-search-confirm');

    // 先後テキスト
    const orderText = isFirstTurn
      ? (who === 'player' ? 'あなたは【先行】です。' : '相手は【後攻】です。')
      : (who === 'player' ? 'あなたは【後攻】です。' : '相手は【先行】です。');
    orderEl.textContent = orderText;

    // 選択状態
    const selectedUids = new Set();

    // カード一覧をリセット
    cardsEl.innerHTML = '';
    previewImg.src = '';
    previewImg.classList.remove('active');
    confirmBtn.classList.add('ready'); // 0枚でも決定可能

    // 手札8枚を表示
    st.hand.forEach(card => {
      const el = createCardEl(card, false);
      let touchStartY = 0;

      el.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0] ? e.touches[0].clientY : 0;
      }, { passive: true });

      const onSelect = () => {
        if (selectedUids.has(card.uid)) {
          // 解除
          selectedUids.delete(card.uid);
          el.classList.remove('zs-selected');
        } else {
          // 選択
          selectedUids.add(card.uid);
          el.classList.add('zs-selected');
        }
        // プレビュー表示（最後にタップしたカード）
        if (card.img) {
          previewImg.src = card.img;
          previewImg.classList.add('active');
        }
        updateCount();
      };

      el.addEventListener('click', onSelect);
      el.addEventListener('touchend', (e) => {
        const endY = e.changedTouches[0] ? e.changedTouches[0].clientY : touchStartY;
        if (Math.abs(endY - touchStartY) > 10) return; // スクロール判定
        if (e.cancelable) e.preventDefault();
        onSelect();
      }, { passive: false });

      cardsEl.appendChild(el);
    });

    // 選択枚数表示
    const countEl = $('zero-search-count');
    const updateCount = () => {
      const n = selectedUids.size;
      countEl.textContent = n === 0 ? 'カードを選んでデッキ底に戻す（任意）' : `${n}枚を選択中 → デッキ底に戻してドロー`;
    };
    updateCount();

    // 決定ボタン
    const onConfirm = () => {
      confirmBtn.removeEventListener('click', onConfirm);
      confirmBtn.removeEventListener('touchend', onConfirmTouch);
      overlay.style.display = 'none';

      // 選択したカードをデッキ底に戻す
      const toBottom = [];
      selectedUids.forEach(uid => {
        const idx = st.hand.findIndex(c => c.uid === uid);
        if (idx !== -1) {
          toBottom.push(st.hand.splice(idx, 1)[0]);
        }
      });
      toBottom.forEach(c => st.deck.push(c)); // デッキ一番下に追加

      // 戻した枚数分ドロー（デッキ上から）
      if (toBottom.length > 0) {
        drawCards(who, toBottom.length);
      }
      if (who === 'player') { renderPlayerHand(); } else { renderOppHand(); }
      updateAllCounts();

      resolve();
    };
    const onConfirmTouch = (e) => { if (e.cancelable) e.preventDefault(); onConfirm(); };
    confirmBtn.addEventListener('click', onConfirm);
    confirmBtn.addEventListener('touchend', onConfirmTouch, { passive: false });

    overlay.style.display = 'flex';
  });
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
  if (opponent.life <= 0) {
    gameEnded = true;
    turnLocked = true;
    showFinishBlowZoom('top');
    setTimeout(() => {
      showWinLoseResult(true);
    }, 1800);
  } else if (player.life <= 0) {
    gameEnded = true;
    turnLocked = true;
    showFinishBlowZoom('bottom');
    setTimeout(() => {
      showWinLoseResult(false);
    }, 1800);
  }
}

// ===================================================================
// ターン開始処理（ドロー含む）
// ===================================================================
function startPlayerTurn() {
  turnLocked = true;
  turnNumber++;
  resetSideFlags('player');
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

let overflowSelectedUids = new Set(); // 手札超過タップ選択中のuid

function startHandOverflowPhase() {
  handOverflowPhase = true;
  turnLocked = true; // ターン終了ボタン等を無効化（ドラッグはhandOverflowPhaseで許可）
  overflowSelectedUids.clear();
  dom.handOverflowOverlay.style.display = 'flex';
  dom.handOverflowOverlay.classList.add('active');
  // 決定ボタンを初期状態（灰色・無効）にリセット
  dom.handOverflowConfirm.disabled = true;
  dom.handOverflowConfirm.classList.remove('ready');
  // あと○枚 表示初期化
  const total = player.hand.length + player.open.length;
  const needToDiscard = total - 8;
  if (dom.handOverflowRemaining) {
    dom.handOverflowRemaining.textContent = 'あと' + needToDiscard + '枚';
  }
  hidePreview(); hideAttackBtn(); clearAllGlow();
  clearPlayableAura(); // 手札超過中は緑オーラ非表示
}

function handleOverflowTap(card, el) {
  if (!handOverflowPhase) return false;
  // トグル選択
  const uid = String(card.uid);
  if (overflowSelectedUids.has(uid)) {
    // 選択解除は常に可能
    overflowSelectedUids.delete(uid);
    el.classList.remove('overflow-selected');
  } else {
    // 残り8枚（あと0枚）なら追加選択不可
    const total = player.hand.length + player.open.length;
    const remaining = total - overflowSelectedUids.size;
    if (remaining <= 8) return true; // これ以上選択できない
    overflowSelectedUids.add(uid);
    el.classList.add('overflow-selected');
  }
  // 決定ボタンの状態更新
  updateOverflowConfirmBtn();
  return true;
}

function updateOverflowConfirmBtn() {
  const total = player.hand.length + player.open.length;
  const remaining = total - overflowSelectedUids.size;
  const needToDiscard = remaining - 8; // あと何枚選択する必要があるか
  // あと○枚 表示
  if (dom.handOverflowRemaining) {
    dom.handOverflowRemaining.textContent = 'あと' + needToDiscard + '枚';
  }
  // ちょうど8枚の時のみ決定可能
  if (remaining === 8 && overflowSelectedUids.size > 0) {
    dom.handOverflowConfirm.disabled = false;
    dom.handOverflowConfirm.classList.add('ready');
  } else {
    dom.handOverflowConfirm.disabled = true;
    dom.handOverflowConfirm.classList.remove('ready');
  }
}

function confirmOverflowDiscard() {
  if (overflowSelectedUids.size === 0) return;
  const total = player.hand.length + player.open.length;
  const remaining = total - overflowSelectedUids.size;
  if (remaining !== 8) return; // ちょうど8枚でないと決定不可
  // 選択されたカードを全て魂へ送る
  const uidsToDiscard = new Set(overflowSelectedUids);
  overflowSelectedUids.clear();
  uidsToDiscard.forEach(discardUid => {
    let idx = player.hand.findIndex(c => String(c.uid) === discardUid);
    if (idx !== -1) {
      player.soul.push(player.hand.splice(idx, 1)[0]);
    } else {
      idx = player.open.findIndex(c => String(c.uid) === discardUid);
      if (idx !== -1) {
        player.soul.push(player.open.splice(idx, 1)[0]);
      }
    }
  });
  renderPlayerHand(); renderPlayerOpen(); renderSoul('player'); updateAllCounts();
  checkHandOverflowDone();
}

function checkHandOverflowDone() {
  if (!handOverflowPhase) return;
  // 手札＋手札公開場の合計が8枚以下になったらOK
  if (player.hand.length + player.open.length <= 8) {
    handOverflowPhase = false;
    overflowSelectedUids.clear();
    dom.handOverflowOverlay.style.display = 'none';
    dom.handOverflowOverlay.classList.remove('active');
    dom.handOverflowConfirm.disabled = true;
    dom.handOverflowConfirm.classList.remove('ready');
    if (dom.handOverflowRemaining) dom.handOverflowRemaining.textContent = '';
    // overflow-selectedクラスも全て除去
    document.querySelectorAll('.battle-card.overflow-selected').forEach(e => e.classList.remove('overflow-selected'));
    proceedEndTurn();
  }
}

// 手札超過：決定ボタン
dom.handOverflowConfirm.addEventListener('click', (e) => {
  e.stopPropagation();
  confirmOverflowDiscard();
});
dom.handOverflowConfirm.addEventListener('touchend', (e) => {
  e.preventDefault(); e.stopPropagation();
  confirmOverflowDiscard();
});

// ===================================================================
// カード選択フェイズ（召喚時効果等で手札からカードを選択）
// ===================================================================
let cardSelectPhase = false;
let cardSelectConfig = null;  // { filter, onConfirm, onSkip, selectedCard }
let cardSelectSelectedCard = null;

function startCardSelectPhase(config) {
  // config: { title, desc, filter(card)->bool, onConfirm(card), onSkip() }
  cardSelectPhase = true;
  cardSelectConfig = config;
  cardSelectSelectedCard = null;
  turnLocked = true;

  dom.cardSelectTitle.textContent = config.title || 'カード選択';
  dom.cardSelectDesc.innerHTML = config.desc || '';
  dom.cardSelectOverlay.style.display = 'flex';
  dom.cardSelectOverlay.classList.add('active');

  // 上段プレビューリセット
  if (dom.cardSelectPreviewImg) {
    dom.cardSelectPreviewImg.src = '';
    dom.cardSelectPreviewImg.classList.remove('active');
  }
  if (dom.cardSelectPlaceholder) dom.cardSelectPlaceholder.style.display = 'block';

  // 決定ボタンを灰色（未選択）にリセット
  dom.cardSelectConfirm.disabled = true;
  dom.cardSelectConfirm.classList.remove('ready');

  hidePreview(); hideAttackBtn(); clearAllGlow();
  clearPlayableAura();

  // 手札＆公開場のゾーンを光らせる
  $('player-hand-zone').classList.add('card-select-zone-glow');
  $('player-open').classList.add('card-select-zone-glow');

  // 手札・公開場のカードに選択可能マーク付与
  markSelectableCards();
}

function markSelectableCards() {
  if (!cardSelectConfig) return;
  // 手札
  dom.playerHandCards.querySelectorAll('.battle-card').forEach(el => {
    const uid = el.dataset.uid;
    const card = player.hand.find(c => String(c.uid) === uid);
    if (card && cardSelectConfig.filter(card)) {
      el.classList.add('selectable');
    } else {
      el.classList.remove('selectable');
    }
  });
  // 公開場
  dom.playerOpenCards.querySelectorAll('.battle-card').forEach(el => {
    const uid = el.dataset.uid;
    const card = player.open.find(c => String(c.uid) === uid);
    if (card && cardSelectConfig.filter(card)) {
      el.classList.add('selectable');
    } else {
      el.classList.remove('selectable');
    }
  });
}

function handleCardSelectTap(card, el) {
  if (!cardSelectPhase || !cardSelectConfig) return false;
  // 対象外カードは無視
  if (!cardSelectConfig.filter(card)) return false;

  // 既に選択中のカードをタップしたら選択解除
  if (cardSelectSelectedCard && cardSelectSelectedCard.uid === card.uid) {
    cardSelectSelectedCard = null;
    document.querySelectorAll('.battle-card.selected-card').forEach(e => e.classList.remove('selected-card'));
    dom.cardSelectConfirm.disabled = true;
    dom.cardSelectConfirm.classList.remove('ready');
    // 上段プレビューをリセット
    if (dom.cardSelectPreviewImg) {
      dom.cardSelectPreviewImg.src = '';
      dom.cardSelectPreviewImg.classList.remove('active');
    }
    if (dom.cardSelectPlaceholder) dom.cardSelectPlaceholder.style.display = 'block';
    return true;
  }

  // 新しいカードを選択
  document.querySelectorAll('.battle-card.selected-card').forEach(e => e.classList.remove('selected-card'));
  cardSelectSelectedCard = card;
  el.classList.add('selected-card');
  dom.cardSelectConfirm.disabled = false;
  dom.cardSelectConfirm.classList.add('ready');
  // 上段に選択カードを拡大表示
  if (dom.cardSelectPreviewImg && card.img) {
    dom.cardSelectPreviewImg.src = card.img; // card.imgはすでに'images/'を含む
    dom.cardSelectPreviewImg.classList.add('active');
    if (dom.cardSelectPlaceholder) dom.cardSelectPlaceholder.style.display = 'none';
  }
  return true;
}

function endCardSelectPhase(confirmed) {
  const config = cardSelectConfig;
  const selectedCard = cardSelectSelectedCard;

  cardSelectPhase = false;
  cardSelectConfig = null;
  cardSelectSelectedCard = null;

  dom.cardSelectOverlay.style.display = 'none';
  dom.cardSelectOverlay.classList.remove('active');
  $('player-hand-zone').classList.remove('card-select-zone-glow');
  $('player-open').classList.remove('card-select-zone-glow');

  // 選択可能マーク・選択マーク除去
  document.querySelectorAll('.battle-card.selectable').forEach(e => e.classList.remove('selectable'));
  document.querySelectorAll('.battle-card.selected-card').forEach(e => e.classList.remove('selected-card'));

  if (confirmed && selectedCard && config && config.onConfirm) {
    config.onConfirm(selectedCard);
  } else if (config && config.onSkip) {
    config.onSkip();
  }
}

// 決定ボタン
$('card-select-confirm').addEventListener('click', (e) => {
  e.stopPropagation();
  if (!cardSelectSelectedCard) return;
  endCardSelectPhase(true);
});
$('card-select-confirm').addEventListener('touchend', (e) => {
  e.preventDefault(); e.stopPropagation();
  if (!cardSelectSelectedCard) return;
  endCardSelectPhase(true);
});
// 選択しないボタン
$('card-select-skip').addEventListener('click', (e) => {
  e.stopPropagation();
  endCardSelectPhase(false);
});
$('card-select-skip').addEventListener('touchend', (e) => {
  e.preventDefault(); e.stopPropagation();
  endCardSelectPhase(false);
});

// ===================================================================
// 召喚時効果処理
// ===================================================================
function handleSummonEffect(card, who) {
  if (card.summonEffect === 'exile_graveyard_damage3') {
    if (who === 'player') {
      // プレイヤー：効果発動演出→カード選択フェイズ
      (async () => {
        await showEffectActivation(card, '召喚時効果');
        // 手札＆公開場に墓地属性カードがあるかチェック
        const hasGraveyard = [...player.hand, ...player.open].some(c => hasTribe(c, '墓地'));
        if (!hasGraveyard) {
          // 対象カードなし→スキップ
          turnLocked = false;
          updatePlayableAura();
          return;
        }
        startCardSelectPhase({
          title: 'カード選択',
          desc: '手札から「墓地」属性のカードを1枚選択して除外しても良い。<br>除外した場合、相手に3点のダメージ。',
          filter: (c) => hasTribe(c, '墓地'),
          onConfirm: (selectedCard) => {
            // 手札から除外
            let idx = player.hand.findIndex(c => c.uid === selectedCard.uid);
            if (idx !== -1) {
              player.hand.splice(idx, 1);
            } else {
              idx = player.open.findIndex(c => c.uid === selectedCard.uid);
              if (idx !== -1) player.open.splice(idx, 1);
            }
            exileCard('player', selectedCard);
            renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
            updateExileDisplay('player');
            // 除外フローティングテキスト
            requestAnimationFrame(() => {
              const exileImg = dom.playerExile.querySelector('.exile-top-card');
              if (exileImg) showFloatingText(dom.playerExile, '除外', 'exile');
            });
            // 相手に3点ダメージ
            applyDamageWithSoulAbsorb(3, 'top', card).then(() => {
              checkWinLose();
              turnLocked = false;
              updatePlayableAura();
            });
          },
          onSkip: () => {
            // 選択しない→効果なし
            turnLocked = false;
            updatePlayableAura();
          }
        });
      })();
    } else {
      // CPU処理（別関数）
      handleCpuSummonEffect(card);
    }
  }

  if (card.summonEffect === 'retrieve_exile_graveyard_damage4') {
    if (who === 'player') {
      (async () => {
        await showEffectActivation(card, '召喚時効果');
        const hasGraveyardInExile = player.exile.some(c => hasTribe(c, '墓地'));
        if (!hasGraveyardInExile) {
          turnLocked = false;
          updatePlayableAura();
          return;
        }
        const selected = await startExileSelectPhase({
          who: 'player',
          title: '召喚時効果：赤えい',
          desc: '除外から「墓地」属性のカードを1枚選び、手札公開場に置いても良い。<br>置いた場合、相手に4点のダメージ。',
          filter: (c) => hasTribe(c, '墓地'),
        });
        if (selected) {
          const idx = player.exile.findIndex(c => c.uid === selected.uid);
          if (idx !== -1) {
            player.exile.splice(idx, 1);
            player.open.push(selected);
            renderPlayerOpen();
            updateExileDisplay('player');
            updateAllCounts();
            await applyDamageWithSoulAbsorb(4, 'top', card);
            checkWinLose();
          }
        }
        turnLocked = false;
        updatePlayableAura();
      })();
    } else {
      handleCpuSummonEffect(card);
    }
  }

  if (card.summonEffect === 'exile_graveyard_count_damage') {
    if (who === 'player') {
      (async () => {
        await showEffectActivation(card, '召喚時効果');
        // 自分と相手の除外にある墓地属性カードを数える
        const playerGraveyardCount = player.exile.filter(c => hasTribe(c, '墓地')).length;
        const oppGraveyardCount = opponent.exile.filter(c => hasTribe(c, '墓地')).length;
        const totalCount = playerGraveyardCount + oppGraveyardCount;
        const dmg = totalCount * 2;
        if (dmg > 0) {
          await applyDamageWithSoulAbsorb(dmg, 'top', card);
          checkWinLose();
        }
        turnLocked = false;
        updatePlayableAura();
      })();
    } else {
      handleCpuSummonEffect(card);
    }
  }

  // 木霊の森：手札から墓地属性カードを1枚除外→1ドロー
  if (card.summonEffect === 'exile_hand_graveyard_draw1') {
    if (who === 'player') {
      (async () => {
        await showEffectActivation(card, '召喚時効果');
        const hasGraveyard = [...player.hand, ...player.open].some(c => hasTribe(c, '墓地'));
        if (!hasGraveyard) {
          turnLocked = false;
          updatePlayableAura();
          return;
        }
        startCardSelectPhase({
          title: '召喚時効果：木霊の森',
          desc: '手札から「墓地」属性のカードを1枚除外しても良い。<br>除外した場合、山札から1枚ドローする。',
          filter: (c) => hasTribe(c, '墓地'),
          onConfirm: (selectedCard) => {
            let idx = player.hand.findIndex(c => c.uid === selectedCard.uid);
            if (idx !== -1) {
              player.hand.splice(idx, 1);
            } else {
              idx = player.open.findIndex(c => c.uid === selectedCard.uid);
              if (idx !== -1) player.open.splice(idx, 1);
            }
            exileCard('player', selectedCard);
            renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
            updateExileDisplay('player');
            requestAnimationFrame(() => {
              showFloatingText(dom.playerExile, '除外', 'exile');
            });
            drawCards('player', 1);
            turnLocked = false;
            updatePlayableAura();
          },
          onSkip: () => {
            turnLocked = false;
            updatePlayableAura();
          }
        });
      })();
    } else {
      handleCpuSummonEffect(card);
    }
  }

  // 砂の竹林：除外から墓地属性カードを1枚回収→相手は自身の手札を2枚除外
  if (card.summonEffect === 'retrieve_exile_graveyard_exile2_opponent_hand') {
    if (who === 'player') {
      (async () => {
        await showEffectActivation(card, '召喚時効果');
        const hasGraveyardInExile = player.exile.some(c => hasTribe(c, '墓地'));
        if (!hasGraveyardInExile) {
          turnLocked = false;
          updatePlayableAura();
          return;
        }
        const selected = await startExileSelectPhase({
          who: 'player',
          title: '召喚時効果：砂の竹林',
          desc: '除外から「墓地」属性のカードを1枚選び、手札公開場に置いても良い。<br>置いた場合、相手は自身の手札を2枚除外する。',
          filter: (c) => hasTribe(c, '墓地'),
        });
        if (selected) {
          const idx = player.exile.findIndex(c => c.uid === selected.uid);
          if (idx !== -1) {
            player.exile.splice(idx, 1);
            player.open.push(selected);
            renderPlayerOpen();
            updateExileDisplay('player');
            updateAllCounts();
          }
          // 相手（CPU）が自身の手札からランダムに2枚除外
          const oppAllHand = [...opponent.hand, ...opponent.open];
          const exileCount = Math.min(2, oppAllHand.length);
          for (let i = 0; i < exileCount; i++) {
            const available = [...opponent.hand, ...opponent.open];
            if (available.length === 0) break;
            const rIdx = Math.floor(Math.random() * available.length);
            const chosen = available[rIdx];
            let hIdx = opponent.hand.findIndex(c => c.uid === chosen.uid);
            if (hIdx !== -1) {
              opponent.hand.splice(hIdx, 1);
            } else {
              hIdx = opponent.open.findIndex(c => c.uid === chosen.uid);
              if (hIdx !== -1) opponent.open.splice(hIdx, 1);
            }
            exileCard('opponent', chosen);
          }
          if (exileCount > 0) {
            renderOppHand(); updateAllCounts();
            updateExileDisplay('opponent');
            requestAnimationFrame(() => {
              showFloatingText(dom.oppHandCards, 'ハンデス', 'handdes');
            });
          }
        }
        turnLocked = false;
        updatePlayableAura();
      })();
    } else {
      handleCpuSummonEffect(card);
    }
  }
}

async function handleCpuSummonEffect(card) {
  if (card.summonEffect === 'exile_graveyard_damage3') {
    await showEffectActivation(card, '召喚時効果');
    // CPUの手札から墓地属性カードを探す（最もコストが低いものを選択）
    const graveyardCards = opponent.hand.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      // 最低コストのカードを選択
      graveyardCards.sort((a, b) => (a.cost || 0) - (b.cost || 0));
      const target = graveyardCards[0];
      const idx = opponent.hand.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        opponent.hand.splice(idx, 1);
        exileCard('opponent', target);
        renderOppHand(); updateAllCounts();
        updateExileDisplay('opponent');
        // 除外フローティングテキスト
        requestAnimationFrame(() => {
          showFloatingText(dom.oppExile, '除外', 'exile');
        });
        // プレイヤーに3点ダメージ（魂吸収選択あり）
        await applyDamageWithSoulAbsorb(3, 'bottom', card);
        checkWinLose();
      }
    }
    // 墓地カードがなければ何もしない（CPUは必ず除外する）
  }

  if (card.summonEffect === 'retrieve_exile_graveyard_damage4') {
    await showEffectActivation(card, '召喚時効果');
    // CPUの除外から墓地属性カードを探す（最高コスト優先）
    const graveyardCards = opponent.exile.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      graveyardCards.sort((a, b) => (b.cost || 0) - (a.cost || 0));
      const target = graveyardCards[0];
      const idx = opponent.exile.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        opponent.exile.splice(idx, 1);
        opponent.open.push(target);
        updateExileDisplay('opponent');
        updateAllCounts();
        await applyDamageWithSoulAbsorb(4, 'bottom', card);
        checkWinLose();
      }
    }
  }

  if (card.summonEffect === 'exile_graveyard_count_damage') {
    await showEffectActivation(card, '召喚時効果');
    // 自分と相手の除外にある墓地属性カードを数える
    const cpuGraveyardCount = opponent.exile.filter(c => hasTribe(c, '墓地')).length;
    const playerGraveyardCount = player.exile.filter(c => hasTribe(c, '墓地')).length;
    const totalCount = cpuGraveyardCount + playerGraveyardCount;
    const dmg = totalCount * 2;
    if (dmg > 0) {
      await applyDamageWithSoulAbsorb(dmg, 'bottom', card);
      checkWinLose();
    }
  }

  // 木霊の森CPU版：手札から墓地属性カードを除外→1ドロー
  if (card.summonEffect === 'exile_hand_graveyard_draw1') {
    await showEffectActivation(card, '召喚時効果');
    const graveyardCards = opponent.hand.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      graveyardCards.sort((a, b) => (a.cost || 0) - (b.cost || 0));
      const target = graveyardCards[0];
      const idx = opponent.hand.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        opponent.hand.splice(idx, 1);
        exileCard('opponent', target);
        renderOppHand(); updateAllCounts();
        updateExileDisplay('opponent');
        requestAnimationFrame(() => {
          showFloatingText(dom.oppExile, '除外', 'exile');
        });
        drawCards('opponent', 1);
      }
    }
  }

  // 砂の竹林CPU版：除外から墓地属性カードを回収→プレイヤーが自身の手札から2枚除外
  if (card.summonEffect === 'retrieve_exile_graveyard_exile2_opponent_hand') {
    await showEffectActivation(card, '召喚時効果');
    const graveyardCards = opponent.exile.filter(c => hasTribe(c, '墓地'));
    if (graveyardCards.length > 0) {
      graveyardCards.sort((a, b) => (b.cost || 0) - (a.cost || 0));
      const target = graveyardCards[0];
      const idx = opponent.exile.findIndex(c => c.uid === target.uid);
      if (idx !== -1) {
        opponent.exile.splice(idx, 1);
        opponent.open.push(target);
        updateExileDisplay('opponent');
        updateAllCounts();
      }
      // プレイヤーが自身の手札から2枚除外（強制）
      const playerAllHand = [...player.hand, ...player.open];
      if (playerAllHand.length > 0) {
        if (playerAllHand.length <= 2) {
          // 2枚以下→全て自動除外
          const exiled = player.hand.length + player.open.length;
          [...player.hand].forEach(c => exileCard('player', c));
          [...player.open].forEach(c => exileCard('player', c));
          player.hand = [];
          player.open = [];
          renderPlayerHand(); renderPlayerOpen(); updateAllCounts();
          updateExileDisplay('player');
          requestAnimationFrame(() => {
            showFloatingText(dom.playerHandCards, 'ハンデス', 'handdes');
          });
        } else {
          // 3枚以上→プレイヤーが2枚選択
          await startSelfHandExilePhase(2);
        }
      }
    }
  }
}

// ===================================================================
// 魂ダメージ吸収システム
// ダメージを受ける前にプレイヤーに魂で吸収するか確認
// 返り値：実際に受けるダメージ量（Promiseで返す）
// ===================================================================
let soulAbsorbPhase = false;
let soulAbsorbSelectedUids = new Set();

// CPU魂吸収AI：致死ダメージ時、季節を最低1種ずつ残して魂を除外
// 返り値：吸収したダメージ数（=除外した魂の数）
function cpuSoulAbsorbAI(st, amount) {
  const neededAbsorb = amount - st.life + 1; // 生き残るために最低限必要な吸収数
  if (neededAbsorb <= 0) return 0;

  // 魂の季節ごとのカウントを計算
  const seasonCount = {}; // { '夏': 3, '秋': 2, ... }
  st.soul.forEach(c => {
    const s = c.season || '無';
    seasonCount[s] = (seasonCount[s] || 0) + 1;
  });

  // 除外可能な魂を選ぶ：各季節最低1枚は残す
  // 除外候補 = 各季節の2枚目以降（余剰分）
  const expendable = []; // 除外してもOKなカードのuid
  // まず余剰分（2枚以上ある季節の余り）を候補に
  const tempCount = { ...seasonCount };
  // コストが低いカードを優先的に除外（重要度が低いものから）
  const sortedSoul = [...st.soul].sort((a, b) => (a.cost || 0) - (b.cost || 0));

  for (const c of sortedSoul) {
    const s = c.season || '無';
    if (tempCount[s] > 1) {
      expendable.push(c);
      tempCount[s]--;
    }
  }

  // 必要な吸収数分だけ除外（余剰分で足りれば余剰分のみ）
  let toExile = [];
  if (expendable.length >= neededAbsorb) {
    // 余剰分だけで足りる
    toExile = expendable.slice(0, neededAbsorb);
  } else {
    // 余剰分では足りない：余剰分全部＋さらに残りから追加（季節が消える）
    toExile = [...expendable];
    const remaining = neededAbsorb - toExile.length;
    const exiledUids = new Set(toExile.map(c => String(c.uid)));
    // 残りの魂から低コスト順で追加
    for (const c of sortedSoul) {
      if (toExile.length >= neededAbsorb) break;
      if (!exiledUids.has(String(c.uid))) {
        toExile.push(c);
        exiledUids.add(String(c.uid));
      }
    }
  }

  // ダメージ量を超えないよう制限
  if (toExile.length > amount) toExile = toExile.slice(0, amount);

  // 実際に除外処理
  const who = (st === player) ? 'player' : 'opponent';
  toExile.forEach(c => {
    const idx = st.soul.findIndex(s => s.uid === c.uid);
    if (idx !== -1) {
      const removed = st.soul.splice(idx, 1)[0];
      exileCard(who, removed);
    }
  });

  return toExile.length;
}

function applyDamageWithSoulAbsorb(amount, side, sourceCard) {
  return new Promise((resolve) => {
    const who = (side === 'bottom') ? 'player' : 'opponent';
    const st = (who === 'player') ? player : opponent;

    // 魂がない場合はそのままダメージ
    if (st.soul.length === 0) {
      st.life -= amount;
      if (st.life < 0) st.life = 0;
      if (who === 'player') dom.playerLife.textContent = st.life;
      else dom.oppLife.textContent = st.life;
      const isLethal = (st.life <= 0);
      showDamage(amount, side, isLethal);
      resolve(amount);
      return;
    }

    // CPU側：ライフが0になる場合のみ魂吸収AI
    if (who === 'opponent') {
      if (st.life - amount <= 0) {
        const cpuAbsorbed = cpuSoulAbsorbAI(st, amount);
        const actualDmg = amount - cpuAbsorbed;
        if (cpuAbsorbed > 0) {
          renderSoul('opponent');
          updateExileDisplay('opponent');
          updateAllCounts();
          requestAnimationFrame(() => {
            showFloatingText(dom.oppExile, '除外', 'exile');
          });
        }
        st.life -= actualDmg;
        if (st.life < 0) st.life = 0;
        dom.oppLife.textContent = st.life;
        const isLethal = (st.life <= 0);
        if (cpuAbsorbed > 0) {
          showSoulDamage(cpuAbsorbed, 'opponent', isLethal);
        }
        if (actualDmg > 0) showDamage(actualDmg, side, isLethal);
        resolve(actualDmg);
      } else {
        // 致死でなければそのままダメージ
        st.life -= amount;
        if (st.life < 0) st.life = 0;
        dom.oppLife.textContent = st.life;
        showDamage(amount, side);
        resolve(amount);
      }
      return;
    }

    // プレイヤーで魂が0の場合はそのままダメージ（上で処理済み）

    // プレイヤーに質問：「○○からのダメージを魂で受けますか？」
    const askImg = $('soul-absorb-ask-img');
    if (sourceCard && sourceCard.img) {
      askImg.src = sourceCard.img;
      askImg.alt = sourceCard.name || '';
      askImg.style.display = '';
      dom.soulAbsorbAskTitle.innerHTML = '<b>' + (sourceCard.name || '') + '</b>からの' + amount + 'ダメージを<br>魂で受けますか？';
    } else {
      askImg.style.display = 'none';
      dom.soulAbsorbAskTitle.innerHTML = amount + 'ダメージを魂で受けますか？';
    }
    dom.soulAbsorbAsk.style.display = 'flex';
    dom.soulAbsorbAsk.classList.add('active');

    const cleanup = () => {
      dom.soulAbsorbAsk.style.display = 'none';
      dom.soulAbsorbAsk.classList.remove('active');
      dom.soulAbsorbYes.removeEventListener('click', onYes);
      dom.soulAbsorbYes.removeEventListener('touchend', onYesTouch);
      dom.soulAbsorbNo.removeEventListener('click', onNo);
      dom.soulAbsorbNo.removeEventListener('touchend', onNoTouch);
    };

    const onNo = (e) => {
      e.stopPropagation();
      cleanup();
      // 100%のダメージを受ける
      st.life -= amount;
      if (st.life < 0) st.life = 0;
      dom.playerLife.textContent = st.life;
      const isLethal = (st.life <= 0);
      showDamage(amount, side, isLethal);
      resolve(amount);
    };
    const onNoTouch = (e) => { e.preventDefault(); onNo(e); };

    const onYes = (e) => {
      e.stopPropagation();
      cleanup();
      // 魂選択フェイズ開始
      startSoulAbsorbSelect(amount, side, st, resolve);
    };
    const onYesTouch = (e) => { e.preventDefault(); onYes(e); };

    dom.soulAbsorbYes.addEventListener('click', onYes);
    dom.soulAbsorbYes.addEventListener('touchend', onYesTouch);
    dom.soulAbsorbNo.addEventListener('click', onNo);
    dom.soulAbsorbNo.addEventListener('touchend', onNoTouch);
  });
}

function startSoulAbsorbSelect(totalDamage, side, st, resolve) {
  soulAbsorbPhase = true;
  soulAbsorbSelectedUids.clear();

  dom.soulAbsorbSelect.style.display = 'flex';
  dom.soulAbsorbSelect.classList.add('active');
  dom.soulAbsorbConfirm.classList.add('ready'); // 0枚でも決定可能
  dom.soulAbsorbConfirm.disabled = false;

  updateSoulAbsorbDesc(totalDamage);

  // 魂カードにsoul-selectableクラス付与
  dom.playerSoulCards.querySelectorAll('.battle-card').forEach(el => {
    el.classList.add('soul-selectable');
  });

  // 決定ボタンイベント
  const onConfirm = (e) => {
    e.stopPropagation();
    finishSoulAbsorbSelect(totalDamage, side, st, resolve);
    dom.soulAbsorbConfirm.removeEventListener('click', onConfirm);
    dom.soulAbsorbConfirm.removeEventListener('touchend', onConfirmTouch);
  };
  const onConfirmTouch = (e) => { e.preventDefault(); onConfirm(e); };
  dom.soulAbsorbConfirm.addEventListener('click', onConfirm);
  dom.soulAbsorbConfirm.addEventListener('touchend', onConfirmTouch);
}

function handleSoulAbsorbTap(card, el) {
  if (!soulAbsorbPhase) return false;
  // プレイヤーの魂カードのみ
  if (!player.soul.find(c => c.uid === card.uid)) return false;

  const uid = String(card.uid);
  if (soulAbsorbSelectedUids.has(uid)) {
    soulAbsorbSelectedUids.delete(uid);
    el.classList.remove('soul-absorb-selected');
  } else {
    // ダメージ量以上は選択不可
    const totalDamage = parseInt(dom.soulAbsorbSelect.dataset.totalDamage) || 0;
    if (soulAbsorbSelectedUids.size >= totalDamage) return true;
    soulAbsorbSelectedUids.add(uid);
    el.classList.add('soul-absorb-selected');
  }

  // descの更新は直接totalDamageが必要なのでdata属性から取得
  const totalDamage = parseInt(dom.soulAbsorbSelect.dataset.totalDamage) || 0;
  updateSoulAbsorbDesc(totalDamage);
  return true;
}

function updateSoulAbsorbDesc(totalDamage) {
  dom.soulAbsorbSelect.dataset.totalDamage = totalDamage;
  const absorbCount = soulAbsorbSelectedUids.size;
  const remainingDamage = Math.max(0, totalDamage - absorbCount);
  dom.soulAbsorbSelectDesc.innerHTML =
    '除外する魂<b>' + absorbCount + '</b>枚なので、<b>' + remainingDamage + '</b>ダメージを受けます。';
}

function finishSoulAbsorbSelect(totalDamage, side, st, resolve) {
  const absorbCount = soulAbsorbSelectedUids.size;
  const remainingDamage = Math.max(0, totalDamage - absorbCount);

  // 選択された魂を除外
  const who = (st === player) ? 'player' : 'opponent';
  soulAbsorbSelectedUids.forEach(uid => {
    const idx = st.soul.findIndex(c => String(c.uid) === uid);
    if (idx !== -1) {
      const removed = st.soul.splice(idx, 1)[0];
      exileCard(who, removed);
    }
  });

  // UI更新
  soulAbsorbPhase = false;
  soulAbsorbSelectedUids.clear();
  dom.soulAbsorbSelect.style.display = 'none';
  dom.soulAbsorbSelect.classList.remove('active');
  dom.soulAbsorbConfirm.classList.remove('ready');
  dom.soulAbsorbConfirm.disabled = true;

  // 魂の選択系クラス除去
  document.querySelectorAll('.battle-card.soul-selectable').forEach(e => e.classList.remove('soul-selectable'));
  document.querySelectorAll('.battle-card.soul-absorb-selected').forEach(e => e.classList.remove('soul-absorb-selected'));

  renderSoul('player');
  updateExileDisplay('player');
  updateAllCounts();

  // ダメージ適用
  if (remainingDamage > 0) {
    st.life -= remainingDamage;
    if (st.life < 0) st.life = 0;
    dom.playerLife.textContent = st.life;
  }
  const isLethal = (st.life <= 0);

  // 除外フローティングテキスト（魂を除外した場合）
  if (absorbCount > 0) {
    requestAnimationFrame(() => {
      showFloatingText(dom.playerExile, '除外', 'exile');
    });
    showSoulDamage(absorbCount, 'player', isLethal);
  }

  // ダメージ表示
  if (remainingDamage > 0) {
    showDamage(remainingDamage, side, isLethal);
  }

  resolve(remainingDamage);
}

function proceedEndTurn() {
  turnLocked = true;
  attackUsedThisTurn = false;
  hidePreview(); hideAttackBtn(); clearAllGlow();
  // ターン終了時：場ダメージ回復（両方）
  resetFieldDamage('player');
  resetFieldDamage('opponent');
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
  resetSideFlags('opponent');
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
  // ソート：高コスト優先、ドロー効果持ちをさらに優先
  const hand = [...opponent.hand].sort((a, b) => {
    // ドロー効果を持つカードを最優先
    const aHasDraw = (a.effect && a.effect.startsWith('draw')) ? 1 : 0;
    const bHasDraw = (b.effect && b.effect.startsWith('draw')) ? 1 : 0;
    if (aHasDraw !== bHasDraw) return bHasDraw - aHasDraw;
    return (b.cost || 0) - (a.cost || 0);
  });

  // 季節札：場所札が載っている場合は使わない（場所札がない状態なら使う）
  const existingSeason = opponent.field.find(g => g.season !== null);
  const seasonHasBasho = existingSeason && existingSeason.basho !== null;
  if (!seasonHasBasho) {
    for (const c of hand) {
      if (c.type === '季節札' && canCpuPlay(c)) { actions.push(c); break; }
    }
  }
  // 場所札（高コスト優先、ドロー効果持ち最優先）
  for (const c of hand) {
    if (c.type === '場所札' && !cpuUsedFlags.basho && canCpuPlay(c)) { actions.push(c); break; }
  }
  // 怪異札（高コスト優先）
  for (const c of hand) {
    if (c.type === '怪異札' && !cpuUsedFlags.kaii && canCpuPlay(c)) { actions.push(c); break; }
  }
  // 道具札（ドロー効果持ちを最優先、高コスト優先）
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
    // 召喚時効果チェック
    if (card.summonEffect) {
      renderField('opponent'); renderOppHand(); updateAllCounts();
      markUsed('opponent', card.type);
      // 場所札フローティングテキスト
      requestAnimationFrame(() => {
        const bashoUid = String(card.uid);
        const allBasho = dom.oppFieldCards.querySelectorAll('.basho-slot');
        allBasho.forEach(bEl => {
          if (bEl.dataset.uid === bashoUid) showFloatingText(bEl, '召喚', 'summon');
        });
      });
      await handleCpuSummonEffect(card);
      return; // 既にmarkUsedしたのでreturn
    }
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
    if (best) {
      best.kaii.push(card); cpuUsedFlags.kaii = true;
    } else { opponent.hand.push(card); return; }
  } else if (card.type === '道具札') {
    cpuUsedFlags.dougu = true;
    renderField('opponent'); renderOppHand(); updateAllCounts();
    markUsed('opponent', card.type);
    // 道具札：効果発動演出を表示
    await showEffectActivation(card, '効果発動');
    if (card.effect === 'damage_8') {
      await applyDamageWithSoulAbsorb(8, 'bottom', card);
      checkWinLose();
    } else if (card.effect === 'draw_3') {
      drawCards('opponent', 3);
    } else if (card.effect === 'retrieve_exile_graveyard_damage4') {
      // CPUの除外から墓地属性カードを探す（最高コスト優先）
      const graveyardCards = opponent.exile.filter(c => hasTribe(c, '墓地'));
      if (graveyardCards.length > 0) {
        graveyardCards.sort((a, b) => (b.cost || 0) - (a.cost || 0));
        const target = graveyardCards[0];
        const idx = opponent.exile.findIndex(c => c.uid === target.uid);
        if (idx !== -1) {
          opponent.exile.splice(idx, 1);
          opponent.open.push(target);
          updateExileDisplay('opponent');
          updateAllCounts();
          await applyDamageWithSoulAbsorb(4, 'bottom', card);
          checkWinLose();
        }
      }
    } else if (card.effect === 'retrieve_exile_graveyard_draw1') {
      // CPUの除外から墓地属性カードを探す（最高コスト優先）
      const graveyardCards = opponent.exile.filter(c => hasTribe(c, '墓地'));
      if (graveyardCards.length > 0) {
        graveyardCards.sort((a, b) => (b.cost || 0) - (a.cost || 0));
        const target = graveyardCards[0];
        const idx = opponent.exile.findIndex(c => c.uid === target.uid);
        if (idx !== -1) {
          opponent.exile.splice(idx, 1);
          opponent.open.push(target);
          updateExileDisplay('opponent');
          updateAllCounts();
          drawCards('opponent', 1);
        }
      }
    }
    opponent.soul.push(card);
    renderSoul('opponent');
    updateAllCounts();
    return; // 既にmarkUsedしたのでreturn
  }
  renderField('opponent'); renderOppHand(); updateAllCounts();
  markUsed('opponent', card.type);
  // 場所札フローティングテキスト
  if (card.type === '場所札') {
    requestAnimationFrame(() => {
      const bashoUid = String(card.uid);
      const allBasho = dom.oppFieldCards.querySelectorAll('.basho-slot');
      allBasho.forEach(bEl => {
        if (bEl.dataset.uid === bashoUid) showFloatingText(bEl, '召喚', 'summon');
      });
    });
  }
  // 季節札展開時：展開フローティングテキスト
  if (card.type === '季節札') {
    requestAnimationFrame(() => {
      const seasonUid = String(card.uid);
      const allSeason = dom.oppFieldCards.querySelectorAll('.season-slot');
      allSeason.forEach(sEl => {
        if (sEl.dataset.uid === seasonUid) showFloatingText(sEl, '展開', 'tenkai');
      });
    });
  }
  // 怪異札装備時：憑依フローティングテキスト
  if (card.type === '怪異札') {
    requestAnimationFrame(() => {
      const kaiiUid = String(card.uid);
      const allKaii = dom.oppFieldCards.querySelectorAll('.kaii-attached');
      allKaii.forEach(kEl => {
        if (kEl.dataset.uid === kaiiUid) showFloatingText(kEl, '憑依', 'hyoui');
      });
    });
  }
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

async function executeCpuAttack(groupIdx, done) {
  const group = opponent.field[groupIdx];
  if (!group || !group.basho) { done(); return; }

  // 怪異札効果処理（アニメーション前）
  if (group.kaii.length > 0) {
    for (let i = 0; i < group.kaii.length; i++) {
      const kCard = group.kaii[i];
      // コスト以上の魂がないと効果不発
      if (kCard.kaiiEffect) {
        const kaiiCost = kCard.cost || 0;
        if (opponent.soul.length < kaiiCost) {
          await showEffectFailed(kCard);
          continue;
        }
        await showEffectActivation(kCard, '効果発動');
        await handleKaiiEffect(kCard, 'opponent');
        if (gameEnded) { done(); return; }
      } else {
        await showEffectActivation(kCard, '効果発動');
      }
    }
  }

  // 攻撃時効果処理（アニメーション前）
  if (group.basho.attackEffect) {
    await handleAttackEffect(group.basho, 'opponent');
    if (gameEnded) { done(); return; }
  }

  const power = getEffectivePower(group, 'opponent');

  const groupEls = dom.oppFieldCards.querySelectorAll('.field-group');
  const targetEl = groupEls[groupIdx];
  if (!targetEl) { done(); return; }

  // まずアニメーション（通常速度のみ、フィニッシュ判定は魂吸収後に行う）
  targetEl.classList.add('attacking');
  targetEl.style.animation = 'cpuAttackSlideDown 0.5s ease-in forwards';

  // アニメーション完了後に魂吸収選択→ダメージ処理
  setTimeout(async () => {
    // 魂吸収選択（プレイヤーが受けるダメージ）
    const actualDamage = await applyDamageWithSoulAbsorb(power, 'bottom', group.basho);
    const isFinishBlow = (player.life <= 0);

    // カード処理
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
      gameEnded = true;
      showFinishBlowZoom('bottom');
      setTimeout(() => { showWinLoseResult(false); }, 1800);
    } else {
      done();
    }
  }, 500);
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
  // ターン終了時：場ダメージ回復（両方）
  resetFieldDamage('player');
  resetFieldDamage('opponent');
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
