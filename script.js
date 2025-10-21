// Animasi fade-in saat scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});


// Efek klik di struktur
const anggotaList = document.querySelectorAll(".anggota");

anggotaList.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// Efek blur navbar saat scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
