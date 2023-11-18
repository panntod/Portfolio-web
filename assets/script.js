// scroll sections
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Menghapus class 'active' dari semua tautan menu
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });

      // Menambahkan class 'active' ke tautan menu yang sesuai dengan bagian yang sedang aktif
      document
        .querySelector("nav ul li a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // navbar background color
  const navBar = document.querySelector(".navbar");
  if (window.scrollY > 90) {
    navBar.classList.add("bg-navbar");
  } else {
    navBar.classList.remove("bg-navbar");
  }

  // animation footer on scroll
};

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) { // Check if viewport is mobile (Bootstrap lg breakpoint)
                navbarToggler.click(); // Tutup navbar
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Tutup navbar jika sedang terbuka pada saat scroll
        }
    });
});


