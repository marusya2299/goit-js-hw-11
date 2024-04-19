'use strict';

export function createGallery(images, gallery) {

    images.forEach(image => {

        const galleryItem = document.createElement("li");
        galleryItem.classList.add("gallery-item");
        
        galleryItem.innerHTML = `
        <a href="${image.largeImageURL}" class="gallery-link">
            <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image">
            <div class="description">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value" data-likes>${image.likes}</span>
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value" data-views>${image.views}</span>
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value" data-comments>${image.comments}</span>
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value" data-downloads>${image.downloads}</span>
                </div>
            </div>
        </a>
        
        
    `;

    gallery.appendChild(galleryItem);
  
    galleryItem.addEventListener('click', function (event) { event.preventDefault(); });    
    });
    return gallery;
}
