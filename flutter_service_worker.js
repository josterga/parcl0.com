'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ea3d95776be2f410c51fdddf4112ec3e",
"version.json": "ef951631e3f39160a7e386b154632f13",
"index.html": "e9d0ecccbb04e720f95b87043ee1f851",
"/": "e9d0ecccbb04e720f95b87043ee1f851",
"main.dart.js": "3ddd4dde3b198874ea5e98d0337ec07f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"parcl0.com/flutter_bootstrap.js": "0a12a185a6ca5916bf31341990a9bec1",
"parcl0.com/version.json": "ef951631e3f39160a7e386b154632f13",
"parcl0.com/index.html": "c6e184670d0142672d06d32e25f4704b",
"parcl0.com/CNAME": "8132acc0f4f9742861ad9865f043be6f",
"parcl0.com/main.dart.js": "0b9fa7d416757c56b673ede894ea1614",
"parcl0.com/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"parcl0.com/favicon.png": "06bb70505ce342d541bac6a61ef909ee",
"parcl0.com/icons/Icon-192.png": "9246bc1c8ee2e10d8058fa918316fc99",
"parcl0.com/icons/Icon-maskable-192.png": "de745b806ed9476b6e0d1b966f9293a3",
"parcl0.com/icons/Icon-maskable-512.png": "e9930562d97e32c5546f611437faac7f",
"parcl0.com/icons/Icon-512.png": "881b808192d07883ec5b6aef8176ed4f",
"parcl0.com/manifest.json": "06a4015063fc2afba283b5f4b886f379",
"parcl0.com/.git/config": "e29ca3571b34e39ffc3c71b43059dcee",
"parcl0.com/.git/objects/pack/pack-7c22d86216693d1bc6a4f3db89308a1a7eacbd2e.pack": "16e6f18dded440835fdfe829b70627ea",
"parcl0.com/.git/objects/pack/pack-7c22d86216693d1bc6a4f3db89308a1a7eacbd2e.rev": "b2ed25f0ab6bdbf29483fb778cca0edd",
"parcl0.com/.git/objects/pack/pack-7c22d86216693d1bc6a4f3db89308a1a7eacbd2e.idx": "cf75cae1cb1b0da0b8a4c003368b69e8",
"parcl0.com/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"parcl0.com/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"parcl0.com/.git/logs/HEAD": "bc1bba4c7765e3e7f411e2973ad4ffb1",
"parcl0.com/.git/logs/refs/heads/main": "bc1bba4c7765e3e7f411e2973ad4ffb1",
"parcl0.com/.git/logs/refs/remotes/origin/HEAD": "bc1bba4c7765e3e7f411e2973ad4ffb1",
"parcl0.com/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"parcl0.com/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"parcl0.com/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"parcl0.com/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"parcl0.com/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"parcl0.com/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"parcl0.com/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"parcl0.com/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"parcl0.com/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"parcl0.com/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"parcl0.com/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"parcl0.com/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"parcl0.com/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"parcl0.com/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"parcl0.com/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"parcl0.com/.git/refs/heads/main": "d84f67fbf1f96ac4f6ea609a5f609fa5",
"parcl0.com/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"parcl0.com/.git/index": "af1092d98e5abf08e0cb7fe1254cd705",
"parcl0.com/.git/packed-refs": "b02e15d7715730b43b88c40cbfc548e9",
"parcl0.com/.git/FETCH_HEAD": "9ddf1b3d84571a32ca321136ce00c46d",
"parcl0.com/assets/AssetManifest.json": "a454bb8146c241767f455c7b12b8871f",
"parcl0.com/assets/NOTICES": "84bb6836f97c6b22c3061dc70c636680",
"parcl0.com/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"parcl0.com/assets/AssetManifest.bin.json": "5ae66fc54664adee8238eeade31cc6ab",
"parcl0.com/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"parcl0.com/assets/AssetManifest.bin": "822455947afaf250f4b76f5d338910f3",
"parcl0.com/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"parcl0.com/assets/assets/vid1.gif": "c698f9609c8dbb49b0199058b7de7429",
"parcl0.com/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"parcl0.com/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"parcl0.com/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"parcl0.com/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"parcl0.com/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"parcl0.com/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"parcl0.com/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"parcl0.com/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"parcl0.com/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"parcl0.com/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "06bb70505ce342d541bac6a61ef909ee",
"icons/Icon-192.png": "9246bc1c8ee2e10d8058fa918316fc99",
"icons/Icon-maskable-192.png": "de745b806ed9476b6e0d1b966f9293a3",
"icons/Icon-maskable-512.png": "e9930562d97e32c5546f611437faac7f",
"icons/Icon-512.png": "881b808192d07883ec5b6aef8176ed4f",
"manifest.json": "e7138d374cf2905d1428aec30ae4e203",
"assets/NOTICES": "7687616b0520916012afa19117812dad",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "5ae66fc54664adee8238eeade31cc6ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "822455947afaf250f4b76f5d338910f3",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/vid1.gif": "c698f9609c8dbb49b0199058b7de7429",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
