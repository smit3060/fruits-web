const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  } else {
    mobileMenu.style.maxHeight = "0px";
    menuClose.classList.add("hidden");
    menuOpen.classList.remove("hidden");
  }
});



// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.error('Service Worker failed:', err));
    });
}

// Example JS (future use)
console.log("PureLeaf App Loaded 🌿");
