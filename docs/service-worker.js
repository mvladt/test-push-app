self.addEventListener("install", function () {
  console.log("service-worker.js 'install'");
});

self.addEventListener("push", function (event) {
  if (event.data) {
    console.log("This push event has data: ", event.data.text());
  } else {
    console.log("This push event has no data.");
  }
});
