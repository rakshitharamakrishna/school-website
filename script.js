/* 🔹 Banner Slider */
const banners = [
  "images/banner/banner1.jpg",
  "images/banner/banner2.jpg",
  "images/banner/banner3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % banners.length;
  slide.src = banners[index];
}, 3000);

/* 🔹 Dynamic Gallery */
fetch("gallery.json")
  .then(res => res.json())
  .then(images => {
    const container = document.getElementById("galleryContainer");
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      container.appendChild(img);
    });
  });
