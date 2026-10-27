// =====================================================
//  Service worker de Santuarios
//  Guarda la app en el móvil para que abra rápido y
//  funcione aunque no tengas conexión.
// =====================================================

// Si cambias algún archivo de la app, sube este número (v2, v3...)
// para que el móvil descargue la versión nueva.
const VERSION = "santuarios-v1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icono-192.png",
  "./icono-512.png"
];

// Al instalarse: guarda todos los archivos de la app
self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

// Al activarse: borra las versiones antiguas guardadas
self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(nombres.filter((n) => n !== VERSION).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Al pedir un archivo: primero intenta internet (para tener siempre lo último)
// y, si no hay conexión, usa la copia guardada.
// Los enlaces externos (YouTube) no se tocan.
self.addEventListener("fetch", (evento) => {
  const peticion = evento.request;
  if (peticion.method !== "GET" || new URL(peticion.url).origin !== self.location.origin) return;

  evento.respondWith(
    fetch(peticion)
      .then((respuesta) => {
        const copia = respuesta.clone();
        caches.open(VERSION).then((cache) => cache.put(peticion, copia));
        return respuesta;
      })
      .catch(() =>
        caches.match(peticion).then((guardada) => guardada || caches.match("./index.html"))
      )
  );
});
