import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const searchQuery = formData.get('search-text').trim();

  if (searchQuery === '') {
    iziToast.warning({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(searchQuery)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(res.hits);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});