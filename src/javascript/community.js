
// GALLERY ARRAY
const galleryPath = "/assets/images/community/";
const galleryImgs = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];




// GALLERY FOR MOBILE
const galleryContainer = document.querySelector(".community__gallery-container");

for (let i = 0; i < 10; i++) {
    const holder = document.createElement("div");
    holder.className = "community__gallery_img_holder holder" + i;

    const img = document.createElement("img");
    img.className = "community__gallery_img img" + i;

    img.src = galleryPath + galleryImgs[0];

    holder.appendChild(img);
    galleryContainer.appendChild(holder);
}


// GALLERY FOR DESKTOP
const galleryContainerDesktop = document.querySelector(".community__gallery-container_desktop");

for (let i = 0; i < 5; i++) {

    const holderDesktop = document.createElement("div");
    holderDesktop.className = "community__gallery_img_holder_desktop holder" + i;

    const imgDesktop = document.createElement("img");
    imgDesktop.className = "community__gallery_img_desktop img" + i;
    
    imgDesktop.src = galleryPath + galleryImgs[i];

    holderDesktop.appendChild(imgDesktop);
    galleryContainerDesktop.appendChild(holderDesktop);
}