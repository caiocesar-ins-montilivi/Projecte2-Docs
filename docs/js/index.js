let i = 1;
const times = 3;

keyboard$.subscribe(function (key) {
  if (key.mode === "global" && key.type === "c") {
    /* Add custom keyboard handler here */
    key.claim();
    if (i >= times) {
      alert("🥚 Easter Egg. Carles aprova'm :D");
      i = 1;
      return;
    }
    i++;
  }
});
