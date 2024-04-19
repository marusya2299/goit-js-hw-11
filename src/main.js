'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import css from './css/styles.css';

import { imagesSearch } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox('.gallery a',
    {
        captions: true,
        captionDelay: 250,
        captionPosition: 'bottom',
        captionType: 'attr',
        captionsData: 'alt'
    });

const loader = document.querySelector(".loader");


function formSubmit(event) {
    event.preventDefault();
    loader.style.display = 'block';
    if (input.value.trim() === '') {
        iziToast.warning({message: 'The name is incorrect. Please try again'});
        return;
    }

    gallery.innerHTML = '';

    imagesSearch(input.value.trim())
        .then(data => {
            if (data.totalHits === 0) {
                iziToast.error({ message: 'Sorry, there are no images matching your search query. Please try again!', });
                loader.style.display = 'none';
                return;
            }

            createGallery(data.hits, gallery);
            lightbox.refresh();
        })
        .catch(() => iziToast.error({ message: 'Error', }))
        .finally(() => {
            form.reset();
            loader.style.display = 'none';
        });
}

form.addEventListener('submit', formSubmit);
