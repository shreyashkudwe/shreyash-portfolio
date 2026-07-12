// Sidebar Toggle
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    if (sidebar) {
      sidebar.classList.remove("active");
    }
  });
});

// Loading Animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1500);
  }
});
const photoInput = document.getElementById("photoInput");
const galleryContainer = document.getElementById("galleryContainer");

photoInput.addEventListener("change", function () {
    galleryContainer.innerHTML = "";

    Array.from(this.files).forEach(file => {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.style.width = "220px";
        img.style.margin = "10px";
        img.style.borderRadius = "15px";
        img.style.boxShadow = "0 0 15px rgba(255,255,255,.3)";
        galleryContainer.appendChild(img);
    });
});
