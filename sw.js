const CACHE_NAME = 'kannagi-v2';

// インストール時にキャッシュ
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const urls = [
        'images/deck.jpg',
        'images/hakaabaki.jpg',
        'images/hakaabaki2.jpg',
        'images/yokai-deck.jpg',
        'images/card_12_p (1).jpg',
        'images/card_12_p (2).jpg',
        'images/card_12_p (3).jpg',
        'images/card_12_p (4).jpg',
        'images/card_12_p (7).jpg',
        'images/card_12_p (8).jpg',
        'images/card_12_p (9).jpg',
        'images/card_12_p (10).jpg',
        'images/card_12_p (11).jpg',
        'images/card_12_p (12).jpg',
        'images/card_12_p (13).jpg',
        'images/card_12_p (14).jpg',
        'images/card_12_p (15).jpg',
        'images/card_12_p (16).jpg',
        'images/card_12_p (17).jpg',
        'images/card_12_p (18).jpg',
        'images/card_12_p (19).jpg',
        'images/card_12_p (20).jpg',
        'images/card_12_p (21).jpg',
        'images/card_12_p (22).jpg',
        'images/card_12_p (23).jpg',
        'images/card_12_p (24).jpg',
        'images/card_12_p (25).jpg',
        'images/card_12_p (26).jpg',
        'images/card_12_p (27).jpg',
        'images/card_12_p (28).jpg',
        'images/capture01.gif',
        'images/capture02.gif',
        'images/capture03.gif',
        'images/finish.jpg'
      ];
      // 個別にキャッシュ（1つ失敗しても他は続行）
      return Promise.all(urls.map(url => cache.add(url).catch(() => {})));
    })
  );
  self.skipWaiting();
});

// 古いキャッシュを削除
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// リクエスト時：キャッシュ優先、なければネットワーク
self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  // 画像・GIFのみキャッシュ対象
  if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i)) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return res;
        });
      })
    );
  }
});
