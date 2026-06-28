// Casio PWA Service Worker v1
const CACHE_NAME = 'casio-compiler-v1';
const ASSETS_TO_CACHE = [
  './',                // index.html
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png'
];

// Install: cache all core files
self.addEventListener('install', event => {
  event.waitUntil(
