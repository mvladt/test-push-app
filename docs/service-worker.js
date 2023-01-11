self.addEventListener("install", function () {
  console.log("service-worker.js 'install'");
});

self.addEventListener("push", function (event) {
  const promiseChain = self.registration.showNotification("Hello, World.");

  event.waitUntil(promiseChain);
});
