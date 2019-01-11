if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service worker registerd");
  });
}

window.addEventListener("beforeintallpromp", event => {
  console.log("before intstall fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
