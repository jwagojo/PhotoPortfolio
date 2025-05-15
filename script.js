document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container");
    const totalImages = 14;
    var i = 1
    while (i <= totalImages*2) {
        let imgSrc = `images1/photo${String(i).padStart(3, '0')}.jpg`;
        let imgElement = document.createElement("a");
        imgElement.href = imgSrc;
        imgElement.setAttribute("data-lightbox", "gallery");

        let imageTag = document.createElement("img");
        imageTag.src = imgSrc;
        imageTag.classList.add("img-fluid", "gallery-img");

        imgElement.appendChild(imageTag);
        galleryContainer.appendChild(imgElement);
        i = i + 2;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container2");
    const totalImages = 34;
    var i = 1
    while (i <= totalImages*2) {
        let imgSrc = `images2/photo${String(i).padStart(3, '0')}.jpg`;
        let imgElement = document.createElement("a");
        imgElement.href = imgSrc;
        imgElement.setAttribute("data-lightbox", "gallery");

        let imageTag = document.createElement("img");
        imageTag.src = imgSrc;
        imageTag.classList.add("img-fluid", "gallery-img");

        imgElement.appendChild(imageTag);
        galleryContainer.appendChild(imgElement);
        i = i + 2;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container3");
    const totalImages = 25;
    var i = 1
    while (i <= totalImages*2) {
        let imgSrc = `images3/photo${String(i).padStart(3, '0')}.jpg`;
        let imgElement = document.createElement("a");
        imgElement.href = imgSrc;
        imgElement.setAttribute("data-lightbox", "gallery");

        let imageTag = document.createElement("img");
        imageTag.src = imgSrc;
        imageTag.classList.add("img-fluid", "gallery-img");

        imgElement.appendChild(imageTag);
        galleryContainer.appendChild(imgElement);
        i = i + 2;
    }
});