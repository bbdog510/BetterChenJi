self.addEventListener('install', (e) => {
  console.log('Service Worker 安裝中...');
});

self.addEventListener('fetch', (e) => {
  // 這裡什麼都不做，直接連網，保證你的資料是最新的
});
