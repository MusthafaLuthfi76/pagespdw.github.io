const greetingText = document.getElementById("greeting-text");
const dateTime = document.getElementById("date-time");

const greetings = [
  "Good morning!",
  "Good afternoon!",
  "Good evening!",
];

const updateGreeting = () => {
  const currentHour = new Date().getHours();
  let greetingIndex = 0;

  if (currentHour >= 6 && currentHour < 12) {
    greetingIndex = 0;
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingIndex = 1;
  } else {
    greetingIndex = 2;
  }

  greetingText.textContent = greetings[greetingIndex];
};

const updateDateTime = () => {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  dateTime.textContent = now.toLocaleDateString("en-US", options);
};

updateGreeting();
updateDateTime();
setInterval(updateDateTime, 1000);

const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");
const imageCount = images.length;
let currentImageIndex = 0;

const updateCarousel = () => {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[currentImageIndex].style.display = "block";
  currentImageIndex = (currentImageIndex + 1) % imageCount;
};

setInterval(updateCarousel, 5000);
updateCarousel();