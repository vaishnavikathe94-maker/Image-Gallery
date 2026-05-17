const gallery = document.getElementById("gallery");

const categories = {
  camera: 10,
  screenshot: 10,
  download: 10,
  other: 10
};


// LIGHTBOX ELEMENTS
const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");


let currentIndex = 0;

let images = [];


// CREATE GALLERY
for(let category in categories){

  let totalImages = categories[category];

  for(let i = 1; i <= totalImages; i++){

    let imagePath = `images/${category}${i}.jpg`;

    const img = new Image();

    img.src = imagePath;

    img.onload = function(){

      const imageDiv = document.createElement("div");

      imageDiv.classList.add("image", category);

      const imageElement = document.createElement("img");

      imageElement.src = imagePath;

      // CLICK TO OPEN FULL IMAGE
      imageElement.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = imagePath;

        currentIndex = images.indexOf(imageElement);

      });

      imageDiv.appendChild(imageElement);

      gallery.appendChild(imageDiv);

      images.push(imageElement);

    };

  }

}


// CLOSE LIGHTBOX
closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});


// NEXT BUTTON
nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;

});


// PREVIOUS BUTTON
prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  lightboxImg.src = images[currentIndex].src;

});


// FILTER FUNCTION
function filterImages(category){

  const allImages = document.querySelectorAll(".image");

  allImages.forEach((item) => {

    if(category === "all"){

      item.style.display = "block";

    }

    else if(item.classList.contains(category)){

      item.style.display = "block";

    }

    else{

      item.style.display = "none";

    }

  });

}