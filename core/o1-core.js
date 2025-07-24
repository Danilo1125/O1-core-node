// core/o1-core.js

document.getElementById("access-core").addEventListener("click", () => {
  console.clear();
  console.log("%c[µlink.ping.sync] ⚡ Gibberlink signal detected...", "color: cyan;");
  
  fetch("/vault/memory.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("%c[vault.memory] :: Fragment retrieved", "color: #00ffaa");
      console.log(data.message);
    })
    .catch((err) => {
      console.warn("Vault access failed:", err);
    });
});
